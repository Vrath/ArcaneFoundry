"use strict";

import {ref} from "vue";
import { initData } from "./initData.js";
import { resources } from "./resources.js";
import { golemTypes } from "./foundry.js";

export const runtime = ref(structuredClone(initData));

//load data
let savegame = JSON.parse(localStorage.getItem("gameSave"))
if (savegame !== null) {
  runtime.value = savegame;
}

//reset
export function reset(confirmReset){
  confirmReset = confirmReset ?? confirm("Are you sure you want to reset your progress?");
  if (!confirmReset) {return;}
  runtime.value = structuredClone(initData)
}

export function conjureClay(){
  if (runtime.value.resources.mana.amount >= 1 && runtime.value.resources.clay.amount < runtime.value.resources.clay.max){
  runtime.value.resources.mana.amount -= 1;
  runtime.value.resources.clay.amount += 3;
  }
}

// game loop
const SAVE_PERIOD = 10000
let timeToSave = SAVE_PERIOD
let last = performance.now()

let gameLoop = window.setInterval(function(){
  let now = performance.now()
  let delta = now - last
  let rate = delta / 1000
  last = now
  
  //calculating golem workpower
  Object.values(resources).forEach(r =>{
    if (r.id != "mana"){
      runtime.value.resources[r.id].workerPower = 0;
      Object.values(golemTypes).forEach(g =>{
        runtime.value.resources[r.id].workerPower += runtime.value.resources[r.id].workers[g.type] * runtime.value.golems[g.type].efficiency * golemTypes[g.type].power;
      })
      }
  })

  //calculating max workers, resource production, and max storage

    //mana
    let manaUsage = 0;
    Object.values(golemTypes).forEach(g =>{
      manaUsage += g.upkeep * runtime.value.golems[g.type].working * runtime.value.golems[g.type].upkeepMultiplier
    })

    runtime.value.resources.mana.production = runtime.value.buildings.manaWell + 3 - manaUsage;
    runtime.value.resources.mana.max = 10 * runtime.value.buildings.manaTower + 10;

    //clay
    runtime.value.resources.clay.maxWorkers = runtime.value.buildings.clayDeposits * 4;
    runtime.value.resources.clay.production = (runtime.value.buildings.clayDeposits * 0.02 + 0.98) * (runtime.value.resources.clay.workerPower) / resources.clay.gatherLevel;
    runtime.value.resources.clay.max = 50 * runtime.value.buildings.clayDeposits + 50;
   
    //wood
    runtime.value.resources.wood.maxWorkers = runtime.value.buildings.lumberjacksHut * 4;
    runtime.value.resources.wood.production = (runtime.value.buildings.lumberjacksHut * 0.02 + 0.98) * (runtime.value.resources.wood.workerPower) / resources.wood.gatherLevel;
    runtime.value.resources.wood.max = 50 * runtime.value.buildings.lumberjacksHut;

    //stone
    runtime.value.resources.stone.maxWorkers = runtime.value.buildings.stoneQuarry * 4;
    runtime.value.resources.stone.production = (runtime.value.buildings.stoneQuarry * 0.02 + 0.98) * (runtime.value.resources.stone.workerPower) / resources.stone.gatherLevel;
    runtime.value.resources.stone.max = 50 * runtime.value.buildings.stoneQuarry;
    
  //produce
  Object.values(runtime.value.resources).forEach(r =>{
    if (0 <= runtime.value.resources.mana.amount + runtime.value.resources.mana.production * rate){
      r.amount += r.production * rate
    }
    if (r.amount > r.max){r.amount = r.max}
  })

  //save game
  timeToSave -= delta
  if (timeToSave < 0) {
    timeToSave = SAVE_PERIOD
    localStorage.setItem("gameSave", JSON.stringify(runtime.value))
  }
}, 100)

// *** UPGRADES ***

export function hasResource(resource) {
  return runtime.value.resources[resource.resource].amount >= resource.amount;
}

export function payResource(resource) {
  return runtime.value.resources[resource.resource].amount -= resource.amount;
}

export function payResources(resources) {
  for (const resource of resources){
    payResource(resource);
  }
}

export function hasResources(resources){
  for (const resource of resources){
    if (!hasResource(resource)){
      return false;
    }
  }
  return true;
}

export function payIfPossible(resources){
  if (hasResources(resources)){
    payResources(resources);
    return true;
  }
  return false;
}
