<script setup>
import ArrowHeading from './ArrowHeading.vue';
import AuraListBox from './AuraListBox.vue';

import flow from "../assets/image/FollowUp/flow-aura.png"
</script>

<template>
  <div id="aura-box">
    <div id="aura-box-title-box">

      <ArrowHeading title="Aura LifeStyle" sub="Sometimes you’ve gotta run before you can walk." BorderWidth="240px"
        PhoneBorderWidth="300px" />

    </div>
    <div id="aura-para">
      AURA is more than just a workspace—it’s a seamlessly automated, unified, and highly integrated ecosystem designed for the future. With an AI assistant at its core, it adapts to your needs, enhances productivity, and simplifies complexity.
    </div>



    <AuraListBox />

    <!-- <AuraListBox/>
      <MoveNextProg/> -->

    <div id="hb-flow">
      <RouterLink to="/#prog-box">

        <img :src="flow" alt="">
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>

#aura-para {
  color: #bdbdbd;
  font-size: 16px;
  width: 60vw;
  margin-top: 15px;
  margin-left: 30px;
  animation: slideInFromLeft 750ms forwards;
}

#hb-flow img {
  animation: floating 4s ease-in-out infinite;
}


#hb-flow {
  display: flex;
  justify-content: center;
  margin-top: 7vh;
}

#hb-flow img {
  height: 60px;
}

#aura-box {
  height: 100vh;
  margin-top: 50px;
}
</style>
