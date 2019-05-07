// This code represents what we *think* the lighthouse labs test machine is doing (separated by challenges)

// Lighthouse labs objects
var ship = {
  powerOn: false,
  modules: []
}
availableModules = [{
    name: "navigation",
    essential: true,
    enabled: false
  },
  {
    name: "propulsion",
    essential: true,
    enabled: false
  },
  {
    name: "life-support",
    essential: true,
    enabled: false
  },
  {
    name: "life-support",
    essential: false,
    enabled: false
  },
  {
    name: "nothing special",
    essential: false,
    enabled: false
  },
];


// Everything below this line (and above the next) gets pasted into the Lighthouse Labs webpage

// power on the ship
function powerOn() {
  ship.powerOn = true;
}

// returns number of available modules
function countModules() {
  return availableModules.length;
}

// returns number of essential modules
function countEssential() {
  const essential = (acc, val) => acc + (val.essential ? 1 : 0);

  return availableModules.reduce(essential, 0);
}

// takes an index and loads the module
function loadModule(index) {
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index])
}

// takes the name of a module and returns the index
function findModuleIndex(name) {
  for (let index = 0; index < availableModules.length; index++) {
    current = availableModules[index]
    if (current.name == name && current.essential == true) {
      return index;
    }
  }
}

loadModule(findModuleIndex("life-support"))
loadModule(findModuleIndex("propulsion"))
loadModule(findModuleIndex("navigation"))

// Everything above here is for Lighthouse
// ------------------------- HERE COMES THE TESTS -------------------------

// Look Ma! Minitest! Put in the challenge number and a statement that should be true
function test(challenge, statement) {
  console.log("Challenge " + challenge + " " + (statement ? "PASSED" : "FAILED"));
}

// Challenge 1: Power on the ship
powerOn();
test(1, ship.powerOn == true)

// Challenge 2: Find number of modules
test(2, countModules() == 5)

// Challenge 3: FInd number of essential modules
test(3, countEssential() == 3)

// Challenge 4: Be able to load modules, load life-support
before = ship.modules.length;
loadModule(2);
after = ship.modules.length;
test(4, after - before == 1)

// Challenge 5: Load the propulsion module
var hasPropulsion = function (element) {return element.name == "propulsion"}
test(5, ship.modules.some(hasPropulsion))

// Challenge 6: Load the navigation module
var hasNavigation = function (element) {return element.name == "navigation"}
test(6, ship.modules.some(hasNavigation))