<template>
    <div id="pricing" class="pricing">
        <div class="topic">
            <h1 id="pricingHeader">{{header}}</h1>
            <p id="pricingParagraph">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div class="priceTag">
            <div class="basic" v-for="priceTag in priceTags" :key="priceTag.id">
                <div>
                    <h1>{{priceTag.header}}</h1>
                    <h1>${{priceTag.price}}</h1>
                </div>
                <div>
                    <p>
                        Free Download
                    </p>
                    <p>
                        1000+ Softwear

                    </p>
                    <p>
                        Full Access

                    </p>
                    <p>
                        Free Update

                    </p>
                </div>
                <div>
                    <p>
                        Live Support
                    </p>
                    <a href="">
                        sign up
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'appPricing',
    data () {
        return {
            header: 'pricing',
            priceTags: [
                {
                    id: 1,
                    header: 'basic',
                    price: 39
                },
                {
                    id: 2,
                    header: 'medium',
                    price: 89
                },
                {
                    id: 3,
                    header: 'premium',
                    price: 119
                }
            ]
        }
    },
    methods: {
        updateScroll () {
            this.scrollPosition = window.scrollY;
            var topicHeader = document.querySelector('#pricingHeader')
            var topicParagraph = document.querySelector('#pricingParagraph')
            if (this.scrollPosition > 3000) {
              topicHeader.classList.add('fadeScroll')
            }
            if (this.scrollPosition > 3100) {
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

</style>

<style scoped>
    .pricing{
        height: 130vh;
        width: 100%;
        /* border: 1px solid black; */
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .pricing > .topic{
        width: 100%;
        height: 30vh;
        /* border: 1px solid black; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }
    .pricing > .topic > h1{
        color: #058BCE;
        /* color: white; */
        font-size: 38px;
        text-transform: uppercase;
        margin: 0;
        position: relative;
         top: 40px;
            opacity: 0;
    }
    .pricing > .topic > p{
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
    .priceTag{
        display: flex;
        width: 80%;
        height: 70vh;
        margin-top: 12vh;
        justify-content: space-evenly;
    }
    .priceTag > div:hover{
        box-shadow: 0px 0px 15px 0.5px rgb(213, 209, 209);
        transition: 0.2s;
    }
    .priceTag > div{
        width: 30%;
        height: 100%;
        /* border: 1px solid black; */
    }
    .priceTag > div{
        width: 30%;
        height: 100%;
        /* border: 1px solid black; */
    }
    
    .basic > div:nth-child(1){
        width: 100%;
        height: 30%;
        background-color: #266dd1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .basic > div:nth-child(1) > h1{
        margin: 0;
        text-transform: uppercase;
    }
    .basic > div:nth-child(1) > h1:nth-child(2){
        font-size: 40px;
    }
    .basic > div:nth-child(2){
        width: 100%;
        height: 40%;
        /* border: 1px solid black; */
    }
    .basic > div:nth-child(3){
        width: 100%;
        height: 30%;
        /* border: 1px solid black; */
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f7f7f7;
    }
    .basic > div:nth-child(2) > p:nth-child(1), .basic > div:nth-child(2) > p:nth-child(3), .basic > div:nth-child(3) > p{
        width: 100%;
        height: 25%;
        /* border: 1px solid black; */
        background-color: #f7f7f7;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgba(0, 0, 0, 0.8);
        
        margin: 0;
        
    }
    .basic > div:nth-child(2) > p:nth-child(2), .basic > div:nth-child(2) > p:nth-child(4){
        width: 100%;
        height: 25%;
        /* border: 1px solid black; */
        background-color: #e6e6e6;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgba(0, 0, 0, 0.8);
        margin: 0;
        
    }
    .basic > div:nth-child(3) > a{
        text-decoration: none;
        color: white;
        text-transform: uppercase;
        background-color: #058bce;
        padding: 20px 30px;
        margin-top: 20px;
    }
    .basic > div:nth-child(3) > a:hover{
        background-color: #57aeda;
    }
</style>

<style scoped>
@media (min-width: 350px) and (max-width:750px) {

    .pricing{
        height: 130vh;
        width: 100%;
        /* border: 1px solid black; */
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .pricing > .topic{
        width: 100%;
        height: 30vh;
        /* border: 1px solid black; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }
    .pricing > .topic > h1{
        color: #058BCE;
        /* color: white; */
        font-size: 38px;
        text-transform: uppercase;
        margin: 0;
        position: relative;
         top: 40px;
            opacity: 0;
    }
    .pricing > .topic > p{
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
    .priceTag{
        display: flex;
        width: 80%;
        height: 70vh;
        margin-top: 12vh;
        justify-content: space-evenly;
    }
    .priceTag > div:hover{
        box-shadow: 0px 0px 15px 0.5px rgb(213, 209, 209);
        transition: 0.2s;
    }
    .priceTag > div{
        width: 30%;
        height: 100%;
        /* border: 1px solid black; */
    }
    .priceTag > div{
        width: 30%;
        height: 100%;
        /* border: 1px solid black; */
    }
    
    .basic > div:nth-child(1){
        width: 100%;
        height: 30%;
        background-color: #266dd1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .basic > div:nth-child(1) > h1{
        margin: 0;
        text-transform: uppercase;
    }
    .basic > div:nth-child(1) > h1:nth-child(2){
        font-size: 40px;
    }
    .basic > div:nth-child(2){
        width: 100%;
        height: 40%;
        /* border: 1px solid black; */
    }
    .basic > div:nth-child(3){
        width: 100%;
        height: 30%;
        /* border: 1px solid black; */
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #f7f7f7;
    }
    .basic > div:nth-child(2) > p:nth-child(1), .basic > div:nth-child(2) > p:nth-child(3), .basic > div:nth-child(3) > p{
        width: 100%;
        height: 25%;
        /* border: 1px solid black; */
        background-color: #f7f7f7;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgba(0, 0, 0, 0.8);
        
        margin: 0;
        
    }
    .basic > div:nth-child(2) > p:nth-child(2), .basic > div:nth-child(2) > p:nth-child(4){
        width: 100%;
        height: 25%;
        /* border: 1px solid black; */
        background-color: #e6e6e6;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgba(0, 0, 0, 0.8);
        margin: 0;
        
    }
    .basic > div:nth-child(3) > a{
        text-decoration: none;
        color: white;
        text-transform: uppercase;
        background-color: #058bce;
        padding: 20px 30px;
        margin-top: 20px;
    }
    .basic > div:nth-child(3) > a:hover{
        background-color: #57aeda;
    }
}
</style>