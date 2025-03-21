<script setup>
import IntroCard from "./IntroCard.vue";
import flow from "../assets/image/FollowUp/flow-intro.png";
import HeadingBottomBorder from "../assets/image/heading-br.png";
import ArrowBorder from "./ArrowBorder.vue";
import ArrowHeading from "./ArrowHeading.vue";
</script>

<template>
  <div id="intro-box">
    <div id="heading-intro">
      Crafting Dreams, Defining Futures:
      <div><img :src="HeadingBottomBorder" alt="" /></div>
    </div>

    <ArrowHeading
      title="Who we are?"
      sub="Following, Not Really My Style."
      BorderWidth="200px"
      PhoneBorderWidth="175px"
    />

    <div id="intro-para">
      At TheAlphaOnes, we are more than just a team—we are a movement driven by
      innovation, passion, and a deep love for technology. Our goal is to create
      solutions that enhance lives, spark innovation, and push the boundaries of
      what’s possible.
      <br />
      <br />

      We believe technology should be a seamless extension of human creativity,
      making complex ideas accessible and turning visions into reality. At
      TheAlphaOnes, we don’t just build—we create, experiment, and redefine the
      norm.
    </div>

    <div id="intro-bt-box">
      <IntroCard
        title="Vision"
        con="A world where technology, powered by AI, effortlessly adapts to human needs enabling productivity, collaboration, and innovation without friction for the future."
      />
      <IntroCard
        title="Mission"
        con="To craft a workspace that is highly integrated, seamlessly connected, and beautifully designed—where everything works in perfect harmony to empower the future of work."
      />
      <IntroCard
        title="Values"
        con="Inspired by Ferrari, we believe in creating technology that looks beautiful, feels beautiful, and works beautifully where performance meets elegance in every detail."
      />
    </div>

    <div id="hb-flow">
      <RouterLink to="/#aura-box">
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

#intro-box {
  margin-top: 100px;
  min-height: 100vh;
  padding: 5px;
}

#heading-intro {
  color: var(--font-color-white);
  font-size: 45px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;

  font-family: "Italianno", cursive;
  font-weight: 400;
  font-style: normal;

  width: 40vw;
  margin-left: 30px;
  margin-top: 15px;
  opacity: 80%;
}

#heading-intro img {
  margin-top: 0%;
  padding-top: 0%;
  width: 40vw;
  position: relative;
  top: -30px;
}

#intro-para {
  color: #bdbdbd;
  font-size: 16px;
  width: 60vw;
  margin-top: 15px;
  margin-left: 30px;
  animation: slideInFromLeft 750ms forwards;
}

#intro-bt-box {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  margin-top: 20px;
  animation: animationOpacity 3000ms forwards;
  /* border: 1px solid red; */
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */

  #heading-intro {
    width: 90vw;
    font-size: 38px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    font-family: "Italianno", cursive;
    font-weight: 400;
    font-style: normal;

    margin: 0 auto;
    margin-bottom: 50px;
    opacity: 80%;
  }

  #heading-intro img {
    margin-top: 25px;
    padding-top: 0%;
    width: 95vw;
    position: relative;
    top: -30px;
  }

  #intro-bt-box {
    flex-direction: column;
  }

  #intro-para {
    color: #bdbdbd;
    font-size: 18px;
    width: 90vw;
    margin-top: 15px;
    margin-left: 5px;
  }
}
</style>
