<script setup>
import RoseBar from  "../assets/image/rose-bar-ver.png"
import DefImage from "../assets/image/def-prog.png"
import { useProgStore } from "@/stores/ProgFull";
import OpenLink from "../assets/image/open-link.png"

const ProgStore = useProgStore()

</script>

<template>
    <div id='prog-full-box'>
        <img id='prog-full-box-thumb' :src="ProgStore.ProgFullData.img"  />

        <img id='prog-full-box-rose' :src="RoseBar"  />

        <div id='prog-full-box-info'>

            <div id='prog-full-box-title'>
             <a :href="ProgStore.ProgFullData.link"> {{ ProgStore.ProgFullData.title }} <img id='prog-full-open-link' :src="OpenLink"  /></a>

             </div>

            <div id='prog-full-box-con'>{{ ProgStore.ProgFullData.content }}</div>

        </div>
    </div>
</template>

<style scoped>
#prog-full-box-con{
  color: rgb(186, 186, 186);
}

#prog-full-box{

    display:  flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
}

/* #prog-full-box *{
    border: 1px solid wheat;
} */

#prog-full-box-thumb{
  object-fit:contain;
    width: 35vw;
    aspect-ratio: 350 / 210;
    border: 1px solid gray;
    border-radius: 15px;
}

#prog-full-box-rose{
    width: 4vw;
    margin-left: 15px
}

#prog-full-box-info{
    display: flex;
    flex-direction: column;
    width: 40vw;
    align-self: flex-start;
    /* justify-content: left; */
    /* align-items: center; */
    margin-left: 15px;
}

#prog-full-box-title a{
    transition: 400ms ease-in-out all;
    text-decoration: none;
    color: rgb(215, 215, 215);
    margin-left: 15px;
}

#prog-full-box-title a:hover{
    color: whitesmoke;
}

#prog-full-box-title{

    font-family: "Italianno", cursive;
    font-weight: 400;
    font-style: normal;

    font-size: 55px;

    display: flex;
    flex-direction: column;
}

#prog-full-open-link{
    height: 20px;

}

#prog-full-dot-line{
    width: 140px;
    position: relative;
    top: -20px;
}

@media only screen and (max-width: 768px) {

/* For mobile phones: */
#prog-full-box{

display:  flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 50px;
}

#prog-full-box-rose{
  /* border: 1px solid red; */
    width: 15vw;
    margin: -100px  auto;

    transform: rotate(90deg);
}


#prog-full-box-info{
    display: flex;
    flex-direction: column;
    width: 95vw;
    align-self: center;
    /* justify-content: left; */
    /* align-items: center; */
    margin-left: 0px;
}

#prog-full-box-title{

font-family: "Italianno", cursive;
font-weight: 400;
font-style: normal;

font-size: 55px;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
#prog-full-box-title a{

    margin-left: 0px;
}

#prog-full-box-thumb{
    width: 90vw;
    border: 1px solid gray;
    border-radius: 15px;
}


}

</style>
