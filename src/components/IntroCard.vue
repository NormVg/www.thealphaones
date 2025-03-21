


<script setup>

import IntroCardUp from "../assets/image/bt-box-up.png"
import IntroCardDown from "../assets/image/bt-box-down.png"

const prop = defineProps({
  title:{
    type:String
  },
  con:{
    type:String
  }
})




</script>

<template>
    <div id='bt-box'>
        <div id='bt-box-up'><img :src="IntroCardUp" alt="bt-up" /></div>
        <div id='bt-box-con'>
            <div id='bt-box-con-head'> {{prop.title}} </div>
            {{prop.con}}

         </div>
        <div id='bt-box-down'><img :src="IntroCardDown" alt="bt-down" /></div>
    </div>
</template>

<style scoped>


#bt-box{
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    width: 250px;
    text-align: center;
    color: #7F7F7F;
    /* height: 285px; */
    min-height: 100%;
    font-size: 15px;
  /* height: auto; */
}

#bt-box-up img,#bt-box-down img{
    width: 250px;

}

#bt-box-down,#bt-box-up{
    width: 250px;
    /* border: 1px solid peru; */
}



#bt-box-con-head{
    font-family: "Italianno", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 40px;
    margin-top: -20px;
    margin-bottom: -5px;
    color: whitesmoke;
}

@media only screen and (max-width: 768px) {

/* For mobile phones: */
#bt-box{
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    width: 270px;
    text-align: center;
    color: #7F7F7F;
    height: 300px;
    font-size: 17px;
}

#bt-box-up img,#bt-box-down img{
    width: 270px;

}

#bt-box-down,#bt-box-up{
    width: 270px;
    /* border: 1px solid peru; */
}



#bt-box-con-head{
    font-family: "Italianno", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: 45px;
    margin-top: -20px;
    margin-bottom: -5px;
    color: whitesmoke;
}


}
</style>
