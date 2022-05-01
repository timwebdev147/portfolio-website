<template>
<h1>This is a carousel slideshow you can also click to slide(built from scratch)</h1>
    <div   class="carousel-view">
        <!-- <div><img src="../assets/background-1.jpg" alt=""></div> -->
        <!-- <div><img src="../assets/background-2.jpg" alt=""></div> -->
        <!-- <div><img src="../assets/background-3.jpg" alt=""></div> -->
        <transition-group class="carousel" tag="div">
            <div  id="card" class="card" :class="card.class"  :style="card.styleObject" v-for="card in cards" :key="card.id">
                <h1>{{card.header}}</h1>
                <p>{{card.paragraph}}</p>
                <a href="">book now</a>
                        </div>
        </transition-group>
        
            <button @mouseleave="mouseLeave" @mouseenter="mouseOver" class="carousel-controls__button" @click="previous"><i class="fa fa-angles-left"></i></button>
            <button @mouseleave="mouseLeave" @mouseenter="mouseOver" class="carousel-controls__button" @click="next"><i class="fa fa-angles-right"></i></button>

        
        
        

    </div>
    <!-- <button>prev</button>
    <button @click="next()">next</button> -->
</template>

<script>
export default {
    name: "caRousel",
    data () {
        return {
            transit: false,
            cards: [
                {
                    header: 'Mountain Resort',
                    paragraph: "This is a place you would love to be to enjoy whatever, whatever and whatever.",
                    id:1,
                    styleObject: {
                    color: "black",
                    backgroundSize: '100% 100%'
                    },
                    transit: null,
                    class: 'card1',
            //         
                },
                {
                    header: 'Fuji Mountain',
                    paragraph: "This is a place you would love to be to enjoy whatever, whatever and whatever.",
                    styleObject: {
                    color: "black",
                    backgroundSize: '100% 100%'
                    },
                    class: 'card2',
                    
                },
                {
                    header: 'Freezing Winterlake',
                    paragraph: "This is a place you would love to be to enjoy whatever, whatever and whatever.",
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
            ]
        }
    },

    // mounted () {
    //     this.setStep()
    // },
    mounted () {
        
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
        height: 90vh;
        width: 100%;
        display: flex;
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
        border: 1px solid black;
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
    div.card.card1{
        background-image: url('/src/assets/background-1.jpg');
    }
    div.card.card2{
        background-image: url('/src/assets/background-2.jpg');
    }
    div.card.card3{
        background-image: url('/src/assets/background-3.jpg');
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
        flex-direction: column;
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
        left: 0;
        top: 40%;
         border: 1px solid rgb(65, 65, 184);
        position: absolute;
        /* top: 40px;
        left: -100px; */
        padding: 35px;
        border-radius: 250px;
        background-color: rgba(65, 65, 184);
        color: white;
    }
    .carousel-view > button:nth-of-type(2){
        right: 0;
        top: 40%;
         border: 1px solid rgb(65, 65, 184);
        position: absolute;
        /* top: 40px;
        left: -100px; */
        padding: 35px;
        border-radius: 250px;
        background-color: rgb(65, 65, 184);
        color: white;
    }
    button > .fa-angles-left, button > .fa-angles-right{
        font-size: 20px;
    }
    .card > h1{
        color: white;
        text-shadow: 2px 2px 4px grey;
        font-size: 60px;
        /* border: 1px solid black; */
        /* width: 700px; */
        text-align: center;
        /* position: absolute; */
        word-wrap: break-word;
        /* transform: rotate(270deg); */
        top: 20px;
        left: 100px;
    }
    .card > p{
        color: white;
        /* position: absolute; */
        text-shadow: 2px 2px 4px grey;
        /* border: 1px solid black; */
        top: 200px;
        left: 100px;
        text-align: center;
        /* width: 500px; */
        font-size: 25px;
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
    button{
        margin: 10px 5px;
        position: absolute;
    }
    .carousel-view > button:nth-of-type(1){
        left: 0;
        top: 40%;
         border: 1px solid rgb(65, 65, 184);
        position: absolute;
        /* top: 40px;
        left: -100px; */
        padding: 25px;
        border-radius: 250px;
        background-color: rgba(65, 65, 184);
        color: white;
    }
    .carousel-view > button:nth-of-type(2){
        right: 0;
        top: 40%;
         border: 1px solid rgb(65, 65, 184);
        position: absolute;
        /* top: 40px;
        left: -100px; */
        padding: 25px;
        border-radius: 250px;
        background-color: rgb(65, 65, 184);
        color: white;
    }
    button > .fa-angles-left, button > .fa-angles-right{
        font-size: 20px;
    }
    .card > h1{
        color: white;
        text-shadow: 2px 2px 4px grey;
        font-size: 50px;
        /* border: 1px solid black; */
        /* width: 700px; */
        height: 20%;
        text-align: center;
        
        /* position: absolute; */
        word-wrap: break-word;
        /* transform: rotate(270deg); */
        top: 20px;
        left: 100px;
    }
    .card > p{
        color: white;
        /* position: absolute; */
        text-shadow: 2px 2px 4px grey;
        /* border: 1px solid black; */
        /* height: 30%; */
        /* top: 200px; */
        /* left: 100px; */
        text-align: center;
        /* width: 500px; */
        font-size: 25px;
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
}
</style>