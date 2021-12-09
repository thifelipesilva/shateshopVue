<template>
    <div class="banner">
        <h3>Em destaque</h3>
        <div class="cards">
            <div class="card">
                               
            </div>
            <div class="card">
                
            </div>
            <div class="card">
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SecaoBanner'
}
</script>

<style scoped>
.banner{
    margin-top: 60px;

    display: flex;
    flex-direction: column;
    align-items: center;


}

.banner h3{
    align-items: center;
    margin-bottom: 30px;
}

.banner .cards{
    display: flex;
    align-items: center;

    height: 500px;

    margin-bottom: 40px;
    
    margin-right: 50px;
    
    
}

.banner .cards .card{
    height: 480px;
    width: 300px;
    background-color: antiquewhite;
    margin-left: 80px;
}

/*
.banner .cards .card img{
    height: 480px;
    width: 240px;
}

*/
</style>