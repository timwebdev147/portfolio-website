<template>
<div id="body">
    <nav v-bind:class="{sticky: scrollPosition > 10}">
        <img  alt="WEBBER-MAN">
        <ul>
            <a :class="{blackList: scrollPosition > 10, blueLine: scrollPosition > 610 && scrollPosition < 1540}" href="#services"><li> {{menu1}} </li></a>
            <a :class="{blackList: scrollPosition > 10, blueLine: scrollPosition > 1540 && scrollPosition < 2290}" href="#team"><li> {{menu2}} </li></a>
            <a :class="{blackList: scrollPosition > 10, blueLine: scrollPosition > 2290 && scrollPosition < 3210}" href="#portfolio"><li> {{menu3}} </li></a>
            <!-- <a :class="{blackList: scrollPosition > 1800 && scrollPosition < 2500 || scrollPosition > 3500 && scrollPosition < 4400, blueLine: scrollPosition > 3500 && scrollPosition < 4300}" href="#pricing"><li> {{menu4}} </li></a> -->
            <a :class="{blackList: scrollPosition > 10, blueLine: scrollPosition > 3210 && scrollPosition < 3420}" href="#clients"><li> {{menu5}} </li></a>
            <a :class="{blackList: scrollPosition > 10, blueLine: scrollPosition > 3420 && scrollPosition < 3970}" href="#testimonials"><li> {{menu6}} </li></a>
            <a :class="{blackList: scrollPosition > 10, blueLine: scrollPosition > 3970 && scrollPosition < 4950}" href="#contact-us"><li> {{menu7}} </li></a>
        </ul>
        <button @click="showSideBar()">
            <i class="fa fa-bars"></i>
        </button>
    </nav>
    <div v-bind:class="{visible: scrollPosition > 10}">
     
  </div>
    <div id="sidebar"  :class="{hide: !active}">
        <div id="sidebar-1" @click="hideSideBar()" ></div>
        <div id="sidebar-2">
            <button @click="hideSideBar()"><i class="fa fa-times"></i></button>
            <ul>
                <a @click="hideSideBar()" :class="{blueLine: scrollPosition > 850 && scrollPosition < 1800, blackList: scrollPosition > 1800 && scrollPosition < 2500}" href="#services"><li> {{menu1}} </li></a>
                <a @click="hideSideBar()" :style="{color: scrollPosition > 1800 && scrollPosition < 2500}" :class="{'blueLine  blackList': scrollPosition > 1800 && scrollPosition < 2500}" href="#team"><li> {{menu2}} </li></a>
                <a @click="hideSideBar()" :class="{blackList: scrollPosition > 1800 && scrollPosition < 2500}" href="#portfolio"><li> {{menu3}} </li></a>
                <a @click="hideSideBar()" :class="{blackList: scrollPosition > 1800 && scrollPosition < 2500}" href="#clients"><li> {{menu5}} </li></a>
                <a @click="hideSideBar()" :class="{blackList: scrollPosition > 1800 && scrollPosition < 2500}" href="#testimonials"><li> {{menu6}} </li></a>
                <a @click="hideSideBar()" :class="{blackList: scrollPosition > 1800 && scrollPosition < 2500}" href="#contact-us"><li> {{menu7}} </li></a>

            </ul>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: "navBar",
    data () {
        return {
            menu1: 'Services',
            menu2: 'Team',
            menu3: 'Portfolio',
            menu4: 'Pricing',
            menu5: 'clients',
            menu6: 'testimonials',
            menu7: 'contact',
            active: false,
            show: true,
            hide: false,
            scrollPosition: 0,
            color: {
                border: '1px solid black'
            }
        }
    },
    methods: {
        showSideBar() {
            document.querySelector('#app').style.overflow = 'hidden';
            if (!document.querySelector('#sidebar').classList.contains('sidebar')) {
                document.querySelector('#sidebar').classList.remove('slideAway')
                document.querySelector('#sidebar-1').classList.remove('fadeAway')
                 document.querySelector('#sidebar-1').classList.add('fadeIn')
                document.querySelector('#sidebar').classList.add('sidebar')
                document.querySelector('#sidebar-2').classList.add('slidein')

                }
            
            // document.querySelector('#app').classList.
            // this.active = !this.active
            // // document.querySelector('#app').style.
        },
        hideSideBar() {
            document.body.style.overflow = 'scroll';
             if (document.querySelector('#sidebar').classList.contains('sidebar')) {
                document.querySelector('#sidebar').classList.remove('sidebar')
                document.querySelector('#sidebar').classList.add('slideAway')
                document.querySelector('#sidebar-2').classList.remove('slidein')
                document.querySelector('#sidebar-1').classList.add('fadeAway')

                }
            // this.active = !this.active;
            // this.hide = !this.hide
        },

        // toggle () {
        //     this.isActive = !this.isActive;
        //     this.isTimes = !this.isTimes;
        //     console.log(this.$refs.toggleIcon)
        // },
        updateScroll () {
            this.scrollPosition = window.scrollY;
            // if (this.scrollPosition > 5) {
            //   this.mT
            // }
            console.log(this.scrollPosition)
        }
    },
    mounted() {
      window.addEventListener('scroll', this.updateScroll)
    }
    
}
</script>

<style scoped>
    #body{
        width: 100%;
    }

    .sticky{
        background-color: #ececec;
        box-shadow: 0px 3px 10px rgb(59, 56, 56);
    }

    nav{
        width: 100%;
        height: 70px;
        /* border: 1px solid black; */
        display: flex;
        justify-content: space-between;
        /* background-color: #35495e; */
        align-items: center;
        overflow: -moz-hidden-unscrollable;
    }
    .blueLine{
        
        /* text-decoration-color: #058BCE; */
        border-bottom: 4px solid #058BCE;
        padding-bottom: 4px;
        
    }
    nav > img{
        width: 200px;
        height: 70%;
        padding: 0 30px;
        text-shadow: 1px 2px 2px rgb(88, 86, 86);
        font-family: sans-serif;
        display: flex;
        left: -15px;
        align-items: center;
        justify-content: center;
        position: relative;
        color: #058bce;
        font-size: 25px;
        font-weight: bolder;
        background-color: rgba(0, 0, 0, 0);
        border-radius: 200px;
    }
    nav > ul{
        display: flex;
        width: 600px;
        /* border: 1px solid black; */
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
        padding-right: 50px;
    }
    nav > ul > a{
        text-transform: uppercase;
        font-size: 13px;
        border-bottom: 4px solid transparent;
        color: white;
        text-decoration: none;
        padding-bottom: 4px;
    }
    #sidebar-2 > ul > a{
        text-transform: uppercase;
        font-size: 15px;
        border-bottom: 4px solid transparent;
        color: black;
        text-decoration: none;
        padding-bottom: 4px;
    }
   
    nav > button{
        padding: 20px 30px;
        background-color: transparent;
        border: none;
        display: none;
        
    }
    button > .fa-bars{
        font-size: 30px;
    }
    .hide{
        display: none;
    }
    .blackList{
        color: rgba(0, 0, 0, 0.5);
    }
    .blackList:hover{
        color: #058BCE;

    }
    
</style>


<style scoped>
@media (min-width: 350px) and (max-width: 750px) {
    nav > ul{
        display: flex;
        width: 300px;
        /* border: 1px solid black; */
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
        display: none;
    }
    nav > button{
        padding: 20px 30px;
        background-color: transparent;
        border: none;
        color: #058bce;
        display: block;
    }
     nav > img{
         width: 200px;
        height: 70%;

        padding: 0 30px;
        
    }
    .sticky{
        position: fixed;
        z-index: 5;
        height: 70px;
        /* background-color: rgba(0, 0, 0, 0.9); */
        /* box-shadow: 1px 0px 4px 1px white; */
        margin: 0;
        top: 0;
        left: 0;
        right: 0;
        transition-duration: 0.1s;
    }
    .sticky > img{
        /* width: 150px; */
        /* text-shadow: none; */
        /* box-shadow: 1px 0px 4px 1px white; */
        height: 70%;
        padding: 0 30px;
    }
    /* .visible{
        display: block;
        height: 70px;
    } */
    #sidebar{
        
    }
    .sidebar{
        width: 100%;
        height: 100%;
        /* border: 1px solid black; */
        display: flex;
        position: fixed;
        justify-content: space-between;
        top: 0;
        /* left: 0; */
        right: 0;
        bottom: 0;
        z-index: 10;
        overflow: hidden;
        animation-name: showSideBar;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
    }
    .slideAway{
        width: 100%;
        height: 100%;
        /* border: 1px solid black; */
        display: flex;
        position: fixed;
        top: 0;
        /* left: 0; */
        right: 0;
        bottom: 0;
        z-index: 10;
        overflow: hidden;
        animation-name: hideSideBar;
        animation-fill-mode: forwards;
        animation-duration: 0.3s;
    }
    .slidein{
        animation-name: slidein;
        animation-fill-mode: forwards;
        animation-duration: 0.3s;
    }
    .slideout{
        animation-name: slideout;
        animation-fill-mode: forwards;
        animation-duration: 0.3s;
    }
    @keyframes slidein {
        from {
            width: 0%;
        }
        to {
            width: 70%;
        }
    }
    @keyframes slideout {
        from {
            width: 70%;
        }
        to {
            width: 0%;
        }
    }
    
    @keyframes showSideBar {
        from {
            width: 100%;
        }
        to {
            width: 100%;
        }
    }
    @keyframes hideSideBar {
        from {
            width: 100%;
        }
        to {
            width: 0;
            display: none;
        }
    }
    #sidebar > div:nth-child(1){
        width: 100%;
        height: 100%;
        /* border: 1px solid black; */
        /* background-color: rgba(0, 0, 0, 0.3); */
        position: relative;
        
        /* animation-delay: 0.2s; */
        z-index: -3;
        /* transition-duration: 1s; */
        /* opacity: 0.5; */
    }
    .fadeIn{
        animation-name: opacity;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        
    }
    @keyframes opacity {
        from {
            background-color: transparent;
            width: 100%;
        }
        to {
            background-color: rgba(0, 0, 0, 0.3);
            width: 30%;
        }
    }
    @keyframes fadeAway {
        from {
            /* background-color: rgba(0, 0, 0, 0.3); */
            width: 30%;
        }
        to {
            /* background-color: transparent; */
            /* visibility: hidden; */
            width: 100%;
        }
    }
    .fadeAway{
        animation-name: fadeAway;
        animation-fill-mode: forwards;
        animation-duration: 0.3s;
        width: 100%;
    }
    #sidebar > div:nth-child(2){
        width: 0%;
        height: 100%;
        /* border: 1px solid black; */
        overflow: hidden;
        background-color: white;
        position: relative;
        right: inherit;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-shadow: 2px 2px 4px grey;

    }
    #sidebar > div:nth-child(2) > button{
        padding: 20px 30px;
        background-color: transparent;
        border: none;
    }
    #sidebar > div:nth-child(2) > ul{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        list-style-type: none;
        height: 15vh;
    }
    #sidebar > div:nth-child(2) > ul > li > a{
        /* margin: 0; */
        color: black;
        text-decoration: none;
        
    }
    #sidebar > div:nth-child(2) > ul > li > a:hover{
        color: #35495e;
    }
    button > .fa-xmark{
        font-size: 30px;
    }
}
</style>