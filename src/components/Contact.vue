<template>
<div>
  <p>Get in Touch!</p>
</div>
</template>

<script>
export default {
  name: 'Contact',

  data() {
    return {
      title: 'Contact'
    }
  },

  mounted() {
    this.$root.title = this.title
  }


}
</script>
