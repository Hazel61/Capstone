<template>
    <div class="top-color">
        <!--<img src="../assets/Storm_over_seattle.jpg" alt="An image of a storm cloud">-->

        <h1 class='center-me'>Climate Change in Seattle</h1>
        <div class="flex-container">
            <div flex-item>
                <p>I have lived in Seattle for most of my life, I know the city is warming up, and the climate here is changing. For my final capstone project in Seattle University's Web Technology (WATS) certificate, I thought it would be interesting to dive into NOAA's and Open Weather Map's API's and look at some historical data on Seattle's average temperature during the summer and winter, and how that has fluctuated over the last 50 years. I was also curious if Seattle has changed in average rainfall amounts, and if the pattern of rainfall has changed as well.  I am using Vue and Vue-chartsjs under the hood. Click below to see the current conditions. When you click on the button to the right, current Seattle weather is requested from Open Weather Map's api. A link to this API can be found in the resources tab at the top of the page. The links below makes an API call to Noaa's historical database, which gives data on from one recording station in Seattle. The first link is for the high and low temperatures in 2018. The second link is for a chart that shows the highs for 2016 to 2018.
                </p>
            </div>
            <div class="flex-item">

                        <router-link class="link-style" v-bind:to="{name:'ChartsNew'}">Bar chart example, 2018</router-link>
                <p>
                    Home in the navbar will take you back.
                </p>
            </div>
            <div class= "flex-item">

                        <router-link class="link-style" v-bind:to="{name:'HighsOverTime'}">Line chart example, 2016-2018</router-link>
                <p>
                    Home in the navbar will take you back.
                </p>
            </div>
            <div class="weather-widget">
                <p>
                    <button class="big-button" v-on:click="getSeattleWeather" type="submit">Current Seattle Weather</button>
                </p>
                <ul class="cities" v-if="results && results.list.length > 0">
                    <li v-for="(city,index) in results.list" :key="index">
                        <h2>{{ city.name }}, {{ city.sys.country }}</h2>
                        <weather-conditions v-bind:conditions="city.main"></weather-conditions>
                    </li>
                </ul>
            </div>

         </div>
    </div>
</template>

<script>
    import {API} from '@/common/api';
    // import {API} from '@/common/api2'
    import ErrorList from '@/components/ErrorList';
    import WeatherSummary from '@/components/WeatherSummary';
    import WeatherConditions from '@/components/WeatherConditions';


    export default {
        name: 'CitySearch',
        data() {
            return {
                results: null,
                errors: [],
                query: 'Seattle'
            }
        },
        methods: {
            getCities: function () {
                API.get('find', {
                    params: {
                        q: this.query
                    }
                })
                .then(response => {
                    this.results = response.data
                })
                .catch(error => {
                    this.errors.push(error)
                });
            },
            getSeattleWeather: function () {
                API.get('find', {
                    params: {
                        q: this.query
                    }
                })
                    .then(response => {
                        this.results = response.data
                    })
                    .catch(error => {
                        this.errors.push(error)
                    });
            }
        },
        components: {
            'weather-summary': WeatherSummary,
            'weather-conditions': WeatherConditions,
            'error-list': ErrorList
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    h2 {
        color: blue;
    }
    .errors li {
        color: red;
        border: solid red 1px;
        padding: 5px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {background-color: #328CC1;
        display: inline-block;
        width: 300px;
        min-height: 300px;
        border: solid 1px #e8e8e8;
        padding: 10px;
        margin: 5px;
    }
    .link-style {
        color: white;
    }

    a {
        color: #42b983;
    }
    .center-me {
        text-align: center;
    }


    .big-button {
        height: 40px;
        border: solid 1px #328cc1;
        margin: 5px;
    }

    .flex-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

    }
    .weather-widget {
        border: solid 1px #333333;
    }
    .flex-item {
        background-color: #328cc1;
        color: white;
        width: 300px;
        min-height: 100px;
        border: solid 2px black;
        border-radius: 4px;
        padding: 10px;
        margin: 5px;
    }

</style>


