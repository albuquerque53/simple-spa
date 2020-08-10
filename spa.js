const about = {
  
  data() {
    return {
      title: 'About'
    }
  },

  template: '<p>About this Company</p>',

  mounted() {
    this.$root.title = this.title  
  }

}

const contact = {
  
  data() {
    return {
      title: 'Contact'
    }
  },

  template: '<p>Get in Touch!</p>',

  mounted() {
    this.$root.title = this.title
  }

}

const routes = [
  { path: '/', component: home },
  { path: '/about', component: about },
  { path: '/contact', component: contact },
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  template: `
    <div>      
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
      <h2>{{ title }}</h2>
      <main>
        <router-view></router-view>
      </main>
    </div>
    `,
  data() {
    return {
      title: 'My First SPA'
    }
  },
  router
});
