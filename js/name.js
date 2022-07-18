// NAME GENERATOR
// Input vars
var gender = ""
var race = ""
// Lowercase function
const lowerCaseAllWordsExceptFirstLetters = string =>
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
// Name functions
function getAmazonianName(gender) {
    let name = ""
    let context = "Amazon society uses the name of the mother as a matronymic, modifying it with –doros (“gift of”). The mother’s name is modified in the matronym based on its ending."
    let nameMother = ""
    let d100Name = rollDice(1, 100)
    let d100NameMother = rollDice(1, 100)

    name += amazonianNames[d100Name][gender]
    nameMother = amazonianNames[d100NameMother]["Female"]
    // Determine matronym
    nameEndings = Object.keys(amazonianModifiers)
    for (let i = 0; i < nameEndings.length; i++) {
        if (nameMother.endsWith(nameEndings[i])) {
            nameMother = nameMother.replace(nameEndings[i], amazonianModifiers[nameEndings[i]])
        }
    }
    name += " " + nameMother
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
    let name = esquimauxNames[rollDice(1,100)]
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
    name += hyperboreanElements[rollDice(1,60)]
    d4Result = rollDice(1,4)
    if (d4Result == 1) {
        name += "a"
    } else if (d4Result == 2) {
        name += "i"
    } else if (d4Result == 3) {
        name += "o"
    } else if (d4Result == 4) {
        name += "u"
    }
    name += hyperboreanElements[rollDice(1,60)]
    // Add family name
    name += " " + hyperboreanFamilyNames[rollDice(1,16)]
    return [lowerCaseAllWordsExceptFirstLetters(name), context]
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