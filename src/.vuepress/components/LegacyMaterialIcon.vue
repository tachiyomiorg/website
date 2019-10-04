<template>
  <div class="legacy-material-holder">
    <i class="legacy-material-icons mdi" v-bind:class="iconName"></i>
  </div>
</template>

<script>
export default {
    props: ['iconName']
}
</script>

<style scoped>
@import url("https://cdn.materialdesignicons.com/4.4.95/css/materialdesignicons.min.css");

.legacy-material-holder {
    color: #476582;
    margin: 0;
    font-size: 0.85em;
    border-radius: 3px;
    display: inline;
}

.legacy-material-icons {
    font-size: 1.35em;
}
</style>
