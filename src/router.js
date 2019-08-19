import Vue from 'vue'
import Router from 'vue-router'
import Forecast from '@/views/Forecast'
import CitySearch from '@/views/CitySearch'
import CurrentWeather from '@/views/CurrentWeather'
import Seattle from '@/views/Seattle'
import Charts from '@/views/Charts'
import Videos from '@/views/Videos'
import Resources from '@/views/Resources'
import HistoricalSearch from '@/views/HistoricalSearch'
import ChartsNew from '@/views/ChartsNew'
import HighsOverTime from '@/views/HighsOverTime'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CitySearch',
      component: CitySearch
    },
      {
          path: '/:cityId/current',
          name: 'CurrentWeather',
          component: CurrentWeather
      },
      {
          path: '/:cityId/forecast',
          name: 'Forecast',
          component: Forecast
      },
      {
          path: '/Seattle',
          name: 'Seattle',
          component: Seattle
      },
      {
          path: '/Charts',
          name: 'Charts',
          component: Charts
      },
      {
          path: '/ChartsNew',
          name: 'ChartsNew',
          component: ChartsNew
      },
      {
          path: '/Resources',
          name: 'Resources',
          component: Resources
      },
      {
          path: '/Videos',
          name: 'Videos',
          component: Videos
      },
      {
          path: '/HistoricalSearch',
          name: 'HistoricalSearch',
          component: HistoricalSearch
      },
      {
          path: '/HighsOverTime',
          name: 'HighsOverTime',
          component: HighsOverTime
      }

  ]
})
