<template>
    <div class="footer">
        <img alt="WEBBER-MAN">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div>
            <!-- <i class="fab fa-whatsapp"></i> -->
            <i class="fab fa-facebook"></i>
            <!-- <i class="fab fa-behance"></i> -->
            <i></i>
            <i></i>
        </div>
        <p>Copyright © Webber-Man 2022 Created By <span>Akinsanmi Timothy</span></p>
    </div>
</template>

<script>
export default {
    name: 'appFooter'
}
</script>

<style>

</style>

<style scoped>
    .footer{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        width: calc( 100% - 22%);
        height: 50vh;
        padding: 0 11%;
        background-color: #0a0a0a;
    }
    .footer > img{
        width: 200px;
        height: 50px;
        position: relative;
         font-family: sans-serif;
        text-shadow: 1px 2px 2px rgb(62, 61, 61);
        /* position: relative; */
        color: #058bce;
        font-size: 25px;
        font-weight: bolder;
        top: 25px;
        /* margin: 50px; */
    }
    .footer > p {
        font-size: 14px;
        padding: 0;
        margin: 0;
        /* color: red; */
    }
    .footer > p:last-child {
        color: grey;
        font-size: smaller;
    }
    .footer > p:last-child > span{
        color: #058BCE;
    }
</style>

<style scoped>
@media (min-width: 350px) and (max-width:750px) {
    .footer{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        width: calc( 100% - 10%);
        height: 30vh;
        padding: 0 5%;
        background-color: #0a0a0a;
    }
    .footer > img{
        width: 150px;
        height: 50px;
        font-family: sans-serif;
        position: relative;
        color: #058bce;
        font-size: 20px;
        font-weight: bolder;
        top: 20px;
        /* margin: 50px; */
    }
    .footer > p {
        font-size: 12px;
        padding: 0;
        margin: 0;
        /* color: red; */
    }
    .footer > p:last-child {
        color: grey;
        font-size: smaller;
    }
    .footer > p:last-child > span{
        color: #058BCE;
    }
}
</style>