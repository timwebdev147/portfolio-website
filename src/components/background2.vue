<template>

    <div class="background">
        <!-- <navBar/> -->
        <ca-rousel-2/>
    </div>
</template>

<script>
// import navBar from './navBar.vue'
import caRousel2 from './carousel1.vue'

export default {
    name: 'backGround2',
  components: {
    // HelloWorld,
    // backGround,
    // navBar,
    caRousel2
  }
}
</script>

<style scoped>
.background{
    border: 1px solid black;
    
}
</style>