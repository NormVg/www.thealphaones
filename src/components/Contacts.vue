<script setup>
import ArrowHeading from "./ArrowHeading.vue";
import swerlVerBar from "../assets/image/swerlVerBar.png";
import IconContact from "./IconContact.vue";

import IconYoutube from "../assets/image/Icon/iconYt.png";
import IconGithub from "../assets/image/Icon/iconGithub.png";
import IconTwitter from "../assets/image/Icon/iconTwitter.png";
import IconDiscord from "../assets/image/Icon/iconDiscord.png";
import IconMail from "../assets/image/Icon/iconMail.png";
import IconInsta from "../assets/image/Icon/iconInsta.png";
import FlowerRibbon from "./FlowerRibbon.vue";
</script>

<template>
  <div id="contact-box">
    <div id="con-h">
      <ArrowHeading
        title="Nexus"
        sub="Please no gang signs. No, throw it up. I'm kidding."
        BorderWidth="120px"
        PhoneBorderWidth="110px"
      />
    </div>

    <div id="con-box">
      <div id="img-box-cont"><img :src="swerlVerBar" alt="" /></div>
      <div id="con-box-elements">
        <IconContact
          url="https://github.com/TheAlphaOnes"
          :icon="IconGithub"
          name="Github"
        />
        <IconContact
          url="https://discord.com/invite/nbrFDHmsK3"
          :icon="IconDiscord"
          name="Discord"
        />
        <IconContact
          url="https://twitter.com/TheNormVg"
          :icon="IconTwitter"
          name="Twitter"
        />
        <IconContact
          url="mailto:thealphaones.work@gmail.com"
          :icon="IconMail"
          name="Mail"
        />
        <IconContact
          url="https://instagram.com/thenorm.vg"
          :icon="IconInsta"
          name="Instagram"
        />
        <IconContact
          url="https://www.youtube.com/@thenormvg"
          :icon="IconYoutube"
          name="Youtube"
        />
      </div>
    </div>

    <FlowerRibbon />

  </div>
</template>

<style scoped>
#con-h {
  margin-top: 50px;
}

#contact-box {
  /* margin-top: 10px; */
  height: 100vh;
  /* border: 1px solid red; */
}

#contact-box {
  position: relative;

  overflow: hidden;
}

#con-box {
  margin-top: 70px;

  height: 65vh;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;

  animation: slideInFromLeft 1500ms forwards;
}

#img-box-cont {
  height: 100%;
  margin-left: 100px;
}

#img-box-cont img {
  height: 100%;
}

#con-box-elements {
  z-index: 5;
  /* width: 300px; */
  height: 100%;

  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  margin-left: 20px;
  gap: 25px;
  animation: slideInFromLeft 3000ms forwards;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */

  #img-box-cont {
    height: 85%;
    margin-left: 40px;
  }
}
</style>
