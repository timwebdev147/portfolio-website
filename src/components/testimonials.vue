<template>
    <div id="testimonials" class="testimonials">
        <div class="topic">
            <h1 id="testimonialsHeader">{{header}}</h1>
            <p id="testimonialsParagraph">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <testimonial-slider/>
    </div>
</template>

<script>
import testimonialSlider from './testimonialSlider.vue'
export default {
    name: 'appTestimonials',
    components: {
        testimonialSlider
    },
    data() {
        return {
            header: 'testimonials',
        }
    },
    methods: {
        updateScroll () {
            this.scrollPosition = window.scrollY;
            var topicHeader = document.querySelector('#testimonialsHeader')
            var topicParagraph = document.querySelector('#testimonialsParagraph')
            if (this.scrollPosition > 3100) {
              topicHeader.classList.add('fadeScroll')
            }
            if (this.scrollPosition > 3200) {
              topicParagraph.classList.add('fadeScroll')
            }
            console.log(this.scrollPosition)
        },
        mouseEnter() {
            this.active = true;
            this.notActive = false
        },
        mouseLeave() {
            this.active = false;
            this.notActive = true;
        }
    },
    mounted() {
      window.addEventListener('scroll', this.updateScroll)
    }

    
}
</script>

<style>

</style>

<style scoped>
    .testimonials{
        height: 85vh;
        width: 100%;
        background-color: #266dd1;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .testimonials > .topic{
        width: 100%;
        height: 30vh;
        /* border: 1px solid black; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }
    .testimonials > .topic > h1{
        /* color: #058BCE; */
        color: white;
        font-size: 38px;
        text-transform: uppercase;
        margin: 0;
        position: relative;
         top: 40px;
            opacity: 0;
    }
    .testimonials > .topic > p{
        color: white;
        font-size: 20px;
        padding-left: 10px;
        padding-right: 10px;
        line-height: 1.5;
        /* font-weight: 400; */
        width: calc(80% - 20px);
        position: relative;
         top: 40px;
            opacity: 0;
        /* margin-bottom: 0; */
    }
</style>

<style scoped>
    
</style>

<style scoped>
@media (min-width: 350px) and (max-width:750px) {
    .testimonials{
        height: 75vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px 0;
        background-color: #266dd1;
    }
    .testimonials > .topic{
        width: 100%;
        height: 20vh;
        /* border: 1px solid red; */
        display: flex;
        flex-direction: column;
        /* padding-top: 30px; */
        align-items: center;
        justify-content: center;
    }
    
    .testimonials > .topic > h1{
        color: #fff;
        /* color: white; */
        font-size: 20px;
        text-transform: uppercase;
        margin: 0;
    }
    .testimonials > .topic > p{
        color: white;
        font-size: 15px;
        padding-left: 25px;
        padding-right: 25px;
        /* line-height: 1.5; */
        /* border: 1px solid black; */
        /* font-weight: 400; */
        width: calc(100% - 50px);
        /* margin-bottom: 0; */
    }
}
</style>

