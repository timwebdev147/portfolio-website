<template>
<!-- <h1>This is a carousel slideshow you can also click to slide(built from scratch)</h1> -->
    <div id="clients"   class="carousel-view">
        <!-- <div><img src="../assets/background-1.jpg" alt=""></div> -->
        <!-- <div><img src="../assets/background-2.jpg" alt=""></div> -->
        <!-- <div><img src="../assets/background-3.jpg" alt=""></div> -->
        <div>
        <transition-group class="carousel" tag="div">
            <div  id="card" class="card"  v-for="card in cards" :key="card.id">
                <!-- <h1>{{card.header}}</h1>
                <p>{{card.paragraph}}</p>
                <a href="">book now</a> -->
                <div>
                <img :src="card.image1" alt="">
                <img :src="card.image2" alt="">
                <img :src="card.image3" alt="">
                <img :src="card.image4" alt="">
                <img :src="card.image5" alt="">
                <img :src="card.image6" alt="">
                </div>
            </div>
        </transition-group>
        </div>
            <!-- <button @mouseleave="mouseLeave" @mouseenter="mouseOver" class="carousel-controls__button" @click="previous"><i class="fa fa-angles-left"></i></button> -->
            <!-- <button @mouseleave="mouseLeave" @mouseenter="mouseOver" class="carousel-controls__button" @click="next"><i class="fa fa-angles-right"></i></button> -->

        
        
        

    </div>
    <!-- <button>prev</button>
    <button @click="next()">next</button> -->
</template>

<script>
export default {
        name: "customerSlider",
    data () {
        return {
            transit: false,
            cards: [
                {
                    
                    id:1,
                    image1: `${require('../assets/img/clients/envato-logo.png')}`,
                    image2: `${require('../assets/img/clients/geforce-logo.png')}`,
                    image3: `${require('../assets/img/clients/uber-logo.png')}`,
                    image4: `${require('../assets/img/clients/airbnb-logo.png')}`,
                    image5: `${require('../assets/img/clients/bootstrap-logo.png')}`,
                    image6: `${require('../assets/img/clients/tmobile-logo.png')}`


            //         
                },
                {
                    
                    id:2,
                    image1: `${require('../assets/img/clients/woo-logo.png')}`,
                    image2: `${require('../assets/img/clients/valve-logo.png')}`,
                    image3: `${require('../assets/img/clients/talenthouse-logo.png')}`,
                    image4: `${require('../assets/img/clients/amazon-logo.png')}`,
                    image5: `${require('../assets/img/clients/river-logo.png')}`,
                    image6: `${require('../assets/img/clients/audio-logo.png')}`
            //         
                },
                {
                    
                    id:3,
                    image1: `${require('../assets/img/clients/envato-logo.png')}`,
                    image2: `${require('../assets/img/clients/geforce-logo.png')}`,
                    image3: `${require('../assets/img/clients/uber-logo.png')}`,
                    image4: `${require('../assets/img/clients/airbnb-logo.png')}`,
                    image5: `${require('../assets/img/clients/bootstrap-logo.png')}`,
                    image6: `${require('../assets/img/clients/tmobile-logo.png')}`
            //         
                },
                {
                    
                    id:4,
                    image1: `${require('../assets/img/clients/woo-logo.png')}`,
                    image2: `${require('../assets/img/clients/valve-logo.png')}`,
                    image3: `${require('../assets/img/clients/talenthouse-logo.png')}`,
                    image4: `${require('../assets/img/clients/amazon-logo.png')}`,
                    image5: `${require('../assets/img/clients/river-logo.png')}`,
                    image6: `${require('../assets/img/clients/audio-logo.png')}`
            //         
                }
                
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
        height: 32vh;
        /* border: 1px solid black; */
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        /* overflow: hidden; */
        /* flex-flow: row nowrap; */
        /* position: relative; */
        /* flex-direction: column; */
        /* flex-wrap: wrap; */
    }
    .carousel-view > div{
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .carousel{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 100%;
        overflow: hidden;
        width: 100%;
        height: 100%;
        /* border-radius: 4px; */

        /* border: 1px solid black; */
    }
    
    .card{
        width: 100%;
        flex: 0 0 80vw;
        display: flex;
        /* border: 1px solid black; */
        /* background-color: #39b1bd; */
        /* color: blavk; */
        /* border-radius: 4px; */
        /* flex-direction: column; */
        height: 100%;
        /* margin: 20px; */
        align-items: center;
        justify-content: center;
        transition: transform 0.6s ease-in-out;
    }
    .card > div{
        /* border: 1px solid black; */
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }
    .card > div > img{
        width: 140px;
        height: 60px;
        /* border: 1px solid black; */
    }
    .transit:nth-child(1){
        opacity: 1;
        animation-name: fade;
        animation-duration: 0.7s;
    }
    .transit2:nth-child(4){
        opacity: 1;
        animation-name: fade2;
        animation-duration: 0.7s;
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
    
</style>
<style scoped>
@media (min-width: 350px) and (max-width:750px) {
    .carousel-view{
        height: 20vh;
        /* border: 1px solid black; */
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        /* overflow: hidden; */
        /* flex-flow: row nowrap; */
        /* position: relative; */
        /* flex-direction: column; */
        /* flex-wrap: wrap; */
    }
    .carousel-view > div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .carousel{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 100%;
        overflow: hidden;
        width: 100%;
        height: 100%;
        /* border-radius: 4px; */

        /* border: 1px solid black; */
    }
    
    .card{
        width: 100%;
        flex: 0 0 100vw;
        display: flex;
        /* border: 1px solid black; */
        /* background-color: #39b1bd; */
        /* color: blavk; */
        /* border-radius: 4px; */
        /* flex-direction: column; */
        height: 100%;
        /* margin: 20px; */
        align-items: center;
        justify-content: center;
        transition: transform 0.6s ease-in-out;
    }
    .card > div{
        /* border: 1px solid black; */
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .card > div > img{
        width: 100px;
        height: 70px;
        /* border: 1px solid black; */
    }
}
</style>