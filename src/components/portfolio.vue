<template>
    <div id="portfolio" class="portfolio">
        <div class="topic">
            <h1 id="portfolioHeader">{{header}}</h1>
            <p id="portfolioParagraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div class="buttons">
            <a href="">all</a>
            <a href="">wordpress</a>
            <a href="">web design</a>
            <a href="">graphic design</a>
            <a href="">php</a>
            <a href="">bootstrap</a>
        </div>
        <div class="portfolioGrid" >
            <div :style="portfolio.style" class="portfolioProject" :class="portfolio.class" v-for="portfolio in portfolios" :key="portfolio.id">
                <div @mouseleave="mouseLeave()" @mouseenter="mouseEnter()" :class="{portfolioProjectHover: active}">
                    <h1 :class="{projectHoverHeader: active}">{{portfolio.skill}}</h1>
                    <p>{{portfolio.category}}</p>
                    <i :class="{projectIcon: active}" class="fa fa-plus"></i>
                </div>
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
                     backgroundImage: `url(${require('@/assets/img/portfolio/card.jpg')})`,  
                    },
                    id: 1,
                    skill: 'wine label',
                    category: 'branding'
                },
                {
                    style:{
                     backgroundImage: `url(${require('@/assets/img/portfolio/2.jpg')})`,  
                    },
                    id: 2,
                    skill: 'business card',
                    category: 'stationary'
                },
                {
                    style:{
                     backgroundImage: `url(${require('@/assets/img/portfolio/3.jpg')})`,  
                    },
                    id: 3,
                    skill: 'logo design',
                    category: 'branding'
                },
                {
                    style:{
                     backgroundImage: `url(${require('@/assets/img/portfolio/4.jpg')})`,  
                    },
                    id: 4,
                    skill: 'logo design',
                    category: 'branding'
                },
                {
                    style:{
                     backgroundImage: `url(${require('@/assets/img/portfolio/5.jpg')})`,  
                    },
                    id: 5,
                    skill: 'web design',
                    category: 'web design'
                },
                {
                    style:{
                     backgroundImage: `url(${require('@/assets/img/portfolio/6.jpg')})`,  
                    },
                    id: 6,
                    skill: 'packaging and label designing',
                    category: 'branding'
                },
                {
                    style:{
                     backgroundImage: `url(${require('@/assets/img/portfolio/1.jpg')})`,  
                    },
                    id: 7,
                    skill: 'logo design',
                    category: 'branding'
                },
                {
                    style:{
                     backgroundImage: `url(${require('@/assets/img/portfolio/book.jpg')})`,  
                    },
                    id: 8,
                    skill: 'book cover',
                    category: 'branding'
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
        flex-wrap: wrap;
    }
    .portfolioProject{
        width: 25%;
        height: 50%;
        background-size: 100% 100%;
        display: flex;
        /* background-color: blue; */
        /* border: 1px solid black; */
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
        background-image: linear-gradient(to right, rgb(112, 35, 112), #c31a20);
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
</style>

<style scoped>
@media (min-width: 350px) and (max-width:750px) {
    .portfolio {
        height:  896px ;
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
        font-size: 15px;
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
        height: 537px;
        /* border: 1px solid black; */
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .portfolioProject{
        width: calc(50% - 5px);
        height: 25%;
        margin-right: 5px;
        margin-bottom: 5px;
        background-size: 100% 100%;
        display: flex;
        /* background-color: blue; */
        /* border: 1px solid black; */
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
        background-image: linear-gradient(to right, rgb(112, 35, 112), #c31a20);
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
}
</style>