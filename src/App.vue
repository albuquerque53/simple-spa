<template>
  <div id="app">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'My First SPA!'
    }
  }
}
</script>

<style>
body {
    background-color: #1a2330;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
}

div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

div nav {
    padding: 30px;
}

div main {
    text-align: center;
}

div main p {
    font-size: 20px;
}

nav ul, nav li {
    display: inline-block;
    list-style: none;
    margin: 0;
    padding: 0;
}

nav ul li a {
    display: block;
    background-color: rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
    padding: 10px 20px;
    color: white;
    text-decoration: none;
    border-radius: 4px;
}

nav ul li a:hover {
    background-color: rgba(0, 0, 0, 0.5);
}

/* ANIMAÇÕES */

body {
    overflow: hidden;
    width: 100%;
}

.transition {
  position: relative;
}

.animated {
  position: absolute;
  top: 0;
}

.content {
    width: 100%;
}

</style>
