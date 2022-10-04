<template>
    <div id="portfolio" class="portfolio">
        <div class="topic">
            <h1 id="portfolioHeader">{{header}}</h1>
            <p id="portfolioParagraph">Few Projects I've done in different categories.</p>
        </div>
        <div class="buttons">
            <a href="">all</a>
            <a href="">wordpress</a>
            <a href="">Vue</a>
            <a href="">react</a>
            <a href="">laravel</a>
        </div>
        <div class="portfolioGrid" >
            <div :style="portfolio.style" class="portfolioProject" :class="portfolio.class" v-for="portfolio in portfolios" :key="portfolio.id">
                <div @mouseleave="mouseLeave()" @mouseenter="mouseEnter()" @click="mouseEnter()" :class="{portfolioProjectHover: active}">
                    <h1 :class="{projectHoverHeader: active}">{{portfolio.skill}}</h1>
                    <p>{{portfolio.category}}</p>
                    <button @click="imgClick(portfolio)">
                    
                        <i :class="{projectIcon: active}" class="fa fa-arrow-up-right-from-square"></i>
                    </button>
                </div>
                <div  v-if="portfolio.show" class="modal">
            <button @click="closeModal(portfolio)">
                <i class="fa fa-times"></i>
            </button>

            <iframe :src="portfolio.webLink" frameborder="0"></iframe>
        </div>

                <!-- <div class="webmodal">

                </div> -->
                <a class="weblink" target="_blank" :href="portfolio.webLink">{{portfolio.skill}}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'appPortfolio',

    data() {
        return {
            header: 'portfolio',
            active: true,
            notActive: false,
            portfolios: [
                {
                    style:{
                     backgroundImage: `url(${require('@/assets/bankress3.jpg')})`,  
                    },
                    id: 1,
                    skill: 'Bankress party world',
                    category: 'vue',
                    webLink: 'https://bankress-party-world.vercel.app/'
                },
                {
                    style:{
                     backgroundImage: `url(${require('@/assets/kitchenmanager1.jpg')})`,  
                    },
                    id: 2,
                    skill: 'Kitchen Manager web app',
                    category: 'react and laravel',
                    webLink: 'https://kitchen-manager.vercel.app/'
                },
                

            ]
        }
    },

    methods: {
        updateScroll () {
            this.scrollPosition = window.scrollY;
            var topicHeader = document.querySelector('#portfolioHeader')
            var topicParagraph = document.querySelector('#portfolioParagraph')
            if (this.scrollPosition > 2100) {
              topicHeader.classList.add('fadeScroll')
            }
            if (this.scrollPosition > 2200) {
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
        },
        imgClick(portfolio) {
            portfolio.show = true;
            console.log('show');
        },
        closeModal(portfolio){
            portfolio.show = false
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
    /* div{
        border: 1px solid black;
        width: 100%;
        height: 100vh;
    } */
    .portfolio {
        height:  140vh ;
        background-color: #ececec;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 30px;
        /* justify-content: flex-end; */
    }
    .portfolio > .topic{
        width: 100%;
        height: 30vh;
        /* border: 1px solid black; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
    }
    .portfolio > .topic > h1{
        color: #058BCE;
        /* color: white; */
        font-size: 38px;
        text-transform: uppercase;
        margin: 0;
        position: relative;
         top: 40px;
            opacity: 0;
    }
    .portfolio > .topic > p{
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
    .buttons{
        width: 65%;
        height: 15vh;
        /* border: 1px solid black; */
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0 10px;
    }
    .buttons > a{
        padding: 10px 25px;
        background-color: #058BCE;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
    }
    .portfolioGrid{
        height: 80vh;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    .portfolioProject{
        width: 45%;
        height: 50%;
        background-size: 100% 100%;
        display: flex;
        position: relative;
        /* background-color: blue; */
        /* border: 1px solid black; */
    }
    .portfolioProject:hover.portfolioProject > div{
        /* visibility: initial; */
        display: inherit;
        /* transition-duration: 0.5s; */

    }
    /* .portfolioProject: */
    .portfolioProject > div:first-child{
        height: 100%;
        width: 100%;
        /* visibility: hidden; */
        display: none;
        flex-direction: column;
        justify-content: center;
        background-image: linear-gradient(to right, #00000049, #058bce);
    }
    .portfolioProjectHover{
        animation-name: projectEnter;
        animation-duration: 0.5s;
    }
    @keyframes projectEnter {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    .portfolioProjectLeave{
        animation-name: projectLeave;
        animation-duration: 01s;
    }
    @keyframes projectLeave {
        from{
            opacity: 1;
        }
        to{
            opacity: 0;
        }
    }
    .portfolioProject > div > h1, .portfolioProject > div > p{
        text-transform: uppercase;
        margin: 0;
        position: relative;
    }
    .projectHoverHeader{
        animation-name: projectHeader;
        animation-duration: 0.5s;
    }
    @keyframes projectHeader {
        from{
            top: 50px;
        }
        to{
            top: 0;
        }
    }
    .portfolioProject > div > button{
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    .portfolioProject > div > button > .fa-arrow-up-right-from-square{
        font-weight: 900;
        position: relative;
        color: white;
        margin-top: 20px;
    }
    .projectIcon{
        animation: projectIcon 0.5s;
        
    }
    @keyframes projectIcon {
        from{
            bottom: 50px;
        }
        to{
            bottom: 0;
        }
    }
    .modal{
background-color: rgba(0, 0, 0, 0.8);
position: fixed;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
z-index: 3000;
height: 100vh;
top: 0;
bottom: 0;
left: 0;
right: 0;
}
/* .modal > img{
max-width: 70%;
max-height: 80%;
} */
.modal > button{
position: absolute;
cursor: pointer;
right: 0px;
top: 0px;
background-color: rgba(0, 0, 0, 0.8);
padding: 19px 30px;
box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.8) ;
/* border-radius: 100px; */
color: grey;
border: none;
font-size: 15px;
}
    .modal > iframe{
        width: 100%;
        height: 80%;
        background-color: white;
    }
    .portfolioProject:hover.portfolioProject > .modal{
        display: flex;
    }
    .weblink{
        position: absolute;
        bottom: -30px;
        color: #058bce;
        margin: auto;
    }
</style>

<style scoped>
@media (max-width: 600px) {
    .portfolio {
        min-height:  896px ;
        background-color: #ececec;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 30px;
        /* justify-content: flex-end; */
    }
    .portfolio > .topic{
       
        width: 100%;
        height: 179px;
        /* border: 1px solid red; */
        display: flex;
        flex-direction: column;
        /* padding-top: 30px; */
        justify-content: center;
        align-items: center;
    }
  
    .portfolio > .topic > h1{
        color: #058BCE;
        /* color: white; */
        font-size: 20px;
        text-transform: uppercase;
        margin: 0;
    }
    .portfolio > .topic > p{
        color: black;
        font-size: 17px;
        padding-left: 25px;
        padding-right: 25px;
        /* line-height: 1.5; */
        /* border: 1px solid black; */
        /* font-weight: 400; */
        width: calc(100% - 50px);
        /* margin-bottom: 0; */
    }
    
    .buttons{
        width: 100%;
        height: 89px;
        /* border: 1px solid black; */
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        padding: 0 ;
        margin: 20px 0;
    }
    .buttons > a{
        padding: 10px 15px;
        background-color: #058BCE;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
    }
    .portfolioGrid{
        min-height: 537px;
        /* border: 1px solid black; */
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .portfolioProject{
        width: calc(90% - 5px);
        height: 50%;
        margin-right: 5px;
        margin-bottom: 50px;
        background-size: 100% 100%;
        display: flex;
        /* background-color: blue; */
        /* border: 1px solid black; */
    }
    .portfolioProject:active.portfolioProject > div{
        /* visibility: initial; */
        display: inherit;
        /* transition-duration: 0.5s; */

    }
    .portfolioProject:hover.portfolioProject > div{
        /* visibility: initial; */
        display: inherit;
        /* transition-duration: 0.5s; */

    }
    /* .portfolioProject: */
    .portfolioProject > div{
        height: 100%;
        width: 100%;
        /* visibility: hidden; */
        display: none;
        flex-direction: column;
        justify-content: center;
        /* background-image: linear-gradient(to right, rgb(112, 35, 112), #c31a20); */
    }
    .portfolioProjectHover{
        animation-name: projectEnter;
        animation-duration: 0.5s;
    }
    @keyframes projectEnter {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
    .portfolioProjectLeave{
        animation-name: projectLeave;
        animation-duration: 01s;
    }
    @keyframes projectLeave {
        from{
            opacity: 1;
        }
        to{
            opacity: 0;
        }
    }
    .portfolioProject > div > h1, .portfolioProject > div > p{
        text-transform: uppercase;
        margin: 0;
        position: relative;
    }
    .projectHoverHeader{
        animation-name: projectHeader;
        animation-duration: 0.5s;
    }
    @keyframes projectHeader {
        from{
            top: 50px;
        }
        to{
            top: 0;
        }
    }
    .portfolioProject > div > .fa-plus{
        font-weight: 900;
        position: relative;
        margin-top: 20px;
    }
    .projectIcon{
        animation: projectIcon 0.5s;
        
    }
    @keyframes projectIcon {
        from{
            bottom: 50px;
        }
        to{
            bottom: 0;
        }
    }
    .portfolioProject >.modal{
background-color: rgba(0, 0, 0, 0.8);
position: fixed;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
width: 100%;
z-index: 3000;
height: 100vh;
top: 0;
bottom: 0;
left: 0;
right: 0;
}
}
</style>