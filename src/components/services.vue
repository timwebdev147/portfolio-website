<template>
    <div id="services" class="services">
        <div class="topic">
            <h1 id="serviceHeader" >{{header}}</h1>
            <p id="serviceParagraph" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div class="grid">
            <div class="column">
                <div><i class="fa fa-desktop"></i></div>
                <h1>Web and Graphic Design</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing 
                    elit. Minima maxime quam architecto quo inventore 
                    harum ex magni, dicta impedit.
                </p>
            </div>
            <div class="column">
                <div><i class="fa fa-desktop"></i></div>
                <h1>Branding</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing 
                    elit. Minima maxime quam architecto quo inventore 
                    harum ex magni, dicta impedit.
                </p>
            </div><div class="column">
                <div><i class="fa fa-desktop"></i></div>
                <h1>Front End Development</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing 
                    elit. Minima maxime quam architecto quo inventore 
                    harum ex magni, dicta impedit.
                </p>
            </div><div class="column">
                <div><i class="fa fa-desktop"></i></div>
                <h1>Back End Development</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing 
                    elit. Minima maxime quam architecto quo inventore 
                    harum ex magni, dicta impedit.
                </p>
            </div><div class="column">
                <div><i class="fa fa-desktop"></i></div>
                <h1>Responsive Design</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing 
                    elit. Minima maxime quam architecto quo inventore 
                    harum ex magni, dicta impedit.
                </p>
            </div><div class="column">
                <div><i class="fa fa-desktop"></i></div>
                <h1>Consulting</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing 
                    elit. Minima maxime quam architecto quo inventore 
                    harum ex magni, dicta impedit.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "appServices",
    data() {
        return{
            header: 'services',
            scrollPosition: 0
        }
    },
    methods: {
        updateScroll () {
            this.scrollPosition = window.scrollY;
            var topicHeader = document.querySelector('#serviceHeader')
            var topicParagraph = document.querySelector('#serviceParagraph')
            if (this.scrollPosition > 400) {
              topicHeader.classList.add('fadeScroll')
            }
            if (this.scrollPosition > 500) {
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

<style>
    .fadeScroll{
        animation-name: fadeScroll;
        animation-duration: 0.7s;
        animation-fill-mode: forwards;
        position: relative;
        /* top: 30px; */
    }
    @keyframes fadeScroll {
        0%{
            top: 50px;
            opacity: 0;
        }
        /* 50%{
            top: 35px;
            opacity: 0.5;
        } */
        100%{
            top: 0px;
            opacity: 1;
        }
    }
    </style>
    <style>
    @media (min-width: 350px) and (max-width:750px) {
        .fadeScrollMobile{
        animation-name: fadeScrollMobile;
        animation-duration: 0.7s;
        animation-fill-mode: forwards;
        position: relative;
        /* top: 30px; */
    }
    @keyframes fadeScrollMobile {
        0%{
            top: 50px;
            opacity: 0;
        }
        /* 50%{
            top: 35px;
            opacity: 0.5;
        } */
        100%{
            top: 0px;
            opacity: 1;
        }
    }
    }
    
    
</style>

<style scoped>
    .services{
        width: 100%;
        height: 140vh;
        /* border: 1px solid black; */
        background-image: url('/src/assets/img/backgrounds/services-bg.jpg');
        background-size: cover;
        display: flex;
        flex-direction: column;
        padding-top: 30px;
        align-items: center;
    }
    .services > .topic{
        width: 100%;
        height: 30vh;
        /* border: 1px solid black; */
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }
    .services > .topic > h1{
        color: #058BCE;
        /* color: white; */
        font-size: 38px;
        position: relative;
         top: 40px;
            opacity: 0;
        text-transform: uppercase;
        margin: 0;
    }
    .services > .topic > p{
        color: white;
        font-size: 17px;
        padding-left: 10px;
        padding-right: 10px;
        position: relative;
         top: 40px;
            opacity: 0;
        line-height: 1.5;
        /* font-weight: 400; */
        width: calc(80% - 20px);
        /* margin-bottom: 0; */
    }
    .services > .grid{
        display: flex;
        flex-wrap: wrap;
        /* border: 1px solid black; */
        justify-content: space-between;
        width: 80%;
        height: 85vh;
        margin-top: 20px;
    }
    .services > .grid > div{
        width: calc(32% - 20px);
        height: 50%;
        /* border: 1px solid black; */
        /* margin-bottom: 20px; */
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }
    .grid > .column > div{
        border-radius: 400px;
        /* border: 3px solid transparent; */
        background-color: #058BCE;
        width: 25%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition-duration: 0.1s;
    }
    .grid > .column > div:hover{
        box-shadow: 0px 0px 6px 1px white;
        /* transition-delay: 0.2s; */
        /* border: 3px solid rgba(250, 250, 250, 0.4); */
    }
    .column > div > .fa-desktop{
        font-size: 35px;
    }
    .grid > .column > h1{
        font-size: 20px;
    }
    .grid > .column > p{
        font-size: 13px;
        line-height: 2;
        width: 90%;
        margin-bottom: 0;
    }
</style>
<style scoped>
@media (min-width: 350px) and (max-width:750px) {
    .services{
        width: 100%;
        height: calc(110vh + 80px);
        /* border: 1px solid black; */
        background-image: url('/src/assets/img/backgrounds/services-bg.jpg');
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px 0;
    }
    .services > .topic{
        width: 100%;
        height: 20vh;
        /* border: 1px solid red; */
        display: flex;
        flex-direction: column;
        padding-top: 30px;
        align-items: center;
        /* justify-content: flex-end; */
    }
    .services > .topic > h1{
        color: #058BCE;
        /* color: white; */
        font-size: 20px;
        text-transform: uppercase;
        margin: 0;
    }
    .services > .topic > p{
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
    .services > .grid{
        display: flex;
        flex-wrap: wrap;
        /* border: 1px solid black; */
        justify-content: space-between;
        width: 90%;
        height: 90vh;
        margin-top: 20px;
    }
    .services > .grid > .column{
        width: calc(50% - 10px);
        height: 34%;
        /* border: 1px solid black; */
        /* margin-bottom: 20px; */
        padding: 0 5px;
        display: block;
        margin-bottom: 20px;
        flex-direction: column;
        align-items: center;
        /* justify-content: flex-end; */
    }
    .grid > .column > div{
        border-radius: 400px;
        /* border: 3px solid transparent; */
        display: inline-flex;
        background-color: #058BCE;
        width: 70px;
        height: 70px;
        /* display: flex; */
        justify-content: center;
        justify-self: center;
        align-items: center;
        transition-duration: 0.1s;
    }
    .grid > .column > div:hover{
        box-shadow: 0px 0px 6px 1px white;
        /* transition-delay: 0.2s; */
        /* border: 3px solid rgba(250, 250, 250, 0.4); */
    }
    .column > div > .fa-desktop{
        font-size: 25px;
    }
    .grid > .column > h1{
        font-size: 15px;
        /* border: 1px solid black; */
    }
    .grid > .column > p{
        font-size: 10px;
        line-height: 1.7;
        width: 90%;
        display: inline-flex;
        justify-self: center;
        margin-bottom: 0;
    }
}
</style>