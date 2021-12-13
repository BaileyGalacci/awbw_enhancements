const kCountries = [
    {turnOrder: 0,  code: "??", flatName: "neutral",         name: "Neutral"},
    {turnOrder: 1,  code: "os", flatName: "orangestar",      name: "Orange Star"},
    {turnOrder: 2,  code: "bm", flatName: "bluemoon",        name: "Blue Moon"},
    {turnOrder: 3,  code: "ge", flatName: "greenearth",      name: "Green Earth"},
    {turnOrder: 4,  code: "yc", flatName: "yellowcomet",     name: "Yellow Comet"},
    {turnOrder: 5,  code: "bh", flatName: "blackhole",       name: "Black Hole"},
    {turnOrder: 6,  code: "rf", flatName: "redfire",         name: "Red Fire"},
    {turnOrder: 7,  code: "gs", flatName: "greysky",         name: "Grey Sky"},
    {turnOrder: 8,  code: "bd", flatName: "browndesert",     name: "Brown Desert"},
    {turnOrder: 9,  code: "ab", flatName: "amberblaze",      name: "Amber Blaze"},
    {turnOrder: 10, code: "js", flatName: "jadesun",         name: "Jade Sun"},
    {turnOrder: 11, code: "ci", flatName: "cobaltice",       name: "Cobolt Ice"},
    {turnOrder: 12, code: "pc", flatName: "pinkcosmos",      name: "Pink Cosmos"},
    {turnOrder: 13, code: "tg", flatName: "tealgalaxy",      name: "Teal Galaxy"},
    {turnOrder: 14, code: "pl", flatName: "purplelightning", name: "Purple Lightning"},
    {turnOrder: 15, code: "ar", flatName: "acidrain",        name: "Acid Rain"},
    {turnOrder: 16, code: "wn", flatName: "whitenova",       name: "White Nova"},
];
const kCountriesByCode = toDict(kCountries, (country) => country.code);

// Fields:
// - `name` is the name used in image filenames
// - `menuName`  is the name used in the build menu
// - `cost` is the unit's default cost

const kAntiAir = "anti-air";
const kApc = "apc";
const kArtillery = "artillery";
const kBcopter = "b-copter";
const kBattleship = "battleship";
const kBlackboat = "blackboat";
const kBlackbomb = "blackbomb";
const kBomber = "bomber";
const kCarrier = "carrier";
const kCruiser = "cruiser";
const kFighter = "fighter";
const kInfantry = "infantry";
const kLander = "lander";
const kMdTank = "md.tank";
const kMech = "mech";
const kMegatank = "megatank";
const kMissile = "missile";
const kNeotank = "neotank";
const kPiperunner = "piperunner";
const kRecon = "recon";
const kRocket = "rocket";
const kStealth = "stealth";
const kSub = "sub";
const kTcopter = "t-copter";
const kTank = "tank";

const kUnitData = [
  {name: kAntiAir,    menuName: "Anti-Air",   cost: 8000,  move: 6, move_type: "T", facility: "base"},
  {name: kApc,        menuName: "APC",        cost: 5000,  move: 6, move_type: "T", facility: "base"},
  {name: kArtillery,  menuName: "Artillery",  cost: 6000,  move: 5, move_type: "T", facility: "base"},
  {name: kBcopter,    menuName: "B-Copter",   cost: 9000,  move: 6, move_type: "A", facility: "airport"},
  {name: kBattleship, menuName: "Battleship", cost: 28000, move: 5, move_type: "S", facility: "port"},
  {name: kBlackboat,  menuName: "Black Boat", cost: 7500,  move: 7, move_type: "L", facility: "port"},
  {name: kBlackbomb,  menuName: "Black Bomb", cost: 25000, move: 9, move_type: "A", facility: "airport"},
  {name: kBomber,     menuName: "Bomber",     cost: 22000, move: 7, move_type: "A", facility: "airport"},
  {name: kCarrier,    menuName: "Carrier",    cost: 30000, move: 5, move_type: "S", facility: "port"},
  {name: kCruiser,    menuName: "Cruiser",    cost: 18000, move: 6, move_type: "S", facility: "port"},
  {name: kFighter,    menuName: "Fighter",    cost: 20000, move: 9, move_type: "A", facility: "airport"},
  {name: kInfantry,   menuName: "Infantry",   cost: 1000,  move: 3, move_type: "F", facility: "base"},
  {name: kLander,     menuName: "Lander",     cost: 12000, move: 6, move_type: "L", facility: "port"},
  {name: kMdTank,     menuName: "Md.Tank",    cost: 16000, move: 5, move_type: "T", facility: "base"},
  {name: kMech,       menuName: "Mech",       cost: 3000,  move: 2, move_type: "B", facility: "base"},
  {name: kMegatank,   menuName: "Mega Tank",  cost: 28000, move: 4, move_type: "T", facility: "base"},
  {name: kMissile,    menuName: "Missile",    cost: 12000, move: 4, move_type: "W", facility: "base"},
  {name: kNeotank,    menuName: "Neotank",    cost: 22000, move: 6, move_type: "T", facility: "base"},
  {name: kPiperunner, menuName: "Piperunner", cost: 20000, move: 9, move_type: "P", facility: "base"},
  {name: kRecon,      menuName: "Recon",      cost: 4000,  move: 8, move_type: "W", facility: "base"},
  {name: kRocket,     menuName: "Rocket",     cost: 15000, move: 5, move_type: "W", facility: "base"},
  {name: kStealth,    menuName: "Stealth",    cost: 24000, move: 6, move_type: "A", facility: "airport"},
  {name: kSub,        menuName: "Sub",        cost: 20000, move: 5, move_type: "S", facility: "port"},
  {name: kTcopter,    menuName: "T-Copter",   cost: 5000,  move: 6, move_type: "A", facility: "airport"},
  {name: kTank,       menuName: "Tank",       cost: 7000,  move: 6, move_type: "T", facility: "base"},
];
const kUnitsByName = toDict(kUnitData, (unit) => unit.name);
const kUnitsByMenuName = toDict(kUnitData, (unit) => unit.menuName);

const kFootsoldiers = [kInfantry, kMech];
const kVehicleMoveTypes = ["T", "W"];
const kDirectUnits = [kAntiAir, kBcopter, kBomber, kCruiser, kFighter, kMdTank, kMegatank, kNeotank,
                      kRecon, kStealth, kSub, kTank];
const kTransports = [kApc, kBlackboat, kLander, kTcopter];
const kShipMoveTypes = ["S", "L"];

// Supports +movement bonuses for particular COs
function lookupUnitMoveForCo(unitData, playerInfo) {
    let coName = playerInfo.co_name;
    let isCopActive = playerInfo.players_co_power_on === "Y";
    let isScopActive = playerInfo.players_co_power_on === "S";

    if (coName === "Andy" && isScopActive) {
        return unitData.move + 1;
    } else if (coName === "Jake" && isScopActive) {
        if (kVehicleMoveTypes.includes(unitData.move_type)) {
            return unitData.move + 2;
        }
    } else if (coName === "Max") {
        if (isCopActive && kDirectUnits.includes(unitData.name)) {
            return unitData.move + 1;
        } else if (isScopActive && kDirectUnits.includes(unitData.name)) {
            return unitData.move + 2;
        }
    } else if (coName === "Sami") {
        if (kTransports.includes(unitData.name)) {
            return unitData.move + 1;
        } else if (isCopActive && kFootsoldiers.includes(unitData.name)) {
            return unitData.move + 1;
        } else if (isScopActive && kFootsoldiers.includes(unitData.name)) {
            return unitData.move + 2;
        }
    } else if (coName === "Drake") {
        if (kShipMoveTypes.includes(unitData.move_type)) {
            return unitData.move + 1;
        }
    } else if (coName === "Jess") {
        if (isCopActive && kVehicleMoveTypes.includes(unitData.move_type)) {
            return unitData.move + 1;
        } else if (isScopActive && kVehicleMoveTypes.includes(unitData.move_type)) {
            return unitData.move + 2;
        }
    } else if (coName === "Sensei") {
        if (kTransports.includes(unitData.name)) {
            return unitData.move + 1;
        }
    } else if (coName === "Adder") {
        if (isCopActive) {
            return unitData.move + 1;
        } else if (isScopActive) {
            return unitData.move + 2;
        }
    } else if (coName === "Koal") {
        if (isCopActive) {
            return unitData.move + 1;
        } else if (isScopActive) {
            return unitData.move + 2;
        }
    }
    return unitData.move;
}

// I'm pretty sure this is the AWBW order, but not cart order?
const kFacilityOrder = {"base": 1, "airport": 2, "port": 3};
const kUnitNamesInMenuOrder = Object.keys(kUnitsByName).sort((lhs, rhs) => {
    let lhsUnit = kUnitsByName[lhs];
    let rhsUnit = kUnitsByName[rhs];
    if (lhsUnit.facility !== rhsUnit.facility) {
        return kFacilityOrder[lhsUnit.facility] - kFacilityOrder[rhsUnit.facility];
    }
    return lhsUnit.cost - rhsUnit.cost;
});

function lookupUnitDataByBuildMenuName(buildMenuName) {
  return kUnitsByMenuName[buildMenuName];
}

function makeRange(start, end, step) {
    if (step === undefined) {
        step = 1;
    }

    let ls = [];
    for (let i = start; i < end; i++) {
        ls.push(i);
    }
    return ls;
}

// TODO: bridges
const kTerrainIds = {
    "plains":     [1, 115, 116],
    "mountain":   [2],
    "woods":      [3],
    "river":      makeRange(4, 15),
    "road":       makeRange(15, 28),
    "sea":        [28],
    "shoal":      makeRange(29, 33),
    "reef":       [33],
    "pipe":       makeRange(101, 111).concat([113, 114]),
    "base":       [35, 39, 44, 49, 54, 82, 87, 92, 97, 118, 123, 150, 157, 164, 171, 182, 189],
    "port":       [37, 41, 46, 51, 56, 84, 89, 94, 99, 121, 126, 155, 162, 169, 176, 187, 194],
    "silo":       [111, 112],
    // non-base, non-port properties
    "properties": [34, 36, 38, 40, 42, 43, 45, 47, 48, 50, 52, 53, 55, 57, 81, 83, 85, 86, 88,
                   90, 91, 93, 95, 96, 98, 100, 117, 119, 120, 122, 124, 125, 127, 128, 129,
                   130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144,
                   145, 146, 147, 148, 149, 151, 152, 153, 154, 156, 158, 159, 160, 161, 163,
                   165, 166, 167, 168, 170, 172, 173, 174, 175, 181, 183, 184, 185, 186, 188,
                   190, 191, 192, 193]
};
const kTerrainById = invertDict(kTerrainIds);

const kWeatherClear = "clear";
const kWeatherRain =  "rain";
const kWeatherSnow =  "snow";

const kMoveCostByTerrainClear = {
    "plains":     {F: 1, B: 1, T: 1, W: 2, A: 1, P: 0, S: 0, L: 0},
    "mountain":   {F: 2, B: 1, T: 0, W: 0, A: 1, P: 0, S: 0, L: 0},
    "woods":      {F: 1, B: 1, T: 2, W: 3, A: 1, P: 0, S: 0, L: 0},
    "river":      {F: 2, B: 1, T: 0, W: 0, A: 1, P: 0, S: 0, L: 0},
    "road":       {F: 1, B: 1, T: 1, W: 1, A: 1, P: 0, S: 0, L: 0},
    "sea":        {F: 0, B: 0, T: 0, W: 0, A: 1, P: 0, S: 1, L: 1},
    "shoal":      {F: 1, B: 1, T: 1, W: 1, A: 1, P: 0, S: 0, L: 1},
    "reef":       {F: 0, B: 0, T: 0, W: 0, A: 1, P: 0, S: 2, L: 2},
    "pipe":       {F: 0, B: 0, T: 0, W: 0, A: 0, P: 1, S: 0, L: 0},
    "base":       {F: 1, B: 1, T: 1, W: 1, A: 1, P: 1, S: 0, L: 0},
    "port":       {F: 1, B: 1, T: 1, W: 1, A: 1, P: 0, S: 1, L: 1},
    "silo":       {F: 1, B: 1, T: 1, W: 1, A: 1, P: 0, S: 0, L: 0},
    "properties": {F: 1, B: 1, T: 1, W: 1, A: 1, P: 0, S: 0, L: 0},
};

const kMoveCostByTerrainRain = {
    "plains":     {F: 1, B: 1, T: 2, W: 3, A: 1, P: 0, S: 0, L: 0},
    "mountain":   {F: 2, B: 1, T: 0, W: 0, A: 1, P: 0, S: 0, L: 0},
    "woods":      {F: 1, B: 1, T: 3, W: 4, A: 1, P: 0, S: 0, L: 0},
    "river":      {F: 2, B: 1, T: 0, W: 0, A: 1, P: 0, S: 0, L: 0},
    "road":       {F: 1, B: 1, T: 1, W: 1, A: 1, P: 0, S: 0, L: 0},
    "sea":        {F: 0, B: 0, T: 0, W: 0, A: 1, P: 0, S: 1, L: 1},
    "shoal":      {F: 1, B: 1, T: 1, W: 1, A: 1, P: 0, S: 0, L: 1},
    "reef":       {F: 0, B: 0, T: 0, W: 0, A: 1, P: 0, S: 2, L: 2},
    "pipe":       {F: 0, B: 0, T: 0, W: 0, A: 0, P: 1, S: 0, L: 0},
    "base":       {F: 1, B: 1, T: 1, W: 1, A: 1, P: 1, S: 0, L: 0},
    "port":       {F: 1, B: 1, T: 1, W: 1, A: 1, P: 0, S: 1, L: 1},
    "silo":       {F: 1, B: 1, T: 1, W: 1, A: 1, P: 0, S: 0, L: 0},
    "properties": {F: 1, B: 1, T: 1, W: 1, A: 1, P: 0, S: 0, L: 0},
};

const kMoveCostByTerrainSnow = {
    "plains":     {F: 2, B: 1, T: 2, W: 3, A: 2, P: 0, S: 0, L: 0},
    "mountain":   {F: 4, B: 2, T: 0, W: 0, A: 2, P: 0, S: 0, L: 0},
    "woods":      {F: 2, B: 1, T: 2, W: 3, A: 2, P: 0, S: 0, L: 0},
    "river":      {F: 2, B: 1, T: 0, W: 0, A: 2, P: 0, S: 0, L: 0},
    "road":       {F: 1, B: 1, T: 1, W: 1, A: 2, P: 0, S: 0, L: 0},
    "sea":        {F: 0, B: 0, T: 0, W: 0, A: 2, P: 0, S: 2, L: 2},
    "shoal":      {F: 1, B: 1, T: 1, W: 1, A: 2, P: 0, S: 0, L: 1},
    "reef":       {F: 0, B: 0, T: 0, W: 0, A: 2, P: 0, S: 2, L: 2},
    "pipe":       {F: 0, B: 0, T: 0, W: 0, A: 0, P: 1, S: 0, L: 0},
    "base":       {F: 1, B: 1, T: 1, W: 1, A: 2, P: 1, S: 0, L: 0},
    "port":       {F: 1, B: 1, T: 1, W: 1, A: 2, P: 0, S: 2, L: 2},
    "silo":       {F: 1, B: 1, T: 1, W: 1, A: 2, P: 0, S: 0, L: 0},
    "properties": {F: 1, B: 1, T: 1, W: 1, A: 2, P: 0, S: 0, L: 0},
};

const kMoveCostByTerrainSturm = {
    "plains":     {F: 1, B: 1, T: 1, W: 1, A: 1, P: 0, S: 0, L: 0},
    "mountain":   {F: 1, B: 1, T: 0, W: 0, A: 1, P: 0, S: 0, L: 0},
    "woods":      {F: 1, B: 1, T: 1, W: 1, A: 1, P: 0, S: 0, L: 0},
    "river":      {F: 1, B: 1, T: 0, W: 0, A: 1, P: 0, S: 0, L: 0},
    "road":       {F: 1, B: 1, T: 1, W: 1, A: 1, P: 0, S: 0, L: 0},
    "sea":        {F: 0, B: 0, T: 0, W: 0, A: 1, P: 0, S: 1, L: 1},
    "shoal":      {F: 1, B: 1, T: 1, W: 1, A: 1, P: 0, S: 0, L: 1},
    "reef":       {F: 0, B: 0, T: 0, W: 0, A: 1, P: 0, S: 1, L: 1},
    "pipe":       {F: 0, B: 0, T: 0, W: 0, A: 0, P: 1, S: 0, L: 0},
    "base":       {F: 1, B: 1, T: 1, W: 1, A: 1, P: 1, S: 0, L: 0},
    "port":       {F: 1, B: 1, T: 1, W: 1, A: 1, P: 0, S: 1, L: 1},
    "silo":       {F: 1, B: 1, T: 1, W: 1, A: 1, P: 0, S: 0, L: 0},
    "properties": {F: 1, B: 1, T: 1, W: 1, A: 1, P: 0, S: 0, L: 0},
};

function lookupMoveCostMatrix(weather, playerInfo) {
    let coName = playerInfo.co_name;
    let isCopActive = playerInfo.players_co_power_on === "Y";
    let isScopActive = playerInfo.players_co_power_on === "S";
    let isAnyPower = isCopActive || isScopActive;

    if (coName === "Sturm" && weather !== kWeatherSnow) {
        return kMoveCostByTerrainSturm;
    }
    if (coName === "Lash" && weather !== kWeatherSnow && isAnyPower) {
        return kMoveCostByTerrainSturm;
    }

    if (weather === kWeatherClear) {
        return kMoveCostByTerrainClear;
    }

    if (weather === kWeatherSnow) {
        if (coName === "Olaf") {
            return kMoveCostByTerrainClear;
        }
        return kMoveCostByTerrainSnow;
    }
    if (weather === kWeatherRain) {
        if (coName === "Olaf") {
            return kMoveCostByTerrainSnow;
        } else if (coName === "Drake") {
            return kMoveCostByTerrainClear;
        }
        return kMoveCostByTerrainRain;
    }

    reportError("Unrecognized weather:", weather);
    return kMoveCostByTerrainClear;
}
