<template>
    <div>
        <h1>Videos</h1>
        <p>One this page I hope to post my favorite educational videos on climate change. To start this off with a bang, Crash Course has a series of videos aimed at children, teens, and adults, that provide a brilliant introduction to climate science. Below are two videos, one aimed at younger children and hosted by Sabrina Cruz, and a advanced series call Eons, hosted by Crash Course creator Hank Green himself. These two videos are examples of the brilliant educational videos available on the web. This page is also an example of how flex-box can be used to create a responsive grid that re-aligns without media queries.</p>
        <ul class= "flex-container">
            <li class="flex-item">
             <iframe  width="560" height="315" src="https://www.youtube.com/embed/YbAWny7FV3w" frameborder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </li>
            <li class="flex-item">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ldLBoErAhz4" frameborder="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Videos.vue"
    }
</script>

<style scoped>

  .flex-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        list-style-type: none;

  }
    .flex-item li {


    }



</style>