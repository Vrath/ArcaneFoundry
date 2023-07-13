"use strict";
import { runtime } from "./gameCore.js";

export let amountToHire = 1;
export function setHireAmount(amount){
  amountToHire = amount;
}

export function hire(job, type){
 for (let i = 0; i < amountToHire; i++){
  if (runtime.value.resources[job].hiredWorkers < runtime.value.resources[job].maxWorkers && runtime.value.golems[type].working < runtime.value.golems[type].amount){
    runtime.value.resources[job].hiredWorkers ++;
    runtime.value.resources[job].workers[type] ++;
    runtime.value.golems[type].working ++;
  }
  else {
    break;
  }
 }
}
export function fire(job, type){
  for (let i = 0; i < amountToHire; i++){
   if (runtime.value.resources[job].hiredWorkers > 0 && runtime.value.golems[type].working > 0){
     runtime.value.resources[job].hiredWorkers --;
     runtime.value.resources[job].workers[type] --;
     runtime.value.golems[type].working --;
   }
   else {
     break;
   }
  }
 }