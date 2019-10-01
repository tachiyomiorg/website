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
    padding: 0.25rem 0.5rem;
    margin: 0;
    font-size: 0.85em;
    border-radius: 3px; 
    display: inline;
}

.material-icons {
    font-size: 16px;
    position: relative;
    top: 0.2rem;
}
</style>