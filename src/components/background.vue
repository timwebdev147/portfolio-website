<template>
    <div class="background-container">
        <div id="bg1" >
            <div @click.self="expand1()">
                <button @click="shrink1()" :class="{'animate-circle-button': !active1, 'animate-circle-button-reverse': notactive1}"><i class="fa fa-angles-left"></i></button>
                <h1 :class="{'animate-header': !active1, 'animate-header-reverse': notactive1}">Mountain Resort</h1>
                <p :class="{'animate-paragraph': !active1, 'animate-paragraph-reverse': notactive1}">Thus is a place you would love to be to enjoy whatever, whatever and whatever.</p>
                <a :class="{'animate-regular-button': !active1, 'animate-regular-button-reverse': notactive1}" href="">book now</a>
            </div>
        </div>
        <div id="bg2" >
            <div @click.self="expand2()">
                <button @click="shrink2()" :class="{'animate-circle-button': !active2, 'animate-circle-button-reverse': notactive2}"><i class="fa fa-angles-left"></i></button>
                <h1 :class="{'animate-header': !active2, 'animate-header-reverse': notactive2}">Fuji Mountain</h1>
                <p :class="{'animate-paragraph': !active2, 'animate-paragraph-reverse': notactive2}">Thus is a place you would love to be to enjoy whatever, whatever and whatever.</p>
                <a :class="{'animate-regular-button': !active2, 'animate-regular-button-reverse': notactive2}" href="">book now</a>
            </div>
        </div>
        <div id="bg3">
            <div @click.self="expand3()">
                <button @click="shrink3()" :class="{'animate-circle-button': !active3, 'animate-circle-button-reverse': notactive3}"><i class="fa fa-angles-left"></i></button>
                <h1 :class="{'animate-header': !active3, 'animate-header-reverse': notactive3}">Freezing Winterlake</h1>
                <p :class="{'animate-paragraph': !active3, 'animate-paragraph-reverse': notactive3}">Thus is a place you would love to be to enjoy whatever, whatever and whatever.</p>
                <a :class="{'animate-regular-button': !active3, 'animate-regular-button-reverse': notactive3}" href="">book now</a>
            </div>
        </div>
    </div>
</template>

<script>
    // import $  from "jquery"
export default {
    name: "backGround",
    data() {
        return {
            active1: true,
            active2: true,
            active3: true,
            notactive1: false,
            notactive2: false,
            notactive3: false
        }
    },
    methods: {
        expand1() {
            this.active1 = false;
            this.notactive1 = false;
            var bg3 = document.querySelector('#bg3');
            var bg2 = document.querySelector('#bg2');
            var bg1 = document.querySelector('#bg1');
            if (!bg2.classList.contains('expand2') ) {
                
            bg3.classList.add('expand2');
            bg2.classList.add('expand2')
            }
            // else {
            //     bg3.classList.remove('expand2');
            //     bg2.classList.remove('expand2')
            // }
            if (bg2.classList.contains('shrink2') || bg1.classList.contains('shrink2') || bg3.classList.contains('shrink2')) {
                bg3.classList.remove('shrink2');
                bg2.classList.remove('shrink2')
                bg1.classList.remove('shrink2')
            }
        },
        expand2() {
            this.active2 = false;
            this.notactive2 = false;
            var bg3 = document.querySelector('#bg3');
            var bg2 = document.querySelector('#bg2');
            var bg1 = document.querySelector('#bg1');
            if (!bg1.classList.contains('expand2') ) {
                
            bg3.classList.toggle('expand2');
            bg1.classList.toggle('expand2')
            }
            if (bg2.classList.contains('shrink2') || bg1.classList.contains('shrink2') || bg3.classList.contains('shrink2')) {
                bg3.classList.remove('shrink2');
                bg2.classList.remove('shrink2')
                bg1.classList.remove('shrink2')
            }
        },
        expand3() {
            this.active3 = false;
            this.notactive3 = false;
            var bg3 = document.querySelector('#bg3');
            var bg2 = document.querySelector('#bg2');
            var bg1 = document.querySelector('#bg1');
            if (!bg1.classList.contains('expand2')) {
                
            bg2.classList.toggle('expand2');
            bg1.classList.toggle('expand2')
            }
            if (bg2.classList.contains('shrink2') || bg1.classList.contains('shrink2') || bg3.classList.contains('shrink2')) {
                bg3.classList.remove('shrink2');
                bg2.classList.remove('shrink2')
                bg1.classList.remove('shrink2')
            }
        },
        shrink1() {
            this.notactive1 = true
            var bg3 = document.querySelector('#bg3');
            var bg2 = document.querySelector('#bg2');
            
            if (!bg2.classList.contains('shrink2')) {
                bg3.classList.add('shrink2');
                bg2.classList.add('shrink2')
            }
            if (bg2.classList.contains('expand2')) {
                bg3.classList.remove('expand2');
                bg2.classList.remove('expand2')
            }
        },
        shrink2() {
            this.notactive2 = true
            var bg3 = document.querySelector('#bg3');
            var bg1 = document.querySelector('#bg1');
            
            if (!bg3.classList.contains('shrink2')) {
                bg3.classList.add('shrink2');
                bg1.classList.add('shrink2')
            }
            if (bg3.classList.contains('expand2')) {
                bg3.classList.remove('expand2');
                bg1.classList.remove('expand2')
            }
        },
        shrink3() {
            var bg2 = document.querySelector('#bg2');
            var bg1 = document.querySelector('#bg1');
            this.notactive3 = true
            if (!bg1.classList.contains('shrink2')) {
                bg2.classList.add('shrink2');
                bg1.classList.add('shrink2')
            }
            if (bg1.classList.contains('expand2')) {
                bg2.classList.remove('expand2');
                bg1.classList.remove('expand2')
            }
            
        }
            
        }
    }
</script>

<style scoped>
    .background-container{
        width: 100%;
        height: 100vh;
        /* border: 1px solid black; */
        display: flex;
        overflow: hidden;
    }
    .background-container > div:nth-child(1){
        background-image: url('/src/assets/background-1.jpg');
        background-size: 100% 100%;
        background-attachment: fixed;
        background-position: left;
        overflow: hidden;
        width: 100%;
        /* flex: ; */
        height: 100%;
        /* display: flex; */
        
        /* border: 1px solid black; */
    }
    .background-container > div:nth-child(2){
        background-image: url('/src/assets/background-2.jpg');
       background-size: 100% 100%;
        background-attachment: fixed;
        background-position: left;
        width: 100%;
         overflow: hidden;
        /* flex: 1; */
        
        height: 100%;
        /* border: 1px solid black; */
        transition-duration: 2s;
    }
    .background-container > div:nth-child(3){
        background-image: url('/src/assets/background-3.jpg');
       background-size: 100% 100%;
        background-attachment: fixed;
        background-position: center;
          overflow: hidden;
        /* flex: 1; */
        width: 100%;
        height: 100%;
        /* border: 1px solid black; */
    }
    .background-container > div > div{
        width: calc(100% - 200px);
        height: 100%;
        /* width: 600px; */
        /* border: 1px solid black; */
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 0 100px;
    }
    .background-container > div > div > button{
        border: 1px solid rgb(65, 65, 184);
        position: absolute;
        top: 40px;
        left: -100px;
        padding: 35px;
        border-radius: 250px;
        background-color: rgb(65, 65, 184);
        color: black;
    }
    .background-container > div > div > h1{
        color: black;
        font-size: 100px;
        width: 100%;
        position: absolute;
        word-wrap: break-word;
        transform: rotate(270deg);
        top: 400px;
        /* right: 100px; */
    }
    .background-container > div > div > p{
        color: black;
        position: absolute;
        top: 600px;
        left: 100px;
        text-align: left;
        width: 500px;
        font-size: 20px;
    }
    .background-container > div > div > a{
        border: 1px solid rgb(184, 184, 236);
        text-decoration: none;
        position: absolute;
        top: 700px;
        left: 100px;
        color: black;
        background-color: rgb(184, 184, 236);
        padding: 20px 50px;
        border-radius: 10px;
    }
    button > .fa-angles-left{
        font-size: 20px;
    }
    .animate-circle-button{
        animation-name: circleButton;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
    }
    .animate-circle-button-reverse{
        animation-name: circleButtonReverse;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
    }
    @keyframes circleButton {
        from {
            top: 40px;
            left: -100px;
        }
        to {
            top: 40px;
            left: 100px;
        }
    }
    @keyframes circleButtonReverse {
        from {
            top: 40px;
            left: 100px;
        }
        to {
            top: 40px;
            left: -100px;
        }
    }
    .animate-regular-button{
        animation-name: regularButton;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
    }
    .animate-regular-button-reverse{
        animation-name: regularButtonReverse;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
    }
    @keyframes regularButton {
        from {
            top: 700px;
            left: 100px;
        }
        to {
            top: 350px;
            left: 100px;
        }
    }
    @keyframes regularButtonReverse {
        from {
            top: 350px;
            left: 100px;
        }
        to {
            top: 700px;
            left: 100px;
        }
    }
    .animate-header{
        animation-name: header;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
    }
    .animate-header-reverse{
        animation-name: headerReverse;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
    }
    @keyframes header {
        from {
            transform: rotate(270deg);
            top: 400px;
            left: 100px;
            font-size: 60px;
        }
        to {
            transform: rotate(360deg);
            top: 90px;
            left: 100px;
        }
    }
    @keyframes headerReverse {
        from {
            transform: rotate(360deg);
            top: 90px;
            left: 100px;
        }
        to {
            transform: rotate(270deg);
            top: 400px;
            left: 100px;
        }
    }
    .animate-paragraph{
        animation-name: paragraph;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
    }
    .animate-paragraph-reverse{
        animation-name: paragraphReverse;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
    }
    @keyframes paragraph {
        from {
            top: 600px;
            left: 100px;
        }
        to {
            top: 250px;
            left: 100px;
        }
    }
    @keyframes paragraphReverse {
        from {
            top: 2500px;
            left: 100px;
        }
        to {
            top: 600px;
            left: 100px;
        }
    }
    .expand1{
        animation-name: expand1;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
    }
    .expand2{
        animation-name: expand2;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
    }
    .expand3{
        animation-name: expand3;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
    }
    @keyframes expand1 {
        from {
            width: inherit;
        }
        to {
            width: 0px;
        }
    }
    @keyframes expand2 {
        from {
            width: inherit;
        }
        to {
            width: 0px;
        }
    }
    @keyframes expand3 {
        from {
            width: inherit;
        }
        to {
            width: 0px;
        }
    }
    .shrink1{
        animation-name: shrink1;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
    }
    .shrink2{
        animation-name: shrink2;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
    }
    .shrink3{
        animation-name: shrink3;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
    }
    @keyframes shrink1 {
        from {
            width: 0px;
        }
        to {
            width: inherit;
        }
    }
    @keyframes shrink2 {
        from {
            width: 0px;
        }
        to {
            width: inherit;
        }
    }
    @keyframes shrink3 {
        from {
            width: 0px;
        }
        to {
            width: inherit;
        }
    }
</style>
<style scoped>
 @media (min-width: 350px) and (max-width: 750px) {
     .background-container{
        width: 100%;
        height: 60vh;
        /* border: 1px solid black; */
        display: flex;
        overflow: hidden;
    }
    .background-container > div:nth-child(1){
        background-image: url('/src/assets/background-1.jpg');
        background-size: contain;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: top;
        overflow: hidden;
        width: 100%;
        /* flex: ; */
        height: 100%;
        /* display: flex; */
        
        /* border: 1px solid black; */
    }
    .background-container > div:nth-child(2){
        background-image: url('/src/assets/background-2.jpg');
        background-size: contain;
        background-attachment: fixed;
        background-position: top;
        background-repeat: no-repeat;
        width: 100%;
         overflow: hidden;
        /* flex: 1; */
        
        height: 100%;
        /* border: 1px solid black; */
        transition-duration: 2s;
    }
    .background-container > div:nth-child(3){
        background-image: url('/src/assets/background-3.jpg');
        background-size: contain;
        background-attachment: fixed;
        background-position: top;
        background-repeat: no-repeat;
          overflow: hidden;
        /* flex: 1; */
        width: 100%;
        height: 100%;
        /* border: 1px solid black; */
    }
    .background-container > div:nth-child(1) > div::after{
        content: "";
        left: 0;
        top: 0;
        left: 0;
        right: 0;
        width: inherit;
        height: inherit;
        background-color: rgba(0,0,0,0.3)
    }
    .background-container > div > div{
        width: calc(100% );
        height: 100%;
        /* width: 600px; */
        border: 1px solid black;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        /* padding: 0 50px; */
    }
    .background-container > div > div > button{
        border: 1px solid rgb(65, 65, 184);
        position: absolute;
        top: 40px;
        left: -100px;
        padding: 20px;
        border-radius: 250px;
        background-color: rgb(65, 65, 184);
        color: white;
    }
    .background-container > div > div > h1{
        color: white;
        text-shadow: 2px 2px 4px grey;
        font-size: 35px;
        /* position: absolute; */
        transform: rotate(270deg);
        width: 100%;
        top: 300px;
        left: -80px;
    }
    .background-container > div > div > p{
        color: white;
        text-shadow: 2px 2px 4px grey;
        position: absolute;
        top: 600px;
        left: 7%;
        text-align: left;
        width: 300px;
        font-size: 25px;
    }
    .background-container > div > div > a{
        border: 1px solid rgb(184, 184, 236);
        text-decoration: none;
        position: absolute;
        top: 700px;
        left: 100px;
        color: white;
        background-color: rgb(184, 184, 236);
        padding: 15px 40px;
        border-radius: 10px;
    }
    button > .fa-angles-left{
        font-size: 15px;
    }
    .animate-circle-button{
        animation-name: circleButton;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
        transition-delay: 0.5s;
    }
    .animate-circle-button-reverse{
        animation-name: circleButtonReverse;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
        transition-delay: 0.5s;
    }
    @keyframes circleButton {
        from {
            top: 40px;
            left: -100px;
        }
        to {
            top: 40px;
            left: 20px;
        }
    }
    @keyframes circleButtonReverse {
        from {
            top: 40px;
            left: 20px;
        }
        to {
            top: 40px;
            left: -100px;
        }
    }
    .animate-regular-button{
        animation-name: regularButton;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
        transition-delay: 0.5s;
    }
    .animate-regular-button-reverse{
        animation-name: regularButtonReverse;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
        transition-delay: 0.5s;
    }
    @keyframes regularButton {
        from {
            top: 700px;
            left: 100px;
        }
        to {
            top: 400px;
            left: 120px;
        }
    }
    @keyframes regularButtonReverse {
        from {
            top: 400px;
            left: 120px;
        }
        to {
            top: 700px;
            left: 100px;
        }
    }
    .animate-header{
        animation-name: header;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
        transition-delay: 0.5s;
    }
    .animate-header-reverse{
        animation-name: headerReverse;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
        transition-delay: 0.5s;
    }
    @keyframes header {
        from {
            transform: rotate(270deg);
            top: 300px;
            left: -80px;
            font-size: 35px;
        }
        to {
            transform: rotate(360deg);
            top: 90px;
            left: -100px;
            font-size: 35px;
        }
    }
    @keyframes headerReverse {
        from {
            transform: rotate(360deg);
            top: 90px;
            left: -100px;
            font-size: 35px;
        }
        to {
            transform: rotate(270deg);
            top: 300px;
            left: -80px;
            font-size: 35px;
        }
    }
    .animate-paragraph{
        animation-name: paragraph;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
        transition-delay: 0.5s;
    }
    .animate-paragraph-reverse{
        animation-name: paragraphReverse;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
        transition-delay: 0.5s;
    }
    @keyframes paragraph {
        from {
            top: 600px;
            left: 7%;
        }
        to {
            top: 200px;
            left: 7%;
            
        }
    }
    @keyframes paragraphReverse {
        from {
            top: 200px;
            left: 7%;
        }
        to {
            top: 600px;
            left: 7%;
        }
    }
    .expand1{
        animation-name: expand1;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
        transition-delay: 0.5s;
    }
    .expand2{
        animation-name: expand2;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
        transition-delay: 0.5s;
    }
    .expand3{
        animation-name: expand3;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
        transition-delay: 0.5s;
    }
    @keyframes expand1 {
        from {
            width: inherit;
        }
        to {
            width: 0px;
        }
    }
    @keyframes expand2 {
        from {
            width: inherit;
        }
        to {
            width: 0px;
        }
    }
    @keyframes expand3 {
        from {
            width: inherit;
        }
        to {
            width: 0px;
        }
    }
    .shrink1{
        animation-name: shrink1;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
        transition-delay: 0.5s;
    }
    .shrink2{
        animation-name: shrink2;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
        transition-delay: 0.5s;
    }
    .shrink3{
        animation-name: shrink3;
        animation-duration: 1s;
        /* animation-iteration-count: infinite; */
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
        transition-delay: 0.5s;
    }
    @keyframes shrink1 {
        from {
            width: 0px;
        }
        to {
            width: inherit;
        }
    }
    @keyframes shrink2 {
        from {
            width: 0px;
        }
        to {
            width: inherit;
        }
    }
    @keyframes shrink3 {
        from {
            width: 0px;
        }
        to {
            width: inherit;
        }
    }
 }
</style>
