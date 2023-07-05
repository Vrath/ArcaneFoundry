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
    case 'foundry':
      {resources.push({'resource': 'clay', 'amount': Math.ceil(5*Math.pow(level, 2.43))})}
      if (level > 1){resources.push({'resource': "wood", "amount": Math.ceil(10*Math.pow(level-1, 2.38))})}
    break;
    case 'clayStorage':
      {resources.push({'resource': 'clay', 'amount': Math.ceil(10*Math.pow(level, 1.73))})}
      if (level > 1){resources.push({'resource': "wood", "amount": Math.ceil(10*Math.pow(level-1, 1.68))})}
    break;
    case 'clayDeposits':
      {resources.push({'resource': 'clay', 'amount': Math.ceil(15*Math.pow(level, 1.73))})}
      if (level > 1){resources.push({'resource': "wood", "amount": Math.ceil(10*Math.pow(level-1, 1.68))})}
    break;
    case 'manaTower':
      {resources.push({'resource': 'clay', 'amount': Math.ceil(20*Math.pow(level, 2.23))})}
      if (level > 1){resources.push({'resource': "wood", "amount": Math.ceil(20*Math.pow(level-1, 2.18))})}
    break;
    case 'manaWell':
      {resources.push({'resource': 'clay', 'amount': Math.ceil(25*Math.pow(level, 2.43))})}
      if (level > 1){resources.push({'resource': "wood", "amount": Math.ceil(25*Math.pow(level-1, 2.38))})}
    break;
    case 'woodShed':
      {resources.push({'resource': 'clay', 'amount': Math.ceil(30*Math.pow(level, 2.43))})}
      if (level > 1){resources.push({'resource': "wood", "amount": Math.ceil(25*Math.pow(level-1, 2.38))})}
    break;
    case 'lumberjacksHut':
      {resources.push({'resource': 'clay', 'amount': Math.ceil(35*Math.pow(level, 2.43))})}
      if (level > 1){resources.push({'resource': "wood", "amount": Math.ceil(25*Math.pow(level-1, 2.38))})}
    break;
  }

  return resources;
}

