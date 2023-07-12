<script setup> 
import {getGolemCost, createGolem, golemTypes} from '../scripts/foundry.js'
import {runtime} from '../scripts/gameCore.js'

</script>
<template>
  <div class="center-stuff">
    
    <div class="card" v-for="g in golemTypes">
      <div class="card-content">
        <h2 class="card-title">
          {{ g.displayName }} 
        </h2>
          Total: {{ runtime.golems[g.type].amount }} /
          Working: {{ runtime.golems[g.type].working }} /
          To hire: {{ runtime.golems[g.type].amount - runtime.golems[g.type].working }} <br>

          Mana upkeep: {{ g.upkeep }} / 
          Power: {{ g.power }}<br><br>

          <p class="card-text">
            {{ g.desc }}
          </p>

          <button style="float: right; display: inline; " @click="createGolem(g.type)">Create</button>
          Resources required:<br>
          <div class="resourcesPlz">
            <span v-for="r in getGolemCost(g.type)">
              {{ r.resource }}: {{ r.amount }}<br>
            </span>
          </div>
          
       
      </div>
      


    </div>


  </div>
</template>
<style lang="">
  
</style>