"use strict";

export const initData = {
  resources: {
    mana: {
      amount: 10,
      max: 10,
      production: 1
    },
    clay: {
      amount: 0,
      max: 10,
      production: 0,
      workers: {
        clay: 0,
        wood: 0,
        stone: 0,
      }
    },
    wood: {
      amount: 0,
      max: 0,
      production: 0,
      workers: {
        clay: 0,
        wood: 0,
        stone: 0,
      }
    },
    stone: {
      amount: 0,
      max: 0,
      production: 0,
      workers: {
        clay: 0,
        wood: 0,
        stone: 0,
      }
    },
    research: {
      amount: 0,
      max: 0,
      production: 0,
      workers: {
        clay: 0,
        wood: 0,
        stone: 0,
      }
    }
  },
  buildings: {
    foundry: 0,
    manaTower: 0,
    manaWell: 0,
    clayStorage: 0,
    clayDeposits: 0,
    woodShed: 0,
    lumberjacksHut: 0,
    stoneQuarry: 0,
    stoneyard: 0,
    library: 0
  },
  golems: {
    total: 0,
    working: 0,
    clay: {
      amount: 0,
      working: 0,
      efficiency: 1,
      upkeepMultiplier: 1
    },
    wood: {
      amount: 0,
      working: 0,
      efficiency: 1,
      upkeepMultiplier: 1
    },
    stone: {
      amount: 0,
      working: 0,
      efficiency: 1,
      upkeepMultiplier: 1
    },
  }
};

