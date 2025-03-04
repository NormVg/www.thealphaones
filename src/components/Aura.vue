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
