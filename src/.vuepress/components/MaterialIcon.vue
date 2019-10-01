<template>
  <div class="material-holder">
    <i class="material-icons">{{ iconName }}</i>
  </div>
</template>

<script>
export default {
  props: ['iconName']
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

.material-holder {
    color: #476582;
    background-color: rgba(27,31,35,0.05);    
    width: fit-content;
    display: inline;
}

.material-icons {
    font-size: 18px;
}
</style>