<template>
    <div id="contact-us" class="contact-us">
        <div>
        <div class="form">
            <div class="topic">
                <h1 id="contactHeader">{{header}}</h1>
                <p id="contactParagraph">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <form action="">
                <input type="text" placeholder="Your Name *">
                <input type="email" placeholder="Your Email *">
                <input type="text" placeholder="Your Number *">
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message *"></textarea>
                <input class="submit" type="submit" value="send message">
            </form>
        </div>
        <div class="contact-address">
            <div class="addresses">
                <div class="office-address">
                    <p>Webber-Man - Creative Agency</p>
                    <p>Office No 2, Last floor Hussey plaza, Waec bustop</p>
                    <p>Yaba Lagos, Nigeria</p>
                </div>
                <div class="email-address">
                    <p>Email Us</p>
                    <a href=""><p>Akinsanmidev@gmail.com</p></a>
                    <a href=""><p>Tobifrontdev@gmail.com</p></a>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contactUs',
    data() {
        return {
            header: 'get in touch'
        }
    },
    methods: {
        updateScroll () {
            this.scrollPosition = window.scrollY;
            var topicHeader = document.querySelector('#contactHeader')
            var topicParagraph = document.querySelector('#contactParagraph')
            if (this.scrollPosition > 3800) {
              topicHeader.classList.add('fadeScroll')
            }
            if (this.scrollPosition > 3900) {
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
    .contact-us{
        height: 128vh;
        width: calc( 100% - 20% );
        /* border: 1px solid black; */
        background-image: url('../assets/img/backgrounds/contact-img.png');
        display: flex;
        flex-direction: column;
        padding: 0 10%;
        /* justify-content: space-between; */
        align-items: flex-start;
        background-size: cover;
        padding-top: 80px;
        /* align-items: center; */
    }
    .contact-us > div{
        width: calc( 100%);
        display: flex;
        /* padding: 0 10%; */
        justify-content: space-between;
        background-size: cover;
        /* padding-top: 80px; */
    }
    .submit{
        padding: 20px 40px;
        background-color: #058bce;
        text-decoration: none;
        color: white;
        text-transform: uppercase;
        position: relative;
        top: 60px;
        
    }
    .form{
        width: 48%;
        height: 84vh;
        /* border: 1px solid black; */
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        /* justify-content: flex-end; */
    }
    .form > .topic{
        width: 100%;
        height: 22vh;
        /* border: 1px solid black; */
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        /* justify-content: flex-end; */
    }
    .form > .topic > h1{
        color: #058BCE;
        /* color: white; */
        font-size: 38px;
        position: relative;
         top: 40px;
            opacity: 0;
        text-transform: uppercase;
        margin: 0;
    }
    .form > .topic > p{
        color: white;
        font-size: 17px;
        padding-left: 10px;
        padding-right: 10px;
        position: relative;
         top: 40px;
            opacity: 0;
        line-height: 1.5;
        /* font-weight: 400; */
        width: calc(100% - 20px);
        /* margin-bottom: 0; */
    }
    .form > form{
        display: flex;
        flex-direction: column;
        /* border: 1px solid black; */
        justify-content: space-between;
        width: 100%;
        height: 80vh;
    }
    form > input{
        /* width: 100%; */
        height: 50px;
        border: 1px solid transparent;
    }
    form > textarea{
        border: 1px solid transparent;
    }
    form > input[placeholder], form > textarea[placeholder]{
        color: rgb(94, 92, 92);
        padding: 0 15px;
        
    }
    form > input:focus, form > textarea:focus{
        border: 1px solid #48aaf1;
        
        outline: none;
    }
    .contact-address{
        width: 48%;
        height: 30vh;
        /* border: 1px solid black; */
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
    }
    .addresses{
        width: 100%;
        height: 22vh;
        /* border: 1px solid black; */
        display: flex;
        position: relative;
        /* flex-direction: column; */
        align-items: center;
        /* justify-content: space-between; */
    }
    .addresses > div {
        text-align: left;
        margin-right: 40px;
    }
    .email-address > a{
        color: #058BCE;
        text-decoration: none;
    }
    .email-address > a:hover{
        text-decoration-line: underline;
    }
</style>

<style scoped>
@media (min-width: 350px) and (max-width:750px) {
.contact-us{
        height: 90vh;
        width: calc( 100% - 10%);
        /* border: 1px solid black; */
        background-image: url('../assets/img/backgrounds/contact-img.png');
        display: block;
        flex-direction: column;
        padding: 0 5%;
        /* justify-content: space-between; */
        align-items: flex-start;
        background-size: cover;
        padding-top: 80px;
        /* align-items: center; */
    }
    .contact-us > div{
        width: calc( 100%);
        display: block;
        /* border: 1px solid black; */
        /* padding: 0 10%; */
        /* justify-content: space-between; */
        background-size: cover;
        /* padding-top: 80px; */
    }
    form > a{
        padding: 20px 40px;
        background-color: #058bce;
        text-decoration: none;
        color: white;
        text-transform: uppercase;
        position: relative;
        top: 30px;
        
    }
    .form{
        width: 100%;
        height: 60vh;
        /* border: 1px solid black; */
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        padding-bottom: 60px;
        /* justify-content: flex-end; */
    }
    .form > .topic{
        width: 100%;
        height: 20%;
        /* border: 1px solid black; */
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        /* justify-content: flex-end; */
    }
    .form > .topic > h1{
        color: #058BCE;
        /* color: white; */
        font-size: 38px;
        position: relative;
         top: 40px;
            opacity: 0;
        text-transform: uppercase;
        margin: 0;
    }
    .form > .topic > p{
        color: white;
        font-size: 17px;
        padding-left: 10px;
        padding-right: 10px;
        position: relative;
         top: 40px;
            opacity: 0;
        line-height: 1.5;
        /* font-weight: 400; */
        width: calc(100% - 20px);
        /* margin-bottom: 0; */
    }
     .form > .topic{
        width: 100%;
        height: 20vh;
        /* border: 1px solid red; */
        display: flex;
        flex-direction: column;
        /* padding-top: 30px; */
        align-items: center;
    }
    
    .form > .topic > h1{
        color: #058BCE;
        /* color: white; */
        font-size: 20px;
        text-transform: uppercase;
        margin: 0;
    }
    .form > .topic > p{
        color: white;
        font-size: 15px;
        padding-left: 25px;
        padding-right: 25px;
        /* line-height: 1.5; */
        /* border: 1px solid black; */
        /* font-weight: 400; */
        width: calc(100% - 50px);
        /* margin-bottom: 0; */
    }
    .form > form{
        display: flex;
        flex-direction: column;
        /* border: 1px solid black; */
        justify-content: space-between;
        width: 100%;
        height: 80%;
    }
    form > .submit{
        top: 30px;
    }
    form > input{
        /* width: 100%; */
        height: 40px;
        border: 1px solid transparent;
    }
    form > textarea{
        border: 1px solid transparent;
        height: 120px;
    }
    form > input[placeholder], form > textarea[placeholder]{
        color: rgb(94, 92, 92);
        padding: 0 15px;
        
    }
    form > input:focus, form > textarea:focus{
        border: 1px solid #48aaf1;
        
        outline: none;
    }
    .contact-address{
        width: 100%;
        height: 20vh;
        /* border: 1px solid black; */
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
    }
    .addresses{
        width: 100%;
        height: 100%;
        /* border: 1px solid black; */
        display: flex;
        position: relative;
        /* flex-direction: column; */
        align-items: center;
        justify-content: space-between;
    }
    .addresses > div {
        text-align: left;
        margin-right: 0;
    }
    .office-address > p{
        font-size: 12px;
    }
    .email-address > a{
        color: #058BCE;
        text-decoration: none;
        font-size: 12px;
    }
    .email-address > a:hover{
        text-decoration-line: underline;
    }

}
</style>