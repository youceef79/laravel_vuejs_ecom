import { App, plugin } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import { InertiaProgress } from '@inertiajs/progress'
import routes from './routes'
import store from './store'
import Vuex from 'vuex';
//import { mapActions } from "vuex"
InertiaProgress.init()

Vue.use(plugin)

const el = document.getElementById('app')


new Vue({
  render: h => h(App, {
    props: {
      initialPage: JSON.parse(el.dataset.page),
      resolveComponent: name => require(`./components/${name}`).default,
      store: store,
      router: routes
   /* transformProps: props => {
    	return {
    		...props,
    	} 
    }, 
    */
    },
  }),
}).$mount(el)