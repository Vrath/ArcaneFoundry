<script setup>
import {markRaw, ref} from 'vue'
import {runtime, conjureClay, reset} from './scripts/gameCore.js'
import {nFormatter} from "./scripts/util.js";
import {resources} from "./scripts/resources.js"
import {setHireAmount} from "./scripts/workers.js"


import Buildings from './tabs/Buildings.vue'
import Foundry from './tabs/Foundry.vue'
import Workers from './tabs/Workers.vue'
import Research from './tabs/Research.vue'

// import Quests from './tabs/Quests.vue'
// import Settings from './tabs/Settings.vue' 


const currentTab = "Buildings";

const nav = markRaw([
  {name: "Buildings", component: Buildings},
  {name: "Foundry", component: Foundry},
  {name: "Workers", component: Workers},
  {name: "Research", component: Research}
  // ...
  // {name: "Quests", component: Quests},
  // {name: "Settings", component: Settings}
])


</script>

<template> 
  <div id="sidebar">
    <div id="logo">
      <h1>
        Arcane Foundry
      </h1>
    </div>
    <div id="sidebarMenu">
      <template v-for="tab in nav" :key="tab.name">
        <a @click="currentTab = tab.name" :class="currentTab == tab.name ? 'active' : ''"> <!-- v-if="runtime.unlocks.tabs[tab.name] == true" -->
          {{ tab.name }}
        </a>
      </template>
      <a @click="reset();">Reset</a>
    </div>
  </div>

  <div id="main">
    <div class="topbar">

      <div class="multipliers" v-show="currentTab == 'Workers'">
        <span>Multiplier:</span>
        <button @click="setHireAmount(1)">x1</button>
        <button @click="setHireAmount(5)">x5</button>
        <button @click="setHireAmount(25)">x25</button>
        <button @click="setHireAmount(100)">x100</button>
      </div>

    </div>
    <div class="tabContent" style="width=100%;" v-for="tab in nav" :key="tab.name" v-show="currentTab == tab.name">
      <component :is="tab.component"></component>
    </div>
  </div>

  <div id="info">
    <h2 class="decorated"><span>resources</span></h2>
    <table class="resTable">
      <template v-for="r in resources">
        <tr v-if="r.id != 'research' && runtime.resources[r.id].max != 0" >
          <td class="resName" >
            {{ r.name }}: 
          </td>
          <td class="resAmt" >
            {{ nFormatter(runtime.resources[r.id].amount, 2) }}
          </td>
          <td class="resSlash" >
            /
          </td>
          <td class="resMax" >
            {{ nFormatter(runtime.resources[r.id].max, 2) }}
          </td>
          <td class="resProd" >
            ({{ nFormatter(runtime.resources[r.id].production) }}/s)
          </td>
        </tr>
      </template>
    </table>
    
    <button @click="conjureClay()">
      Conjure clay<br>(cost: 1 mana)
    </button>
  </div>
</template>

<style>

</style>
