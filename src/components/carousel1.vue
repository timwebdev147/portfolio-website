<template>
<!-- <h1>This is a carousel slideshow you can also click to slide(built from scratch)</h1> -->
    <div @mouseleave="mouseLeave" @mouseenter="mouseOver"   class="carousel-view">
        <nav-bar />
        <!-- <div><img src="../assets/background-1.jpg" alt=""></div> -->
        <!-- <div><img src="../assets/background-2.jpg" alt=""></div> -->
        <!-- <div><img src="../assets/background-3.jpg" alt=""></div> -->
        <transition-group class="carousel" tag="div">
            <div  id="card" class="card" :class="card.class"  :style="card.styleObject" v-for="card in cards" :key="card.id">
                <div>
                <h1 :class="{'slide-left': disabled, 'header1': abled, 'header1-1': active}" >{{card.header1}}</h1>
                <h2 :class="{'slide-right': disabled, 'header2': abled, 'header1-1': active}">{{card.header2}}</h2>
                <p :class="{'slide-right': disabled, 'cardPara': abled, 'header1-1': active, 'header1-1Mobile': activeMoblie}">{{card.paragraph}}</p>
                <a :class="{'slide-bottom': disabled, 'cardButton': abled, 'header1-1': active}" href=""><b>SERVICES</b></a>
                </div>
            </div>
        </transition-group>
        
            <button  class="carousel-controls__button" @click="previous"><i class="fa fa-angle-left"></i></button>
            <button  class="carousel-controls__button" @click="next"><i class="fa fa-angle-right"></i></button>

            <div class="indicator-container" >
                <div class="indicators" :class="indicator.classInidicator" v-for="indicator in indicators" :key="indicator.id"></div>
            </div>
        
        

    </div>
    <!-- <button>prev</button>
    <button @click="next()">next</button> -->
</template>

<script>
import navBar from './navBar.vue'
export default {
    name: "caRousel2",
    components: {
        navBar
    },
    data () {
        return {
            transit: false,
            disabled: false,
            active: true,
            activeMoblie: true,
            abled: false,
            cards: [
                {
                    header1: 'creative digital',
                    header2: 'agency',
                    paragraph: "Welcome to our private quarters on the web",
                    id:1,
                    styleObject: {
                    color: "black",
                    backgroundSize: 'cover',
                    backgroundPosition: 'top',
                    },
                    transit: null,
                    class: 'card1',
            //         
                },
                {
                    header1: 'creative digital',
                    header2: 'agency',
                    paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
                    id:2,
                    styleObject: {
                    color: "black",
                    backgroundSize: 'cover'
                    },
                    class: 'card2',
                    
                },
                {
                    header1: 'creative digital',
                    header2: 'agency',
                    paragraph: "Welcome to our private quarters on the web",
                    id:3,
                    styleObject: {
                    color: "black",
                    backgroundSize: 'cover'
                    },
                    transit: null,
                    class: 'card1',
            //         
                },
                {
                    header1: 'creative digital',
                    header2: 'agency',
                    paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
                    id:4,
                    styleObject: {
                    color: "black",
                    backgroundSize: 'cover'
                    },
                    class: 'card2',
                    
                },
                // {
                //     tittle: 'i am Slide D',
                //     id:4,
                //     color: "black",
                //     backgroundSize: '100% 100%'
                // },
                // {
                //     tittle: 'i am Slide E',
                //     id:5,
                //     color: "black",
                //     backgroundSize: '100% 100%'
                // }
            ],
            indicators: [
                {
                    classInidicator: 'indicating',
                    id: 1
                },
                {
                    classInidicator: '',
                    id: 2
                }
            ]
        }
    },

    // mounted () {
    //     this.setStep()
    // },
    mounted () {
        
    //    this.timer()
       this.animateOnLoad()
    //    timer;
    },

    methods: {
        // setStep () {
        //     const innerWidth = this.$refs.inner.scrollWidth
        //     const totalCards = this.cards.length
        //     this.step = `${innerWidth / totalCards}px`
        // },

        next () {
            const first = this.cards.shift()    
            this.cards = this.cards.concat(first);
            var card = document.querySelectorAll('.card')
            if (!document.querySelector('.card').classList.contains('transit2')) {
                
                // document.querySelectorAll[0]('.card').classList.add('transit')
                Array.from(card).forEach(card => card.classList.remove('transit'));
                Array.from(card).forEach(card => card.classList.add('transit2'));
               
            }
            const last = this.indicators.pop()
            this.indicators = [last].concat(this.indicators);
            setTimeout(() => this.abled = false, 1000)
            setTimeout(() => this.active = true, 100)
            setTimeout(() => this.activeMoblie = true, 190)
            setTimeout(() => this.disabled = true, 1000)
            setTimeout(() => this.disabled = false, 2000)
            setTimeout(() => this.abled = true, 2000)
            setTimeout(() => this.active = false, 1000)
            setTimeout(() => this.activeMoblie = false, 1000)

            
                

        },
        timeout () {
            // this.disabled = false;
        },

        animateOnLoad() {
            this.disabled = true;
            
            // var self = this;
            setTimeout(() => this.disabled = false, 1000)
            setTimeout(() => this.abled = true, 2000)
            setTimeout(() => this.active = false, 100)
            setTimeout(() => this.activeMoblie = false, 100)
        },
        
        previous () {
            const last = this.cards.pop()
            this.cards = [last].concat(this.cards);
            var card = document.querySelectorAll('.card')
            if (!document.querySelector('.card').classList.contains('transit')) {

                Array.from(card).forEach(card => card.classList.remove('transit2'));
                // document.querySelectorAll[0]('.card').classList.add('transit')
                Array.from(card).forEach(card => card.classList.add('transit'));
               
            }
            const first = this.indicators.shift()    
            this.indicators = this.indicators.concat(first);
            setTimeout(() => this.abled = false, 1000)
            setTimeout(() => this.active = true, 300)
            setTimeout(() => this.activeMoblie = true, 190)
            setTimeout(() => this.disabled = true, 1000)
            setTimeout(() => this.disabled = false, 2000)
            setTimeout(() => this.abled = true, 2000)
            setTimeout(() => this.active = false, 1000)
            setTimeout(() => this.activeMoblie = false, 1000)
        },
        timer () {
            var self = this
            this.timerr = setInterval(() => self.next(), 10000);
        },

        mouseOver() {
                // setInterval(() => this.next(), 4000);
            clearInterval(this.timerr)
            
            
        },
        mouseLeave() {
            
                this.timer()
                
            
        }


        // moveLeft () {
        //     this.innerStyles = {
        //         transform: `translateX(-${this.step})`
        //     }
        // }
    }
}
</script>

<style>
    nav{
        position: fixed;
        top: 0;
        z-index: 2;
    }
    /* .blueLine{
        text-decoration-line: underline;
        text-decoration-thickness: 3px;
        text-decoration-color: #058BCE;
    } */
    
    nav > ul > a{
        /* font-weight: bold; */
    }
     nav > ul > a:hover, #sidebar-2 > ul > a:hover{
        color: #058BCE;
    }
    .indicator-container{
        max-width: 10%;
        height: 50px;
        /* border: 1px solid black; */
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        bottom: 7%;

    }
    .indicator-container > div{
        width: 10px;
        height: 10px;
        border: 1px solid black;
        border-radius: 100%;
        margin-left: 5px;
    }
    .indicator-container > .indicating{
        background-color: black;
        width: 15px;
        height: 15px;
    }
    .fade-scroll{
        animation-name: fadeScroll;
        animation-duration: 0.5s;
        /* animation-fill-mode: forwards; */
        position: relative;
        /* top: 30px; */
    }
    @keyframes fadeScroll {
        from{
            top: 40px;
            opacity: 0;
        }
        to{
            top: 0px;
            opacity: 1;
        }
    }
    .fade-scroll-mobile{
        animation-name: fadeScrollMobile;
        animation-duration: 0.5s;
        /* animation-fill-mode: forwards; */
        position: relative;
        /* top: 30px; */
    }
    @keyframes fadeScrollMobile {
        from{
            top: 80px;
            opacity: 0;
        }
        to{
            top: 40px;
            opacity: 1;
        }
    }
</style>

<style scoped>
    .carousel-view{
        height: 140vh;
        width: 100%;
        display: flex;
        align-items: center;
        /* border: 1px solid black; */
        /* overflow: hidden; */
        /* flex-flow: row nowrap; */
        position: relative;
        flex-direction: column;
        /* flex-wrap: wrap; */
    }
    .carousel-view:hover > button:nth-of-type(1){
        left: -30px;
        transition-duration: 0.5s;
    }
    .carousel-view:hover > button:nth-of-type(2){
        right: -30px;
        transition-duration: 0.5s;
    }
    /* .nav{
        display: none;
    } */
    .carousel{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 100%;
        overflow: hidden;
        width: 100vw;
        
        height: 100%;
        /* border-radius: 4px; */

        /* border: 1px solid black; */
    }
    
    /* #carousel > div > img{
        height: 100%;
        width: 100%;
    } */
    /* #carousel > .inner{
        height: 100%;
        width: 100vw;
        float: left;
        white-space: nowrap;
    } */
    div.card.card2{
        background-image: url('/src/assets/img/backgrounds/header-bg.jpg');
    }
    div.card.card1{
        background-image: url('/src/assets/img/backgrounds/header-bg-two.jpg');
    }
    /* div.card.card3{
        background-image: url('/src/assets/background-3.jpg');
    } */
    /* div.card:nth-child(4){
        background-image: url('/src/assets/background-1.jpg');
    }
    div.card:nth-child(5){
        background-image: url('/src/assets/background-1.jpg');
    } */
    .card{
        width: 100vw;
        flex-shrink: 0;
        flex: 0 0 100%;
        display: flex;
        /* border: 1px solid black; */
        /* background-color: #39b1bd; */
        /* color: blavk; */
        /* border-radius: 4px; */
        /* flex-direction: column; */
        /* position: absolute; */
        /* right: 0;
        left: 0; */
        height: 100%;
        /* margin: 20px; */
        align-items: center;
        justify-content: center;
        transition: transform 0.8s ease-in-out;
    }
    .transit:nth-child(1){
        opacity: 1;
        animation-name: fade;
        animation-duration: 0.9s;
    }
    .transit2:nth-child(4){
        opacity: 1;
        animation-name: fade2;
        animation-duration: 0.9s;
    }
    @keyframes fade {
        from{
            opacity: 0;
        }
        to {
            opacity: 0;
        }
    }
    @keyframes fade2 {
        from{
            opacity: 0;
            /* z-index: -2; */
        }
        to {
            opacity: 0;
        }
    }
    button{
        margin: 10px 5px;
        position: absolute;
    }
    .carousel-view > button:nth-of-type(1){
        left: -100px;
        top: 40%;
        border: none;
        position: absolute;
        /* top: 40px;
        left: -100px; */
        padding: 35px;
        /* border-radius: 250px; */
        background-color: transparent;
        color: white;
    }
    .carousel-view > button:nth-of-type(2){
        right: -100px;
        top: 40%;
        border: none;
        position: absolute;
        /* top: 40px;
        left: -100px; */
        padding: 35px;
        /* border-radius: 250px; */
        background-color: transparent;
        color: white;
    }
    button > .fa-angle-left, button > .fa-angle-right{
        font-size: 25px;
    }

    .card > div{
        background-color: rgba(0, 0, 0, 0.3);
        width: 100%;
        height: 100%;
        display: flex;
        /* border: 1px solid black; */
        /* background-color: #39b1bd; */
        /* color: blavk; */
        /* border-radius: 4px; */
        position: relative;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    .card > div > h2{
        color: white;
        text-shadow: 2px 2px 4px grey;
        font-size: 70px;
        font-family: 'Times New Roman', Times, serif;
        /* border: 1px solid black; */
        text-transform: uppercase;
        /* width: 700px; */
        text-align: center;
        margin:10px 0px;
        /* margin-right: 100%; */
        position: absolute;
        word-wrap: break-word;
        /* transform: rotate(270deg); */
        top: 280px;
        /* right: -300px; */
    }
    .header2-1{
        /* margin-left: 120%; */
        display: none;
    }
    .header2{
        color: white;
        /* text-shadow: 2px 2px 4px grey; */
        font-size: 60px;
        /* border: 1px solid black; */
        text-transform: uppercase;
        /* width: 700px; */
        text-align: center;
        margin:10px 0px;
        /* margin-right: 100%; */
        position: absolute;
        word-wrap: break-word;
        /* transform: rotate(270deg); */
        top: 280px;
    }
    .card > div > h1{
        color: white;
        /* text-shadow: 2px 2px 4px grey; */
        font-size: 20px;
        /* margin-right: 100%; */

        /* border: 1px solid black; */
        text-transform: uppercase;
        /* width: 700px; */
        text-align: center;
        position: absolute;
        word-wrap: break-word;
        /* transform: rotate(270deg); */
        top: 220px;
        /* left: -200px; */
    }
    .header1-1{
        /* margin-right: 120%; */
        display: none;
    }
    .header1{
        color: white;
        /* text-shadow: 2px 2px 4px grey; */
        font-size: 20px;
        /* margin-right: 0; */

        /* border: 1px solid black; */
        text-transform: uppercase;
        /* width: 700px; */
        text-align: center;
        position: absolute;
        word-wrap: break-word;
        /* transform: rotate(270deg); */
        top: 220px;
        /* left: -200px; */
    }
    .slide-right{
        animation-name: slideRight;
        animation-duration: 1s;
        /* display: block; */
        /* animation-fill-mode: forwards; */
    }
    .slide-right-1{
        animation-name: slideRight1;
        animation-duration: 1s;
    }
    @keyframes slideRight {
        0% {
            margin-left: 100%;
            opacity: 0;
        }
        25% {
            margin-left: -25px;
        }
        50% {
            margin-left: 25px;
        }
        70% {
            margin-left: 0;
            opacity: 1;
            /* right: initial; */
        }
    }
    
    .slide-left{
        animation-name: slideLeft;
        animation-duration: 1.5s;
        /* animation-delay: 0.1s; */
    }
    @keyframes slideLeft {
        0% {
            margin-right: 100%;
            opacity: 0;
        }
        25% {
            margin-right: -25px;
        }
        50% {
            margin-right: 25px;
        }
        70% {
            margin-right: 0;
            opacity: 1;
            /* left: initial; */
        }
    }
    .slide-bottom{
        animation-name: slideBottom;
        animation-duration: 1.5s;
        /* animation-fill-mode: forwards; */
    }
    @keyframes slideBottom {
        0% {
            margin-bottom: -500px;
            opacity: 0;
        }
        25% {
            margin-bottom: 15px;
        }
        50% {
            margin-bottom: -15px;
        }
        70% {
            margin-bottom: 0;
            opacity: 1;
            /* bottom: initial; */
        }
    }
    .card > div > p{
        color: white;
        position: absolute;
        /* text-shadow: 2px 2px 4px grey; */
        
        /* display: none; */
        /* border: 1px solid black; */
        width: 650px;
        margin: 20px 0;
        /* margin-right: 2000px; */
        line-height: 2;
        top: 380px;
        /* right: -700px; */
        text-align: center;
        /* width: 500px; */
        /* text-align: justify; */
        font-size: 20px;
        /* animation-delay: 0.1s; */
    }
    .cardPara{
        color: white;
        position: absolute;
        /* text-shadow: 2px 2px 4px grey; */
        
        /* display: none; */
        /* border: 1px solid black; */
        width: 650px;
        margin: 20px 0;
        /* margin-right: 2000px; */
        line-height: 2;
        top: 380px;
        /* right: -700px; */
        text-align: center;
        /* width: 500px; */
        /* text-align: justify; */
        font-size: 20px;
        /* animation-delay: 0.3s; */
    }
    .card > div> a{
        border: 2px solid white;
        text-decoration: none;
        /* margin-bottom: 50px; */
        position: absolute;
        bottom: 350px;
        /* left: 100px; */
        color: white;
        /* background-color: rgb(184, 184, 236); */
        padding: 10px 40px;
        /* border-radius: 10px; */
    }
    .cardbutton{
        border: 2px solid white;
        text-decoration: none;
        /* margin-bottom: 50px; */
        position: absolute;
        bottom: 350px;
        /* left: 100px; */
        color: white;
        /* background-color: rgb(184, 184, 236); */
        padding: 10px 40px;
        /* border-radius: 10px; */
    }
    .card > div > a:hover{
        border: 2px solid #058BCE;
    }
</style>
<style scoped>
@media (min-width: 350px) and (max-width:750px) {
    .carousel-view{
        height: 80vh;
        width: 100%;
        display: flex;
        align-items: center;
        border: 1px solid black;
        /* overflow: hidden; */
        /* flex-flow: row nowrap; */
        position: relative;
        flex-direction: column;
        /* flex-wrap: wrap; */
    }
    .header1-1Mobile{
        /* visibility: hidden; */
    }
    

    button{
        margin: 10px 5px;
        position: absolute;
    }
    .carousel-view > button:nth-of-type(1){
        left: 0px;
        top: 40%;
        border: none;
        position: absolute;
        /* top: 40px;
        left: -100px; */
        padding: 35px;
        /* border-radius: 250px; */
        background-color: transparent;
        color: white;
    }
    .carousel-view > button:nth-of-type(2){
        right: 0px;
        top: 40%;
        border: none;
        position: absolute;
        /* top: 40px;
        left: -100px; */
        padding: 35px;
        /* border-radius: 250px; */
        background-color: transparent;
        color: white;
    }
    button > .fa-angle-left, button > .fa-angle-right{
        font-size: 25px;
    }

    .card > div{
        background-color: rgba(0, 0, 0, 0.3);
        width: 100%;
        height: 100%;
        display: flex;
        /* border: 1px solid black; */
        /* background-color: #39b1bd; */
        /* color: blavk; */
        /* border-radius: 4px; */
        position: relative;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    .card > div > h2{
        color: white;
        /* text-shadow: 2px 2px 4px grey; */
        font-size: 250%;
        /* border: 1px solid black; */
        text-transform: uppercase;
        /* width: 700px; */
        text-align: center;
        margin:10px 0px;
        /* margin-right: 100%; */
        position: absolute;
        word-wrap: break-word;
        /* transform: rotate(270deg); */
        top: 25%;
        /* right: -300px; */
    }
    .header2-1{
        /* margin-left: 120%; */
        display: none;
    }
    .header2{
        color: white;
        /* text-shadow: 2px 2px 4px grey; */
        font-size: 60px;
        /* border: 1px solid black; */
        text-transform: uppercase;
        /* width: 700px; */
        text-align: center;
        margin:10px 0px;
        /* margin-right: 100%; */
        position: absolute;
        word-wrap: break-word;
        /* transform: rotate(270deg); */
        top: 280px;
    }
    .card > div > h1{
        color: white;
        /* text-shadow: 2px 2px 4px grey; */
        font-size: 75%;
        /* margin-right: 100%; */

        /* border: 1px solid black; */
        text-transform: uppercase;
        /* width: 700px; */
        text-align: center;
        position: absolute;
        word-wrap: break-word;
        /* transform: rotate(270deg); */
        top: 17%;
        /* left: -200px; */
    }
    .header1-1{
        /* margin-right: 120%; */
        display: block;
        animation-name: hey;
        animation-duration: 0.25s;
        animation-fill-mode: forwards;
    }
    @keyframes hey {
        from{opacity: 1;}
        to{opacity: 0;}
    }
    .header1{
        color: white;
        /* text-shadow: 2px 2px 4px grey; */
        font-size: 20px;
        /* margin-right: 0; */

        /* border: 1px solid black; */
        text-transform: uppercase;
        /* width: 700px; */
        text-align: center;
        position: absolute;
        word-wrap: break-word;
        /* transform: rotate(270deg); */
        top: 220px;
        /* left: -200px; */
    }
    .card > div > p{
        color: white;
        position: absolute;
        /* text-shadow: 2px 2px 4px grey; */
        
        /* display: none; */
        /* border: 1px solid black; */
        height: 30%;
        word-wrap: break-word;
        width: 60%;
        margin: 20px 0;
        /* margin-right: 2000px; */
        line-height: 4ex;
        top: 39%;
        /* right: -700px; */
        text-align: center;
        /* width: 500px; */
        /* text-align: justify; */
        font-size: 15px;
        /* animation-delay: 0.1s; */
    }
    .card > div> a{
        border: 2px solid white;
        text-decoration: none;
        /* margin-bottom: 50px; */
        position: relative;
        bottom: -30%;
        /* left: 100px; */
        color: white;
        /* background-color: rgb(184, 184, 236); */
        padding: 10px 40px;
        /* border-radius: 10px; */
    }
    .cardPara{
        color: white;
        position: absolute;
        /* text-shadow: 2px 2px 4px grey; */
        
        /* display: none; */
        /* border: 1px solid black; */
        width: 650px;
        margin: 20px 0;
        /* margin-right: 2000px; */
        line-height: 2;
        top: 380px;
        /* right: -700px; */
        text-align: center;
        /* width: 500px; */
        /* text-align: justify; */
        font-size: 20px;
        /* animation-delay: 0.3s; */
    }
}
</style>