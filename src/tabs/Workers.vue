<script setup> 
import { golemTypes } from '../scripts/foundry';
import { runtime } from '../scripts/gameCore.js';
import { resources } from '../scripts/resources.js';
import { setHireAmount, amountToHire, hire, fire } from '../scripts/workers.js'

</script>
<template>
<div class="center-stuff">

  <div class="card">
    <div class="card-content">
      
      <h2 class="card-title">
        Golems without a job
      </h2>

        <table style="width: 100%;">
          <tr v-for="g in golemTypes">
              <td style="width: 50%;">
                {{ g.type }}:
              </td>
              <td style="width: 50%; text-align: center;">
                {{ runtime.golems[[g.type]].amount - runtime.golems[[g.type]].working }}
              </td>
          </tr>
        </table>
      
    </div>
  </div>

<template v-for="r in resources" :id="['Worker_' + r.id]">

  <div class="card" v-if="r.worker">
    <div class="card-content">
      
      <table style="width: 100%">
        <tr>
          <td>
            <h2 class="card-title">
              {{ r.worker }}s
            </h2>
          </td>
          <td style="font-size: 16px; text-align:right;">
             {{ runtime.resources[r.id].hiredWorkers }} / {{ runtime.resources[r.id].maxWorkers }}
          </td>
        </tr>
      </table>

        <table style="width: 100%;">
          <tr v-for="g in golemTypes">
              <td style="width: 50%;">
                {{ g.type }}:
              </td>
              <td style="width: 2.5%;">
                <button @click="fire(r.id, g.type)" style="width: 20px;">-</button>
              </td>
              <td style="width: 45%; text-align: center;">
                {{ runtime.resources[r.id].workers[g.type] }}
              </td>
              <td style="width: 2.5%;">
                <button @click="hire(r.id, g.type)" style="width: 20px;">+</button>
              </td>
          </tr>
        </table>
      
    </div>
  </div>
</template>
</div>
</template>
<style lang="">
</style>