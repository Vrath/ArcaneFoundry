<script setup>
import { buildings, upgradeBuilding, getBuildingUpgradeCost } from '../scripts/buildings.js';
import { runtime } from '../scripts/gameCore.js';
import { resources } from '../scripts/resources.js';

</script>
<template>
  <div class="center-stuff">
    <div class="card" v-for="b in buildings">
      <!-- <div class="card-image"> </div> -->
      <div class="card-content">

         <table style="width: 100%">
          <tr>
            <td>
              <h2 class="card-title">
                {{ b.name }} 
              </h2>
            </td>
            <td style="font-size: 16px; text-align:right;">
              level {{ runtime.buildings[b.id] }}
            </td>
          </tr>
        </table>
        
         <p class="card-text">
          {{ b.desc }}
        </p>

         <button style="float: right; display: inline;" @click="upgradeBuilding(b.id)">Upgrade</button>

          Resources required:<br>
          <div class="resourcesPlz">
            <span v-for="r in getBuildingUpgradeCost(b.id)">
              {{ r.resource }}: {{ r.amount }}<br>
            </span>
          </div>
        

      </div>
   </div>
  </div>
</template>
<style lang="">
  
</style>