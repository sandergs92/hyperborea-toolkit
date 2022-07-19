// NAME GENERATOR
// Input vars
var gender = ""
var race = ""
// Lowercase function
var lowerCaseAllWordsExceptFirstLetters = string =>
    string.replaceAll(/\S*/g, word =>
        `${word.slice(0, 1)}${word.slice(1).toLowerCase()}`
    );
// Reset form
function resetForm() {
    gender = ""
    race = ""
    $("#dropdownMenuButtonGender > button").text("Gender ");
    $("#dropdownMenuButtonRace > button").text("Race ");
    $("#hideNameResult").hide()
}
// Define tables
var amazonianNames = expand({
    "1, 2": { Female: "Adrasteia", Male: "Agapetos" },
    "3, 4": { Female: "Aella", Male: "Agapios" },
    "5, 6": { Female: "Agathe", Male: "Agathon" },
    "7, 8": { Female: "Agaue", Male: "Aischylos" },
    "9, 10": { Female: "Aglaia", Male: "Ampelios" },
    "11, 12": { Female: "Akantha", Male: "Anatolios" },
    "13, 14": { Female: "Alekto", Male: "Antigonos" },
    "15, 16": { Female: "Alexandra", Male: "Antipatros" },
    "17, 18": { Female: "Alexia", Male: "Aphrodisios" },
    "19, 20": { Female: "Alkippe", Male: "Apollonios" },
    "21, 22": { Female: "Althaia", Male: "Archippos" },
    "23, 24": { Female: "Ambrosia", Male: "Argyros" },
    "25, 26": { Female: "Andromeda", Male: "Aristophanes" },
    "27, 28": { Female: "Aristomache", Male: "Asklepiades" },
    "29, 30": { Female: "Artemisia", Male: "Bion" },
    "31, 32": { Female: "Astraia", Male: "Chariton" },
    "33, 34": { Female: "Athanasia", Male: "Chrysanthos" },
    "35, 36": { Female: "Athanais", Male: "Demetrios" },
    "37, 38": { Female: "Demetria", Male: "Dionysios" },
    "39, 40": { Female: "Demostrate", Male: "Dionysodoros" },
    "41, 42": { Female: "Eudoxia", Male: "Eirenaios" },
    "43, 44": { Female: "Eugeneia", Male: "Epaphroditos" },
    "45, 46": { Female: "Eulalia", Male: "Euaristos" },
    "47, 48": { Female: "Eunike", Male: "Euphranor" },
    "49, 50": { Female: "Euphemia", Male: "Euthymios" },
    "51, 52": { Female: "Euphrasia", Male: "Galenos" },
    "53, 54": { Female: "Eupraxia", Male: "Hesperos" },
    "55, 56": { Female: "Eutropia", Male: "Hilarion" },
    "57, 58": { Female: "Gaiane", Male: "Hyakinthos" },
    "59, 60": { Female: "Galene", Male: "Hyginos" },
    "61, 62": { Female: "Helene", Male: "Kallias" },
    "63, 64": { Female: "Hypatia", Male: "Kallistos" },
    "65, 66": { Female: "Iphigeneia", Male: "Karpos" },
    "67, 68": { Female: "Kallisto", Male: "Linos" },
    "69, 70": { Female: "Kallistrate", Male: "Lysandros" },
    "71, 72": { Female: "Kleio", Male: "Myron" },
    "73, 74": { Female: "Lysistrate", Male: "Neophytos" },
    "75, 76": { Female: "Pelagia", Male: "Phaidros" },
    "77, 78": { Female: "Pherenike", Male: "Philon" },
    "79, 80": { Female: "Phoibe", Male: "Phoibos" },
    "81, 82": { Female: "Photine", Male: "Photios" },
    "83, 84": { Female: "Ptolemais", Male: "Polykarpos" },
    "85, 86": { Female: "Sophia", Male: "Simonides" },
    "87, 88": { Female: "Sostrate", Male: "Thales" },
    "89, 90": { Female: "Theodora", Male: "Theodosios" },
    "91, 92": { Female: "Theodosia", Male: "Tryphon" },
    "93, 94": { Female: "Xanthe", Male: "Zenobios" },
    "95, 96": { Female: "Xanthippe", Male: "Zenon" },
    "97, 98": { Female: "Zenais", Male: "Zephyros" },
    "99, 100": { Female: "Zosime", Male: "Zosimos" },
});
var amazonianModifiers = {
    "dra": "doros",
    "is": "sidoros",
    "e": "edoros",
    "ia": "idoros",
    "o": "odoros",
    "a": "adoros"
}
var atlanteanNames = {
    1: { Male: "Agapios", Female: "Agape" },
    2: { Male: "Agathon", Female: "Agathe" },
    3: { Male: "Akakios", Female: "Alexandra" },
    4: { Male: "Alexandros", Female: "Ambrosia" },
    5: { Male: "Alexios", Female: "Aphrodisia" },
    6: { Male: "Alkaios", Female: "Apollonia" },
    7: { Male: "Ambrosios", Female: "Aristomache" },
    8: { Male: "Anakletos", Female: "Aspasia" },
    9: { Male: "Anatolios", Female: "Demostrate" },
    10: { Male: "Androkles", Female: "Elpis" },
    11: { Male: "Andronikos", Female: "Eudokia" },
    12: { Male: "Aniketos", Female: "Eudoxia" },
    13: { Male: "Aphrodisios", Female: "Eulalia" },
    14: { Male: "Apollonios", Female: "Eumelia" },
    15: { Male: "Archelaos", Female: "Euphemia" },
    16: { Male: "Archimedes", Female: "Euphrasia" },
    17: { Male: "Argyros", Female: "Euthymia" },
    18: { Male: "Aristarchos", Female: "Eutropia" },
    19: { Male: "Aristeides", Female: "Galene" },
    20: { Male: "Aristodemos", Female: "Helene" },
    21: { Male: "Aristokles", Female: "Hypatia" },
    22: { Male: "Ariston", Female: "Kallisto" },
    23: { Male: "Aristophanes", Female: "Kallistrate" },
    24: { Male: "Arkadios", Female: "Kleio" },
    25: { Male: "Arsenios", Female: "Kleopatra" },
    26: { Male: "Asklepiades", Female: "Korinna" },
    27: { Male: "Athanasios", Female: "Lysandra" },
    28: { Male: "Bion", Female: "Lysistrate" },
    29: { Male: "Demosthenes", Female: "Pelagia" },
    30: { Male: "Epaphroditos", Female: "Phile" },
    31: { Male: "Epiktetos", Female: "Phoibe" },
    32: { Male: "Euaristos", Female: "Photine" },
    33: { Male: "Euphemios", Female: "Ptolemais" },
    34: { Male: "Euripides", Female: "Sophia" },
    35: { Male: "Eusebios", Female: "Sostrate" },
    36: { Male: "Eustathios", Female: "Timo" },
    37: { Male: "Euthymios", Female: "Tryphosa" },
    38: { Male: "Eutropios", Female: "Tycho" },
    39: { Male: "Galenos", Female: "Xanthe" },
    40: { Male: "Gennadios", Female: "Xenia" },
    41: { Male: "Heliodoros" },
    42: { Male: "Herodotos" },
    43: { Male: "Heron" },
    44: { Male: "Hesiodos" },
    45: { Male: "Hesperos" },
    46: { Male: "Homeros" },
    47: { Male: "Hyginos" },
    48: { Male: "Hypatos" },
    49: { Male: "Iason" },
    50: { Male: "Kallikrates" },
    51: { Male: "Kleisthenes" },
    52: { Male: "Kleon" },
    53: { Male: "Lysandros" },
    54: { Male: "Lysimachos" },
    55: { Male: "Pamphilos" },
    56: { Male: "Pankratios" },
    57: { Male: "Paramonos" },
    58: { Male: "Pelagios" },
    59: { Male: "Phaidros" },
    60: { Male: "Philon" },
    61: { Male: "Phoibos" },
    62: { Male: "Phokas" },
    63: { Male: "Photios" },
    64: { Male: "Platon" },
    65: { Male: "Praxiteles" },
    66: { Male: "Prokopios" },
    67: { Male: "Ptolemaios" },
    68: { Male: "Solon" },
    69: { Male: "Sophokles" },
    70: { Male: "Sophos" },
    71: { Male: "Sosigenes" },
    72: { Male: "Straton" },
    73: { Male: "Themistokles" },
    74: { Male: "Theron" },
    75: { Male: "Timaios" },
    76: { Male: "Timon" },
    77: { Male: "Tryphon" },
    78: { Male: "Tychon" },
    79: { Male: "Zephyros" },
    80: { Male: "Zotiko" },
}
var atlanteanClanNames = {
    1: "Amphitrite",
    2: "Eurybia",
    3: "Glaukos",
    4: "Kymopoleia",
    5: "Nereos",
    6: "Okeanos",
    7: "Phorkys",
    8: "Pontos",
    9: "Poseidon",
    10: "Proteos",
    11: "Thalassa",
    12: "Triton",
}
var commonNameElements = {
    1: "Cai",
    2: "Cair",
    3: "Conn",
    4: "Dai",
    5: "Dail",
    6: "Dain",
    7: "Dall",
    8: "Darr",
    9: "Denn",
    10: "Dill",
    11: "Dunn",
    12: "Fell",
    13: "Fenn",
    14: "Gann",
    15: "Garr",
    16: "Gill",
    17: "Goll",
    18: "Gunn",
    19: "Kai",
    20: "Kain",
    21: "Kamm",
    22: "Kell",
    23: "Koll",
    24: "Konn",
    25: "Korr",
    26: "Kull",
    27: "Marr",
    28: "Morr",
    29: "Nai",
    30: "Nain",
    31: "Nall",
    32: "Narr",
    33: "Nill",
    34: "Pai",
    35: "Parr",
    36: "Penn",
    37: "Qann",
    38: "Qarr",
    39: "Qell",
    40: "Qill",
    41: "Qull",
    42: "Rai",
    43: "Rall",
    44: "Ramm",
    45: "Rann",
    46: "Rell",
    47: "Renn",
    48: "Rhai",
    49: "Rhal",
    50: "Rhan",
    51: "Rhel",
    52: "Rhen",
    53: "Rhil",
    54: "Rhul",
    55: "Rhun",
    56: "Rill",
    57: "Rull",
    58: "Sai",
    59: "Samm",
    60: "Sarr",
    61: "Tai",
    62: "Tain",
    63: "Tair",
    64: "Tann",
    65: "Tarr",
    66: "Tenn",
    67: "Torr",
    68: "Tull",
    69: "Vai",
    70: "Vair",
    71: "Vall",
    72: "Vann",
    73: "Varr",
    74: "Vell",
    75: "Venn",
    76: "Vill",
    77: "Voll",
    78: "Vonn",
    79: "Vorr",
    80: "Vull",
    81: "Vunn",
    82: "Xai",
    83: "Xall",
    84: "Xann",
    85: "Xarr",
    86: "Xell",
    87: "Xenn",
    88: "Xill",
    89: "Xonn",
    90: "Xull",
    91: "Yann",
    92: "Zai",
    93: "Zall",
    94: "Zann",
    95: "Zarr",
    96: "Zell",
    97: "Zenn",
    98: "Zill",
    99: "Zonn",
    100: "Zull",
}
var esquimauxNames = expand({
    "1, 2": "Aguta",
    "3, 4": "Akiak",
    "5, 6": "Arjalinerk",
    "7, 8": "Arrluk",
    "9, 10": "Assiminik",
    "11, 12": "Aukaneck",
    "13, 14": "Chulyin",
    "15, 16": "Cikuq",
    "17, 18": "Iluq",
    "19, 20": "Issumatar",
    "21, 22": "Kakortok",
    "23, 24": "Karpok",
    "25, 26": "Kesuk",
    "27, 28": "Kinaktok",
    "29, 30": "Kinapak",
    "31, 32": "Krernertok",
    "33, 34": "Kussuyok",
    "35, 36": "Maguyuk",
    "37, 38": "Maniitok",
    "39, 40": "Nauja",
    "41, 42": "Ningakpok",
    "43, 44": "Nukilik",
    "45, 46": "Olikpok",
    "47, 48": "Piktaungitok",
    "49, 50": "Pukulria",
    "51, 52": "Qigiq",
    "53, 54": "Saghani",
    "55, 56": "Salaksartok",
    "57, 58": "Sangilak",
    "59, 60": "Saomik",
    "61, 62": "Shila",
    "63, 64": "Siku",
    "65, 66": "Sirmiq",
    "67, 68": "Sitiyok",
    "69, 70": "Sos",
    "71, 72": "Suka",
    "73, 74": "Taliriktug",
    "75, 76": "Taqukaq",
    "77, 78": "Tartok",
    "79, 80": "Tiglikte",
    "81, 82": "Tikaani",
    "83, 84": "Tonrar",
    "85, 86": "Tornuaq",
    "87, 88": "Tulugaq",
    "89, 90": "Tulukaruk",
    "91, 92": "Tungulria",
    "93, 94": "Tuluwaq",
    "95, 96": "Tuwawi",
    "97, 98": "Ulva",
    "99, 100": "Yakone",
})
var hyperboreanElements = {
    1: "Dar",
    2: "Dor",
    3: "Dun",
    4: "Gal",
    5: "Gan",
    6: "Gar",
    7: "Gol",
    8: "Gon",
    9: "Gor",
    10: "Gul",
    11: "Kal",
    12: "Kar",
    13: "Kil",
    14: "Kol",
    15: "Kon",
    16: "Kor",
    17: "Kul",
    18: "Kur",
    19: "Mal",
    20: "Mar",
    21: "Mir",
    22: "Mor",
    23: "Mur",
    24: "Plo",
    25: "Pol",
    26: "Val",
    27: "Van",
    28: "Var",
    29: "Vil",
    30: "Vir",
    31: "Vol",
    32: "Von",
    33: "Vor",
    34: "Vul",
    35: "Vun",
    36: "Vur",
    37: "Xal",
    38: "Xan",
    39: "Xar",
    40: "Xil",
    41: "Xin",
    42: "Xir",
    43: "Xol",
    44: "Xon",
    45: "Xor",
    46: "Xul",
    47: "Xun",
    48: "Xur",
    49: "Zal",
    50: "Zan",
    51: "Zar",
    52: "Zil",
    53: "Zin",
    54: "Zir",
    55: "Zol",
    56: "Zon",
    57: "Zor",
    58: "Zul",
    59: "Zun",
    60: "Zur",
}
var hyperboreanFamilyNames = {
    1: "Druun",
    2: "Ghuul",
    3: "Graax",
    4: "Kloon",
    5: "Phaaz",
    6: "Ploon",
    7: "Qaan",
    8: "Rhaan",
    9: "Shoon",
    10: "Slaan",
    11: "Thoon",
    12: "Traal",
    13: "Vheez",
    14: "Xhoon",
    15: "Zhaan",
    16: "Zhuu"
}
var ixianMaleNames = expand({
    "1, 2": "Abaziôn",
    "3, 4": "Abdarakos",
    "5, 6": "Abragos",
    "7, 8": "Abrozeos",
    "9, 10": "Akasas",
    "11, 12": "Alexarthos",
    "13, 14": "Amaiakos",
    "15, 16": "Amôspados",
    "17, 18": "Andranakos",
    "19, 20": "Apsachos",
    "21, 22": "Ardagdakos",
    "23, 24": "Ardaros",
    "25, 26": "Argamênos",
    "27, 28": "Aroasios",
    "29, 30": "Arsaliôn",
    "31, 32": "Arsêochos",
    "33, 34": "Asanos",
    "35, 36": "Asaros",
    "37, 38": "Aspakos",
    "39, 40": "Aspamitharês",
    "41, 42": "Aunamos",
    "43, 44": "Aurazakos",
    "45, 46": "Azariôn",
    "47, 48": "Azos",
    "49, 50": "Aziagos",
    "51, 52": "Badagos",
    "53, 54": "Badakês",
    "55, 56": "Bagdochos",
    "57, 58": "Bagios",
    "59, 60": "Baioraspos",
    "61, 62": "Baiormaios",
    "63, 64": "Bastakas",
    "65, 66": "Baxagos",
    "67, 68": "Bistês",
    "69, 70": "Bôrakos",
    "71, 72": "Boraspos",
    "73, 74": "Bôropsazos",
    "75, 76": "Bradakos",
    "77, 78": "Chanakês",
    "79, 80": "Chodainos",
    "81, 82": "Chôdarzos",
    "83, 84": "Chodekios",
    "85, 86": "Choziakos",
    "87, 88": "Chodios",
    "89, 90": "Chôdonakos",
    "91, 92": "Dadagos",
    "93, 94": "Danarasmakos",
    "95, 96": "Dandaxarthos",
    "97, 98": "Didumoxarthos",
    "99, 100": "Dosumoxarthos",
    "101, 102": "Gadas",
    "103, 104": "Gadikios",
    "105, 106": "Gaos",
    "107, 108": "Gôdigasos",
    "109, 110": "Gôsakos",
    "111, 112": "Gosôn",
    "113, 114": "Iaphagos",
    "115, 116": "Iazadagos",
    "117, 118": "Insazagos",
    "119, 120": "Iôdas",
    "121, 122": "Iôdesmagos",
    "123, 124": "Iramboustos",
    "125, 126": "Irganos",
    "127, 128": "Kainaxarthos",
    "129, 130": "Kamorsazês",
    "131, 132": "Karaxstos",
    "133, 134": "Karsas",
    "135, 136": "Karzoazos",
    "137, 138": "Kasagos",
    "139, 140": "Katokas",
    "141, 142": "Kopharnos",
    "143, 144": "Kossas",
    "145, 146": "Kouzaios",
    "147, 148": "Madakos",
    "149, 150": "Madôis",
    "151, 152": "Maiakos",
    "153, 154": "Maipharnos",
    "155, 156": "Maisês",
    "157, 158": "Maniagos",
    "159, 160": "Mardauos",
    "161, 162": "Masas",
    "163, 164": "Mastas",
    "165, 166": "Medosaccos",
    "167, 168": "Mêthakos",
    "169, 170": "Mordos",
    "171, 172": "Mourdagos",
    "173, 174": "Nabazos",
    "175, 176": "Namgênos",
    "177, 178": "Olgasos",
    "179, 180": "Omrasmakos",
    "181, 182": "Orsiomichos",
    "183, 184": "Ochôziakos",
    "185, 186": "Ouaras",
    "187, 188": "Ouarazakos",
    "189, 190": "Ouarzbalos",
    "191, 192": "Ouastobalos",
    "193, 194": "Ourbazos",
    "195, 196": "Ourgios",
    "197, 198": "Ousigasos",
    "199, 200": "Ousigos",
    "201, 202": "Oustanos",
    "203, 204": "Oxardôzis",
    "205, 206": "Pagos",
    "207, 208": "Parspanakos",
    "209, 210": "Pêrakos",
    "211, 212": "Phadinamos",
    "213, 214": "Phaldaranos",
    "215, 216": "Phandarazos",
    "217, 218": "Pharnagos",
    "219, 220": "Pharnarnos",
    "221, 222": "Pharnês",
    "223, 224": "Pharnoxarthos",
    "225, 226": "Phlianos",
    "227, 228": "Phodakos",
    "229, 230": "Phorêranos",
    "231, 232": "Phorgabakos",
    "233, 234": "Phoros",
    "235, 236": "Phosakos",
    "237, 238": "Phortas",
    "239, 240": "Pitopharnakês",
    "241, 242": "Pourthaios",
    "243, 244": "Radmêos",
    "245, 246": "Rapakês",
    "247, 248": "Rassogos",
    "249, 250": "Saitapharnês",
    "251, 252": "Sanagos",
    "253, 254": "Sarakos",
    "255, 256": "Saratos",
    "257, 258": "Saraxazos",
    "259, 260": "Sasas",
    "261, 262": "Sattiôn",
    "263, 264": "Sênêkas",
    "265, 266": "Siômachos",
    "267, 268": "Siranos",
    "269, 270": "Sôchoubazos",
    "271, 272": "Sorchakos",
    "273, 274": "Spakos",
    "275, 276": "Spadakos",
    "277, 278": "Sparophotos",
    "279, 280": "Spithamês",
    "281, 282": "Stosarakos",
    "283, 284": "Sturanos",
    "285, 286": "Xarthanos",
    "287, 288": "Xêgodis",
    "289, 290": "Xiamphôkanos",
    "291, 292": "Xobas",
    "293, 294": "Zabagios",
    "295, 296": "Zabandos",
    "297, 298": "Zabargos",
    "299, 300": "Zosinês",
})
var ixianFemaleNames = {
    1: "Alda",
    2: "Amagê",
    3: "Aritê",
    4: "Leimeiê",
    5: "Mada",
    6: "Maiôsara",
    7: "Sarukê",
    8: "Storanê",
    9: "Tamura",
    10: "Tirgataô",
}
var kelticFemaleNames = expand({
    "1, 2": "Áine",
    "3, 4": "Ana",
    "5, 6": "Banbha",
    "7, 8": "Brianag",
    "9, 10": "Bríghid",
    "11, 12": "Ceana",
    "13, 14": "Ceara",
    "15, 16": "Ciar",
    "17, 18": "Dáirine",
    "19, 20": "Ealadha",
    "21, 22": "Echna",
    "23, 24": "Eithne",
    "25, 26": "Étaín",
    "27, 28": "Fionúir",
    "29, 30": "Geiléis",
    "31, 32": "Gràinne",
    "33, 34": "Laoise",
    "35, 36": "Líadan",
    "37, 38": "Liamhain",
    "39, 40": "Líobhan",
    "41, 42": "Luiseach",
    "43, 44": "Malamhìn",
    "45, 46": "Meadhbh",
    "47, 48": "Meallá",
    "49, 50": "Mòr",
    "51, 52": "Mòrag",
    "53, 54": "Mordag",
    "55, 56": "Muireall",
    "57, 58": "Muireann",
    "59, 60": "Muirín",
    "61, 62": "Mùirne",
    "63, 64": "Neacht",
    "65, 66": "Neasa",
    "67, 68": "Niamh",
    "69, 70": "Órlaith",
    "71, 72": "Osnait",
    "73, 74": "Ríona",
    "75, 76": "Róinseach",
    "77, 78": "Róisín",
    "79, 80": "Ròs",
    "81, 82": "Saraid",
    "83, 84": "Scoth",
    "85, 86": "Searc",
    "87, 88": "Sidheag",
    "89, 90": "Síomha",
    "91, 92": "Slàinte",
    "93, 94": "Sorcha",
    "95, 96": "Treasa",
    "97, 98": "Tuathla",
    "99, 100": "Úna",
})
var kelticMaleNames = {
    1: "Ailill",
    2: "Áinle",
    3: "Ánrothán",
    4: "Aodh",
    5: "Aodhán",
    6: "Aonghus",
    7: "Artagan",
    8: "Artair",
    9: "Bardán",
    10: "Bearach",
    11: "Blár",
    12: "Bran",
    13: "Breacán",
    14: "Breannan",
    15: "Breasal",
    16: "Brion",
    17: "Brocc",
    18: "Brógán",
    19: "Camran",
    20: "Cassair",
    21: "Cassán",
    22: "Cathal",
    23: "Cathán",
    24: "Cian",
    25: "Ciaran",
    26: "Cillian",
    27: "Còmhall",
    28: "Còmhan",
    29: "Conall",
    30: "Conan",
    31: "Conn",
    32: "Corc",
    33: "Cormac",
    34: "Cuán",
    35: "Curnán",
    36: "Deaglán",
    37: "Diarmad",
    38: "Domhnall",
    39: "Donnan",
    40: "Dubhagan",
    41: "Dùghall",
    42: "Dùghlas",
    43: "Eadan",
    44: "Eòghan",
    45: "Faolan",
    46: "Fearghas",
    47: "Finnean",
    48: "Fionn",
    49: "Fionnbharr",
    50: "Fionnghal",
    51: "Fionnlagh",
    52: "Flann",
    53: "Gobán",
    54: "Gòrdan",
    55: "Gormal",
    56: "Labrás",
    57: "Lachlann",
    58: "Lachtnán",
    59: "Lasair",
    60: "Leannán",
    61: "Lomán",
    62: "Lonán",
    63: "Lorcán",
    64: "Machar",
    65: "Macrath",
    66: "Maolán",
    67: "Maon",
    68: "Marcán",
    69: "Meallán",
    70: "Mochta",
    71: "Moireach",
    72: "Morann",
    73: "Muireach",
    74: "Murchú",
    75: "Neasán",
    76: "Niall",
    77: "Ógán",
    78: "Olcán",
    79: "Onchú",
    80: "Orthanach",
    81: "Osán",
    82: "Ríoghán",
    83: "Ríordán",
    84: "Rònan",
    85: "Ross",
    86: "Rúadhán",
    87: "Ruaidhrí",
    88: "Ruarc",
    89: "Sárán",
    90: "Scannal",
    91: "Scannlán",
    92: "Scáthach",
    93: "Seanán",
    94: "Sionn",
    95: "Taran",
    96: "Tóla",
    97: "Torcán",
    98: "Uallas",
    99: "Ultán",
    100: "Urard"
}
var kimmerianNames = {
    1: { Male: "Agathon", Female: "Agape" },
    2: { Male: "Alexandros", Female: "Agathe" },
    3: { Male: "Alexios", Female: "Alexandra" },
    4: { Male: "Alkaios", Female: "Aristomache" },
    5: { Male: "Amyntas", Female: "Aspasia" },
    6: { Male: "Anakletos", Female: "Athanasia" },
    7: { Male: "Anatolios", Female: "Chrysanthe" },
    8: { Male: "Androkles", Female: "Demostrate" },
    9: { Male: "Andronikos", Female: "Elpis" },
    10: { Male: "Aniketos", Female: "Euanthe" },
    11: { Male: "Antigonos", Female: "Eudokia" },
    12: { Male: "Archelaos", Female: "Eudoxia" },
    13: { Male: "Archippos", Female: "Eulalia" },
    14: { Male: "Argyros", Female: "Eunike" },
    15: { Male: "Aristarchos", Female: "Euphemia" },
    16: { Male: "Aristeides", Female: "Euphrasia" },
    17: { Male: "Aristokles", Female: "Euthalia" },
    18: { Male: "Ariston", Female: "Euthymia" },
    19: { Male: "Aristophanes", Female: "Eutropia" },
    20: { Male: "Arsenios", Female: "Galene" },
    21: { Male: "Athanasios", Female: "Helene" },
    22: { Male: "Demosthenes", Female: "Hypatia" },
    23: { Male: "Drakon", Female: "Kallisto" },
    24: { Male: "Eukleides", Female: "Kallistrate" },
    25: { Male: "Euphemios", Female: "Kleopatra" },
    26: { Male: "Eustathios", Female: "Korinna" },
    27: { Male: "Euthymios", Female: "Lysandra" },
    28: { Male: "Eutropios", Female: "Lysistrate" },
    29: { Male: "Galenos", Female: "Phoibe" },
    30: { Male: "Heliodoros", Female: "Photine" },
    31: { Male: "Herakleides", Female: "Ptolemais" },
    32: { Male: "Herakleios", Female: "Sappho" },
    33: { Male: "Herodotos", Female: "Sophia" },
    34: { Male: "Heron", Female: "Sostrate" },
    35: { Male: "Hippokrates", Female: "Syntyche" },
    36: { Male: "Hippolytos", Female: "Timo" },
    37: { Male: "Hyginos", Female: "Tryphosa" },
    38: { Male: "Hypatos", Female: "Xenia" },
    39: { Male: "Iason", Female: "Xeno" },
    40: { Male: "Kleisthenes", Female: "Zosime" },
    41: { Male: "Kleon" },
    42: { Male: "Leon" },
    43: { Male: "Leonidas" },
    44: { Male: "Leontios" },
    45: { Male: "Lykos" },
    46: { Male: "Lykourgos" },
    47: { Male: "Lysandros" },
    48: { Male: "Miltiades" },
    49: { Male: "Nikandros" },
    50: { Male: "Nikephoros" },
    51: { Male: "Nikomachos" },
    52: { Male: "Nikomedes" },
    53: { Male: "Nikostratos" },
    54: { Male: "Pankratios" },
    55: { Male: "Pantaleon" },
    56: { Male: "Pantheras" },
    57: { Male: "Paramonos" },
    58: { Male: "Phaidros" },
    59: { Male: "Philokrates" },
    60: { Male: "Phoibos" },
    61: { Male: "Photios" },
    62: { Male: "Platon" },
    63: { Male: "Praxiteles" },
    64: { Male: "Prokopios" },
    65: { Male: "Ptolemaios" },
    66: { Male: "Pyrrhos" },
    67: { Male: "Sokrates" },
    68: { Male: "Solon" },
    69: { Male: "Sophokles" },
    70: { Male: "Sophos" },
    71: { Male: "Sosigenes" },
    72: { Male: "Straton" },
    73: { Male: "Themistokles" },
    74: { Male: "Theron" },
    75: { Male: "Timaios" },
    76: { Male: "Tychon" },
    77: { Male: "Xenokrates" },
    78: { Male: "Zephyros" },
    79: { Male: "Zosimos" },
    80: { Male: "Zotikos" },
}
var krimmeanNames = {
    1: { Male: "Bendidóros", Female: "Dentusucu" },
    2: { Male: "Brinkazis", Female: "Dizasokos" },
    3: { Male: "Bryzos", Female: "Eptésuchis" },
    4: { Male: "Byzés", Female: "Kersésuchis" },
    5: { Male: "Dentupés", Female: "Mokasokos" },
    6: { Male: "Diaskenthos", Female: "Rhaskusucu" },
    7: { Male: "Diazelmis", Female: "Surasokos" },
    8: { Male: "Diazenis", Female: "Tarusucu" },
    9: { Male: "Dizapés" },
    10: { Male: "Dizazelmis" },
    11: { Male: "Drenis" },
    12: { Male: "Eptakenthos" },
    13: { Male: "Eptaporis" },
    14: { Male: "Eptenés" },
    15: { Male: "Ezbenis" },
    16: { Male: "Gaidrés" },
    17: { Male: "Kersés" },
    18: { Male: "Ketriporis" },
    19: { Male: "Mukaboris" },
    20: { Male: "Mukos" },
    21: { Male: "Mukakenthos" },
    22: { Male: "Mukapaibes" },
    23: { Male: "Mukaporis" },
    24: { Male: "Mukapuis" },
    25: { Male: "Mukazenis" },
    26: { Male: "Pytros" },
    27: { Male: "Rhaskos" },
    28: { Male: "Rhaskuporis" },
    29: { Male: "Rhésos" },
    30: { Male: "Satrés" },
    31: { Male: "Skaris" },
    32: { Male: "Suratralis" },
    33: { Male: "Tarutinos" },
    34: { Male: "Zilés" },
    35: { Male: "Zipaibes" },
    36: { Male: "Zipyros" },
}
var pictishNames = {
    1: { Male: "Adcobrovatos", Female: "Barita" },
    2: { Male: "Argentocoxos", Female: "Bodicca" },
    3: { Male: "Arviragos", Female: "Cartimandua" },
    4: { Male: "Bodiccios", Female: "Cunoarda" },
    5: { Male: "Brigomaglos", Female: "Cunovinda" },
    6: { Male: "Cacumattos", Female: "Huctia" },
    7: { Male: "Calgacos", Female: "Verctissa" },
    8: { Male: "Caranacos", Female: "Verica" },
    9: { Male: "Caratacos" },
    10: { Male: "Cassivellaunos" },
    11: { Male: "Catavignos" },
    12: { Male: "Ceanatis" },
    13: { Male: "Cingetorix" },
    14: { Male: "Cintugnatos" },
    15: { Male: "Cintusmos" },
    16: { Male: "Cistumucos" },
    17: { Male: "Cogidubnos" },
    18: { Male: "Commios" },
    19: { Male: "Crotos" },
    20: { Male: "Cunittos" },
    21: { Male: "Cunobarros" },
    22: { Male: "Cunobelinos" },
    23: { Male: "Cunomoros" },
    24: { Male: "Cunopectos" },
    25: { Male: "Cunovindos" },
    26: { Male: "Dubnovellaunos" },
    27: { Male: "Dumnocoveros" },
    28: { Male: "Dumnovellaunos" },
    29: { Male: "Enemnogenos" },
    30: { Male: "Enestinos" },
    31: { Male: "Ivomagos" },
    32: { Male: "Litugenos" },
    33: { Male: "Lugotorix" },
    34: { Male: "Mandubracios" },
    35: { Male: "Maslorios" },
    36: { Male: "Matugenos" },
    37: { Male: "Melisos" },
    38: { Male: "Morirex" },
    39: { Male: "Motios" },
    40: { Male: "Nectovelios" },
    41: { Male: "Prasutagos" },
    42: { Male: "Rianorix" },
    43: { Male: "Saccios" },
    44: { Male: "Segovax" },
    45: { Male: "Senaculos" },
    46: { Male: "Sennianos" },
    47: { Male: "Senorix" },
    48: { Male: "Setibogios" },
    49: { Male: "Tamesubugos" },
    50: { Male: "Tancorix" },
    51: { Male: "Tasciovanos" },
    52: { Male: "Taximagulos" },
    53: { Male: "Tincommios" },
    54: { Male: "Togodumnos" },
    55: { Male: "Uepogenos" },
    56: { Male: "Vellocatos" },
    57: { Male: "Venutios" },
    58: { Male: "Vindex" },
    59: { Male: "Vindomorucios" },
    60: { Male: "Virssuccios" },
}
var pictishModifiers = {
    "ex": "egis",
    "is": "is",
    "ix": "igis",
    "os": "i"
}
var halfbloodPictNames = {
    1: "Chʼáak",
    2: "Chʼaal",
    3: "Cháatl",
    4: "Ch’eet",
    5: "Chéx̱ʼi",
    6: "Dís",
    7: "G̱agaan",
    8: "G̱aÿéis",
    9: "Gijook",
    10: "G̱ooch",
    11: "Góon",
    12: "Kéet",
    13: "Kóon",
    14: "Kʼóox",
    15: "L’ook",
    16: "Sʼáx",
    17: "Sʼeek",
    18: "Shaa",
    19: "Shisʼg̱i",
    20: "Sitʼ",
    21: "Taan",
    22: "Tax̱ʼ",
    23: "Tleilu",
    24: "Tóos",
    25: "Tsiskʼw",
    26: "Tuḵká",
    27: "Wéix̱",
    28: "X’aan",
    29: "Xaas",
    30: "Xáatl",
    31: "X̱aay",
    32: "Xʼátgu",
    33: "Xeitl",
    34: "X̱ík",
    35: "Xíxchʼi",
    36: "Xóots",
    37: "Ÿaaw",
    38: "Ÿaaÿ",
    39: "Yéik",
    40: "Yéi",
}
var vikingNames = {
    1: { Male: "Adalbrandr", Female: "Álfhildr" },
    2: { Male: "Adalrádr", Female: "Arnbjörg" },
    3: { Male: "Adalsteinn", Female: "Arndís" },
    4: { Male: "Aghi", Female: "Arnfridr" },
    5: { Male: "Agmundr", Female: "Arngerdr" },
    6: { Male: "Áleifr", Female: "Arngunnr" },
    7: { Male: "Alfarr", Female: "Arnlaug" },
    8: { Male: "Alfgeirr", Female: "Ásbjörg" },
    9: { Male: "Alfkell", Female: "Ásfrídr" },
    10: { Male: "Álmgeirr", Female: "Ásgerdr" },
    11: { Male: "Arnbjörn", Female: "Ásgunnr" },
    12: { Male: "Arnfastr", Female: "Ásný" },
    13: { Male: "Arngeirr", Female: "Ástrídr" },
    14: { Male: "Arngrímr", Female: "Dís" },
    15: { Male: "Arnhallr", Female: "Eybjörg" },
    16: { Male: "Arnhvatr", Female: "Eydís" },
    17: { Male: "Arnkell", Female: "Freydís" },
    18: { Male: "Arnoddr", Female: "Freygerdr" },
    19: { Male: "Arnsteinn", Female: "Freygunnr" },
    20: { Male: "Arnthórr", Female: "Frída" },
    21: { Male: "Arnulfr", Female: "Geira" },
    22: { Male: "Arnvidr", Female: "Geirbjörg" },
    23: { Male: "Ásbjörn", Female: "Geirhildr" },
    24: { Male: "Ásbrandr", Female: "Geirlaug" },
    25: { Male: "Ásfastr", Female: "Geirrídr" },
    26: { Male: "Ásgeirr", Female: "Gíslaug" },
    27: { Male: "Ásgísl", Female: "Gróa" },
    28: { Male: "Áskell", Female: "Gunna" },
    29: { Male: "Ásmarr", Female: "Gunnfrídr" },
    30: { Male: "Ásrádr", Female: "Gunnheidr" },
    31: { Male: "Ásulfr", Female: "Gunnhildr" },
    32: { Male: "Ásvaldr", Female: "Gunnlaug" },
    33: { Male: "Audbjörn", Female: "Gunnvör" },
    34: { Male: "Audgeirr", Female: "Gyda" },
    35: { Male: "Audgísl", Female: "Halla" },
    36: { Male: "Audgrímr", Female: "Hallbera" },
    37: { Male: "Audkell", Female: "Hallbjörg" },
    38: { Male: "Audmundr", Female: "Halldís" },
    39: { Male: "Audulfr", Female: "Hallfrídr" },
    40: { Male: "Audsteinn", Female: "Hallgerdr" },
    41: { Male: "Audvaldr", Female: "Hallthóra" },
    42: { Male: "Audvidr", Female: "Hallveig" },
    43: { Male: "Baggi", Female: "Heimlaug" },
    44: { Male: "Balli", Female: "Helga" },
    45: { Male: "Bárdr", Female: "Herdís" },
    46: { Male: "Bergr", Female: "Herfrídr" },
    47: { Male: "Bergthórr", Female: "Hergerdr" },
    48: { Male: "Bergulfr", Female: "Hergunnr" },
    49: { Male: "Bersi", Female: "Herthrúdr" },
    50: { Male: "Birgir", Female: "Hildibjörg" },
    51: { Male: "Bjartr", Female: "Hildigerdr" },
    52: { Male: "Björn", Female: "Hildigunnr" },
    53: { Male: "Björnkell", Female: "Hildr" },
    54: { Male: "Björnulfr", Female: "Hlíf" },
    55: { Male: "Bjórr", Female: "Hlífhildr" },
    56: { Male: "Bleikr", Female: "Hólmfrídr" },
    57: { Male: "Brandr", Female: "Hólmgerdr" },
    58: { Male: "Brandulfr", Female: "Hólmlaug" },
    59: { Male: "Broddr", Female: "Hrefna" },
    60: { Male: "Brúnkell", Female: "Inga" },
    61: { Male: "Búi", Female: "Ingibjörg" },
    62: { Male: "Dagr", Female: "Ingigerdr" },
    63: { Male: "Dagvidr", Female: "Ingileif" },
    64: { Male: "Einarr", Female: "Ingirídr" },
    65: { Male: "Eiríkr", Female: "Jófrídr" },
    66: { Male: "Eldgrímr", Female: "Jórunn" },
    67: { Male: "Erlingr", Female: "Ketillaug" },
    68: { Male: "Eybjörn", Female: "Ketilrídr" },
    69: { Male: "Eygeirr", Female: "Mær" },
    70: { Male: "Eyleifr", Female: "Magnhildr" },
    71: { Male: "Eymundr", Female: "Mundgerdr" },
    72: { Male: "Eysteinn", Female: "Oddbjörg" },
    73: { Male: "Eyvindr", Female: "Oddfridr" },
    74: { Male: "Fastbjörn", Female: "Oddný" },
    75: { Male: "Fastgeirr", Female: "Ragnbjörg" },
    76: { Male: "Fastmundr", Female: "Ragnfrídr" },
    77: { Male: "Fastulfr", Female: "Ragnhildr" },
    78: { Male: "Fjölmódr", Female: "Rannveig" },
    79: { Male: "Fóthradr", Female: "Sigbjörg" },
    80: { Male: "Frakki", Female: "Signý" },
    81: { Male: "Freybjörn", Female: "Sigrídr" },
    82: { Male: "Freygeirr", Female: "Sigrún" },
    83: { Male: "Freyrikr", Female: "Sigthrúdr" },
    84: { Male: "Freysteinn", Female: "Snælaug" },
    85: { Male: "Freyvidr", Female: "Steinbjörg" },
    86: { Male: "Fridbjörn", Female: "Steinfrídr" },
    87: { Male: "Fridgeirr", Female: "Thúrídr" },
    88: { Male: "Fridleifr", Female: "Thyri" },
    89: { Male: "Fridmundr", Female: "Úlfhildr" },
    90: { Male: "Fridulfr", Female: "Ulla" },
    91: { Male: "Fródi", Female: "Ullgerdr" },
    92: { Male: "Gedda", Female: "Ullgunnr" },
    93: { Male: "Geirbjörn", Female: "Ullhildr" },
    94: { Male: "Geirfastr", Female: "Ullunn" },
    95: { Male: "Geirhvatr", Female: "Ullvé" },
    96: { Male: "Geirleifr", Female: "Ullvör" },
    97: { Male: "Geirleikr", Female: "Unna" },
    98: { Male: "Geirmodr", Female: "Unnr" },
    99: { Male: "Geirmundr", Female: "Véfrídr" },
    100: { Male: "Geirr", Female: "Végerdr" },
    101: { Male: "Geirradr" },
    102: { Male: "Geirulfr" },
    103: { Male: "Geirvidr" },
    104: { Male: "Geitir" },
    105: { Male: "Gísl" },
    106: { Male: "Gísmundr" },
    107: { Male: "Grímkell" },
    108: { Male: "Grímr" },
    109: { Male: "Gunnr" },
    110: { Male: "Gunnbjörn" },
    111: { Male: "Gunnhvatr" },
    112: { Male: "Gunnkell" },
    113: { Male: "Gunnleifr" },
    114: { Male: "Gunnmundr" },
    115: { Male: "Gunnúlfr" },
    116: { Male: "Gunnsteinn" },
    117: { Male: "Gunnvaldr" },
    118: { Male: "Gunnvidr" },
    119: { Male: "Hafr" },
    120: { Male: "Hafrsteinn" },
    121: { Male: "Hafthórr" },
    122: { Male: "Haki" },
    123: { Male: "Hákon" },
    124: { Male: "Hallbjörn" },
    125: { Male: "Hallgeirr" },
    126: { Male: "Hallgrímr" },
    127: { Male: "Hallkell" },
    128: { Male: "Hallmundr" },
    129: { Male: "Hallr" },
    130: { Male: "Hallsteinn" },
    131: { Male: "Hallthórr" },
    132: { Male: "Hallvardr" },
    133: { Male: "Hardgeirr" },
    134: { Male: "Hardgrípr" },
    135: { Male: "Hardsteinn" },
    136: { Male: "Haukr" },
    137: { Male: "Helgi" },
    138: { Male: "Hemingr" },
    139: { Male: "Herbjörn" },
    140: { Male: "Hergeirr" },
    141: { Male: "Hergrímr" },
    142: { Male: "Herleifr" },
    143: { Male: "Hermundr" },
    144: { Male: "Hersteinn" },
    145: { Male: "Hildulfr" },
    146: { Male: "Hjálmarr" },
    147: { Male: "Hjálmr" },
    148: { Male: "Hlífsteinn" },
    149: { Male: "Hólmbjörn" },
    150: { Male: "Hólmfastr" },
    151: { Male: "Hólmgeirr" },
    152: { Male: "Hólmkell" },
    153: { Male: "Hólmsteinn" },
    154: { Male: "Hrafn" },
    155: { Male: "Hróaldr" },
    156: { Male: "Hródbjörn" },
    157: { Male: "Hródgeirr" },
    158: { Male: "Hródgísl" },
    159: { Male: "Hródmundr" },
    160: { Male: "Hródsteinn" },
    161: { Male: "Hródulfr" },
    162: { Male: "Hródvaldr" },
    163: { Male: "Hrólfr" },
    164: { Male: "Hrútr" },
    165: { Male: "Ígulbjörn" },
    166: { Male: "Ígulfastr" },
    167: { Male: "Ígull" },
    168: { Male: "Ingi" },
    169: { Male: "Ingibjörn" },
    170: { Male: "Ingifastr" },
    171: { Male: "Ingigeirr" },
    172: { Male: "Ingimárr" },
    173: { Male: "Ingimundr" },
    174: { Male: "Ingivaldr" },
    175: { Male: "Ingiúlfr" },
    176: { Male: "Ívarr" },
    177: { Male: "Jóarr" },
    178: { Male: "Jöfurbjörn" },
    179: { Male: "Jöfurr" },
    180: { Male: "Jöfursteinn" },
    181: { Male: "Jórkell" },
    182: { Male: "Jórulfr" },
    183: { Male: "Kári" },
    184: { Male: "Kárr" },
    185: { Male: "Ketilbjörn" },
    186: { Male: "Ketilfastr" },
    187: { Male: "Ketill" },
    188: { Male: "Ketilmundr" },
    189: { Male: "Knútr" },
    190: { Male: "Kolbjörn" },
    191: { Male: "Kolbrandr" },
    192: { Male: "Kolgrímr" },
    193: { Male: "Kvígbjörn" },
    194: { Male: "Kvígulfr" },
    195: { Male: "Leifr" },
    196: { Male: "Líknbjörn" },
    197: { Male: "Líknmundr" },
    198: { Male: "Lodinn" },
    199: { Male: "Lodmundr" },
    200: { Male: "Máni" },
    201: { Male: "Nefbjörn" },
    202: { Male: "Nefgeirr" },
    203: { Male: "Oddbjörn" },
    204: { Male: "Oddgeirr" },
    205: { Male: "Oddi" },
    206: { Male: "Oddkell" },
    207: { Male: "Oddleifr" },
    208: { Male: "Oddr" },
    209: { Male: "Oddulfr" },
    210: { Male: "Óleifr" },
    211: { Male: "Ormgeirr" },
    212: { Male: "Ormr" },
    213: { Male: "Ormulfr" },
    214: { Male: "Orri" },
    215: { Male: "Rádúlfr" },
    216: { Male: "Rádvaldr" },
    217: { Male: "Ragnarr" },
    218: { Male: "Ragnbjörn" },
    219: { Male: "Ragnfastr" },
    220: { Male: "Ragnvadr" },
    221: { Male: "Raudbjörn" },
    222: { Male: "Raudr" },
    223: { Male: "Raudulfr" },
    224: { Male: "Refr" },
    225: { Male: "Reidr" },
    226: { Male: "Ríkulfr" },
    227: { Male: "Rúni" },
    228: { Male: "Sæbjörn" },
    229: { Male: "Sægeirr" },
    230: { Male: "Sægrímr" },
    231: { Male: "Sæleifr" },
    232: { Male: "Sæmundr" },
    233: { Male: "Sæthórr" },
    234: { Male: "Sigbjörn" },
    235: { Male: "Sigfastr" },
    236: { Male: "Siggeirr" },
    237: { Male: "Sigmundr" },
    238: { Male: "Sigulfr" },
    239: { Male: "Sigsteinn" },
    240: { Male: "Sigtryggr" },
    241: { Male: "Sigurdr" },
    242: { Male: "Snæbjörn" },
    243: { Male: "Snæulfr" },
    244: { Male: "Snorri" },
    245: { Male: "Sölvi" },
    246: { Male: "Steinbjörn" },
    247: { Male: "Steinfastr" },
    248: { Male: "Steingísl" },
    249: { Male: "Steingrímr" },
    250: { Male: "Steinkell" },
    251: { Male: "Steinn" },
    252: { Male: "Steinulfr" },
    253: { Male: "Stigr" },
    254: { Male: "Styrbjörn" },
    255: { Male: "Styrfastr" },
    256: { Male: "Styrr" },
    257: { Male: "Sunnulfr" },
    258: { Male: "Sunnvidr" },
    259: { Male: "Sveinbjörn" },
    260: { Male: "Sveingeirr" },
    261: { Male: "Sveinn" },
    262: { Male: "Thjódgeirr" },
    263: { Male: "Thjódmarr" },
    264: { Male: "Thjódulfr" },
    265: { Male: "Úlfgeirr" },
    266: { Male: "Úlfkell" },
    267: { Male: "Úlfr" },
    268: { Male: "Úlfvaldr" },
    269: { Male: "Ullákr" },
    270: { Male: "Ullalfr" },
    271: { Male: "Ullbjörn" },
    272: { Male: "Ullbrandr" },
    273: { Male: "Ulldr" },
    274: { Male: "Ulleifr" },
    275: { Male: "Ullfastr" },
    276: { Male: "Ullfredr" },
    277: { Male: "Ullgeirr" },
    278: { Male: "Ullgísl" },
    279: { Male: "Ullgnýr" },
    280: { Male: "Ullgrímr" },
    281: { Male: "Ullhallr" },
    282: { Male: "Ullir" },
    283: { Male: "Ullkell" },
    284: { Male: "Ullmodr" },
    285: { Male: "Ullmundr" },
    286: { Male: "Ulloddr" },
    287: { Male: "Ullormr" },
    288: { Male: "Ullsteinn" },
    289: { Male: "Ullulfr" },
    290: { Male: "Ullvaldr" },
    291: { Male: "Vedr" },
    292: { Male: "Vidbjörn" },
    293: { Male: "Vidfastr" },
    294: { Male: "Vígbjörn" },
    295: { Male: "Vígfastr" },
    296: { Male: "Vígleikr" },
    297: { Male: "Vígmadr" },
    298: { Male: "Vígmundr" },
    299: { Male: "Vígulfr" },
    300: { Male: "Vilhjálmr" },
}
var vikingModifiers = {
    "björn": "biarnar",
    "dr": "ar",
    "i": "a",
    "ir": "is",
    "ll": "ls",
    "nn": "ns",
    "rr": "rs",
    "r": "s",
}
// Name functions
function getMatronym(nameModifiers, name) {
    nameEndings = Object.keys(nameModifiers)
    for (let i = 0; i < nameEndings.length; i++) {
        if (name.endsWith(nameEndings[i])) {
            console.log(nameEndings[i])
            name = name.replace(new RegExp(nameEndings[i]+'$'), nameModifiers[nameEndings[i]])
            break
        }
    }
    return name
}
function getPatronym(nameModifiers, name) {
    return getMatronym(nameModifiers, name)
}
function getAmazonianName(gender) {
    let name = ""
    let context = "Amazon society uses the name of the mother as a matronymic, modifying it with –doros (“gift of”). The mother’s name is modified in the matronym based on its ending."

    name += amazonianNames[rollDice(1, 100)][gender]
    // Determine matronym
    matronym = getMatronym(amazonianModifiers, amazonianNames[rollDice(1, 100)]["Female"])
    name += " " + matronym
    return [name, context]
}
function getAtlanteanName(gender) {
    let name = ""
    let context = "Rather than use the normal Hellenic patronymics and matronymics, Atlanteans use the names of their clans, all based on ancient sea gods, as their surnames."
    let clanName = atlanteanClanNames[rollDice(1, 12)]

    if (gender == "Male") {
        name = atlanteanNames[rollDice(1, 80)]["Male"]
    } else {
        name = atlanteanNames[rollDice(1, 40)]["Female"]
    }
    name += " " + clanName
    return [name, context]
}
function getCommonName(gender) {
    let name = ""
    let context = "In some locations, such as Khromarium, the cultural melting pot has been so extensive for such a long period of time that common names have developed into their own forms, and bear little resemblance to the cultures that contributed to them"
    // Generating 2 names, personal and family
    for (let i = 0; i < 2; i++) {
        // Determine how many elements
        d10Result = rollDice(1, 10)
        numOfElements = d10Result <= 5 ? 1 : 2;
        for (let j = 0; j < numOfElements; j++) {
            name += commonNameElements[rollDice(1, 100)]
        }
        // if end of first name, space
        if (i == 0 && gender == "Female") {
            d3Result = rollDice(1, 3)
            if (d3Result == 1) {
                name += "a"
            } else if (d3Result == 2) {
                name += "esta"
            } else if (d3Result == 3) {
                name += "ia"
            }
        } else if (i == 1) {
            d6Result = rollDice(1, 6)
            if (d6Result == 1) {
                name += "os"
            } else if (d6Result == 2) {
                name += "tos"
            } else if (d6Result == 3) {
                name += "tose"
            }
        }
        if (i == 0) {
            name += " "
        }
    }
    return [lowerCaseAllWordsExceptFirstLetters(name), context]
}
function getEsquimauxName() {
    let name = esquimauxNames[rollDice(1, 100)]
    let context = "Esquimaux names are genderless, reflecting their original cult belief as all being equally unworthy in the eyes of Kthulhu."
    return [name, context]
}
function getHyperboreanName(gender) {
    let name = ""
    let context = "Hyperborean personal names follow a strict pattern of Element-vowel-Element, with the connecting vowels being restricted to a, i, o, and u. Female names are differentiated solely by adding the prefix Sha- to the start of the name, meaning 'Female'"
    // First name Element-vowel-Element
    if (gender == "Female") {
        name += "Sha"
    }
    name += hyperboreanElements[rollDice(1, 60)]
    d4Result = rollDice(1, 4)
    if (d4Result == 1) {
        name += "a"
    } else if (d4Result == 2) {
        name += "i"
    } else if (d4Result == 3) {
        name += "o"
    } else if (d4Result == 4) {
        name += "u"
    }
    name += hyperboreanElements[rollDice(1, 60)]
    // Add family name
    name += " " + hyperboreanFamilyNames[rollDice(1, 16)]
    return [lowerCaseAllWordsExceptFirstLetters(name), context]
}
function getIxianName(gender) {
    let name = ""
    let context = "Ixian girls and women follow their personal name with a patronymic based on the name of their father (if unmarried, thugatêr_x) or husband (if married, gunê_x). They do not use their father’s or husband’s patronymic as part of their name. Male Ixians simply use their father’s unmodified name as a patronymic. This name does not change upon marriage"

    if (gender == "Female") {
        name += ixianFemaleNames[rollDice(1, 10)] + " "
        d2Result = rollDice(1, 2)
        if (d2Result == 1) {
            name += "gunê"
        } else {
            name += "thugatêr"
        }
    }
    name += ixianMaleNames[rollDice(1, 300)]
    if (gender == "Male") {
        name += " " + ixianMaleNames[rollDice(1, 300)]
    }
    return [name, context]
}
function getKelticName(gender) {
    let name = ""
    let context = "Kelts use their father’s or grandfather’s name as a patronymic, preceeding it with Macc (son) or Inghean (daughter) depending on gender."

    if (gender == "Female") {
        name += kelticFemaleNames[rollDice(1, 100)]
        name += " Inghean "
    } else {
        name += kelticMaleNames[rollDice(1, 100)]
        name += " Macc "
    }
    name += kelticMaleNames[rollDice(1, 100)]
    return [name, context]
}
function getKimmerianName(gender) {
    let name = ""
    let context = "The Kimmerians of the steppes came to use the Hellenic tongue as their own over time, and with it the use of Hellenic names in place of those traditional to their people. Believing that people stand on their own merits, they do not use patronymics or matronymics, but do use appropriate epithets as marks of distinction"
    if (gender == "Female") {
        name = kimmerianNames[rollDice(1, 40)][gender]
    } else {
        name = kimmerianNames[rollDice(1, 80)][gender]
    }
    return [name, context]
}
function getKrimmeanName(gender) {
    let name = ""
    let context = "The subterranean Kimmerians still use their ancestral names, though by the time the Scythian ancestors of the Ixians had driven them into the Caucasus Mountains, Hellenic elements had already entered their tongue. Like the Hellenic-named steppe Kimmerians, they use epithets instead of patronymics"

    if (gender == "Female") {
        name = krimmeanNames[rollDice(1, 8)]["Female"]
    } else {
        name = krimmeanNames[rollDice(1, 36)]["Male"]
    }
    return [name, context]
}
function getPictishName(gender) {
    let name = ""
    let context = "Although Pictish inheritance is traced through the mother’s line, Pictish men traditionally use a patronymic based on their oldest uncle. Female Picts do not use a patronymic"

    if (gender == "Female") {
        name = pictishNames[rollDice(1, 8)]["Female"]
    } else {
        name += pictishNames[rollDice(1, 60)]["Male"]
        name += " nepos "
        // Determine patronym
        patronym = getPatronym(pictishModifiers, pictishNames[rollDice(1, 60)]["Male"])
        name += patronym
    }
    return [name, context]
}
function getHalfBloodPictishName() {
    let name = ""
    let context = "Half-Blood Picts use only two different surnames, those of their two moieties: G̱ooch (Wolf) and Yéil (Raven). These matrilineal groups require that marriages must be between opposite moieties, though in most villages both moieties are common. Both are equally represented, so a given Half-Blood has a 50/50 chance of belonging to either moiety."

    name += halfbloodPictNames[rollDice(1, 40)]
    d2Result = rollDice(1, 2)

    if (d2Result == 1) {
        name += " G̱ooch"
    } else {
        name += " Yéil"
    }
    return [name, context]
}
function getVikingName(gender) {
    let name = ""
    let context = "Both male and female vikings use a patronymic based on their father’s name, adding –son (son) or –dóttir (daughter) respectively. The father’s name is modified slightly, however, depending on its ending. Note that all Viking personal names that begin with “Ull” (honoring Ullr) should be replaced with “Thor” when creating an outcast Viking from the Isles of Thur; e.g., Ullunn would become Thorunn, Ullormr would become Thorormr."

    if (gender == "Female") {
        name = vikingNames[rollDice(1,100)]["Female"] + " " + getPatronym(vikingModifiers, vikingNames[rollDice(1,300)]["Male"]) + "dóttir"
    } else {
        name = vikingNames[rollDice(1,300)]["Male"] + " " + getPatronym(vikingModifiers, vikingNames[rollDice(1,300)]["Male"]) + "son"
    }
    return [name, context]
}
// Click handling
// Gender dropdown
$(document).on("click", "#dropdownMenuButtonGender > ul > li > a", function () {
    gender = $(this).text()
    $("#dropdownMenuButtonGender > button").text($(this).text());
});
// Race dropdown
$(document).on("click", "#dropdownMenuButtonRace > ul > li > a", function () {
    race = $(this).text()
    $("#dropdownMenuButtonRace > button").text($(this).text());
});
// button Generate
$(document).on("click", "#generateNameButton", function () {
    // warning
    if (gender == "" || race == "") {
        $(".alert").show()
    } else {
        $(".alert").hide()
        let name = ""
        if (race == "Amazonian") {
            name = getAmazonianName(gender)
        } else if (race == "Atlantean") {
            name = getAtlanteanName(gender)
        } else if (race == "Common") {
            name = getCommonName(gender)
        } else if (race == "Esquimaux") {
            name = getEsquimauxName()
        } else if (race == "Hyperborean") {
            name = getHyperboreanName(gender)
        } else if (race == "Ixian") {
            name = getIxianName(gender)
        } else if (race == "Kelt") {
            name = getKelticName(gender)
        } else if (race == "Kimmerian") {
            name = getKimmerianName(gender)
        } else if (race == "Kimmerian (Kimmeri-Kelt)") {
            name = getKelticName(gender)
            name[1] = "The majority of Kimmeri-Kelt tribes have long adopted Keltic names, as their traditional tongue fell into disuse everywhere save in the subterranean realm of Krimmea. A few tribes, however, use Hellenic names much as the steppe-dwelling Kimmerian tribes."
        } else if (race == "Kimmerian (Krimmean)") {
            name = getKrimmeanName(gender)
        } else if (race == "Pictish") {
            name = getPictishName(gender)
        } else if (race == "Pictish (Half-Blood)") {
            name = getHalfBloodPictishName()
        } else if (race == "Viking") {
            name = getVikingName(gender)
        }
        $("#nameResult").text("Name: " + name[0])
        $("#nameContext").text("Context: " + name[1])
        $("#hideNameResult").show()
        scrollTo("#hideNameResult")
    }
});
// Click button Reset
$(document).on("click", "#resetNameButton", function () {
    resetForm()
});