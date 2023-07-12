"use strict";

import { payIfPossible, runtime } from "./gameCore.js";

export const buildings = {
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
  foundry: {
    id: "foundry",
    name: "Golem Foundry",
    category: "misc",
    desc: "A building in which you can create golems and bring them to life."
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
  library:{
    id: "library",
    name: "Library",
    desc: "In the library you can research new technologies, buildings, and other stuff."
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

    // STORAGE

    case 'clayStorage':
                      {resources.push({'resource': 'clay', 'amount': -5 + Math.ceil(10*Math.pow(level, 1.58))})}
      if (level > 1)  {resources.push({'resource': "wood", "amount": Math.ceil(9*Math.pow(level-1, 1.58))})}
      if (level > 3)  {resources.push({'resource': "stone", "amount": Math.ceil(8*Math.pow(level-3, 1.58))})}
    break;
    case 'woodShed':
                      {resources.push({'resource': 'clay', 'amount': 9 + Math.ceil(11*Math.pow(level, 1.58))})}
      if (level > 1)  {resources.push({'resource': "wood", "amount": Math.ceil(10*Math.pow(level-1, 1.58))})}
      if (level > 2)  {resources.push({'resource': "stone", "amount": Math.ceil(9*Math.pow(level-2, 1.58))})}
    break;
    case 'stoneyard':
                      {resources.push({'resource': 'clay', 'amount': 23 + Math.ceil(12*Math.pow(level, 1.58))})}
                      {resources.push({'resource': "wood", "amount": 4 + Math.ceil(11*Math.pow(level, 1.58))})}
      if (level > 1)  {resources.push({'resource': "stone", "amount": Math.ceil(10*Math.pow(level-1, 1.58))})}
    break;

    // PRODUCTION

    case 'clayDeposits':
                      {resources.push({'resource': 'clay', 'amount': -10 + Math.ceil(15*Math.pow(level, 1.93))})}
      if (level > 1)  {resources.push({'resource': "wood", "amount": Math.ceil(14*Math.pow(level-1, 1.93))})}
      if (level > 3)  {resources.push({'resource': "stone", "amount": Math.ceil(13*Math.pow(level-3, 1.93))})}
    break;
    case 'lumberjacksHut':
                      {resources.push({'resource': 'clay', 'amount': 8 + Math.ceil(17*Math.pow(level, 1.93))})}
      if (level > 1)  {resources.push({'resource': "wood", "amount": Math.ceil(16*Math.pow(level-1, 1.93))})}
      if (level > 2)  {resources.push({'resource': "stone", "amount": Math.ceil(15*Math.pow(level-2, 1.93))})}
    break;
    case 'stoneQuarry':
                      {resources.push({'resource': 'clay', 'amount': 21 + Math.ceil(19*Math.pow(level, 1.93))})}
                      {resources.push({'resource': "wood", "amount": 2 + Math.ceil(18*Math.pow(level, 1.93))})}
      if (level > 1)  {resources.push({'resource': "stone", "amount": Math.ceil(17*Math.pow(level-1, 1.93))})}
    break;

    // OTHER
    
    case 'foundry':
                      {resources.push({'resource': 'clay', 'amount': -15 + Math.ceil(20*Math.pow(level, 2.63))})}
      if (level > 1)  {resources.push({'resource': "wood", "amount": Math.ceil(17*Math.pow(level-1, 2.63))})}
      if (level > 2)  {resources.push({'resource': "stone", "amount": Math.ceil(14*Math.pow(level-2, 2.63))})}
    break;
    case 'library':
                      {resources.push({'resource': 'clay', 'amount': 5 + Math.ceil(25*Math.pow(level, 2.63))})}
                      {resources.push({'resource': "wood", "amount": -12 + Math.ceil(22*Math.pow(level, 2.63))})}
      if (level > 1)  {resources.push({'resource': "stone", "amount": Math.ceil(19*Math.pow(level-1, 2.63))})}
    break;
    case 'manaTower':
                      {resources.push({'resource': 'clay', 'amount': -20 + Math.ceil(30*Math.pow(level, 2.23))})}
      if (level > 1)  {resources.push({'resource': "wood", "amount": Math.ceil(27*Math.pow(level-1, 2.23))})}
      if (level > 2)  {resources.push({'resource': "stone", "amount": Math.ceil(24*Math.pow(level-2, 2.23))})}
    break;
    case 'manaWell':
                      {resources.push({'resource': 'clay', 'amount': -20 + Math.ceil(35*Math.pow(level, 2.43))})}
      if (level > 1)  {resources.push({'resource': "wood", "amount": Math.ceil(32*Math.pow(level-1, 2.43))})}
      if (level > 2)  {resources.push({'resource': "stone", "amount": Math.ceil(29*Math.pow(level-2, 2.43))})}
    break;


  }

  return resources;
}

