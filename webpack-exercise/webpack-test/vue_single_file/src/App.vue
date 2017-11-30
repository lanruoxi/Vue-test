<template>
  <div>
      {{text}}
     <router-view></router-view>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                text:'我是app.vue'
            }
        }
    }
</script>

<style scoped>
/* 加入scoped后只对template中的元素生效 */
    div {
        background-color:yellow;
    }

</style>
