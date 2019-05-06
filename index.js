// This code represents what we *think* the lighthouse labs test machine is doing (separated by challenges)

// Lighthouse labs objects
var ship = {
  powerOn: false,
  modules: []
}
availableModules = [{
    name: "crap",
    essential: false,
    enabled: false
  },
  {
    name: "notcrap",
    essential: true,
    enabled: false
  },
  {
    name: "kindacrap",
    essential: true,
    enabled: false
  },
];


// Everything below this line (and above the next) gets pasted into the Lighthouse Labs webpage

function powerOn() {
  ship.powerOn = true;
}

function countModules() {
  return availableModules.length;
}

function countEssential() {
  const essential = (acc, val) => acc + (val.essential ? 1 : 0);

  return availableModules.reduce(essential, 0);
}

function loadModule(index) {
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index])
}

function loadLifeSupport() {
  function isLifeSupport(element) {
    return element.name == "life-support";
  }

  index = availableModules.findIndex(isLifeSupport);
  loadModule(index);
}

loadLifeSupport();

function findModuleIndex(name) {
  function find_name(element) {
    return element.name == name && element.essential;
  }

  availableModules.findIndex(find_name);
}

propulsionIndex = findModuleIndex("propulsion");
loadModule(propulsionIndex);


// HERE COMES THE TESTS

// Look Ma! Minitest!
function test(challenge, statement) {
  console.log("Challenge " + challenge + " " + (statement ? "PASSED" : "FAILED"));
}

// Challenge 1
powerOn();
test(1, ship.powerOn == true)

// Challenge 2
test(2, countModules() == 3)

// Challenge 3
test(3, countEssential() == 2)

// Challenge 4
loadModule(2);
test(4, ship.modules.length == 1)

// Challenge 5
test(5, ship.modules.length == 2)