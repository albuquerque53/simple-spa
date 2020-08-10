<template>
<div>
  <p>This is the first page</p>
</div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      title: 'My First Single Page Application!'
    }
  },
  
  mounted() {
    this.$root.title = this.title;
  }

}

</script>

<style>

</style>
