"use strict";

import {ref} from "vue";
import { initData } from "./initData.js";
import { buildings } from "./buildings.js"
import { resources } from "./resources.js";

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
  runtime.value.resources.clay.amount += 1;
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
  
  //calculating resource production and max values
  Object.values(resources).forEach(r =>{
    switch (r.id){
      case 'mana':
        runtime.value.resources.mana.production = Math.ceil(0.1+Math.pow(runtime.value.buildings.manaWell, 1.13))
        runtime.value.resources.mana.max = 10*Math.round(Math.pow(1+runtime.value.buildings.manaTower, 1.23))
      break;
      case 'clay':
        runtime.value.resources.clay.production = Math.round(Math.pow(runtime.value.buildings.clayDeposits, 1.43))
        runtime.value.resources.clay.max = 10*Math.round(Math.pow(1+runtime.value.buildings.clayStorage, 1.75))
      break;
      default:
        runtime.value.resources[r.id].production = Math.round(Math.pow(runtime.value.buildings[r.productionBuilding], 1.43))
        runtime.value.resources[r.id].max = 10*Math.round(Math.pow(runtime.value.buildings[r.storageBuilding], 1.75))
      break;
    }
  })

  //adding 
  Object.values(runtime.value.resources).forEach(p =>{
    p.amount += p.production*rate;
    if (p.amount > p.max){p.amount = p.max}
  })



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
