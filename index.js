import Home from 'index.html'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import calcount from 'pages/calorieCounter'
import About from 'pages/about.html'


      const Foo = { template: '<div>foo</div>' }
      const Bar = { template: '<div>bar</div>' }

      // 2. Define some routes
      // Each route should map to a component. The "component" can
      // either be an actual component constructor created via
      // `Vue.extend()`, or just a component options object.
      // We'll talk about nested routes later.
      const routes = [
        { path: '/home', component: Home },
        { path: '/about', component: About }
      ]

      // 3. Create the router instance and pass the `routes` option
      // You can pass in additional options here, but let's
      // keep it simple for now.
      const router = new VueRouter({
        routes: routes,
        linkActiveClass: "is-active"
        
      })

      // 4. Create and mount the root instance.
      // Make sure to inject the router with the router option to make the
      // whole app router-aware.
      const app = new Vue({
        router,
        data: {
          bus: bus
        },
        render: x => x(App)
      }).$mount('#app')

      // Now the app has started!



