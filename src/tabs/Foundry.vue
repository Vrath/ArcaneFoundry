<script setup> 
import {golemTypes} from '../scripts/foundry.js'

</script>
<template>
  <!-- <h2 class="decorated"><span>production</span></h2> -->
  <div class="center-stuff">
    <div class="card" v-for="g in golemTypes">
      <div class="card-content">
        <h2 class="card-title">
          {{ g.displayName }} 
        </h2>

        
      </div>
      


    </div>


  </div>
</template>
<style lang="">
  
</style>