"use strict";

import { payIfPossible, runtime } from "./gameCore.js";

export const buildings = {
  foundry: {
    id: "foundry",
    name: "Golem Foundry",
    category: "misc",
    desc: "A building in which you can create golems and bring them to life."
  },
  clayDeposits: {
    id: "clayDeposits",
    name: "Clay Deposits",
    category: "production",
    desc: "There is plenty of clay around here."
  },
  lumberjacksHut: {
    id: "lumberjacksHut",
    name: "Lumberjack's Hut",
    desc: "Lumberjack's Hut allows your golems to chop wood."
  },
  library:{
    id: "library",
    name: "Library",
    desc: "In the library you can research new technologies, buildings, and other stuff."
  },
  manaTower: {
    id: "manaTower",
    name: "Mana Tower",
    category: "storage",
    desc: "A building which lets you store mana."
  },
  manaWell: {
    id: "manaWell",
    name: "Mana Well",
    category: "production",
    desc: "The Mana Well helps to extract mana from aura nearby."
  },
  stoneQuarry: {
    id: "stoneQuarry",
    name: "Stone Quarry",
    desc: "Your golems can use the Stone Quarry to mine stone."
  },
  shed: {
    id: "storageShed",
    name: "Storage Shed",
    desc: "Storage shed adds extra space for all basic materials."
  }
}

export function upgradeBuilding(building){
  if (payIfPossible (getBuildingUpgradeCost(building))){
    runtime.value.buildings[building] ++;
  }
}

export function getBuildingUpgradeCost(building){
  let level = runtime.value.buildings[building] + 1;
  // let level = 1;

  const resources = [];
  switch (building) {

    case 'clayDeposits':
      {resources.push({
        'resource': 'clay', 
        'amount': Math.ceil(Math.pow(level, 1.73))*10
      })}
      if (level>1){{resources.push({
        'resource': 'wood', 
        'amount': Math.ceil(Math.pow(level-1, 1.68))*10
      })}}
      if (level>2){{resources.push({
        'resource': 'stone', 
        'amount': Math.ceil(Math.pow(level-2, 1.63))*10
      })}}
    break;

    case 'foundry':
      {resources.push({
        'resource': 'clay', 
        'amount': Math.ceil(Math.pow(level, 2.43))*10
      })}
      if (level>1){{resources.push({
        'resource': 'wood', 
        'amount': Math.ceil(Math.pow(level-1, 2.38))*10 + 10
      })}}
      if (level>2){{resources.push({
        'resource': 'stibe', 
        'amount': Math.ceil(Math.pow(level-2, 2.33))*10 + 20
      })}}
    break;

    case 'lumberjacksHut':
      {resources.push({
        'resource': 'clay', 
        'amount': Math.ceil(Math.pow(level, 1.83))*10 + 10
      })}
      if (level>1){{resources.push({
        'resource': 'wood', 
        'amount': Math.ceil(Math.pow(level-1, 1.78))*10 + 20
      })}}
      if (level>2){{resources.push({
        'resource': 'stone', 
        'amount': Math.ceil(Math.pow(level-2, 1.73))*10 + 30
      })}}
    break;
    
    case 'library':
      {resources.push({
        'resource': 'clay', 
        'amount': Math.ceil(Math.pow(level, 2.63))*10 + 20
      })}
      {{resources.push({
        'resource': 'wood', 
        'amount': Math.ceil(Math.pow(level, 2.58))*10 + 10
      })}}
      if (level>1){{resources.push({
        'resource': 'stone', 
        'amount': Math.ceil(Math.pow(level-1, 1.63))*10 + 30
      })}}
    break;

    case 'manaTower':
      {resources.push({
        'resource': 'clay', 
        'amount': Math.ceil(Math.pow(level, 2.23))*10 + 80
      })}
      {{resources.push({
        'resource': 'wood', 
        'amount': Math.ceil(Math.pow(level, 1.73))*10 + 50
      })}}
      if (level>1){{resources.push({
        'resource': 'stone', 
        'amount': Math.ceil(Math.pow(level-2, 1.63))*10
      })}}
    break;

    case 'manaWell':
      {resources.push({
        'resource': 'clay', 
        'amount': Math.ceil(Math.pow(level, 2.53))*10 + 110
      })}
      {{resources.push({
        'resource': 'wood', 
        'amount': Math.ceil(Math.pow(level, 1.73))*10 + 70
      })}}
      if (level>1){{resources.push({
        'resource': 'stone', 
        'amount': Math.ceil(Math.pow(level-1, 1.63))*10
      })}}
    break;

    case 'stoneQuarry':
      {resources.push({
        'resource': 'clay', 
        'amount': Math.ceil(Math.pow(level, 1.93))*10 + 150
      })}
      {{resources.push({
        'resource': 'wood', 
        'amount': Math.ceil(Math.pow(level, 1.73))*10 + 90
      })}}
      if (level>1){{resources.push({
        'resource': 'stone', 
        'amount': Math.ceil(Math.pow(level-1, 1.63))*10
      })}}
    break;

    case 'storageShed':
      {resources.push({
        'resource': 'clay', 
        'amount': Math.ceil(Math.pow(level, 1.63))*10 + 190
      })}
      {{resources.push({
        'resource': 'wood', 
        'amount': Math.ceil(Math.pow(level, 1.58))*10 + 110
      })}}
      if (level>1){{resources.push({
        'resource': 'stone', 
        'amount': Math.ceil(Math.pow(level-1, 1.53))*10
      })}}
    break;

  }

  return resources;
}

