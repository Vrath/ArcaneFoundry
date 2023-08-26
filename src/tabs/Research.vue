<script setup> 

import {research} from '../scripts/research.js'
import { VNetworkGraph } from "v-network-graph"
import * as vNG from "v-network-graph"
import "v-network-graph/lib/style.css"

const edges = {
  1: { source: "manaStorage", target: "manaProduction" },
  2: { source: "stoneMining", target: "coalMining" },
  3: { source: "woodGolems", target: "stoneGolems" },
  4: { source: "stoneMining", target: "stoneGolems" },
  5: { source: "extraStorage", target: "clayProf" },
  6: { source: "extraStorage", target: "logistics1"},
  7: { source: "stoneMining", target: "logistics1"},
  8: { source: "woodGolems", target: "woodProf"},
  9: { source: "clayProf", target: "woodProf"},
  10: { source: "coalMining", target: "manaGenerator"},
  11: { source: "manaProduction", target: "manaGenerator"},
  12: { source: "stoneGolems", target: "expeditions"},
  13: { source: "coalMining", target: "copperMining"},
  14: { source: "coalMining", target: "forge"},
  15: { source: "woodProf", target: "stoneProf"},
  16: { source: "stoneGolems", target: "stoneProf"},
  17: { source: "logistics1", target: "expeditions"},
  18: { source: "manaGenerator", target: "spellCasting"},
  19: { source: "forge", target: "oreProcessing"},
  20: { source: "copperMining", target: "oreProcessing"},
  21: { source: "copperMining", target: "ironMining"},
  22: { source: "logistics1", target: "logistics2"},
  23: { source: "copperMining", target: "logistics2"},
  24: { source: "forge", target: "logistics2"},
  25: { source: "forge", target: "ironMining"},
  26: { source: "manaGenerator", target: "spellcasting"},
  27: { source: "stoneProf", target: "copperGolems"},
  28: { source: "spellcasting", target: "alchemicalCentrifuge"},
  29: { source: "spellcasting", target: "alchemicalRefining"},
  30: { source: "oreProcessing", target: "alchemicalRefining"},
  31: { source: "oreProcessing", target: "steel"},
  32: { source: "ironMining", target: "steel"},
  33: { source: "ironMining", target: "galenaMining"},
  34: { source: "copperMining", target: "copperGolems"},
  35: { source: "copperGolems", target: "copperProf"},
}

const configs = vNG.defineConfigs({
    view: {
      panEnabled: true,
      zoomEnabled: true,
    //   autoPanAndZoomOnLoad: "center-zero",
      autoPanAndZoomOnLoad: "fit-content",
      minZoomLevel: 0.25,
      maxZoomLevel: 0.75,
    },
    node: {
      draggable: false,
    },
    edge: {
        normal: {
            color: "#666666",
        },
        hover: {
            color: "#666666",
        }
    }
})

</script>
<template>
<div id="research">
    <v-network-graph
    :zoom-level="0.5"
    :nodes="research.nodes"
    :edges="edges"
    :layouts="research"
    :configs="configs"
    >
      <template #override-node="{ nodeId }">

        <foreignObject x="-110" y="-40" width="220" height="80" >
            <body xmlns="http://www.w3.org/1999/xhtml" >
              <button class="research-btn">
                {{ research.nodes[nodeId].name }}
              </button>
            </body>     
          </foreignObject >
      </template>

      <template #override-node-label="{ }">
        .
      </template>
    </v-network-graph>
</div>
</template>
<style lang="css">
</style>