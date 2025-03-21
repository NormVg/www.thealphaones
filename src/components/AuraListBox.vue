<script setup>

import roseBar from "../assets/image/rose-bar-ver.png"

</script>

<template>

  <div id='aura-list-box'>
    <img :src="roseBar" alt="" />
    <ul>
      <li> <span class="white-bold" >A Unified App Ecosystem & Workspaces –</span> A seamlessly connected environment where all your tools and workflows come together, ensuring effortless productivity and collaboration.</li>
      <li><span class="white-bold" >An AI That’s More Than Just a Robot –</span> A personal assistant that learns, adapts, and automates intelligently—helping you focus on what truly matters while handling the rest.</li>
      <li><span class="white-bold" >Future-Ready & Fully Customizable – </span> Designed for deep personalization and automation, empowering you to create a workspace that fits your unique needs and enhances your daily life.</li>
    </ul>
    <img :src="roseBar" alt="" />
  </div>
</template>


<style scoped>

.white-bold{
  font-weight: 500;
  color: white;
}

ul {
  list-style-image: url("../assets/list-img.png");
  list-style-position: outside;

  width: 90vw;

}

li {
  margin-bottom: 20px;
}

#aura-list-box {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  color: #adadad;
  margin-left: 50px;
  margin-top: 50px;
  animation: animationOpacity 3000ms forwards ;

  width: 70vw;
}

#aura-list-box img {
  height: 350px;

}


@media only screen and (max-width: 768px) {

  /* For mobile phones: */


  #aura-list-box img {
    height: 350px;
    margin: -120px;
    transform: rotate(90deg);


  }


  #aura-list-box {


    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    color: #adadad;
    margin-left: 0px;
    margin-top: 50px;

    width: 95vw;
  }

  li {
 font-size: 14px;
}


}
</style>
