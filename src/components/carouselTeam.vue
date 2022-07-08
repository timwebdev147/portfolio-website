<template>
<h1>This is a carousel slideshow you can also click to slide(built from scratch)</h1>
    <div   class="carousel-view">
        <!-- <div><img src="../assets/background-1.jpg" alt=""></div> -->
        <!-- <div><img src="../assets/background-2.jpg" alt=""></div> -->
        <!-- <div><img src="../assets/background-3.jpg" alt=""></div> -->
        <transition-group class="carousel" tag="div">
            <div  id="card" class="card" :class="card.class"  :style="card.styleObject" v-for="card in cards" :key="card.id">
                <div class="team-image">

                </div>
                <div class="team-about">
                <h1>{{card.header}}</h1>
                <h2>{{card.header2}}</h2>
                <p>{{card.paragraph}}</p>
                <div>
                    <a href=""><i class="fa fa-twitter"></i></a>
                    <a href=""><i class="fa fa-twitter"></i></a>
                    <a href=""><i class="fa fa-twitter"></i></a>
                </div>
                </div>
                        </div>
        </transition-group>
        
            <button @mouseleave="mouseLeave" @mouseenter="mouseOver" class="carousel-controls__button" @click="previous"><i class="fa fa-angle-left"></i></button>
            <button @mouseleave="mouseLeave" @mouseenter="mouseOver" class="carousel-controls__button" @click="next"><i class="fa fa-angle-right"></i></button>

             <div class="indicator-container" >
                <div class="indicators" :class="indicator.classInidicator" v-for="indicator in indicators" :key="indicator.id"></div>
            </div>
        
        
        

    </div>
   
    <!-- <button>prev</button>
    <button @click="next()">next</button> -->
</template>

<script>
export default {
    name: "carouselTeam",
    data () {
        return {
            transit: false,
            cards: [
                {
                    header: 'Akinsanmi Timothy',
                    header2: "Front End Developer",
                    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    id:1,
                    styleObject: {
                    color: "black",
                    backgroundSize: '100% 100%'
                    },
                    transit: null,
                    class: 'card1',
                    classInidicator: 'indicator'
            //         
                },
                {
                    header: 'Akinsanmi Timothy',
                    header2: "Full Stack Developer",
                    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    styleObject: {
                    color: "black",
                    backgroundSize: '100% 100%'
                    },
                    class: 'card2',
                    classInidicator: ''
                    
                },
                {
                    header: 'Akinsanmi Timothy',
                    header2: "Back End Developer",
                    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    id:3,
                    styleObject: {
                    color: "black",
                    backgroundSize: '100% 100%'
                    },
                    class: 'card3',
                   
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
                    id:1
                },
                {
                    classInidicator: '',
                    id:2
                },
                {
                    classInidicator: '',
                    id: 3
                }
            ]
        }
    },

    // mounted () {
    //     this.setStep()
    // },
    mounted () {
        // this.cards[0].classInidicator = 'indicator'
        // console.log(this.cards[0]);
        // this.cards[0].classInidicator = ''
        // console.log(this.cards[0]);
       this.timer()
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
        },
        timer () {
            var self = this
            this.timerr = setInterval(() => self.next(), 4000);
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

<style scoped>
    .carousel-view{
        height: 80vh;
        margin-top: -60px;
        width: calc(70%);
        /* padding: 0 10px; */
        display: flex;
        /* border: 1px solid black; */
        align-items: center;
        /* overflow: hidden; */
        /* flex-flow: row nowrap; */
        position: relative;
        flex-direction: column;
        /* flex-wrap: wrap; */
    }
    .carousel{
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        width: 100%;
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
    div.card.card2 > .team-image{
                background-image: url('/src/assets/img/team/T1-retouch.png');

    }
    div.card.card3 > .team-image{
                background-image: url('/src/assets/img/team/T1-retouch.png');

    }
    div.card.card1 > .team-image{
                background-image: url('/src/assets/img/team/T1-retouch.png');

    }
    /* div.card:nth-child(4){
        background-image: url('/src/assets/background-1.jpg');
    }
    div.card:nth-child(5){
        background-image: url('/src/assets/background-1.jpg');
    } */
    .card{
        width: 100%;
        flex: 0 0 100%;
        display: flex;
        /* border: 1px solid black; */
        /* background-color: #39b1bd; */
        /* color: blavk; */
        border-radius: 4px;
        flex-direction: row;
        height: 100%;
        /* margin: 20px; */
        /* align-items: center; */
        justify-content: center;
        transition: transform 0.8s ease-in-out;
    }
    .card > .team-image{
        width: 30%;

        /* border: 2px solid black; */
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
        align-self: flex-end;
        height: 95%;
    }
    .card > .team-about{
         width: 65%;
         padding: 100px 20px;
        /* border: 2px solid black; */
        min-height: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .transit:nth-child(1){
        opacity: 1;
        animation-name: fade;
        animation-duration: 0.9s;
    }
    .transit2:nth-child(3){
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
            z-index: -2;
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
        left: -70px;
        top: 40%;
         border: none;
        position: absolute;
        /* top: 40px;
        left: -100px; */
        padding: 35px;
        border-radius: 250px;
        background-color: transparent;
        color: black;
        
    }
    .carousel-view > button:nth-of-type(2){
        right: -70px;
        top: 40%;
         border: none;
        position: absolute;
        /* top: 40px;
        left: -100px; */
        padding: 35px;
        border-radius: 250px;
        background-color: transparent;
        color: black;
    }
    button > .fa-angle-left, button > .fa-angle-right{
        font-size: 30px;
        font-weight: 600;
        text-shadow: 2px 2px 4px black;
    }
    .card > .team-about > h1{
        /* color: white;
        text-shadow: 2px 2px 4px grey; */
        font-size: 30px;
        text-transform: uppercase;
        /* border: 1px solid black; */
        /* width: 700px; */
        text-align: center;
        /* position: absolute; */
        word-wrap: break-word;
        margin: 10px 0;
        /* transform: rotate(270deg); */
        top: 20px;
        left: 100px;
    }
    .card > .team-about > h2{
        color: #058bce;
        font-weight: 100;
        text-transform: uppercase;
        font-size: 20px;
        margin: 10px 0;
    }
    .card > .team-about > p{
        /* color: white; */
        opacity: 0.7;
        /* position: absolute; */
        /* text-shadow: 2px 2px 4px grey; */
        /* border: 1px solid black; */
        top: 200px;
        
        left: 100px;
        text-align: left;
        margin: 10px 0;
        /* width: 500px; */
        font-size: 15px;
    }
    .card > a{
        border: 1px solid rgb(184, 184, 236);
        text-decoration: none;
        /* position: absolute; */
        top: 400px;
        left: 100px;
        color: white;
        background-color: rgb(184, 184, 236);
        padding: 20px 50px;
        border-radius: 10px;
    }
    
</style>
<style scoped>
@media (min-width: 350px) and (max-width:750px) {
    .carousel-view{
        height: 50vh;
        margin-top: 0px;
        width: calc(80%);
        /* padding: 0 10px; */
        /* border: 1px solid black; */
        display: flex;
        align-items: center;
        /* overflow: hidden; */
        /* flex-flow: row nowrap; */
        bottom: 150px;
        position: relative;
        flex-direction: column;
        /* flex-wrap: wrap; */
    }
    .carousel{
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        width: 100%;
        height: 100%;
        /* border-radius: 4px; */

        /* border: 1px solid black; */
    }
    .card{
        width: 100%;
        flex: 0 0 100%;
        display: flex;
        /* border: 1px solid black; */
        /* background-color: #39b1bd; */
        /* color: blavk; */
        border-radius: 4px;
        flex-direction: row;
        height: 100%;
        /* margin: 20px; */
        /* align-items: center; */
        justify-content: center;
        transition: transform 0.8s ease-in-out;
    }
    .card > .team-image{
        width: 50%;
        /* border: 2px solid black; */
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 100%;
    }
    .card > .team-about{
         width: 60%;
         padding: 20px 10px;
        /* border: 2px solid black; */
        min-height: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    button{
        margin: 10px 5px;
        position: absolute;
    }
    
    .carousel-view > button:nth-of-type(1){
        left: -60px;
        top: 40%;
         border: none;
        position: absolute;
        /* top: 40px;
        left: -100px; */
        padding: 25px;
        border-radius: 250px;
        background-color: transparent;
        color: black;
    }
    
    .card > a{
        border: 1px solid rgb(184, 184, 236);
        text-decoration: none;
        /* position: absolute; */
        /* top: 400px; */
        /* left: 100px; */
        color: white;
        background-color: rgb(184, 184, 236);
        padding: 20px 50px;
        border-radius: 10px;
    }
    
    .carousel-view > button:nth-of-type(2){
        right: -60px;
        top: 40%;
         border: none;
        position: absolute;
        /* top: 40px;
        left: -100px; */
        padding: 25px;
        border-radius: 250px;
        background-color: transparent;
        color: black;
    }
    button > .fa-angle-left, button > .fa-angle-right{
        font-size: 30px;
        font-weight: 600;
    }
    .card > .team-about > h1{
        /* color: white;
        text-shadow: 2px 2px 4px grey; */
        font-size: 20px;
        text-transform: uppercase;
        /* border: 1px solid black; */
        /* width: 700px; */
        text-align: left;
        /* position: absolute; */
        word-wrap: break-word;
        margin: 10px 0;
        /* transform: rotate(270deg); */
        top: 20px;
        left: 100px;
    }
    .card > .team-about > h2{
        color: #058bce;
        font-weight: 100;
        text-align: left;
        text-transform: uppercase;
        font-size: 15px;
        margin: 10px 0;
    }
    .card > .team-about > p{
        /* color: white; */
        opacity: 0.7;
        /* position: absolute; */
        /* text-shadow: 2px 2px 4px grey; */
        /* border: 1px solid black; */
        top: 200px;
        
        left: 100px;
        text-align: left;
        margin: 10px 0;
        /* width: 500px; */
        font-size: 10px;
    }
    .indicator-container{
        width: 200px;
        height: 20px;
        /* border: ; */
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;
        bottom: 0px;

    }
    .indicator-container > div{
        width: 5px;
        height: 5px;
        border: 1px solid black;
        border-radius: 100%;
    }
    .indicator-container > .indicating{
        background-color: black;
        width: 10px;
        height: 10px;
    }
}
</style>