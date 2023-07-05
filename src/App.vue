<script setup>
import { ref } from 'vue'
import {runtime, conjureClay} from './scripts/gameCore.js'
import {nFormatter} from "./scripts/util.js";
import {resources} from "./scripts/resources.js"


import Buildings from './tabs/Buildings.vue'
import Foundry from './tabs/Foundry.vue'

// import Quests from './tabs/Quests.vue'
// import Settings from './tabs/Settings.vue' 


const currentTab = "Buildings";

const nav = [
  {name: "Buildings", component: Buildings},
  {name: "Foundry", component: Foundry},
  // ...
  // {name: "Quests", component: Quests},
  // {name: "Settings", component: Settings}
]


</script>

<template> 
  <div id="sidebar">
    <div id="logo">
      <h1>
        Arcane Foundry
      </h1>
    </div>
    <div id="sidebarMenu">
        <a v-for="tab in nav" :key="tab.name" @click="currentTab = tab.name" 
      :class="currentTab == tab.name ? 'active' : ''">
        {{ tab.name }}
      </a>
    </div>
  </div>


  <div id="main">
    <div style="width=100%;" v-for="tab in nav" :key="tab.name" v-show="currentTab == tab.name">
      <component :is="tab.component"></component>
    </div>
  </div>

  <div id="info">
    <h2 class="decorated"><span>resources</span></h2>
    <table class="resTable">
      <tr v-for="r in resources">
        <td class="resName">
          {{ r.name }}: 
        </td>
        <td class="resAmt">
          {{ nFormatter(runtime.resources[r.id].amount) }}
        </td>
        <td class="resSlash">
          /
        </td>
        <td class="resMax">
          {{ nFormatter(runtime.resources[r.id].max) }}
        </td>
      </tr>
    </table>
    <button @click="conjureClay()">
      Conjure clay<br>(cost: 1 mana)
    </button>
  </div>
</template>

<style>

</style>
