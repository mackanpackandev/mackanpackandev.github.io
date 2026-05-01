const spotifyAuthorizeUrl = "https://accounts.spotify.com/authorize";
const spotifyTokenUrl = "https://accounts.spotify.com/api/token";
const spotifyApiUrl = "https://api.spotify.com/v1";
const tokenStorageKey = "musicQuizSpotifyToken";
const verifierStorageKey = "musicQuizCodeVerifier";
const clientIdStorageKey = "musicQuizClientId";
const quizRoundCount = 5;
const answerCount = 3;

const clientIdInput = document.querySelector("#spotify-client-id");
const redirectUriInput = document.querySelector("#spotify-redirect-uri");
const connectButton = document.querySelector("#spotify-connect");
const authStatus = document.querySelector("#auth-status");
const artistSearchInput = document.querySelector("#artist-search-input");
const marketInput = document.querySelector("#spotify-market");
const artistSearchButton = document.querySelector("#artist-search-button");
const artistResults = document.querySelector("#artist-results");
const roundLabel = document.querySelector("#round-label");
const quizTitle = document.querySelector("#quiz-stage-title");
const scoreDisplay = document.querySelector("#quiz-score");
const audioPanel = document.querySelector("#audio-panel");
const songPreview = document.querySelector("#song-preview");
const answerGrid = document.querySelector("#answer-grid");
const nextRoundButton = document.querySelector("#next-round");
const restartQuizButton = document.querySelector("#restart-quiz");
const quizStatus = document.querySelector("#quiz-status");

let accessToken = null;
let tokenExpiresAt = 0;
let selectedArtist = null;
let artistTracks = [];
let quizRounds = [];
let currentRoundIndex = 0;
let score = 0;
let answeredCurrentRound = false;

function setAuthStatus(message) {
    authStatus.textContent = message;
}

function setQuizStatus(message) {
    quizStatus.textContent = message;
}

function getRedirectUri() {
    return window.location.href.split("?")[0];
}

function loadStoredToken() {
    const storedToken = JSON.parse(localStorage.getItem(tokenStorageKey) || "null");

    if (!storedToken || Date.now() >= storedToken.expiresAt) {
        localStorage.removeItem(tokenStorageKey);
        return;
    }

    accessToken = storedToken.accessToken;
    tokenExpiresAt = storedToken.expiresAt;
    setAuthStatus("Spotify connected.");
}

function saveToken(tokenResponse) {
    accessToken = tokenResponse.access_token;
    tokenExpiresAt = Date.now() + (tokenResponse.expires_in * 1000);

    localStorage.setItem(tokenStorageKey, JSON.stringify({
        accessToken,
        expiresAt: tokenExpiresAt
    }));
}

function getRandomString(length) {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const values = crypto.getRandomValues(new Uint8Array(length));

    return values.reduce((text, value) => text + possible[value % possible.length], "");
}

async function sha256(value) {
    const data = new TextEncoder().encode(value);
    return crypto.subtle.digest("SHA-256", data);
}

function base64UrlEncode(buffer) {
    return btoa(String.fromCharCode(...new Uint8Array(buffer)))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
}

async function connectSpotify() {
    const clientId = clientIdInput.value.trim();

    if (!clientId) {
        setAuthStatus("Paste your Spotify Client ID first.");
        return;
    }

    localStorage.setItem(clientIdStorageKey, clientId);

    const codeVerifier = getRandomString(64);
    const codeChallenge = base64UrlEncode(await sha256(codeVerifier));

    sessionStorage.setItem(verifierStorageKey, codeVerifier);

    const params = new URLSearchParams({
        client_id: clientId,
        response_type: "code",
        redirect_uri: getRedirectUri(),
        code_challenge_method: "S256",
        code_challenge: codeChallenge
    });

    window.location.href = `${spotifyAuthorizeUrl}?${params.toString()}`;
}

async function handleSpotifyRedirect() {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const error = params.get("error");

    if (error) {
        setAuthStatus(`Spotify authorization failed: ${error}`);
        return;
    }

    if (!code) {
        return;
    }

    const clientId = localStorage.getItem(clientIdStorageKey);
    const codeVerifier = sessionStorage.getItem(verifierStorageKey);

    if (!clientId || !codeVerifier) {
        setAuthStatus("Missing Spotify login session. Try connecting again.");
        return;
    }

    const body = new URLSearchParams({
        client_id: clientId,
        grant_type: "authorization_code",
        code,
        redirect_uri: getRedirectUri(),
        code_verifier: codeVerifier
    });

    const response = await fetch(spotifyTokenUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body
    });

    if (!response.ok) {
        setAuthStatus("Could not finish Spotify login. Check your Client ID and redirect URI.");
        return;
    }

    saveToken(await response.json());
    sessionStorage.removeItem(verifierStorageKey);
    window.history.replaceState({}, document.title, getRedirectUri());
    setAuthStatus("Spotify connected.");
}

async function spotifyFetch(path) {
    if (!accessToken || Date.now() >= tokenExpiresAt) {
        throw new Error("Connect Spotify before searching.");
    }

    const response = await fetch(`${spotifyApiUrl}${path}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });

    if (!response.ok) {
        throw new Error("Spotify request failed. Try reconnecting.");
    }

    return response.json();
}

function getMarket() {
    return (marketInput.value.trim() || "SE").toUpperCase();
}

function getImage(images) {
    return images?.[1]?.url || images?.[0]?.url || "";
}

function shuffle(items) {
    const shuffledItems = [...items];

    for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffledItems[index], shuffledItems[randomIndex]] = [shuffledItems[randomIndex], shuffledItems[index]];
    }

    return shuffledItems;
}

async function searchArtists() {
    const query = artistSearchInput.value.trim();

    if (!query) {
        setQuizStatus("Enter an artist name.");
        return;
    }

    artistResults.innerHTML = "";
    setQuizStatus("Searching artists...");

    try {
        const params = new URLSearchParams({
            q: query,
            type: "artist",
            market: getMarket(),
            limit: "6"
        });
        const data = await spotifyFetch(`/search?${params.toString()}`);
        renderArtistResults(data.artists.items);
        setQuizStatus("");
    } catch (error) {
        setQuizStatus(error.message);
    }
}

function renderArtistResults(artists) {
    artistResults.innerHTML = "";

    if (artists.length === 0) {
        setQuizStatus("No artists found.");
        return;
    }

    artists.forEach((artist) => {
        const button = document.createElement("button");
        const image = document.createElement("img");
        const text = document.createElement("span");

        button.type = "button";
        button.className = "artist-result";
        image.src = getImage(artist.images);
        image.alt = "";
        text.textContent = artist.name;

        button.append(image, text);
        button.addEventListener("click", () => prepareQuiz(artist));
        artistResults.appendChild(button);
    });
}

async function getArtistAlbums(artistId) {
    const albums = [];
    const seenAlbumIds = new Set();

    for (let offset = 0; offset < 50; offset += 10) {
        const params = new URLSearchParams({
            include_groups: "album,single",
            market: getMarket(),
            limit: "10",
            offset: String(offset)
        });
        const data = await spotifyFetch(`/artists/${artistId}/albums?${params.toString()}`);

        data.items.forEach((album) => {
            if (!seenAlbumIds.has(album.id)) {
                seenAlbumIds.add(album.id);
                albums.push(album);
            }
        });

        if (!data.next) {
            break;
        }
    }

    return albums;
}

async function getAlbumTracks(album) {
    const data = await spotifyFetch(`/albums/${album.id}?market=${encodeURIComponent(getMarket())}`);
    const albumImage = getImage(data.images);

    return data.tracks.items.map((track) => ({
        id: track.id,
        name: track.name,
        albumName: data.name,
        albumImage,
        previewUrl: track.preview_url,
        spotifyUrl: track.external_urls?.spotify || data.external_urls?.spotify || "",
        artists: track.artists.map((artist) => artist.name).join(", ")
    }));
}

function dedupeTracks(tracks) {
    const seenTrackNames = new Set();

    return tracks.filter((track) => {
        const key = track.name.toLowerCase();

        if (seenTrackNames.has(key)) {
            return false;
        }

        seenTrackNames.add(key);
        return true;
    });
}

async function prepareQuiz(artist) {
    selectedArtist = artist;
    quizTitle.textContent = `Loading ${artist.name}...`;
    setQuizStatus("Loading albums and preview clips...");
    answerGrid.innerHTML = "";
    audioPanel.hidden = true;

    try {
        const albums = await getArtistAlbums(artist.id);
        const trackGroups = await Promise.all(albums.map((album) => getAlbumTracks(album)));
        artistTracks = dedupeTracks(trackGroups.flat());

        const playableTracks = artistTracks.filter((track) => track.previewUrl && track.albumImage);

        if (playableTracks.length < quizRoundCount || artistTracks.length < answerCount) {
            setQuizStatus("Spotify did not return enough playable preview clips for this artist. Try another artist.");
            quizTitle.textContent = "Choose another artist";
            return;
        }

        quizRounds = shuffle(playableTracks).slice(0, quizRoundCount).map((track) => ({
            track,
            answers: buildAnswers(track)
        }));

        currentRoundIndex = 0;
        score = 0;
        scoreDisplay.textContent = "0";
        restartQuizButton.hidden = false;
        renderRound();
    } catch (error) {
        quizTitle.textContent = "Could not load quiz";
        setQuizStatus(error.message);
    }
}

function buildAnswers(correctTrack) {
    const decoys = shuffle(artistTracks.filter((track) => track.id !== correctTrack.id && track.albumImage))
        .slice(0, answerCount - 1);

    return shuffle([correctTrack, ...decoys]);
}

function renderRound() {
    const round = quizRounds[currentRoundIndex];
    answeredCurrentRound = false;
    nextRoundButton.hidden = true;
    answerGrid.innerHTML = "";
    setQuizStatus("");

    roundLabel.textContent = `Round ${currentRoundIndex + 1} of ${quizRoundCount}`;
    quizTitle.textContent = selectedArtist ? `Which ${selectedArtist.name} song is this?` : "Guess the song";
    songPreview.src = round.track.previewUrl;
    audioPanel.hidden = false;

    round.answers.forEach((answer) => {
        const button = document.createElement("button");
        const image = document.createElement("img");
        const title = document.createElement("strong");
        const album = document.createElement("span");

        button.type = "button";
        button.className = "song-answer";
        image.src = answer.albumImage;
        image.alt = "";
        title.textContent = answer.name;
        album.textContent = answer.albumName;

        button.append(image, title, album);
        button.addEventListener("click", () => answerRound(button, answer));
        answerGrid.appendChild(button);
    });

    songPreview.play().catch(() => {
        setQuizStatus("Press play to hear the preview.");
    });
}

function answerRound(selectedButton, selectedAnswer) {
    if (answeredCurrentRound) {
        return;
    }

    const round = quizRounds[currentRoundIndex];
    const isCorrect = selectedAnswer.id === round.track.id;
    answeredCurrentRound = true;

    if (isCorrect) {
        score += 1;
        scoreDisplay.textContent = String(score);
        setQuizStatus("Correct.");
    } else {
        setQuizStatus(`Wrong. It was ${round.track.name}.`);
    }

    [...answerGrid.children].forEach((button) => {
        const title = button.querySelector("strong").textContent;
        button.disabled = true;
        button.classList.toggle("is-correct", title === round.track.name);
    });

    selectedButton.classList.toggle("is-wrong", !isCorrect);
    songPreview.pause();

    if (currentRoundIndex < quizRoundCount - 1) {
        nextRoundButton.hidden = false;
    } else {
        quizTitle.textContent = "Quiz complete";
        setQuizStatus(`Final score: ${score} of ${quizRoundCount}.`);
    }
}

function nextRound() {
    currentRoundIndex += 1;
    renderRound();
}

function restartQuiz() {
    if (!selectedArtist) {
        return;
    }

    prepareQuiz(selectedArtist);
}

function initialize() {
    redirectUriInput.value = getRedirectUri();
    clientIdInput.value = localStorage.getItem(clientIdStorageKey) || "";
    loadStoredToken();
    handleSpotifyRedirect();
}

connectButton.addEventListener("click", connectSpotify);
artistSearchButton.addEventListener("click", searchArtists);
artistSearchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchArtists();
    }
});
nextRoundButton.addEventListener("click", nextRound);
restartQuizButton.addEventListener("click", restartQuiz);

initialize();
