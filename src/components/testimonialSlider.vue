<template>

    <div   class="carousel-view">
        <div @mouseleave="mouseLeave()" @mouseenter="mouseOver()">
        <transition-group class="carousel" tag="div">
            <div  id="card" class="card"  v-for="card in cards" :key="card.id">
                
                <div class="reviews"> 
                    <div>
                        <div><img :src="card.image1" alt=""></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>
                    </div>
                    <p><strong>{{card.name1}},</strong> CEO Talenthouse</p>
                </div>
                <div class="reviews">
                    <div>
                        <div><img :src="card.image2" alt=""></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>
                    </div>
                    <p><strong>{{card.name2}},</strong> CEO Talenthouse</p>
                </div>
            </div>
        </transition-group>
        </div>
    </div>
</template>

<script>
export default {
        name: "testimonialSlider",
    data () {
        return {
            transit: false,
            cards: [
                {
                    
                    id:1,
                    image1: `${require('../assets/img/team/4.png')}`,
                    image2: `${require('../assets/img/team/3.png')}`,
                    name1: 'Victor Vella',
                    name2: 'Lora Jones'
                    


            //         
                },
                {
                    
                    id:2,
                    image1: `${require('../assets/img/team/1.png')}`,
                    image2: `${require('../assets/img/team/2.png')}`,
                    name1: 'Martin Santorini',
                    name2: 'Pierre Bronson'
                    
            //         
                },
                {
                    
                    id:3,
                    image1: `${require('../assets/img/team/4.png')}`,
                    image2: `${require('../assets/img/team/3.png')}`,
                    name1: 'Victor Vella',
                    name2: 'Lora Jones'
            //         
                },
                {
                    
                    id:4,
                    image1: `${require('../assets/img/team/1.png')}`,
                    image2: `${require('../assets/img/team/2.png')}`,
                    name1: 'Martin Santorini',
                    name2: 'Pierre Bronson'
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
            this.timerr = setInterval(() => self.next(), 7000);
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
        height: 40vh;
        /* border: 1px solid black; */
        width: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        background-color: transparent;
        /* overflow: hidden; */
        /* flex-flow: row nowrap; */
        /* position: relative; */
        /* flex-direction: column; */
        /* flex-wrap: wrap; */
    }
    .carousel-view > div{
        width: 80%;
        height: 80%;
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
        justify-content: space-between;
        transition: transform 0.6s ease-in-out;
    }
    .reviews{
        display: flex;
        width: calc( 48% - 80px);
        height: 100%;
        padding: 0 40px;
        background-color: white;
        /* justify-content: space-around; */
        
        flex-direction: column;
        
    }
    .reviews > p{
        color: rgba(68, 67, 67, 0.848);
        align-self: flex-end;
        font-size: 14px;
    }
    .reviews > div{
        display: flex;
        
        justify-content: space-between;
        align-items: center;
        /* border: 1px solid black; */
        width: 100% ;
        /* padding:0 40px; */
        height: 100%;
    }
    .reviews > div > div{
        width: 22%;
        height: 100px;
        /* border: 1px solid black; */
        border-radius: 200px;
        overflow: hidden;
    }
    div > img{
        width: 100%;
        height: 100%;
    }
    .reviews > div > p{
        font-family: sans-serif;
        font-size: 14px;
        width: 75%;
        line-height: 1.5;
        text-align: left;
        color: rgba(68, 67, 67, 0.848);
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
        height: 65vh;
        /* border: 1px solid black; */
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        /* overflow: hidden; */
        /* flex-flow: row nowrap; */
        /* position: relative; */
        /* flex-direction: column; */
        /* flex-wrap: wrap; */
    }
    .carousel-view > div{
        width: 90%;
        height: 80%;
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
        flex: 0 0 90vw;
        display: flex;
        /* border: 1px solid black; */
        /* background-color: #39b1bd; */
        /* color: blavk; */
        /* border-radius: 4px; */
        /* flex-direction: column; */
        height: 100%;
        /* margin: 20px; */
        align-items: center;
        justify-content: space-between;
        transition: transform 0.6s ease-in-out;
    }
    .reviews{
        display: flex;
        width: calc( 48%);
        height: 100%;
        /* border: 1px solid black; */
        padding: 0 ;
        /* padding-top: 20px; */
        border-radius: 0 20px 0 20px;
        background-color: white;
        justify-content: center;
        align-items: center;
        
        flex-direction: column;
        
    }
    .reviews > p{
        color: rgba(68, 67, 67, 0.848);
        align-self: flex-end;
        font-size: 14px;
    }
    .reviews > div{
        display: flex;
        flex-direction: column;
        
        justify-content: center;
        align-items: center;
        /* border: 1px solid black; */
        width: 100% ;
        /* padding:0 40px; */
        height: 100%;
    }
    .reviews > div > div{
        width: 100px;
        height: 100px;
        /* border: 1px solid black; */
        border-radius: 200px;
        overflow: hidden;
    }
    div > img{
        width: 100%;
        height: 100%;
    }
    .reviews > div > p{
        font-family: sans-serif;
        font-size: 12px;
        width: 100%;
        line-height: 1.7;
        text-align: center;
        color: rgba(68, 67, 67, 0.848);
        /* border: 1px solid black; */
    }
}
</style>