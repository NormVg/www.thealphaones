<script setup>
import ArrowBorder from './ArrowBorder.vue';


</script>

<template>

  <div id="nav-bar">
    <div id="nav-item-box">


      <RouterLink to="/#intro-box">
        <div id="nav-item">

          Introduction
          <ArrowBorder :RightPlace="false" :isGrowAnimtion="true" />

        </div>
      </RouterLink>

      <RouterLink to="/#aura-box">

        <div id="nav-item">
          Aura Lifestyle
          <ArrowBorder :RightPlace="false" :isGrowAnimtion="true" />

        </div>
      </RouterLink>

      <RouterLink to="/#prog-box">

        <div id="nav-item">
          Solutions
          <ArrowBorder :RightPlace="false" :isGrowAnimtion="true" />

        </div>
      </RouterLink>


      <!-- <RouterLink to="/#intro-box">

        <div id="nav-item">
          Synergy
          <ArrowBorder :RightPlace="false" :isGrowAnimtion="true" />

        </div>
      </RouterLink> -->


      <!-- <RouterLink to="/#intro-box">

        <div id="nav-item">
          Journal
          <ArrowBorder :RightPlace="false" :isGrowAnimtion="true" />

        </div>
      </RouterLink> -->


      <RouterLink to="/#contact-box">

        <div id="nav-item">
          Nexus
          <ArrowBorder :RightPlace="false" :isGrowAnimtion="true" />

        </div>
      </RouterLink>

    </div>


  </div>

</template>

<style scoped>
a {

  text-decoration: none;
}

#nav-item {
  width: max-content;
  transition: 400ms all ease-in-out;
  color: var(--font-color-grey);
  font-size: 40px;
  margin-bottom: 25px;
  margin-right: 15px;
  text-align: right;
  transition: all ease-in-out 200ms;
}

#nav-item:hover>div {
  display: block;
}

#nav-item:hover {
  color: whitesmoke;
  padding-right: 10px;
  font-weight: bold;
}

#nav-item>div {
  display: none;
}



#nav-item-box {
  height: 100%;
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;

}




#nav-bar {
  border-left: 1px solid var(--color-border);
  height: 100vh;
  width: 40vw;
  position: fixed;
  right: 0%;
  top: 0%;
  z-index: 11;
  background-color: black;
  background-image: url("../assets/image/circle-bg.png");
  background-repeat: no-repeat;
  background-size: 450px;

  background-position-y: bottom;
  background-position-x: right;
  padding-top: 60px;
}


@media only screen and (max-width: 768px) {

  /* For mobile phones: */

  #nav-bar {
    width: 85vw;
    background-position-y: 400px;

  }

}
</style>
