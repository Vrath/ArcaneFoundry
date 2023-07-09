"use strict";

import { payIfPossible, runtime } from "./gameCore.js";

export const buildings = {
  foundry: {
    id: "foundry",
    name: "Golem Foundry",
    category: "misc",
    desc: "A building in which you can create golems and bring them to life."
  },
  clayStorage: {
    id: "clayStorage",
    name: "Clay Storage",
    category: "storage",
    desc: "This is an area where you can safely store clay."
  },
  clayDeposits: {
    id: "clayDeposits",
    name: "Clay Deposits",
    category: "production",
    desc: "There is plenty of clay around here."
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
  woodShed: {
    id: "woodShed",
    name: "Wood Shed",
    category: "storage",
    desc: "This is a building where we can store our wood."
  },
  lumberjacksHut: {
    id: "lumberjacksHut",
    name: "Lumberjack's Hut",
    desc: "Lumberjack's Hut allows your golems to chop wood."
  },
  stoneyard: {
    id: "stoneyard",
    name: "Stoneyard",
    desc: "Stoneyard is used to store stone."
  },
  stoneQuarry: {
    id: "stoneQuarry",
    name: "Stone Quarry",
    desc: "Your golems can use the Stone Quarry to mine stone."
  },
  library:{
    id: "library",
    name: "Library",
    desc: "In the library you can research new technologies, buildings, and other stuff."
  }
}

export function upgradeBuilding(building){
  if (payIfPossible (getBuildingUpgradeCost(building))){
    runtime.value.buildings[building] ++;
  }
}

export function getBuildingUpgradeCost(building){
  let level = runtime.value.buildings[building] + 1;

  const resources = [];
  switch (building) {
    case 'clayStorage':
      {resources.push({'resource': 'clay', 'amount': -3 + Math.ceil(10*Math.pow(level, 1.71))})}
      if (level > 1){resources.push({'resource': "wood", "amount": -3 + Math.ceil(10*Math.pow(level-1, 1.71))})}
      if (level > 3){resources.push({'resource': "stone", "amount": Math.ceil(10*Math.pow(level-3, 1.71))})}
    break;
    case 'clayDeposits':
      {resources.push({'resource': 'clay', 'amount': -1 + Math.ceil(11*Math.pow(level, 1.71))})}
      if (level > 1){resources.push({'resource': "wood", "amount": -1 +Math.ceil(11*Math.pow(level-1, 1.71))})}
      if (level > 3){resources.push({'resource': "stone", "amount": -1 + Math.ceil(11*Math.pow(level-3, 1.71))})}
    break;
    case 'woodShed':
      {resources.push({'resource': 'clay', 'amount': 13 + Math.ceil(12*Math.pow(level, 1.71))})}
      if (level > 1){resources.push({'resource': "wood", "amount": -10 + Math.ceil(12*Math.pow(level-1, 1.71))})}
      if (level > 3){resources.push({'resource': "stone", "amount": -2 + Math.ceil(12*Math.pow(level-3, 1.71))})}
    break;
    case 'lumberjacksHut':
      {resources.push({'resource': 'clay', 'amount': 17 + Math.ceil(13*Math.pow(level, 1.71))})}
      if (level > 1){resources.push({'resource': "wood", "amount": Math.ceil(13*Math.pow(level-1, 1.71))})}
      if (level > 3){resources.push({'resource': "stone", "amount": Math.ceil(13*Math.pow(level-3, 1.71))})}
    break;
    case 'stoneyard':
      {resources.push({'resource': 'clay', 'amount': 46 + Math.ceil(14*Math.pow(level, 1.71))})}
      {resources.push({'resource': 'wood', 'amount': 11 + Math.ceil(14*Math.pow(level, 1.71))})}
      if (level > 1){resources.push({'resource': "stone", "amount": -4 + Math.ceil(14*Math.pow(level-1, 1.71))})}
    break;
    case 'stoneQuarry':
      {resources.push({'resource': 'clay', 'amount': 75 + Math.ceil(15*Math.pow(level, 1.71))})}
      {resources.push({'resource': 'wood', 'amount': 35 + Math.ceil(15*Math.pow(level, 1.71))})}
      if (level > 1){resources.push({'resource': "stone", "amount": -6 + Math.ceil(15*Math.pow(level-1, 1.71))})}
    break;
    case 'manaTower':
      {resources.push({'resource': 'clay', 'amount': -1 + Math.ceil(16*Math.pow(level, 2.21))})}
      if (level > 1){resources.push({'resource': "wood", "amount": 3 + Math.ceil(16*Math.pow(level-1, 2.21))})}
      if (level > 2){resources.push({'resource': "stone", "amount": -6 + Math.ceil(16*Math.pow(level-2, 2.21))})}
    break;
    case 'manaWell':
      {resources.push({'resource': 'clay', 'amount': 3 + Math.ceil(17*Math.pow(level, 2.41))})}
      if (level > 1){resources.push({'resource': "wood", "amount": -2 + Math.ceil(17*Math.pow(level-1, 2.41))})}
      if (level > 2){resources.push({'resource': "stone", "amount": 8 + Math.ceil(17*Math.pow(level-2, 2.41))})}
    break;
    case 'library':
      {resources.push({'resource': 'clay', 'amount': 102 + Math.ceil(18*Math.pow(level, 2.41))})}
      {resources.push({'resource': "wood", "amount": 57 + Math.ceil(18*Math.pow(level, 2.41))})}
      {resources.push({'resource': "stone", "amount": 2 + Math.ceil(18*Math.pow(level, 2.41))})}
    break;
    case 'foundry':
      {resources.push({'resource': 'clay', 'amount': -15 + Math.ceil(20*Math.pow(level, 2.41))})}
      if (level > 1){resources.push({'resource': "wood", "amount": Math.ceil(20*Math.pow(level-1, 2.41))})}
      if (level > 3){resources.push({'resource': "stone", "amount": Math.ceil(20*Math.pow(level-3, 2.41))})}
    break;
  }

  return resources;
}

