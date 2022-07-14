// DICE 
function rollDice(n, sides) {
    var a = Array(n);
    for (var i = 0; i < n; i++)
        a[i] = Math.floor(Math.random() * sides) + 1;
    return a.reduce((a, b) => a + b, 0)
}

// HYPERBOREA WEATHER GENERATOR
// Input vars
var year = 0
var latitudinalRange = ""
var terrainType = ""
var anomalousRegion = ""
function resetForm() {
    year = 0
    latitudinalRange = ""
    terrainType = ""
    anomalousRegion = ""

    $("#dropdownMenuButtonYear > button").text("Year");
    $("#dropdownMenuButtonLatitude > button").text("Latitudinal range");
    $("#dropdownMenuButtonTerrain > button").text("Terrain type");
    $("#dropdownMenuButtonAnomalous > button").text("Anomalous region");
    $("#hideEffects").hide()
}
// Weather objects 
var baseTemperature = {
    1: { "Interior Mainland (~72°N)": -35, "Coastal Mainland (~54°N)": -10, "River Okeanos (~36°N)": 30, "Rim of the World (~18°N)": 60 },
    2: { "Interior Mainland (~72°N)": -25, "Coastal Mainland (~54°N)": -5, "River Okeanos (~36°N)": 40, "Rim of the World (~18°N)": 65 },
    3: { "Interior Mainland (~72°N)": -15, "Coastal Mainland (~54°N)": 0, "River Okeanos (~36°N)": 45, "Rim of the World (~18°N)": 70 },
    4: { "Interior Mainland (~72°N)": -10, "Coastal Mainland (~54°N)": 10, "River Okeanos (~36°N)": 50, "Rim of the World (~18°N)": 70 },
    5: { "Interior Mainland (~72°N)": 0, "Coastal Mainland (~54°N)": 20, "River Okeanos (~36°N)": 55, "Rim of the World (~18°N)": 75 },
    6: { "Interior Mainland (~72°N)": 5, "Coastal Mainland (~54°N)": 30, "River Okeanos (~36°N)": 60, "Rim of the World (~18°N)": 75 },
    7: { "Interior Mainland (~72°N)": 0, "Coastal Mainland (~54°N)": 25, "River Okeanos (~36°N)": 60, "Rim of the World (~18°N)": 75 },
    8: { "Interior Mainland (~72°N)": -5, "Coastal Mainland (~54°N)": 15, "River Okeanos (~36°N)": 55, "Rim of the World (~18°N)": 70 },
    9: { "Interior Mainland (~72°N)": -15, "Coastal Mainland (~54°N)": 5, "River Okeanos (~36°N)": 45, "Rim of the World (~18°N)": 70 },
    10: { "Interior Mainland (~72°N)": -25, "Coastal Mainland (~54°N)": 0, "River Okeanos (~36°N)": 40, "Rim of the World (~18°N)": 65 },
    11: { "Interior Mainland (~72°N)": -35, "Coastal Mainland (~54°N)": -5, "River Okeanos (~36°N)": 35, "Rim of the World (~18°N)": 60 },
    12: { "Interior Mainland (~72°N)": -40, "Coastal Mainland (~54°N)": -10, "River Okeanos (~36°N)": 30, "Rim of the World (~18°N)": 60 },
    13: { "Interior Mainland (~72°N)": -45, "Coastal Mainland (~54°N)": -15, "River Okeanos (~36°N)": 25, "Rim of the World (~18°N)": 55 },
}
var terrainModifiers = {
    "Desert (Sandy)": { "Temperature Modifier": 0, "Conditions Modifier": -25, "Wind Force Modifier": 2 },
    "Desert (Steppe)": { "Temperature Modifier": 0, "Conditions Modifier": -15, "Wind Force Modifier": 1 },
    "Forest": { "Temperature Modifier": 0, "Conditions Modifier": 0, "Wind Force Modifier": 0 },
    "Hills": { "Temperature Modifier": -5, "Conditions Modifier": 0, "Wind Force Modifier": 1 },
    "Hills, Glaciated": { "Temperature Modifier": -10, "Conditions Modifier": 0, "Wind Force Modifier": 1 },
    "Mountains": { "Temperature Modifier": -10, "Conditions Modifier": 0, "Wind Force Modifier": 2 },
    "Mountains, Glaciated": { "Temperature Modifier": -20, "Conditions Modifier": 0, "Wind Force Modifier": 2 },
    "Plains": { "Temperature Modifier": 0, "Conditions Modifier": 5, "Wind Force Modifier": 0 },
    "Plains, Coastal": { "Temperature Modifier": 0, "Conditions Modifier": 5, "Wind Force Modifier": 2 },
    "Plateau / Ridge": { "Temperature Modifier": 0, "Conditions Modifier": 0, "Wind Force Modifier": 1 },
    "Rainforest": { "Temperature Modifier": 10, "Conditions Modifier": 15, "Wind Force Modifier": 0 },
    "Tar Pits / Wetlands": { "Temperature Modifier": 0, "Conditions Modifier": 5, "Wind Force Modifier": 0 },
    "Tundra": { "Temperature Modifier": 0, "Conditions Modifier": -20, "Wind Force Modifier": 1 },
    "Volcanic": { "Temperature Modifier": 0, "Conditions Modifier": 0, "Wind Force Modifier": 2 },
    "Volcanic, Glaciated": { "Temperature Modifier": -10, "Conditions Modifier": 0, "Wind Force Modifier": 2 },
    "Water": { "Temperature Modifier": 10, "Conditions Modifier": 5, "Wind Force Modifier": 0 },
}
var anomalousRegionalModifiers = {
    "Abbicca's Mere": { "Temperature Modifier": 10, "Conditions Modifier": 15, "Wind Force Modifier": 0 },
    "IX": { "Temperature Modifier": -15, "Conditions Modifier": 0, "Wind Force Modifier": 0 },
    "Sharath": { "Temperature Modifier": -30, "Conditions Modifier": 0, "Wind Force Modifier": 1 },
    "Valley of Mists": { "Temperature Modifier": -10, "Conditions Modifier": 15, "Wind Force Modifier": 1 },
}
var windChill = {
    "50": { "Becalmed": 50, "Light Breeze": 45, "Moderate Breeze": 45, "Strong Breeze": 45, "Gale": 40, "Strong Gale": 40, "Storm": 40, "Hurricane": 35 },
    "45": { "Becalmed": 45, "Light Breeze": 40, "Moderate Breeze": 40, "Strong Breeze": 35, "Gale": 35, "Strong Gale": 30, "Storm": 30, "Hurricane": 30 },
    "40": { "Becalmed": 40, "Light Breeze": 35, "Moderate Breeze": 30, "Strong Breeze": 30, "Gale": 25, "Strong Gale": 25, "Storm": 25, "Hurricane": 20 },
    "35": { "Becalmed": 35, "Light Breeze": 30, "Moderate Breeze": 25, "Strong Breeze": 20, "Gale": 20, "Strong Gale": 20, "Storm": 15, "Hurricane": 15 },
    "30": { "Becalmed": 30, "Light Breeze": 25, "Moderate Breeze": 20, "Strong Breeze": 15, "Gale": 15, "Strong Gale": 10, "Storm": 10, "Hurricane": 5 },
    "25": { "Becalmed": 25, "Light Breeze": 15, "Moderate Breeze": 10, "Strong Breeze": 10, "Gale": 5, "Strong Gale": 5, "Storm": 0, "Hurricane": 0 },
    "20": { "Becalmed": 20, "Light Breeze": 10, "Moderate Breeze": 5, "Strong Breeze": 0, "Gale": 0, "Strong Gale": -5, "Storm": -5, "Hurricane": -10 },
    "15": { "Becalmed": 15, "Light Breeze": 5, "Moderate Breeze": 0, "Strong Breeze": -5, "Gale": -10, "Strong Gale": -10, "Storm": -15, "Hurricane": -15 },
    "10": { "Becalmed": 10, "Light Breeze": 0, "Moderate Breeze": -10, "Strong Breeze": -10, "Gale": -15, "Strong Gale": -20, "Storm": -20, "Hurricane": -25 },
    "5": { "Becalmed": 5, "Light Breeze": -10, "Moderate Breeze": -15, "Strong Breeze": -20, "Gale": -20, "Strong Gale": -25, "Storm": -25, "Hurricane": -30 },
    "0": { "Becalmed": 0, "Light Breeze": -15, "Moderate Breeze": -20, "Strong Breeze": -25, "Gale": -30, "Strong Gale": -30, "Storm": -35, "Hurricane": -40 },
    "-5": { "Becalmed": -5, "Light Breeze": -20, "Moderate Breeze": -25, "Strong Breeze": -30, "Gale": -35, "Strong Gale": -40, "Storm": -40, "Hurricane": -45 },
    "-10": { "Becalmed": -10, "Light Breeze": -25, "Moderate Breeze": -35, "Strong Breeze": -40, "Gale": -40, "Strong Gale": -45, "Storm": -50, "Hurricane": -55 },
    "-15": { "Becalmed": -15, "Light Breeze": -30, "Moderate Breeze": -40, "Strong Breeze": -45, "Gale": -50, "Strong Gale": -55, "Storm": -55, "Hurricane": -60 },
    "-20": { "Becalmed": -20, "Light Breeze": -40, "Moderate Breeze": -45, "Strong Breeze": -50, "Gale": -55, "Strong Gale": -60, "Storm": -65, "Hurricane": -70 },
    "-25": { "Becalmed": -25, "Light Breeze": -45, "Moderate Breeze": -55, "Strong Breeze": -60, "Gale": -65, "Strong Gale": -70, "Storm": -70, "Hurricane": -80 },
    "-30": { "Becalmed": -30, "Light Breeze": -50, "Moderate Breeze": -60, "Strong Breeze": -65, "Gale": -70, "Strong Gale": -75, "Storm": -80, "Hurricane": -85 },
    "-35": { "Becalmed": -35, "Light Breeze": -55, "Moderate Breeze": -65, "Strong Breeze": -70, "Gale": -75, "Strong Gale": -80, "Storm": -85, "Hurricane": -95 },
    "-40": { "Becalmed": -40, "Light Breeze": -60, "Moderate Breeze": -70, "Strong Breeze": -80, "Gale": -85, "Strong Gale": -90, "Storm": -95, "Hurricane": -100 },
    "-45": { "Becalmed": -45, "Light Breeze": -70, "Moderate Breeze": -80, "Strong Breeze": -85, "Gale": -90, "Strong Gale": -95, "Storm": -100, "Hurricane": -110 },
    "-50": { "Becalmed": -50, "Light Breeze": -75, "Moderate Breeze": 85, "Strong Breeze": -90, "Gale": -100, "Strong Gale": -105, "Storm": -110, "Hurricane": -115 },
    "-55": { "Becalmed": -55, "Light Breeze": -80, "Moderate Breeze": -90, "Strong Breeze": -100, "Gale": -105, "Strong Gale": -110, "Storm": -115, "Hurricane": -125 },
    "-60": { "Becalmed": -60, "Light Breeze": -85, "Moderate Breeze": -100, "Strong Breeze": -105, "Gale": -110, "Strong Gale": -120, "Storm": -120, "Hurricane": -130 },
    "-65": { "Becalmed": -65, "Light Breeze": -90, "Moderate Breeze": -105, "Strong Breeze": -110, "Gale": -120, "Strong Gale": -125, "Storm": -130, "Hurricane": -140 },
    "-70": { "Becalmed": -70, "Light Breeze": -100, "Moderate Breeze": -110, "Strong Breeze": -120, "Gale": -125, "Strong Gale": -130, "Storm": -135, "Hurricane": -145 },
    "-75": { "Becalmed": -75, "Light Breeze": -105, "Moderate Breeze": -120, "Strong Breeze": -125, "Gale": -135, "Strong Gale": -140, "Storm": -145, "Hurricane": -155 },
}
var seasonalModifier = {
    1: { "Conditions Modifier": 0, "Wind Force Modifier": 2 },
    2: { "Conditions Modifier": 5, "Wind Force Modifier": 1 },
    3: { "Conditions Modifier": 5, "Wind Force Modifier": 1 },
    4: { "Conditions Modifier": 10, "Wind Force Modifier": 2 },
    5: { "Conditions Modifier": 10, "Wind Force Modifier": 1 },
    6: { "Conditions Modifier": 5, "Wind Force Modifier": 1 },
    7: { "Conditions Modifier": 0, "Wind Force Modifier": 0 },
    8: { "Conditions Modifier": -5, "Wind Force Modifier": 0 },
    9: { "Conditions Modifier": -5, "Wind Force Modifier": 0 },
    10: { "Conditions Modifier": -5, "Wind Force Modifier": 0 },
    11: { "Conditions Modifier": -5, "Wind Force Modifier": 1 },
    12: { "Conditions Modifier": 0, "Wind Force Modifier": 2 },
    13: { "Conditions Modifier": 0, "Wind Force Modifier": 2 },
}
// Weather functions
function getTemperature() {
    let baseTemp = 0
    let temperature = 0
    let effects = ""
    // Determine base temperature
    if (latitudinalRange == "Interior Mainland (~72°N)") {
        diceResult = rollDice(2, 4) * 5
        baseTemp = diceResult + baseTemperature[year][latitudinalRange]
    } else if (latitudinalRange == "Coastal Mainland (~54°N)") {
        diceResult = rollDice(2, 4) * 5
        baseTemp = diceResult + baseTemperature[year][latitudinalRange]
    } else if (latitudinalRange == "River Okeanos (~36°N)") {
        diceResult = rollDice(1, 4) * 5
        baseTemp = diceResult + baseTemperature[year][latitudinalRange]
    } else if (latitudinalRange == "Rim of the World (~18°N)") {
        diceResult = rollDice(1, 4) * 5
        baseTemp = diceResult + baseTemperature[year][latitudinalRange]
    }
    temperature = baseTemp
    // Terrain modifier
    if (terrainType != '') {
        if (terrainType == "Water" && baseTemp <= 40) {
            temperature = temperature + terrainModifiers["Water"]["Temperature Modifier"] + 10
        } else if (terrainType == "Water" && baseTemp >= 60) {
            temperature = temperature + terrainModifiers["Water"]["Temperature Modifier"] - 10
        } else {
            temperature = temperature + terrainModifiers[terrainType]["Temperature Modifier"]
        }
    }
    // Anomalous regions modifier
    if (anomalousRegion != '') {
        temperature = temperature + anomalousRegionalModifiers[anomalousRegion]["Temperature Modifier"]
    }
    // Temperature effects
    if (temperature == 0) {
        effects = "Exposed creatures must make once per hour tests of constitution. (d4 damage, or assign a damage number)"
    } else if (temperature == -20) {
        effects = "Exposed creatures must make once per half hour tests of constitution. (d4 damage, or assign a damage number)"
    } else if (temperature == -40) {
        effects = "Exposed creatures must make once per turn tests of constitution. (d4 damage, or assign a damage number)"
    } else if (temperature == -60) {
        effects = "Exposed creatures must make once per five minutes tests of constitution. (d4 damage, or assign a damage number)"
    } else if (temperature == -80) {
        effects = "Exposed creatures must make once per minute tests of constitution. (d4 damage, or assign a damage number)"
    } else if (temperature == -100) {
        effects = "Exposed creatures must make once per round tests of constitution. (d4 damage, or assign a damage number)"
    } else if (temperature >= 100) {
        effects = "Active PCs must make once per hour tests of constitution. (Armored PC penalty chance-in-six=DR; Failure=stunned from heatstroke;  "
    } else {
        effects = "-"
    }
    return [baseTemp, temperature, effects]
}
function getConditions(baseTemp) {
    let conditions = ""
    let effects = ""
    let d100Result = rollDice(1, 100)

    // Seasonal modifier
    d100Result = d100Result + seasonalModifier[year]["Conditions Modifier"]
    // Terrain type modifier
    if (terrainType != '') {
        d100Result = d100Result + terrainModifiers[terrainType]["Conditions Modifier"]
    }
    // Anomalous regions modifier
    if (anomalousRegion != '') {
        d100Result = d100Result + anomalousRegionalModifiers[anomalousRegion]["Conditions Modifier"]
    }

    if (d100Result <= 15) {
        conditions = "Clear"
        effects = "-"
    } else if (d100Result >= 16 && d100Result <= 30) {
        conditions = "Partly cloudy"
        effects = "-"
    } else if (d100Result >= 31 && d100Result <= 47) {
        conditions = "Cloudy"
        effects = "-"
    } else if (d100Result >= 48 && d100Result <= 49) {
        conditions = "Severe heat"
        effects = "Add 20°F and reroll."
    } else if (d100Result == 50) {
        extremeWeather = getExtremeWeather()
        conditions = extremeWeather[0]
        effects = extremeWeather[1]
    } else if (d100Result >= 51 && d100Result <= 52) {
        conditions = "Severe cold"
        effects = "Subtract 20°F and reroll."
    } else if (d100Result >= 53 && d100Result <= 70) {
        conditions = "Fog"
        effects = "Visibility reduced to 20 feet."
    } else if (d100Result >= 71) {
        precipitation = getPrecipitation(baseTemp)
        conditions = precipitation[0]
        effects = precipitation[1]
    }
    return [conditions, effects]
}
function getExtremeWeather() {
    let conditions = ""
    let effects = ""
    d100Result = rollDice(1, 100)

    if (d100Result >= 1 && d100Result <= 25) {
        conditions = "Extreme Weather: Hail"
        effects = "Reroll on Table B-2 at +20 (page 568). Hail falls at random time of day for 1d10 turns. Exposed creatures sustain 1d3−1 hp damage per turn; DR from armour applies."
    } else if (d100Result >= 26 && d100Result <= 35) {
        conditions = "Extreme Weather: Hurricane"
        effects = "20% chance per turn of 3d4 hp damage (avoidance save negates); 45% chance of damage to structures."
    } else if (d100Result >= 36 && d100Result <= 80) {
        conditions = "Extreme Weather: Thunderstorm"
        effects = "Reroll on Table B-2 at +20. Thunder and lightning occur for 1d4 hours. On a 1% chance per turn, lightning strikes nearby. If so, chance to be struck is 10% minus base AC (e.g., 1% if unarmoured, 7% in plate mail). Bolt causes 6d8 hp damage (avoidance save for ½)."
    } else if (d100Result >= 81 && d100Result <= 90) {
        conditions = "Extreme Weather: Tornado"
        effects = "Reroll on Table B-2 at +30. Tornado manifests at random time of day for 1d12 minutes. See control weather for effects."
    } else if (d100Result >= 91 && d100Result <= 98) {
        conditions = "Extreme Weather: Volcano"
        effects = "Nearest volcano erupts at random time of day, preceded by 1d3 tremors at 1d10-minute intervals. Make death save or fall prone. Eruption blankets all in thick ash."
    } else if (d100Result >= 99 && d100Result <= 100) {
        conditions = "Extreme Weather: Fortean event"
        effects = "Examples include rain of acid, blood, or frogs; unnaturally coloured snow; eerie lights; ball lightning; falling meteors or spacecraft; or “frozen air” that causes asphyxia when inhaled. Referee creativity and deviousness are encouraged."
    }

    return [conditions, effects]
}
function getPrecipitation(baseTemp) {
    let conditions = ""
    let effects = ""
    if (baseTemp < 30) {
        conditions = "Precipitation: Snow"
        effects = "Visibility reduced to 20 feet. Snow collects at 1d4÷2 inches per hour for 1d12 hours. −10 MV at 4 inches; −20 MV at 12 inches."
    } else if (baseTemp >= 30 && baseTemp <= 35) {
        conditions = "Precipitation: Sleet"
        effects = "Visibility reduced to 20 feet; −10 MV."
    } else if (baseTemp > 35) {
        conditions = "Rain"
        effects = "Missile fire at −2; −10 MV."
    }
    return [conditions, effects]
}
function getWindForce() {
    let windForce = ""
    let mph = ""
    let effects = ""
    let d12Result = rollDice(1, 12)

    // Seasonal modifier
    d12Result = d12Result + seasonalModifier[year]["Wind Force Modifier"]
    // Terrain type modifier
    if (terrainType != '') {
        d12Result = d12Result + terrainModifiers[terrainType]["Wind Force Modifier"]
    }
    // Anomalous regions modifier
    if (anomalousRegion != '') {
        d12Result = d12Result + anomalousRegionalModifiers[anomalousRegion]["Wind Force Modifier"]
    }

    if (d12Result >= 1 && d12Result <= 3) {
        windForce = "Becalmed"
        mph = "0–2"
        effects = "-"
    } else if (d12Result >= 4 && d12Result <= 6) {
        windForce = "Light Breeze"
        mph = "3–12"
        effects = "-"
    } else if (d12Result >= 7 && d12Result <= 12) {
        windForce = "Moderate Breeze"
        mph = "13–21"
        effects = "-"
    } else if (d12Result >= 13 && d12Result <= 14) {
        windForce = "Strong Breeze"
        mph = "22–31"
        effects = "Missile fire at −2; flying creatures at ½ MV unless moving with wind."
    } else if (d12Result == 15) {
        windForce = "Gale"
        mph = "32–46"
        effects = "No missile fire; flying creatures grounded."
    } else if (d12Result == 16) {
        windForce = "Strong Gale"
        mph = "47–63"
        effects = "10% chance per hour of 3d4 hp damage (avoidance save negates); 5% chance of damage to structures."
    } else if (d12Result == 17) {
        windForce = "Storm"
        mph = "64–73"
        effects = "15% chance per turn of 3d4 hp damage (avoidance save negates); 25% chance of damage to structures."
    } else if (d12Result == 18) {
        windForce = "Hurricane"
        mph = "74–136"
        effects = "20% chance per turn of 3d4 hp damage (avoidance save negates); 45% chance of damage to structures."
    }
    return [windForce, mph, effects]
}
function getWindChill(baseTemp, temperature, windForce) {
    if (baseTemp >= -75 && baseTemp <= 50) {
        return windChill[baseTemp][windForce]
    } else {
        return temperature
    }
}
// Input clicks handling
// Click button Year
$(document).on("click", "#dropdownMenuButtonYear > ul > li > a", function () {
    year = parseInt($(this).text())
    $("#dropdownMenuButtonYear > button").text(year);
});
// Click button Latitude
$(document).on("click", "#dropdownMenuButtonLatitude > ul > li > a", function () {
    latitudinalRange = $(this).text()
    $("#dropdownMenuButtonLatitude > button").text(latitudinalRange);
});
// Click button Terrain type
$(document).on("click", "#dropdownMenuButtonTerrain > ul > li > a", function () {
    terrainType = $(this).text()
    $("#dropdownMenuButtonTerrain > button").text(terrainType);
});
// Click button Terrain type
$(document).on("click", "#dropdownMenuButtonAnomalous > ul > li > a", function () {
    anomalousRegion = $(this).text()
    $("#dropdownMenuButtonAnomalous > button").text(anomalousRegion);
});
// Click button Generate
$(document).on("click", "#generateButton", function () {
    // warning
    if (year == 0 || latitudinalRange == "") {
        $(".alert").show()
    } else {
        $(".alert").hide()
        temperature = getTemperature()
        $("#temperature").text(temperature[1])
        $("#temperatureEffects").text(temperature[2])
        conditions = getConditions(temperature[0])
        $("#conditions").text(conditions[0])
        $("#conditionsEffects").text(conditions[1])
        windForce = getWindForce()
        $("#windforce").text(windForce[0])
        $("#mph").text(windForce[1])
        $("#windforceEffects").text(windForce[2])
        chill = getWindChill(temperature[0], temperature[1], windForce[0])
        $("#windchill").text(chill)
        $("#hideEffects").show()
    }
});
// Click button Reset
$(document).on("click", "#resetButton", function () {
    resetForm()
});