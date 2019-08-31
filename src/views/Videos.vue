<template>
    <div>
        <h1>Videos</h1>
        <p>Crash Course has a series of videos aimed at younger children that provide an introduction to climate science. In the video below, hosted by Sabrina Cruz, kids will find an answer to the question "Do you know what the difference is between weather and climate?"</p>
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

  }


.child {
    width: 100px;
    height: 100px;
    margin: auto;
}

</style>