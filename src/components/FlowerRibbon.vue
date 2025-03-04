<template>

  <div id='cb-mid-bar'>
    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />

    <img :src="flowerRibbon" alt="" />

    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />

    <img :src="flowerRibbon" alt="" />

    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />

    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />

    <img :src="flowerRibbon" alt="" />

    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />

    <img :src="flowerRibbon" alt="" />

    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />

    <img :src="flowerRibbon" alt="" />

    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />

    <img :src="flowerRibbon" alt="" />

    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />

    <img :src="flowerRibbon" alt="" />

    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />

    <img :src="flowerRibbon" alt="" />

    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />
    <img :src="flowerRibbon" alt="" />
  </div>
</template>

<script setup>
// import { Vue3Marquee } from "vue3-marquee";
import flowerRibbon from "../assets/image/flow-bar.png"
</script>

<style scoped>
#cb-mid-bar {
  /* border: 1px solid palegoldenrod; */
  height: 100vh;
}


#cb-mid-bar img {
  /* border: 1px solid palegoldenrod; */
  height: 100vh;
}


#cb-mid-bar {
  user-select: none;
  position: absolute;
  animation: scrollDown 10s linear infinite;
  width: 100%;
  /* Adjust width as needed */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: .6;
}


@keyframes scrollDown {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(100%);
  }
}

@media only screen and (max-width: 768px) {

  /* For mobile phones: */
  #cb-mid-bar {
    position: absolute;
    animation: scrollDown 10s linear infinite;
    width: 100%;
    /* Adjust width as needed */
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-left: 100px;
    flex-direction: column;
    opacity: .5;
  }
}
</style>
