<template>
    <div>
        <p>High and low temperatures for 2017 and 2018</p>
        <p>
            <line-chart :options="chartOptions" :chart-data="chartData"/>
        </p>
    </div>
</template>

<script>
    import axios from 'axios';
    import LineChart from '@/components/LineChart';

    export default {
        name      : 'HighsOverTime',
        data() {
            let a_dataset = [
                {
                    label          : 'High Temperature 2018',
                    backgroundColor: '#f87979',
                    fill           : false,
                    data           : []
                },
                {
                    label          : 'High Temperature 2017',
                    backgroundColor: 'blue',
                    fill           : false,
                    data           : []
                },
                {
                    label          : 'High Temperature 2016',
                    backgroundColor: 'yellow',
                    fill           : false,
                    data           : []
                }
            ];
            return {
                chartOptions: {
                    responsive         : true,
                    maintainAspectRatio: false
                },
                labels      : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                chartData   : {
                    labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                    datasets: a_dataset
                },
                results     : null,
                errors      : [],
                Months      : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            }
        },
        mounted() {
            // First High Temperature call
            let highTemperatures1 = null, highTemperatures2 = null, highTemperatures3 = null;
            axios.get('https://www.ncdc.noaa.gov/cdo-web/api/v2/data', {
                headers: {
                    token: 'AlOCstuxmDrmZEVMyzYRHkJtzIOjDLBD',
                },
                params : {
                    stationid : "GHCND:USW00024233",
                    units     : "standard",
                    datatypeid: "EMXT",
                    limit     : 100,
                    startdate : "2018-01-01",
                    enddate   : "2018-12-31",
                    datasetid : "GSOM"
                }
            }).then(response => {
                this.results      = response.data.results;
                highTemperatures1 = this.results.map(item => {
                    return item.value
                });

                //Second High Temperature call
                axios.get('https://www.ncdc.noaa.gov/cdo-web/api/v2/data', {
                    headers: {
                        token: 'AlOCstuxmDrmZEVMyzYRHkJtzIOjDLBD',
                    },
                    params : {
                        stationid : "GHCND:USW00024233",
                        units     : "standard",
                        datatypeid: "EMXT",
                        limit     : 100,
                        startdate : "2017-01-01",
                        enddate   : "2017-12-31",
                        datasetid : "GSOM"
                    }
                }).then(response => {
                    this.results      = response.data.results;
                    highTemperatures2 = this.results.map(item => {
                        return item.value
                    });

                    // Third High Temperature call

                    axios.get('https://www.ncdc.noaa.gov/cdo-web/api/v2/data', {
                        headers: {
                            token: 'AlOCstuxmDrmZEVMyzYRHkJtzIOjDLBD',
                        },
                        params : {
                            stationid : "GHCND:USW00024233",
                            units     : "standard",
                            datatypeid: "EMXT",
                            limit     : 100,
                            startdate : "2016-01-01",
                            enddate   : "2016-12-31",
                            datasetid : "GSOM"
                        }
                    }).then(response => {
                        this.results      = response.data.results;
                        highTemperatures3 = this.results.map(item => {
                            return item.value
                        });

                        //put it all together
                        let a_dataset  = [
                            {
                                label          : 'High Temperature 2018',
                                backgroundColor: '#f87979',
                                fill           : false,
                                data           : highTemperatures1
                            },
                            {
                                label          : 'High Temperature 2017',
                                backgroundColor: 'blue',
                                fill           : false,
                                data           : highTemperatures2
                            },
                            {
                                label          : 'High Temperature 2016',
                                backgroundColor: 'yellow',
                                fill           : false,
                                data           : highTemperatures3
                            }
                        ];
                        this.chartData = {
                            labels      : this.labels,
                            datasets    : a_dataset,
                            chartOptions: this.chartOptions
                        }
                    }).catch(error => {
                        console.log("emxt", error);
                        this.errors.push(error);
                    });
                }).catch(error => {
                    console.log("emxt", error);
                    this.errors.push(error);
                });
            }).catch(error => {
                console.log("emxt", error);
                this.errors.push(error);
            });
        },
        components: {
            'line-chart': LineChart
        }
    }
</script>

<style scoped>
</style>