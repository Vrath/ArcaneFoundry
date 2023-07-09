"use strict";

export const golemTypes = {
  clay: {
    type: "clay",
    displayName: "Clay Golem",
    desc: "Clay golems are easy to make and dexterous, but also very fragile.",
    upkeep: 0.5,
    power: 5
  },
  wood: {
    type: "wood",
    displayName: "Wood Golem",
    desc: "Wood golems are well balanced between their toughness, strength, and ease of control.",
    upkeep: 1,
    power: 12
  },
  stone: {
    type: "stone",
    displayName: "Stone Golem",
    desc: "Stone golems are tough and sturdy, but pretty slow.",
    upkeep: 2,
    power: 25
  }
}

function createGolem(type){
  if (payIfPossible(getGolemCost(type))){
    runtime.value.golems[type].amount++;
    runtime.value.golems.total++;
  }
}

export function getGolemCost(type){
  let amount = gameData.golems.type[type].amount + 1;

  const resources = [];
  switch (type) {
    case 'clay':
      resources.push({'resource': 'mana', 'amount': Math.ceil(5 * Math.pow(amount, 1.43))});
      resources.push({'resource': 'clay', 'amount': Math.ceil(10 * Math.pow(amount, 1.73))});
    break;
    case 'wood':
      resources.push({'resource': 'mana', 'amount': Math.ceil(15 * Math.pow(amount, 1.43))});
      resources.push({'resource': 'wood', 'amount': Math.ceil(15 * Math.pow(amount, 1.73))});
    break;
    case 'stone':
      resources.push({'resource': 'mana', 'amount': Math.ceil(40 * Math.pow(amount, 1.43))});
      resources.push({'resource': 'stone', 'amount': Math.ceil(20 * Math.pow(amount, 1.73))});
    break;
  }
  return resources;
}