<script setup> 

import {research} from '../scripts/research.js'

//draggable
document.addEventListener('DOMContentLoaded', function () {
    const ele = document.getElementById('draggable');

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;

        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    ele.addEventListener('mousedown', mouseDownHandler);
});
//get coords
// $(function () {
//     var c = document.getElementById('research-tree');

//     c.width = $(document).width();
//     c.height = $(document).height();

//     $('#research-tree').mousemove(function (e) {

//         var x, y;

//         x = e.pageX - 185;
//         y = e.pageY - 40;

//         $('#x').html(x);
//         $('#y').html(y);

//     });
// });


</script>
<template>
<div id="draggable">
  <div id="research">
    <!-- <canvas id="research-canvas" height="920" width="2200"></canvas> -->
    <div id="research-tree">
        <div v-for="tier in research" class="research-column">
            <button v-for="r in tier" class="research-btn" :style="`top: ${r.y}%;`">
                {{ r.name }}
            </button>
        </div>
    </div>
  </div>
</div>
</template>
<style lang="css">
</style>