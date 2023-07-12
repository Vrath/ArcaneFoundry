"use strict";

export const resources = {
  mana: {
    id: "mana",
    name: "mana",
    storageBuilding: "manaTower",
    productionBuilding: "manaWell",
    worker: null,
    gatherLevel: null
  },
  clay: {
    id: "clay",
    name: "clay",
    storageBuilding: "clayStorage",
    productionBuilding: "clayProduction",
    worker: "Clay digger",
    gatherLevel: 10
  },
  wood: {
    id: "wood",
    name: "wood",
    storageBuilding: "woodShed",
    productionBuilding: "lumberjacksHut",
    worker: "Lumberjack",
    gatherLevel: 20
  },
  stone: {
    id: "stone",
    name: "stone",
    storageBuilding: "stoneyard",
    productionBuilding: "stoneQuarry",
    worker: "Stone miner",
    gatherLevel: 30
  },
  research: {
    id: "research",
    name: "research",
    storageBuilding: '',
    productionBuilding: "library",
    worker: "Researcher",
    gatherLevel: 50
  }
}