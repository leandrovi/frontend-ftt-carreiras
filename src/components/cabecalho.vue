<template>
    <div>
        <header>
            <div id="main-header">
                <a href="/"><img src="../assets/cefsaLogo.png" alt=""></a>
                <nav>
                    <ul class="menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Empresas</a></li>
                        <li><a href="/">Sobre</a></li>
                    </ul>
                </nav>
            </div>
            
        </header>
    </div>
</template>

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

    header{
        width:100%;
        background: rgb(0, 68, 137);

    }
    #main-header{
        display: flex;
        justify-content: space-between;
        height:10vh;
        margin: 0 auto;
        padding: 10px;
        align-items: center;
        flex-wrap: wrap;
        max-width: 1280px;
    }
    

  
    a{
        text-decoration: none;
        color: white;
        font-family: arial;

    }

    ul{

    }
    .menu{
        display: flex;
    }

    .menu li{
        margin-left: 10px;
    }

    .menu li a{
        display: block;
        padding: 15px;
    }

    .menu li a:hover{
        background-color: rgb(30,98,167);

    }
</style>
