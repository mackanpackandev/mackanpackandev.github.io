const uiText = {
    en: {
        pageEyebrow: "TRIVIA GAME",
        pageTitle: "Trivia Board.",
        pageIntro: "Pick a category and point value. Harder questions are worth more points.",
        projectsLink: "Projects",
        homeLink: "Home",
        prototypeLabel: "Playable prototype",
        gameTitle: "Choose a trivia pack",
        gameIntro: "Switch the question pack anytime. Scores stay in place, and the board resets for the new pack.",
        gamePackLabel: "Question pack",
        packEditorTitle: "Custom packs",
        packEditorIntro: "Create your own question pack. Custom packs are saved in this browser and stay after refresh.",
        editCustomPackLabel: "Edit saved pack",
        noCustomPacksOption: "No custom packs yet",
        newCustomPack: "New pack",
        customPackNameLabel: "Pack name",
        customPackNamePlaceholder: "Movie night, school quiz, birthday party",
        customCategoryLabel: "Category name",
        customCategoryPlaceholder: "Category",
        customQuestionLabel: "Question",
        customAnswerLabel: "Answer",
        addCustomCategory: "Add category",
        removeCustomCategory: "Remove category",
        saveCustomPack: "Save custom pack",
        customPackNameError: "Add a pack name.",
        customPackCategoryError: "Add at least one category name.",
        customPackQuestionError: "Fill in every question and answer.",
        customPackSaved: "Custom pack saved.",
        customPackLoaded: "Custom pack loaded for editing.",
        customPackNewDraft: "Started a new custom pack.",
        teamsLabel: "Teams",
        teamsTitle: "Team setup",
        teamsIntro: "Edit the team names, randomize the order, and track each team's score.",
        addTeam: "Add team",
        randomizeTeams: "Randomize order",
        resetScores: "Reset scores",
        currentTurn: "Current turn",
        playerRandomizerTitle: "Random teams from players",
        playerRandomizerIntro: "Add player names, choose the number of teams, then randomize them into even groups.",
        playerListLabel: "Players",
        playerListPlaceholder: "One player per line, or separate names with commas",
        teamCountLabel: "Number of teams",
        generateTeams: "Randomize teams",
        playerCountError: "Add at least two players.",
        teamCountError: "Choose between 2 teams and the number of players.",
        generatedTeamsStatus: "Teams randomized.",
        assignedPlayersLabel: "Players",
        teamNameLabel: "Team name",
        scoreLabel: "Score",
        removeTeam: "Remove",
        defaultTeamName: "Team",
        showAnswer: "Show answer",
        correct: "Correct",
        wrong: "Wrong",
        resetBoard: "Reset board",
        points: "points"
    },
    sv: {
        pageEyebrow: "TRIVIASPEL",
        pageTitle: "Triviabräde.",
        pageIntro: "Välj en kategori och poängnivå. Svårare frågor är värda fler poäng.",
        projectsLink: "Projekt",
        homeLink: "Hem",
        prototypeLabel: "Spelbar prototyp",
        gameTitle: "Musik, Spel, Tech, Harry Potter och Star Wars",
        gameIntro: "Använd detta som en startpunkt för fler kategorier, frågor och spellägen.",
        scoreLabel: "Poäng",
        gamePackLabel: "Fragepaket",
        packEditorTitle: "Egna fragepaket",
        packEditorIntro: "Skapa ett eget fragepaket. Egna paket sparas i den har webblasaren och finns kvar efter omladdning.",
        editCustomPackLabel: "Redigera sparat paket",
        noCustomPacksOption: "Inga egna paket an",
        newCustomPack: "Nytt paket",
        customPackNameLabel: "Paketnamn",
        customPackNamePlaceholder: "Filmkvall, skolquiz, fodelsedagsfest",
        customCategoryLabel: "Kategorinamn",
        customCategoryPlaceholder: "Kategori",
        customQuestionLabel: "Fraga",
        customAnswerLabel: "Svar",
        addCustomCategory: "Lagg till kategori",
        removeCustomCategory: "Ta bort kategori",
        saveCustomPack: "Spara eget paket",
        customPackNameError: "Lagg till ett paketnamn.",
        customPackCategoryError: "Lagg till minst ett kategorinamn.",
        customPackQuestionError: "Fyll i varje fraga och svar.",
        customPackSaved: "Eget paket sparat.",
        customPackLoaded: "Eget paket laddat for redigering.",
        customPackNewDraft: "Startade ett nytt eget paket.",
        teamsLabel: "Lag",
        teamsTitle: "Laginst\u00e4llningar",
        teamsIntro: "Redigera lagnamnen, slumpa ordningen och h\u00e5ll koll p\u00e5 varje lags po\u00e4ng.",
        addTeam: "L\u00e4gg till lag",
        randomizeTeams: "Slumpa ordning",
        resetScores: "Nollst\u00e4ll po\u00e4ng",
        currentTurn: "Nuvarande tur",
        playerRandomizerTitle: "Slumpa lag fran spelare",
        playerRandomizerIntro: "Lagg till spelarnamn, valj antal lag och slumpa dem till jamna grupper.",
        playerListLabel: "Spelare",
        playerListPlaceholder: "En spelare per rad, eller separera namn med kommatecken",
        teamCountLabel: "Antal lag",
        generateTeams: "Slumpa lag",
        playerCountError: "Lagg till minst tva spelare.",
        teamCountError: "Valj mellan 2 lag och antalet spelare.",
        generatedTeamsStatus: "Lagen har slumpats.",
        assignedPlayersLabel: "Spelare",
        teamNameLabel: "Lagnamn",
        removeTeam: "Ta bort",
        defaultTeamName: "Lag",
        showAnswer: "Visa svar",
        correct: "Rätt",
        wrong: "Fel",
        resetBoard: "Återställ brädet",
        points: "poäng"
    }
};

const triviaData = [
    {
        key: "music",
        category: {
            en: "Music",
            sv: "Musik"
        },
        questions: [
            {
                points: 100,
                question: {
                    en: "This instrument has 88 keys and is common in classical, jazz, and pop music.",
                    sv: "Det här instrumentet har 88 tangenter och är vanligt inom klassisk musik, jazz och pop."
                },
                answer: {
                    en: "Piano",
                    sv: "Piano"
                }
            },
            {
                points: 200,
                question: {
                    en: "This Swedish pop group released the song 'Dancing Queen'.",
                    sv: "Den här svenska popgruppen släppte låten 'Dancing Queen'."
                },
                answer: {
                    en: "ABBA",
                    sv: "ABBA"
                }
            },
            {
                points: 300,
                question: {
                    en: "This term means the speed or pace of a piece of music.",
                    sv: "Den här termen betyder hastigheten eller tempot i ett musikstycke."
                },
                answer: {
                    en: "Tempo",
                    sv: "Tempo"
                }
            },
            {
                points: 400,
                question: {
                    en: "This French electronic duo made the albums 'Random Access Memories' and 'Discovery'.",
                    sv: "Den här franska elektroniska duon gjorde albumen 'Random Access Memories' och 'Discovery'."
                },
                answer: {
                    en: "Daft Punk",
                    sv: "Daft Punk"
                }
            },
            {
                points: 500,
                question: {
                    en: "This recording technique layers multiple recorded parts together to create a fuller final track.",
                    sv: "Den här inspelningstekniken lägger flera inspelade delar ovanpå varandra för att skapa ett fylligare slutspår."
                },
                answer: {
                    en: "Overdubbing",
                    sv: "Overdubbing"
                }
            }
        ]
    },
    {
        key: "games",
        category: {
            en: "Games",
            sv: "Spel"
        },
        questions: [
            {
                points: 100,
                question: {
                    en: "In Minecraft, this block is commonly punched first to start gathering resources.",
                    sv: "I Minecraft är det här blocket ofta det första man slår sönder för att börja samla resurser."
                },
                answer: {
                    en: "Wood",
                    sv: "Trä"
                }
            },
            {
                points: 200,
                question: {
                    en: "This Nintendo character is a plumber who often rescues Princess Peach.",
                    sv: "Den här Nintendo-karaktären är en rörmokare som ofta räddar prinsessan Peach."
                },
                answer: {
                    en: "Mario",
                    sv: "Mario"
                }
            },
            {
                points: 300,
                question: {
                    en: "In many RPGs, this term describes a character's health points.",
                    sv: "I många rollspel beskriver den här termen en karaktärs hälsopoäng."
                },
                answer: {
                    en: "HP",
                    sv: "HP"
                }
            },
            {
                points: 400,
                question: {
                    en: "This genre includes games like StarCraft and Age of Empires, where players manage resources and armies in real time.",
                    sv: "Den här genren inkluderar spel som StarCraft och Age of Empires, där spelare hanterar resurser och arméer i realtid."
                },
                answer: {
                    en: "RTS, or real-time strategy",
                    sv: "RTS, eller realtidsstrategi"
                }
            },
            {
                points: 500,
                question: {
                    en: "This design term describes the repeated sequence of actions that keeps a player engaged, like gather, upgrade, fight, repeat.",
                    sv: "Den här designtermen beskriver den upprepade följden av handlingar som håller en spelare engagerad, som samla, uppgradera, slåss, upprepa."
                },
                answer: {
                    en: "Core gameplay loop",
                    sv: "Core gameplay loop"
                }
            }
        ]
    },
    {
        key: "tech",
        category: {
            en: "Tech",
            sv: "Tech"
        },
        questions: [
            {
                points: 100,
                question: {
                    en: "HTML is mainly used to define this part of a web page.",
                    sv: "HTML används främst för att definiera den här delen av en webbsida."
                },
                answer: {
                    en: "Structure or content",
                    sv: "Struktur eller innehåll"
                }
            },
            {
                points: 200,
                question: {
                    en: "CSS is mainly used to control this part of a web page.",
                    sv: "CSS används främst för att styra den här delen av en webbsida."
                },
                answer: {
                    en: "Styling or presentation",
                    sv: "Stil eller presentation"
                }
            },
            {
                points: 300,
                question: {
                    en: "This version control tool is commonly used with GitHub.",
                    sv: "Det här versionshanteringsverktyget används ofta tillsammans med GitHub."
                },
                answer: {
                    en: "Git",
                    sv: "Git"
                }
            },
            {
                points: 400,
                question: {
                    en: "This browser API lets JavaScript select and change elements on a web page.",
                    sv: "Det här webbläsar-API:t låter JavaScript välja och ändra element på en webbsida."
                },
                answer: {
                    en: "The DOM",
                    sv: "DOM:en"
                }
            },
            {
                points: 500,
                question: {
                    en: "This CSS layout system is ideal for two-dimensional rows and columns, like a trivia board.",
                    sv: "Det här CSS-layoutsystemet passar bra för tvådimensionella rader och kolumner, som ett triviabräde."
                },
                answer: {
                    en: "CSS Grid",
                    sv: "CSS Grid"
                }
            }
        ]
    },
    {
        key: "harry-potter",
        category: {
            en: "Harry Potter",
            sv: "Harry Potter"
        },
        questions: [
            {
                points: 100,
                question: {
                    en: "This is the name of the school Harry Potter attends.",
                    sv: "Det här är namnet på skolan som Harry Potter går på."
                },
                answer: {
                    en: "Hogwarts",
                    sv: "Hogwarts"
                }
            },
            {
                points: 200,
                question: {
                    en: "This house is known for courage, bravery, and its red and gold colors.",
                    sv: "Det här elevhemmet är känt för mod, tapperhet och sina röda och guldfärgade färger."
                },
                answer: {
                    en: "Gryffindor",
                    sv: "Gryffindor"
                }
            },
            {
                points: 300,
                question: {
                    en: "This sport is played on broomsticks with Quaffles, Bludgers, and a Golden Snitch.",
                    sv: "Den här sporten spelas på kvastar med klonkar, dunkare och en gyllene kvick."
                },
                answer: {
                    en: "Quidditch",
                    sv: "Quidditch"
                }
            },
            {
                points: 400,
                question: {
                    en: "This spell is used to disarm an opponent.",
                    sv: "Den här besvärjelsen används för att avväpna en motståndare."
                },
                answer: {
                    en: "Expelliarmus",
                    sv: "Expelliarmus"
                }
            },
            {
                points: 500,
                question: {
                    en: "These magical objects contain fragments of Voldemort's soul.",
                    sv: "De här magiska föremålen innehåller fragment av Voldemorts själ."
                },
                answer: {
                    en: "Horcruxes",
                    sv: "Horrokruxer"
                }
            }
        ]
    },
    {
        key: "star-wars",
        category: {
            en: "Star Wars",
            sv: "Star Wars"
        },
        questions: [
            {
                points: 100,
                question: {
                    en: "This energy weapon is famously used by Jedi and Sith.",
                    sv: "Det här energivapnet används ofta av jedier och sither."
                },
                answer: {
                    en: "Lightsaber",
                    sv: "Ljussabel"
                }
            },
            {
                points: 200,
                question: {
                    en: "This small green Jedi master trains Luke Skywalker on Dagobah.",
                    sv: "Den här lilla gröna jedimästaren tränar Luke Skywalker på Dagobah."
                },
                answer: {
                    en: "Yoda",
                    sv: "Yoda"
                }
            },
            {
                points: 300,
                question: {
                    en: "This ship completed the Kessel Run in less than twelve parsecs.",
                    sv: "Det här skeppet klarade Kessel Run på mindre än tolv parsec."
                },
                answer: {
                    en: "The Millennium Falcon",
                    sv: "Millennium Falcon"
                }
            },
            {
                points: 400,
                question: {
                    en: "This desert planet is the home world of both Anakin and Luke Skywalker.",
                    sv: "Den här ökenplaneten är hemvärlden för både Anakin och Luke Skywalker."
                },
                answer: {
                    en: "Tatooine",
                    sv: "Tatooine"
                }
            },
            {
                points: 500,
                question: {
                    en: "This order is given by Palpatine to make clone troopers turn against the Jedi.",
                    sv: "Den här ordern ges av Palpatine för att få klonsoldaterna att vända sig mot jedierna."
                },
                answer: {
                    en: "Order 66",
                    sv: "Order 66"
                }
            }
        ]
    }
];

const triviaPacks = {
    mixed: {
        label: {
            en: "Mixed classics",
            sv: "Blandade klassiker"
        },
        categories: triviaData
    },
    minecraft: {
        label: {
            en: "Minecraft",
            sv: "Minecraft"
        },
        categories: [
            createCategory("mc-blocks", { en: "Blocks", sv: "Block" }, [
                [100, "This brown block is usually the first block players break when starting a new world.", "Wood", "Det har bruna blocket ar ofta det forsta blocket spelare slar sonder nar de startar en ny varld.", "Tra"],
                [200, "This block is mined with a pickaxe and drops cobblestone unless you use Silk Touch.", "Stone", "Det har blocket bryts med en hacka och ger kullersten om du inte anvander Silk Touch.", "Sten"],
                [300, "This glowing block is found naturally in the Nether and can be crafted from dust.", "Glowstone", "Det har lysande blocket finns naturligt i Nether och kan skapas av stoft.", "Glowstone"],
                [400, "This gravity-affected block is often used to make concrete powder or TNT.", "Sand", "Det har blocket paverkas av gravitation och anvands ofta for att gora betongpulver eller TNT.", "Sand"],
                [500, "This rare deep underground block is used to upgrade diamond gear in modern Minecraft.", "Ancient debris", "Det har sallsynta blocket djupt under marken anvands for att uppgradera diamantutrustning i modern Minecraft.", "Ancient debris"]
            ]),
            createCategory("mc-mobs", { en: "Mobs", sv: "Varelser" }, [
                [100, "This green hostile mob silently walks up to players and explodes.", "Creeper", "Den har grona fientliga varelsen smyger fram till spelare och exploderar.", "Creeper"],
                [200, "This tall black mob teleports and becomes angry when you look at it.", "Enderman", "Den har langa svarta varelsen teleporterar och blir arg nar du tittar pa den.", "Enderman"],
                [300, "This Nether mob shoots fireballs and drops rods used for brewing.", "Blaze", "Den har Nether-varelsen skjuter eldklot och tappar stavar som anvands till bryggning.", "Blaze"],
                [400, "This boss is summoned with soul sand and three wither skeleton skulls.", "The Wither", "Den har bossen frambesvars med soulsand och tre wither-skelettskallar.", "The Wither"],
                [500, "This flying hostile mob attacks players who have not slept for several in-game days.", "Phantom", "Den har flygande fientliga varelsen attackerar spelare som inte har sovit pa flera speldagar.", "Phantom"]
            ]),
            createCategory("mc-crafting", { en: "Crafting", sv: "Tillverkning" }, [
                [100, "Three wooden planks and two sticks make this basic mining tool.", "Wooden pickaxe", "Tre traplankor och tva pinnar gor det har enkla gruvverktyget.", "Trahacka"],
                [200, "This station is made from four wooden planks and unlocks the 3 by 3 crafting grid.", "Crafting table", "Den har stationen gors av fyra traplankor och laser upp ett 3x3-rutnat for tillverkning.", "Arbetsbank"],
                [300, "A furnace plus smooth stone and iron ingots creates this faster ore-smelting block.", "Blast furnace", "En ugn plus slat sten och jarntackor skapar det har snabbare blocket for att smalta malm.", "Masugn"],
                [400, "This item is crafted with blaze powder and an ender pearl to help find strongholds.", "Eye of Ender", "Det har foremalet tillverkas med blaze powder och en ender pearl for att hitta strongholds.", "Enderoga"],
                [500, "This block combines an Ender Chest-like ingredient with crying obsidian and glowstone.", "Respawn anchor", "Det har blocket kombinerar en ingrediens som liknar en Ender Chest med crying obsidian och glowstone.", "Respawn anchor"]
            ]),
            createCategory("mc-dimensions", { en: "Dimensions", sv: "Dimensioner" }, [
                [100, "This is the default dimension where players usually spawn.", "The Overworld", "Det har ar standarddimensionen dar spelare oftast startar.", "Overworld"],
                [200, "This hot dimension is reached through an obsidian portal.", "The Nether", "Den har heta dimensionen nas genom en obsidianportal.", "Nether"],
                [300, "This dimension contains the Ender Dragon boss fight.", "The End", "Den har dimensionen innehaller bossfighten mot Enderdraken.", "The End"],
                [400, "This structure in the End can contain Elytra inside an item frame on a ship.", "End city", "Den har strukturen i The End kan innehalla Elytra i en foremalsram pa ett skepp.", "End city"],
                [500, "This Nether biome has blue-green trees, warped fungi, and Endermen.", "Warped Forest", "Det har Nether-biomet har blagrona trad, warped fungi och Endermen.", "Warped Forest"]
            ]),
            createCategory("mc-redstone", "Redstone", [
                [100, "This red dust carries power between components.", "Redstone dust", "Det har roda stoftet leder kraft mellan komponenter.", "Redstone-stoft"],
                [200, "This component extends when powered and can push blocks.", "Piston", "Den har komponenten skjuts ut nar den far kraft och kan knuffa block.", "Kolv"],
                [300, "This component repeats a signal and can add a delay.", "Redstone repeater", "Den har komponenten upprepar en signal och kan lagga till en fordrijning.", "Redstone-repeater"],
                [400, "This component compares signal strengths and is often used in item sorters.", "Comparator", "Den har komponenten jamfor signalstyrkor och anvands ofta i foremalssorterare.", "Komparator"],
                [500, "This sensor outputs a redstone signal when it detects nearby sound vibrations.", "Sculk sensor", "Den har sensorn skickar ut en redstone-signal nar den kanner av ljudvibrationer i narheten.", "Sculk-sensor"]
            ])
        ]
    },
    general: {
        label: {
            en: "General Knowledge",
            sv: "Allmankunskap"
        },
        categories: [
            createCategory("gk-world", { en: "World", sv: "Varlden" }, [
                [100, "This is the largest ocean on Earth.", "Pacific Ocean", "Det har ar det storsta havet pa jorden.", "Stilla havet"],
                [200, "This country has the city of Tokyo as its capital.", "Japan", "Det har landet har Tokyo som huvudstad.", "Japan"],
                [300, "This river is commonly described as the longest river in the world.", "The Nile", "Den har floden brukar beskrivas som varldens langsta flod.", "Nilen"],
                [400, "This mountain range separates much of Europe from Asia.", "The Ural Mountains", "Den har bergskedjan skiljer stora delar av Europa fran Asien.", "Uralbergen"],
                [500, "This country is both a continent and a nation.", "Australia", "Det har landet ar bade en kontinent och en nation.", "Australien"]
            ]),
            createCategory("gk-science", { en: "Science", sv: "Vetenskap" }, [
                [100, "This gas is needed by humans to breathe and survive.", "Oxygen", "Den har gasen behovs for att manniskor ska kunna andas och overleva.", "Syre"],
                [200, "This planet is known as the Red Planet.", "Mars", "Den har planeten ar kand som den roda planeten.", "Mars"],
                [300, "This force keeps planets in orbit around the sun.", "Gravity", "Den har kraften haller planeter i bana runt solen.", "Gravitation"],
                [400, "This is the chemical symbol for gold.", "Au", "Det har ar den kemiska beteckningen for guld.", "Au"],
                [500, "This part of a cell contains most of its genetic material.", "Nucleus", "Den har delen av en cell innehaller det mesta av cellens genetiska material.", "Cellkarna"]
            ]),
            createCategory("gk-history", { en: "History", sv: "Historia" }, [
                [100, "These ancient structures in Egypt were built as tombs for pharaohs.", "Pyramids", "De har antika byggnadsverken i Egypten byggdes som gravar for faraoner.", "Pyramider"],
                [200, "This wall divided a European capital city until 1989.", "The Berlin Wall", "Den har muren delade en europeisk huvudstad fram till 1989.", "Berlinmuren"],
                [300, "This ship sank in 1912 after hitting an iceberg.", "Titanic", "Det har fartyget sjonk 1912 efter att ha traffat ett isberg.", "Titanic"],
                [400, "This empire was ruled by Julius Caesar and Augustus.", "The Roman Empire", "Det har riket styrdes av Julius Caesar och Augustus.", "Romarriket"],
                [500, "This document was signed in 1215 and limited the power of the English king.", "Magna Carta", "Det har dokumentet skrevs under 1215 och begransade den engelska kungens makt.", "Magna Carta"]
            ]),
            createCategory("gk-sports", { en: "Sports", sv: "Sport" }, [
                [100, "This sport uses a bat, bases, and innings.", "Baseball", "Den har sporten anvander ett slagtra, baser och innings.", "Baseboll"],
                [200, "This event is held every four years and includes summer and winter versions.", "The Olympics", "Det har evenemanget halls vart fjarde ar och finns i sommar- och vinterversioner.", "OS"],
                [300, "In soccer, this player is allowed to use hands inside the penalty area.", "Goalkeeper", "I fotboll far den har spelaren anvanda handerna inom straffomradet.", "Malvakt"],
                [400, "This tennis tournament is played on grass courts in London.", "Wimbledon", "Den har tennisturneringen spelas pa grasbanor i London.", "Wimbledon"],
                [500, "This race is the final event of a traditional triathlon.", "Running", "Den har grenen ar den sista delen i ett traditionellt triathlon.", "Lopning"]
            ]),
            createCategory("gk-culture", { en: "Culture", sv: "Kultur" }, [
                [100, "This is the name of the boy wizard created by J.K. Rowling.", "Harry Potter", "Det har ar namnet pa trollkarjspojken skapad av J.K. Rowling.", "Harry Potter"],
                [200, "This painter created the Mona Lisa.", "Leonardo da Vinci", "Den har konstnaren malade Mona Lisa.", "Leonardo da Vinci"],
                [300, "This fictional detective lives at 221B Baker Street.", "Sherlock Holmes", "Den har fiktiva detektiven bor pa 221B Baker Street.", "Sherlock Holmes"],
                [400, "This movie studio created Toy Story, Finding Nemo, and Inside Out.", "Pixar", "Den har filmstudion skapade Toy Story, Hitta Nemo och Inside Out.", "Pixar"],
                [500, "This Shakespeare tragedy features the characters Hamlet, Ophelia, and Claudius.", "Hamlet", "Den har Shakespeare-tragedin har karaktarerna Hamlet, Ofelia och Claudius.", "Hamlet"]
            ])
        ]
    },
    music: {
        label: {
            en: "Music",
            sv: "Musik"
        },
        categories: [
            createCategory("music-pop", { en: "Pop", sv: "Pop" }, [
                [100, "This Swedish group released Dancing Queen.", "ABBA", "Den har svenska gruppen slapte Dancing Queen.", "ABBA"],
                [200, "This artist is known as the King of Pop.", "Michael Jackson", "Den har artisten kallas King of Pop.", "Michael Jackson"],
                [300, "This singer released the album 1989.", "Taylor Swift", "Den har sangerskan slapte albumet 1989.", "Taylor Swift"],
                [400, "This British singer released the album 25 and the song Hello.", "Adele", "Den har brittiska sangerskan slapte albumet 25 och laten Hello.", "Adele"],
                [500, "This Canadian artist released Blinding Lights.", "The Weeknd", "Den har kanadensiska artisten slapte Blinding Lights.", "The Weeknd"]
            ]),
            createCategory("music-rock", { en: "Rock", sv: "Rock" }, [
                [100, "This band released We Will Rock You and Bohemian Rhapsody.", "Queen", "Det har bandet slapte We Will Rock You och Bohemian Rhapsody.", "Queen"],
                [200, "This instrument is central to most rock bands and usually has six strings.", "Guitar", "Det har instrumentet ar centralt i de flesta rockband och har oftast sex strangar.", "Gitarr"],
                [300, "This band released Smells Like Teen Spirit.", "Nirvana", "Det har bandet slapte Smells Like Teen Spirit.", "Nirvana"],
                [400, "This British band released Dark Side of the Moon.", "Pink Floyd", "Det har brittiska bandet slapte Dark Side of the Moon.", "Pink Floyd"],
                [500, "This rock subgenre is associated with bands like Green Day and The Clash.", "Punk rock", "Den har rockgenren kopplas till band som Green Day och The Clash.", "Punkrock"]
            ]),
            createCategory("music-instruments", { en: "Instruments", sv: "Instrument" }, [
                [100, "This keyboard instrument has 88 keys.", "Piano", "Det har tangentinstrumentet har 88 tangenter.", "Piano"],
                [200, "This brass instrument has a slide instead of valves.", "Trombone", "Det har brassinstrumentet har drag i stallet for ventiler.", "Trombon"],
                [300, "This instrument is often used to keep time and includes a snare, kick, and cymbals.", "Drum kit", "Det har instrumentet anvands ofta for att halla takten och har virvel, bastrumma och cymbaler.", "Trumset"],
                [400, "This woodwind instrument uses a double reed and is common in orchestras.", "Oboe", "Det har trablasinstrumentet anvander dubbelt rorblad och ar vanligt i orkestrar.", "Oboe"],
                [500, "This large string instrument is played standing or seated and has the lowest range in the violin family.", "Double bass", "Det har stora stranginstrumentet spelas staende eller sittande och har lagst register i violinfamiljen.", "Kontrabas"]
            ]),
            createCategory("music-theory", { en: "Theory", sv: "Teori" }, [
                [100, "This term means the speed of a song.", "Tempo", "Den har termen betyder hastigheten i en lat.", "Tempo"],
                [200, "This symbol at the start of sheet music shows which notes are sharp or flat.", "Key signature", "Den har markeringen i borjan av noter visar vilka toner som ar hoja eller sankta.", "Tonart"],
                [300, "This distance between two notes with the same letter name is eight scale degrees.", "Octave", "Det har avstandet mellan tva toner med samma tonnamn ar atta skalsteg.", "Oktav"],
                [400, "This chord type is built from a root, minor third, and perfect fifth.", "Minor chord", "Den har ackordtypen byggs av grundton, liten ters och ren kvint.", "Mollackord"],
                [500, "This rhythm technique emphasizes normally weak beats or offbeats.", "Syncopation", "Den har rytmtekniken betonar normalt svaga taktdelar eller baktakter.", "Synkopering"]
            ]),
            createCategory("music-production", { en: "Production", sv: "Produktion" }, [
                [100, "This device records sound through a capsule and converts it to an electrical signal.", "Microphone", "Den har enheten spelar in ljud genom en kapsel och gor om det till en elektrisk signal.", "Mikrofon"],
                [200, "This process adjusts volume balance between tracks.", "Mixing", "Den har processen justerar volymbalansen mellan spar.", "Mixning"],
                [300, "This effect creates repeating echoes.", "Delay", "Den har effekten skapar upprepade ekon.", "Delay"],
                [400, "This tool reduces the dynamic range between loud and quiet parts.", "Compressor", "Det har verktyget minskar dynamiken mellan starka och svaga delar.", "Kompressor"],
                [500, "This final production step prepares a mix for release across playback systems.", "Mastering", "Det har sista produktionssteget forbereder en mix for publicering pa olika uppspelningssystem.", "Mastering"]
            ])
        ]
    },
    starWars: {
        label: {
            en: "Star Wars",
            sv: "Star Wars"
        },
        categories: [
            createCategory("sw-jedi", { en: "Jedi", sv: "Jedi" }, [
                [100, "This small green Jedi trains Luke on Dagobah.", "Yoda", "Den har lilla grona Jedin tranar Luke pa Dagobah.", "Yoda"],
                [200, "This Jedi mentor is played by Alec Guinness and Ewan McGregor.", "Obi-Wan Kenobi", "Den har Jedi-mentorn spelas av Alec Guinness och Ewan McGregor.", "Obi-Wan Kenobi"],
                [300, "This blue and white droid often helps Jedi and pilots.", "R2-D2", "Den har blavita droiden hjalper ofta Jedi och piloter.", "R2-D2"],
                [400, "This purple-lightsaber Jedi is played by Samuel L. Jackson.", "Mace Windu", "Den har Jedin med lila ljussabel spelas av Samuel L. Jackson.", "Mace Windu"],
                [500, "This Jedi becomes Darth Vader.", "Anakin Skywalker", "Den har Jedin blir Darth Vader.", "Anakin Skywalker"]
            ]),
            createCategory("sw-sith", { en: "Sith", sv: "Sith" }, [
                [100, "This dark side title is used by Vader, Maul, and Sidious.", "Darth", "Den har morka sidans titel anvands av Vader, Maul och Sidious.", "Darth"],
                [200, "This Sith Lord is also Emperor Palpatine.", "Darth Sidious", "Den har Sith-lorden ar ocksa kejsare Palpatine.", "Darth Sidious"],
                [300, "This red and black Sith uses a double-bladed lightsaber.", "Darth Maul", "Den har roda och svarta Sithen anvander en dubbelbladig ljussabel.", "Darth Maul"],
                [400, "This Sith apprentice appears in Attack of the Clones and was once Count Dooku.", "Darth Tyranus", "Den har Sith-larlingen syns i Attack of the Clones och var tidigare greve Dooku.", "Darth Tyranus"],
                [500, "This tragedy is mentioned by Palpatine while tempting Anakin.", "The tragedy of Darth Plagueis the Wise", "Den har tragedin namns av Palpatine nar han frestar Anakin.", "Tragedin om Darth Plagueis den vise"]
            ]),
            createCategory("sw-ships", { en: "Ships", sv: "Skepp" }, [
                [100, "This ship made the Kessel Run in less than twelve parsecs.", "Millennium Falcon", "Det har skeppet gjorde Kessel Run pa mindre an tolv parsec.", "Millennium Falcon"],
                [200, "This starfighter is shaped like a letter and used by the Rebel Alliance.", "X-wing", "Den har starfightermodellen ar formad som en bokstav och anvands av rebellalliansen.", "X-wing"],
                [300, "This Imperial fighter has twin ion engines.", "TIE fighter", "Det har imperiala jaktplanet har twin ion engines.", "TIE fighter"],
                [400, "This enormous Imperial command ship is Darth Vader's flagship in The Empire Strikes Back.", "Executor", "Det har enorma imperiala kommandoskeppet ar Darth Vaders flaggskepp i The Empire Strikes Back.", "Executor"],
                [500, "This ship type carries Jedi ambassadors at the opening of The Phantom Menace.", "Consular-class cruiser", "Den har skeppstypen transporterar Jedi-ambassadorer i borjan av The Phantom Menace.", "Consular-class cruiser"]
            ]),
            createCategory("sw-planets", { en: "Planets", sv: "Planeter" }, [
                [100, "This desert planet is home to Anakin and Luke Skywalker.", "Tatooine", "Den har okenplaneten ar hem for Anakin och Luke Skywalker.", "Tatooine"],
                [200, "This forest moon is home to the Ewoks.", "Endor", "Den har skogmanen ar hem for ewokerna.", "Endor"],
                [300, "This icy planet is where the Rebels have Echo Base.", "Hoth", "Den har isplaneten ar platsen dar rebellerna har Echo Base.", "Hoth"],
                [400, "This city planet is the capital of the Republic and later the Empire.", "Coruscant", "Den har stadsplaneten ar republikens och senare imperiets huvudstad.", "Coruscant"],
                [500, "This lava planet is where Obi-Wan and Anakin duel in Revenge of the Sith.", "Mustafar", "Den har lavaplaneten ar platsen dar Obi-Wan och Anakin duellerar i Revenge of the Sith.", "Mustafar"]
            ]),
            createCategory("sw-quotes", { en: "Quotes", sv: "Citat" }, [
                [100, "Complete the quote: May the Force be with ____.", "You", "Fyll i citatet: May the Force be with ____.", "You"],
                [200, "This character says, I am your father.", "Darth Vader", "Den har karaktaren sager I am your father.", "Darth Vader"],
                [300, "This droid often says a worried line about odds and danger.", "C-3PO", "Den har droiden sager ofta en orolig replik om odds och fara.", "C-3PO"],
                [400, "This character says, It's a trap!", "Admiral Ackbar", "Den har karaktaren sager It's a trap!", "Admiral Ackbar"],
                [500, "This bounty hunter says, As you wish, before his identity is revealed.", "Boba Fett", "Den har prisjagaren sager As you wish innan hans identitet avslojas.", "Boba Fett"]
            ])
        ]
    }
};

function createCategory(key, categoryName, questions) {
    const category = typeof categoryName === "string"
        ? { en: categoryName, sv: categoryName }
        : categoryName;

    return {
        key,
        category,
        questions: questions.map(([points, question, answer, swedishQuestion, swedishAnswer]) => ({
            points,
            question: {
                en: question,
                sv: swedishQuestion || question
            },
            answer: {
                en: answer,
                sv: swedishAnswer || answer
            }
        }))
    };
}

const board = document.querySelector("#trivia-board");
const questionPanel = document.querySelector("#question-panel");
const questionMeta = document.querySelector("#question-meta");
const questionText = document.querySelector("#question-text");
const answerText = document.querySelector("#answer-text");
const showAnswerButton = document.querySelector("#show-answer");
const markCorrectButton = document.querySelector("#mark-correct");
const markWrongButton = document.querySelector("#mark-wrong");
const resetButton = document.querySelector("#reset-game");
const teamList = document.querySelector("#team-list");
const currentTeamName = document.querySelector("#current-team-name");
const addTeamButton = document.querySelector("#add-team");
const randomizeTeamsButton = document.querySelector("#randomize-teams");
const resetScoresButton = document.querySelector("#reset-scores");
const packSelect = document.querySelector("#trivia-pack");
const playerListInput = document.querySelector("#player-list");
const generatedTeamCountInput = document.querySelector("#generated-team-count");
const generateTeamsButton = document.querySelector("#generate-teams");
const randomizerStatus = document.querySelector("#randomizer-status");
const customPackEditSelect = document.querySelector("#custom-pack-edit-select");
const newCustomPackButton = document.querySelector("#new-custom-pack");
const customPackNameInput = document.querySelector("#custom-pack-name");
const customCategoryList = document.querySelector("#custom-category-list");
const addCustomCategoryButton = document.querySelector("#add-custom-category");
const saveCustomPackButton = document.querySelector("#save-custom-pack");
const packEditorStatus = document.querySelector("#pack-editor-status");
const languageButtons = document.querySelectorAll("[data-language]");
const translatedElements = document.querySelectorAll("[data-i18n]");
const translatedPlaceholderElements = document.querySelectorAll("[data-i18n-placeholder]");

const customPackStorageKey = "mackanTriviaCustomPacks";
const questionPointValues = [100, 200, 300, 400, 500];
let currentLanguage = "en";
let activePackKey = "minecraft";
let activeQuestion = null;
let activeTeamIndex = 0;
let customTriviaPacks = loadCustomPacks();
let customPackDraft = createCustomPackDraft();
let editingCustomPackKey = null;
const answeredQuestions = new Set();
const teams = [
    { id: "team-1", name: "Team 1", score: 0, members: [] },
    { id: "team-2", name: "Team 2", score: 0, members: [] },
    { id: "team-3", name: "Team 3", score: 0, members: [] },
    { id: "team-4", name: "Team 4", score: 0, members: [] }
];

function translatePage() {
    document.documentElement.lang = currentLanguage;

    translatedElements.forEach((element) => {
        const key = element.dataset.i18n;
        element.textContent = uiText[currentLanguage][key];
    });

    translatedPlaceholderElements.forEach((element) => {
        const key = element.dataset.i18nPlaceholder;
        element.placeholder = uiText[currentLanguage][key];
    });

    languageButtons.forEach((button) => {
        const isActive = button.dataset.language === currentLanguage;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });
}

function getLocalizedText(value) {
    return value[currentLanguage] || value.en;
}

function getActivePack() {
    return getAllTriviaPacks()[activePackKey] || triviaPacks.minecraft;
}

function getAllTriviaPacks() {
    return {
        ...triviaPacks,
        ...customTriviaPacks
    };
}

function renderPackSelect() {
    packSelect.innerHTML = "";

    Object.entries(getAllTriviaPacks()).forEach(([key, pack]) => {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = getLocalizedText(pack.label);
        option.selected = key === activePackKey;
        packSelect.appendChild(option);
    });
}

function renderCustomPackEditSelect() {
    customPackEditSelect.innerHTML = "";

    const customPackEntries = Object.entries(customTriviaPacks);

    if (customPackEntries.length === 0) {
        const option = document.createElement("option");
        option.value = "";
        option.textContent = uiText[currentLanguage].noCustomPacksOption;
        customPackEditSelect.appendChild(option);
        customPackEditSelect.disabled = true;
        return;
    }

    customPackEditSelect.disabled = false;

    const blankOption = document.createElement("option");
    blankOption.value = "";
    blankOption.textContent = uiText[currentLanguage].editCustomPackLabel;
    customPackEditSelect.appendChild(blankOption);

    customPackEntries.forEach(([key, pack]) => {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = getLocalizedText(pack.label);
        option.selected = key === editingCustomPackKey;
        customPackEditSelect.appendChild(option);
    });
}

function createDraftCategory() {
    return {
        id: `draft-category-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        name: "",
        questions: questionPointValues.map((points) => ({
            points,
            question: "",
            answer: ""
        }))
    };
}

function createCustomPackDraft() {
    return {
        categories: [createDraftCategory()]
    };
}

function createDraftFromPack(pack) {
    return {
        categories: pack.categories.map((category, categoryIndex) => ({
            id: `draft-category-${Date.now()}-${categoryIndex}`,
            name: getLocalizedText(category.category),
            questions: questionPointValues.map((points) => {
                const existingQuestion = category.questions.find((item) => item.points === points);

                return {
                    points,
                    question: existingQuestion ? getLocalizedText(existingQuestion.question) : "",
                    answer: existingQuestion ? getLocalizedText(existingQuestion.answer) : ""
                };
            })
        }))
    };
}

function loadCustomPacks() {
    try {
        const savedPacks = JSON.parse(localStorage.getItem(customPackStorageKey) || "{}");

        if (!savedPacks || typeof savedPacks !== "object" || Array.isArray(savedPacks)) {
            return {};
        }

        return savedPacks;
    } catch (error) {
        return {};
    }
}

function saveCustomPacks() {
    localStorage.setItem(customPackStorageKey, JSON.stringify(customTriviaPacks));
}

function setPackEditorStatus(messageKey) {
    packEditorStatus.textContent = uiText[currentLanguage][messageKey] || "";
}

function startNewCustomPack() {
    editingCustomPackKey = null;
    customPackNameInput.value = "";
    customPackDraft = createCustomPackDraft();
    renderCustomPackEditSelect();
    renderCustomPackEditor();
    setPackEditorStatus("customPackNewDraft");
}

function loadCustomPackForEditing(packKey) {
    if (!packKey || !customTriviaPacks[packKey]) {
        return;
    }

    const pack = customTriviaPacks[packKey];
    editingCustomPackKey = packKey;
    customPackNameInput.value = getLocalizedText(pack.label);
    customPackDraft = createDraftFromPack(pack);
    renderCustomPackEditSelect();
    renderCustomPackEditor();
    setPackEditorStatus("customPackLoaded");
}

function renderCustomPackEditor() {
    customCategoryList.innerHTML = "";

    customPackDraft.categories.forEach((category, categoryIndex) => {
        const categoryBlock = document.createElement("article");
        categoryBlock.className = "custom-category";

        const categoryHeader = document.createElement("div");
        categoryHeader.className = "custom-category-header";

        const categoryLabel = document.createElement("label");
        categoryLabel.setAttribute("for", category.id);

        const categoryLabelText = document.createElement("span");
        categoryLabelText.textContent = uiText[currentLanguage].customCategoryLabel;

        const categoryInput = document.createElement("input");
        categoryInput.id = category.id;
        categoryInput.type = "text";
        categoryInput.value = category.name;
        categoryInput.placeholder = `${uiText[currentLanguage].customCategoryPlaceholder} ${categoryIndex + 1}`;
        categoryInput.dataset.categoryIndex = String(categoryIndex);
        categoryInput.dataset.field = "name";

        categoryLabel.append(categoryLabelText, categoryInput);

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "remove-custom-category";
        removeButton.textContent = uiText[currentLanguage].removeCustomCategory;
        removeButton.disabled = customPackDraft.categories.length <= 1;
        removeButton.dataset.removeCategoryIndex = String(categoryIndex);

        categoryHeader.append(categoryLabel, removeButton);
        categoryBlock.appendChild(categoryHeader);

        category.questions.forEach((item, questionIndex) => {
            const questionRow = document.createElement("div");
            questionRow.className = "custom-question-row";

            const pointsLabel = document.createElement("strong");
            pointsLabel.textContent = String(item.points);

            const questionLabel = document.createElement("label");
            const questionLabelText = document.createElement("span");
            questionLabelText.textContent = uiText[currentLanguage].customQuestionLabel;

            const questionInput = document.createElement("textarea");
            questionInput.rows = 2;
            questionInput.value = item.question;
            questionInput.dataset.categoryIndex = String(categoryIndex);
            questionInput.dataset.questionIndex = String(questionIndex);
            questionInput.dataset.field = "question";

            questionLabel.append(questionLabelText, questionInput);

            const answerLabel = document.createElement("label");
            const answerLabelText = document.createElement("span");
            answerLabelText.textContent = uiText[currentLanguage].customAnswerLabel;

            const answerInput = document.createElement("textarea");
            answerInput.rows = 2;
            answerInput.value = item.answer;
            answerInput.dataset.categoryIndex = String(categoryIndex);
            answerInput.dataset.questionIndex = String(questionIndex);
            answerInput.dataset.field = "answer";

            answerLabel.append(answerLabelText, answerInput);
            questionRow.append(pointsLabel, questionLabel, answerLabel);
            categoryBlock.appendChild(questionRow);
        });

        customCategoryList.appendChild(categoryBlock);
    });
}

function updateCustomPackDraft(event) {
    const target = event.target;

    if (!(target instanceof HTMLInputElement) && !(target instanceof HTMLTextAreaElement)) {
        return;
    }

    const categoryIndex = Number.parseInt(target.dataset.categoryIndex, 10);

    if (!Number.isInteger(categoryIndex)) {
        return;
    }

    const field = target.dataset.field;
    const category = customPackDraft.categories[categoryIndex];

    if (!category) {
        return;
    }

    if (field === "name") {
        category.name = target.value;
        return;
    }

    const questionIndex = Number.parseInt(target.dataset.questionIndex, 10);
    const question = category.questions[questionIndex];

    if (question && (field === "question" || field === "answer")) {
        question[field] = target.value;
    }
}

function addCustomCategory() {
    customPackDraft.categories.push(createDraftCategory());
    renderCustomPackEditor();
}

function removeCustomCategory(index) {
    if (customPackDraft.categories.length <= 1) {
        return;
    }

    customPackDraft.categories.splice(index, 1);
    renderCustomPackEditor();
}

function getCustomPackKey(packName) {
    const slug = packName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

    return `custom-${slug || "pack"}-${Date.now()}`;
}

function buildCustomPack(packName) {
    const categories = customPackDraft.categories
        .map((category, categoryIndex) => ({
            key: `custom-category-${Date.now()}-${categoryIndex}`,
            category: {
                en: category.name.trim(),
                sv: category.name.trim()
            },
            questions: category.questions.map((item) => ({
                points: item.points,
                question: {
                    en: item.question.trim(),
                    sv: item.question.trim()
                },
                answer: {
                    en: item.answer.trim(),
                    sv: item.answer.trim()
                }
            }))
        }));

    return {
        label: {
            en: packName,
            sv: packName
        },
        categories
    };
}

function saveCustomPack() {
    const packName = customPackNameInput.value.trim();
    const namedCategories = customPackDraft.categories.filter((category) => category.name.trim());
    const hasEmptyQuestion = customPackDraft.categories.some((category) => (
        category.name.trim()
        && category.questions.some((item) => !item.question.trim() || !item.answer.trim())
    ));

    if (!packName) {
        setPackEditorStatus("customPackNameError");
        return;
    }

    if (namedCategories.length === 0) {
        setPackEditorStatus("customPackCategoryError");
        return;
    }

    if (hasEmptyQuestion) {
        setPackEditorStatus("customPackQuestionError");
        return;
    }

    customPackDraft.categories = namedCategories;

    const packKey = editingCustomPackKey || getCustomPackKey(packName);
    customTriviaPacks[packKey] = buildCustomPack(packName);
    saveCustomPacks();

    customPackNameInput.value = "";
    customPackDraft = createCustomPackDraft();
    editingCustomPackKey = null;
    activePackKey = packKey;
    answeredQuestions.clear();
    closeQuestion();

    renderCustomPackEditor();
    renderCustomPackEditSelect();
    renderPackSelect();
    buildBoard();
    setPackEditorStatus("customPackSaved");
}

function buildBoard() {
    board.innerHTML = "";

    getActivePack().categories.forEach((category) => {
        const column = document.createElement("div");
        column.className = "trivia-column";

        const heading = document.createElement("h3");
        heading.textContent = getLocalizedText(category.category);
        column.appendChild(heading);

        category.questions.forEach((item) => {
            const button = document.createElement("button");
            const id = `${category.key}-${item.points}`;

            button.type = "button";
            button.className = "trivia-tile";
            button.textContent = item.points;
            button.disabled = answeredQuestions.has(id);
            button.addEventListener("click", () => openQuestion(category, item, id));

            column.appendChild(button);
        });

        board.appendChild(column);
    });
}

function getTeamName(team, fallbackIndex) {
    return team.name.trim() || `${uiText[currentLanguage].defaultTeamName} ${fallbackIndex + 1}`;
}

function updateCurrentTeam() {
    currentTeamName.textContent = getTeamName(teams[activeTeamIndex], activeTeamIndex);
}

function renderTeams() {
    teamList.innerHTML = "";

    teams.forEach((team, index) => {
        const card = document.createElement("article");
        card.className = "team-card";
        card.classList.toggle("is-active", index === activeTeamIndex);

        const label = document.createElement("label");
        label.textContent = uiText[currentLanguage].teamNameLabel;
        label.setAttribute("for", team.id);

        const input = document.createElement("input");
        input.id = team.id;
        input.type = "text";
        input.value = team.name;
        input.placeholder = `${uiText[currentLanguage].defaultTeamName} ${index + 1}`;
        input.addEventListener("input", () => {
            team.name = input.value;
            updateCurrentTeam();
        });

        const scoreLabel = document.createElement("span");
        scoreLabel.textContent = uiText[currentLanguage].scoreLabel;

        const scoreValue = document.createElement("strong");
        scoreValue.textContent = team.score;

        const scoreBlock = document.createElement("div");
        scoreBlock.className = "team-score";
        scoreBlock.append(scoreLabel, scoreValue);

        const memberBlock = document.createElement("div");
        memberBlock.className = "team-members";

        if (team.members.length > 0) {
            const memberLabel = document.createElement("span");
            memberLabel.textContent = uiText[currentLanguage].assignedPlayersLabel;

            const memberList = document.createElement("p");
            memberList.textContent = team.members.join(", ");

            memberBlock.append(memberLabel, memberList);
        }

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "remove-team";
        removeButton.textContent = uiText[currentLanguage].removeTeam;
        removeButton.disabled = teams.length <= 2;
        removeButton.addEventListener("click", () => removeTeam(index));

        card.append(label, input, scoreBlock);

        if (team.members.length > 0) {
            card.appendChild(memberBlock);
        }

        card.appendChild(removeButton);
        teamList.appendChild(card);
    });

    updateCurrentTeam();
}

function advanceTurn() {
    activeTeamIndex = (activeTeamIndex + 1) % teams.length;
    renderTeams();
}

function addTeam() {
    const teamNumber = teams.length + 1;

    teams.push({
        id: `team-${Date.now()}`,
        name: `${uiText[currentLanguage].defaultTeamName} ${teamNumber}`,
        score: 0,
        members: []
    });

    renderTeams();
}

function removeTeam(index) {
    if (teams.length <= 2) {
        return;
    }

    teams.splice(index, 1);

    if (activeTeamIndex >= teams.length) {
        activeTeamIndex = 0;
    }

    renderTeams();
}

function randomizeTeams() {
    for (let index = teams.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [teams[index], teams[randomIndex]] = [teams[randomIndex], teams[index]];
    }

    activeTeamIndex = 0;
    renderTeams();
}

function shuffleItems(items) {
    const shuffledItems = [...items];

    for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffledItems[index], shuffledItems[randomIndex]] = [shuffledItems[randomIndex], shuffledItems[index]];
    }

    return shuffledItems;
}

function getPlayerNames() {
    return playerListInput.value
        .split(/[\n,;]+/)
        .map((playerName) => playerName.trim())
        .filter(Boolean);
}

function setRandomizerStatus(messageKey) {
    randomizerStatus.textContent = uiText[currentLanguage][messageKey] || "";
}

function generateTeamsFromPlayers() {
    const players = getPlayerNames();
    const teamCount = Number.parseInt(generatedTeamCountInput.value, 10);

    if (players.length < 2) {
        setRandomizerStatus("playerCountError");
        return;
    }

    if (!Number.isInteger(teamCount) || teamCount < 2 || teamCount > players.length) {
        setRandomizerStatus("teamCountError");
        return;
    }

    const shuffledPlayers = shuffleItems(players);
    const generatedTeams = Array.from({ length: teamCount }, (_, index) => ({
        id: `team-${Date.now()}-${index}`,
        name: `${uiText[currentLanguage].defaultTeamName} ${index + 1}`,
        score: 0,
        members: []
    }));

    shuffledPlayers.forEach((playerName, index) => {
        generatedTeams[index % teamCount].members.push(playerName);
    });

    teams.splice(0, teams.length, ...generatedTeams);
    activeTeamIndex = 0;
    setRandomizerStatus("generatedTeamsStatus");
    renderTeams();
}

function resetScores() {
    teams.forEach((team) => {
        team.score = 0;
    });

    activeTeamIndex = 0;
    renderTeams();
}

function renderActiveQuestion() {
    if (!activeQuestion) {
        return;
    }

    const categoryName = getLocalizedText(activeQuestion.category.category);
    const pointsLabel = uiText[currentLanguage].points;

    questionMeta.textContent = `${categoryName} - ${activeQuestion.item.points} ${pointsLabel}`;
    questionText.textContent = getLocalizedText(activeQuestion.item.question);
    answerText.textContent = getLocalizedText(activeQuestion.item.answer);
}

function openQuestion(category, item, id) {
    activeQuestion = { category, item, id };
    answerText.hidden = true;
    questionPanel.hidden = false;
    showAnswerButton.disabled = false;
    renderActiveQuestion();
}

function closeQuestion() {
    activeQuestion = null;
    questionPanel.hidden = true;
}

function finishQuestion(wasCorrect) {
    if (!activeQuestion) {
        return;
    }

    if (wasCorrect) {
        teams[activeTeamIndex].score += activeQuestion.item.points;
    }

    answeredQuestions.add(activeQuestion.id);
    buildBoard();
    closeQuestion();
    advanceTurn();
}

function setLanguage(language) {
    currentLanguage = language;
    translatePage();
    renderPackSelect();
    renderCustomPackEditSelect();
    renderCustomPackEditor();
    buildBoard();
    renderTeams();
    renderActiveQuestion();
}

function setTriviaPack(packKey) {
    activePackKey = packKey;
    answeredQuestions.clear();
    closeQuestion();
    buildBoard();
}

showAnswerButton.addEventListener("click", () => {
    answerText.hidden = false;
    showAnswerButton.disabled = true;
});

markCorrectButton.addEventListener("click", () => finishQuestion(true));
markWrongButton.addEventListener("click", () => finishQuestion(false));

resetButton.addEventListener("click", () => {
    resetScores();
    answeredQuestions.clear();
    closeQuestion();
    buildBoard();
});

addTeamButton.addEventListener("click", addTeam);
randomizeTeamsButton.addEventListener("click", randomizeTeams);
resetScoresButton.addEventListener("click", resetScores);
packSelect.addEventListener("change", () => setTriviaPack(packSelect.value));
generateTeamsButton.addEventListener("click", generateTeamsFromPlayers);
customPackEditSelect.addEventListener("change", () => loadCustomPackForEditing(customPackEditSelect.value));
newCustomPackButton.addEventListener("click", startNewCustomPack);
addCustomCategoryButton.addEventListener("click", addCustomCategory);
saveCustomPackButton.addEventListener("click", saveCustomPack);
customCategoryList.addEventListener("input", updateCustomPackDraft);
customCategoryList.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof HTMLButtonElement) || !target.dataset.removeCategoryIndex) {
        return;
    }

    removeCustomCategory(Number.parseInt(target.dataset.removeCategoryIndex, 10));
});

languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
});

translatePage();
renderCustomPackEditSelect();
renderCustomPackEditor();
renderPackSelect();
buildBoard();
renderTeams();
