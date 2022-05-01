<template>
    <nav>
        <img src="../assets/logo.png" alt="">
        <ul>
            <li> {{menu1}} </li>
            <li> {{menu2}} </li>
            <li> {{menu3}} </li>
            <li> {{menu4}} </li>
            <li> {{}} </li>
        </ul>
        <button @click="showSideBar()">
            <i class="fa fa-bars"></i>
        </button>
    </nav>
    <div id="sidebar"  :class="{hide: !active}">
        <div @click="hideSideBar()"></div>
        <div>
            <button @click="hideSideBar()"><i class="fa fa-times"></i></button>
            <ul>
                <li><a href=""> {{menu1}} </a></li>
                <li> <a href=""> {{menu2}} </a> </li>
                <li> <a href=""> {{menu3}} </a> </li>
                <li> <a href=""> {{menu4}} </a> </li>

            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "navBar",
    data () {
        return {
            menu1: 'Home',
            menu2: 'About',
            menu3: 'Contact Us',
            menu4: 'Team',
            active: false,
            show: true,
            hide: false,
        }
    },
    methods: {
        showSideBar() {
            document.body.style.overflow = 'hidden';
            if (!document.querySelector('#sidebar').classList.contains('sidebar')) {
                document.querySelector('#sidebar').classList.remove('slideAway')
                
                document.querySelector('#sidebar').classList.add('sidebar')

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

                }
            // this.active = !this.active;
            // this.hide = !this.hide
        }
    }
    
}
</script>

<style scoped>
    nav{
        width: 100%;
        height: 100px;
        /* border: 1px solid black; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: -moz-hidden-unscrollable;
    }
    nav > img{
        width: 100px;
        height: 100%;
        padding: 0 30px;
    }
    nav > ul{
        display: flex;
        width: 300px;
        /* border: 1px solid black; */
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
    }
    nav > button{
        padding: 20px 30px;
        background-color: transparent;
        border: none;
        visibility: hidden;
        
    }
    button > .fa-bars{
        font-size: 30px;
    }
    .hide{
        display: none;
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
        visibility: initial;
    }
     nav > img{
        width: 70px;
        height: 70%;
        padding: 0 30px;
    }
    #sidebar{
        
    }
    .sidebar{
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
        animation-name: showSideBar;
        animation-duration: 0.3s;
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
    
    @keyframes showSideBar {
        from {
            width: 0;
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
        }
    }
    #sidebar > div:nth-child(1){
        width: 30%;
        height: 100%;
        /* border: 1px solid black; */
        /* background-color: rgba(0, 0, 0, 0.3); */
        animation-name: opacity;
        animation-delay: 0.2s;
        animation-duration: 0.7s;
        animation-fill-mode: forwards;
        /* transition-duration: 1s; */
        /* opacity: 0.5; */
    }
    @keyframes opacity {
        from {
            background-color: transparent;
        }
        to {
            background-color: rgba(0, 0, 0, 0.3)
        }
    }
    #sidebar > div:nth-child(2){
        width: 70%;
        height: 100%;
        /* border: 1px solid black; */
        background-color: white;
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