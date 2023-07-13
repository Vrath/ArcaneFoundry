"use strict";

export const resources = {
  mana: {
    id: "mana",
    name: "mana",
    building: null,
    worker: null,
    gatherLevel: null
  },
  clay: {
    id: "clay",
    name: "clay",
    building: "clayDeposits",
    worker: "Clay digger",
    gatherLevel: 5
  },
  wood: {
    id: "wood",
    name: "wood",
    building: "lumberjacksHut",
    worker: "Lumberjack",
    gatherLevel: 10
  },
  stone: {
    id: "stone",
    name: "stone",
    building: "stoneQuarry",
    worker: "Stone miner",
    gatherLevel: 15
  },
  research: {
    id: "research",
    name: "research",
    building: "library",
    worker: "Researcher",
    gatherLevel: 25
  }
}