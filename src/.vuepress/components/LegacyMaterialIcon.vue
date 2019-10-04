<template>
  <div class="iconify-holder">
    <i class="mdi" v-bind:class="iconName"></i>
  </div>
</template>

<script>
export default {
    props: ['iconName']
}
</script>

<style scoped>
@import url("https://cdn.materialdesignicons.com/4.4.95/css/materialdesignicons.min.css");
</style>
