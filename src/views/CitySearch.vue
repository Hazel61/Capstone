<template>
    <div class="top-color">
        <h1 class='center-me'>Climate Change in Seattle</h1>
        <img src="../assets/storm-clouds.jpeg" alt="An image of a storm cloud" class="move-right">


        <p>I have lived in Seattle for most of my life, and I know the city is warming up. For my final project in Seattlle University's Wats 4000 course, I thought it would be interesting to dive into NOAA's and Open Weather Map's API's and look at some historical data on Seattle. I am using Vue and Vue-chartsjs under the hood. Click below to see the current conditions.
        </p>
        <p>
            <button v-on:click="getSeattleWeather" type="submit">Current Weather</button>
        </p>

        <ul class="cities" v-if="results && results.list.length > 0">
            <li v-for="(city,index) in results.list" :key="index">
                <h2>{{ city.name }}, {{ city.sys.country }}</h2>

                <!--<weather-summary v-bind:weatherData="city.weather"></weather-summary>-->
                <weather-conditions v-bind:conditions="city.main"></weather-conditions>
            </li>
        </ul>

            <p>
                <router-link class="link-style" v-bind:to="{name:'Seattle'}">2018 Seattle high/low temps</router-link>
            </p>

        <error-list v-bind:errorList="errors"></error-list>
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
        color: red
    }
    .weatherSummary {
        display: inline-block;
        width: 100px;
    }

    a {
        color: #42b983;
    }
    .center-me {
        text-align: center;
    }
    .move-right {
        float: right;
    }

</style>


