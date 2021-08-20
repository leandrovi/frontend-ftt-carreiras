
<template>
    <div>
        <footer>
            <div id="main-footer">
                <h2>FTT Carreiras &copy;2021</h2>  
                <ul class="menu">
                    <li><a href="/"><ion-icon name="logo-facebook"></ion-icon></a></li>
                    <li><a href="/"><ion-icon name="logo-instagram"></ion-icon></a></li>
                    <li><a href="/"><h2>Contato (11)4359-6565</h2></a></li>
                </ul>
            </div>
            

        </footer>
    </div>
</template>
    <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

<script>
    
export default ({
    
})
</script>

<style scoped>
body, ul, li, p{
        font-family: arial;
        margin: 0px;
        padding: 0px;
        list-style: none;
    }
    footer{
        width:100%;
        background: rgb(0, 68, 137);
        position: absolute;
        bottom:0;
    }
    #main-footer{
        display: flex;
        justify-content: space-between;
        max-width: 1280px;        
        height:10vh;
        margin: 0 auto;
        padding: 15px;
        align-items: center;
        flex-wrap: wrap;
    }
    
    a{
        text-decoration: none;
        color: white;
        font-family: arial;

    }

    h2{
        font-family: arial;
        color: white;
    }

    ul{

    }
    #menu{

    }
</style>
