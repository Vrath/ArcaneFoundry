<script setup>
import { ref } from 'vue'

import Buildings from './tabs/Buildings.vue'
import Actions from './tabs/Actions.vue'


const currentTab = ref("Actions");

const nav = ref([
  {name: "Actions", component: Actions},
  {name: "Buildings", component: Buildings}
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
    mana: {{ data.resources.mana.amount }} / {{ runtime.resources.mana.max }}<br>
    clay: {{ data.resources.clay.amount }} / {{ runtime.resources.clay.max }}
  </div>
</template>

<style>

</style>
