<script setup>
import ArrowHeading from "./ArrowHeading.vue";

import progBoxLeft from "../assets/image/prog-box-left.png";
import progBoxRight from "../assets/image/prog-box-right.png";
import ProjectCard from "./ProjectCard.vue";
import ProjectFull from "./ProjectFull.vue";
import { useProgStore } from "@/stores/ProgFull";
import { Vue3Marquee } from "vue3-marquee";

import flow from "../assets/image/FollowUp/flow-prog.png";



import CassetteImg from "@/assets/projects/cassette.png"



const ProgStore = useProgStore();
</script>

<template>
  <div id="prog-box">
    <ArrowHeading
      title="Solutions"
      sub="What Is The Point Of Owning A Race Car If You Can’t Drive It?"
      BorderWidth="150px"
      PhoneBorderWidth="200px"
    />

    <Transition>
      <ProjectFull v-if="ProgStore.isProgFull" />
    </Transition>

    <div id="pojects-box">
      <img id="pojects-box-side" :src="progBoxLeft" />

      <div id="prog-box-inner">
        <Vue3Marquee
          :clone="true"
          :duration="15"
          :pause-on-hover="true"
          :gradient="true"
          :gradient-color="[0, 0, 0]"
          gradient-length="15%"
        >
          <ProjectCard
            title="Cassette Music"
            :image="CassetteImg"
            link="https://cassette.thealphaones.com"
            content="Cassette is a decentralized music streaming platform that lets you store your music on Connect Box Cloud and access it anywhere. Enjoy seamless, secure, and censorship-free music streaming."
            disc="Built for true music lovers. Own your collection, stream freely, and embrace decentralization."
          />

          <ProjectCard
            title="Coming Soon"
            link="#"
            content="New projects are on the horizon. Keep an eye out for updates!"
            disc="Big things are coming. Stay connected for more!"
          />
        </Vue3Marquee>

        <Vue3Marquee
          :clone="true"
          :duration="10"
          :pause-on-hover="true"
          :gradient="true"
          :gradient-color="[0, 0, 0]"
          gradient-length="15%"
        >
        <ProjectCard
            title="Cassette Music"
            :image="CassetteImg"
            link="https://cassette.thealphaones.com"
            content="Cassette is a decentralized music streaming platform that lets you store your music on Connect Box Cloud and access it anywhere. Enjoy seamless, secure, and censorship-free music streaming."
            disc="Built for true music lovers. Own your collection, stream freely, and embrace decentralization."
          />

          <ProjectCard
            title="Coming Soon"
            link="#"
            content="New projects are on the horizon. Keep an eye out for updates!"
            disc="Big things are coming. Stay connected for more!"
          />
        </Vue3Marquee>
      </div>

      <img id="pojects-box-side" :src="progBoxRight" />
    </div>

    <div id="hb-flow">
      <RouterLink to="/#contact-box">
        <img :src="flow" alt="" />
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

#prog-box {
  padding-top: 10px;
  /* height: 120vh;2 */
}

#prog-box-title {
  font-family: "Italianno", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 45px;
  opacity: 80%;
  margin-left: 20px;
}

/* #aura-box-title-img{

} */

#prog-box-title-img-box {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  position: relative;
  top: -25px;
  color: #8f8f8f;
  gap: 5px;
}

#pojects-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  animation: animationOpacity 3000ms forwards;
}

#pojects-box-side {
  height: 350px;
}

#prog-box-inner {
  height: 500px;
  width: 98vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: auto;
  margin: 0px 20px;
  /* border: 1px solid gold; */
  margin-bottom: 10px;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  #pojects-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 50px;
  }

  #pojects-box-side {
    transform: rotate(90deg);
    margin: -170px;
  }
}
</style>
