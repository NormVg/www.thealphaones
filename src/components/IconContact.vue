<script setup>
import DefIcon from "../assets/image/Icon/iconMail.png";
const prop = defineProps({
  icon:{
    default:DefIcon
  },
  name:{
    type:String
  },
  url:{
    type:String
  }
})
</script>

<template>
  <a  id='nex-ments' target='_blank' :href="url">

<img id='nex-ments-img' :src="prop.icon" alt="" />
<div id='nex-ments-text'>{{ prop.name}}</div>

</a>
</template>

<style scoped>

#nex-ments-img{
    width: 35px;
}

#nex-ments-text{
    margin-left: 5px;
    font-size: 30px;
    transition: 350ms ease-in-out all;
}
#nex-ments-text:hover{
    color: whitesmoke;
}

#nex-ments{
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: row;
    text-decoration: underline;
    color: grey;
    transition: 350ms ease-in-out all;



}

#nex-ments:hover{
    color: whitesmoke;
    margin-left: 10px;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  #nex-ments-text{
    margin-left: 5px;
    font-size: 20px;
    transition: 350ms ease-in-out all;
}
#nex-ments-img{
    width: 25px;
}
}
</style>
