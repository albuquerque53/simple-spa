<template>
<div>
  <p>About Us</p>
</div>
</template>

<script>
export default {
  name: 'About',

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
</script>
