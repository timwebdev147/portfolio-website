<template>
    <div id="team" class="team">
        <div class="topic">
            <h1 id="teamHeader" >{{header}}</h1>
            <p id="teamParagraph">My name is <span style="color: #058bce;">Akinsanmi Timothy</span> and I'm a full stack developer. </p>
        </div>
        <carousel-team/>
    </div>
</template>

<script>
import carouselTeam from './carouselTeam.vue'
export default {
  components: { carouselTeam },
    name: 'appTeam',
    data() {
        return {
            header: 'team'
        }
    },
    methods: {
        updateScroll () {
            this.scrollPosition = window.scrollY;
            var topicHeader = document.querySelector('#teamHeader')
            var topicParagraph = document.querySelector('#teamParagraph')
            if (this.scrollPosition > 1350) {
              topicHeader.classList.add('fadeScroll')
            }
            if (this.scrollPosition > 1450) {
              topicParagraph.classList.add('fadeScroll')
            }
            console.log(this.scrollPosition)
        }
    },
    mounted() {
      window.addEventListener('scroll', this.updateScroll)
    }
    
}
</script>

<style scoped>
    .team{
        height: calc(110vh);
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 30px;
        /* justify-content: flex-end; */
    }
    .team > .topic{
        width: 100%;
        height: 30vh;
        /* border: 1px solid black; */
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }
    .team > .topic > h1{
        color: #058BCE;
        /* color: white; */
        font-size: 38px;
        text-transform: uppercase;
        margin: 0;
        position: relative;
         top: 40px;
            opacity: 0;
    }
    .team > .topic > p{
        color: black;
        font-size: 17px;
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
@media (min-width: 350px) and (max-width:750px) {
    .team{
        height: 672px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* border: 1px solid black; */
        padding-top: 30px;
        /* justify-content: flex-end; */
    }
    .team > .topic{
        width: 100%;
        height: 179px;
        /* border: 1px solid black; */
        display: flex;
        padding-top: 30px;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }
    .team > .topic > h1{
        color: #058BCE;
        /* color: white; */
        font-size: 20px;
        text-transform: uppercase;
        margin: 0;
    }
    .team > .topic > p{
        color: black;
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