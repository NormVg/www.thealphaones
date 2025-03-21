<script setup>
import { useProgStore } from "@/stores/ProgFull";
import DefImage from "../assets/image/def-prog.png"


const prop = defineProps({
  image:{
    default:DefImage
  },
  title:{
    default:"default name"
  },
  disc:{
    default:"deafult disc"
  },
  content:{
    default:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magnam aspernatur magni nisi at amet blanditiis explicabo sapiente assumenda ex. Architecto sunt facere labore quod nesciunt, dolorum deserunt. Ratione, doloremque."
  },
  link:{
    type:String
  },

})


const ProgStore = useProgStore()

const setFull = () =>{


  if (ProgStore.ProgFullData === undefined) {
    ProgStore.SetIsProgFull(true)
  }  else if (ProgStore.ProgFullData.title === prop.title){
    ProgStore.SetIsProgFull(!ProgStore.isProgFull)
  }else {

    ProgStore.SetIsProgFull(true)
  }
  ProgStore.SetProgFullData({
    img:prop.image,
    title:prop.title,
    content:prop.content,
    link:prop.link

  })

  console.log({
    img:prop.image,
    title:prop.title,
    content:prop.content
  });

}


</script>

<template>

    <div id='project-card' @click="setFull">
      <span id='prog-card-info'>
        <div id='prog-card-title'>{{ prop.title }}</div>
        <div id='prog-card-con'>{{prop.disc}}</div>
        </span>
        <img :src="prop.image" alt="" />
    </div>
</template>

<style scoped>
#prog-card-info{
  color: rgb(154, 154, 154);
}

#project-card{
    width: 350px;
    height: 210px;

    border-radius: 10px ;
    margin: 5px;
    transition: all 400ms ease-in-out;
    border: 1px solid grey;
    overflow: hidden;
}

#project-card:hover{
    border: 1px solid whitesmoke;
    color: rgba(255, 255, 255, 0.3);
}

#project-card img{
    transition: all 350ms ease-in-out;
    width: 350px;
    height: 210px;
    position: relative;
    opacity: 40%;
}

#project-card img:hover{
    opacity: 100%;
}
#prog-card-title{
    z-index: 10;
    height: 0%;
    position: relative;
    top: 100px;

    font-size: 35px;
    font-family: "Italianno", cursive;
    font-weight: 400;
    font-style: normal;
    margin-left: 15px;
    font-weight: bold;
}
#prog-card-con{
    z-index: 10;

    height: 0%;
    position: relative;
    top: 140px;

    font-family: "K2D", sans-serif;
    font-weight: 400;
    /* font-style: italic; */
    margin-left: 15px;
}
#prog-card-info:hover{
    color: whitesmoke;
}

@media only screen and (max-width: 768px) {

/* For mobile phones: */

#project-card{
    width: 300px;
    height: 180px;

    border-radius: 10px ;
    margin: 5px;
    transition: all 400ms ease-in-out;
    border: 1px solid grey;
    overflow: hidden;
}

#prog-card-title{
    z-index: 10;
    height: 0%;
    position: relative;
    top: 70px;

    font-size: 35px;
    font-family: "Italianno", cursive;
    font-weight: 400;
    font-style: normal;
    margin-left: 15px;
    font-weight: bold;
}
#prog-card-con{
    z-index: 10;

    height: 0%;
    position: relative;
    top: 110px;

    font-family: "K2D", sans-serif;
    font-weight: 400;
    /* font-style: italic; */
    margin-left: 15px;
}

}

</style>
