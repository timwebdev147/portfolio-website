<template>
  
  <background2/>
  <app-services/>
  <app-team/>
  <app-portfolio/>
  <app-pricing/>
  <customer-slider/>
  <app-testimonials/>
  <contact-us/>
  <app-footer/>
</template>

<script>

import background2 from './components/background2.vue'
import appServices from './components/services.vue'
import appTeam from './components/team.vue'
import appPortfolio from './components/portfolio.vue'
import appTestimonials from './components/testimonials.vue'
import contactUs from './components/contactUs.vue'
import CustomerSlider from './components/customerSlider.vue'
import appFooter from './components/footer.vue'

export default {
  name: 'App',
  components: {
    appServices,
    background2,
    appTeam,
    appPortfolio,
    appTestimonials,
    contactUs,
    CustomerSlider,
    appFooter
}
}
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  overflow-x: hidden;
}
body{
  margin: 0;

}
</style>
