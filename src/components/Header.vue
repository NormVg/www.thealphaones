<script setup>
import { useNavBarStore } from "@/stores/NavBarStore";
// import logo from "../assets/logo.svg";
import logo from "../assets/image/ico.png";

import NavLogo from "../assets/image/nav-logo.svg";


const NavBarStore = useNavBarStore()

const ToggleNavBar = () => {
  NavBarStore.setNavBar(!NavBarStore.isNavBar)
}


</script>

<template>



  <header>
    <div id="header">
      <div id="header-box">
        <div id="header-logo">
          <img :src="logo" alt="">
        </div>
        <div id="nav-toggle" @click="ToggleNavBar">
          <img :src="NavLogo" alt="toggle flower" >
        </div>
      </div>
      <div id="header-border"></div>
    </div>
  </header>


</template>

<style scoped>
@media only screen and (max-width: 768px) {

/* For mobile phones: */

#nav-toggle  {
  margin-right: 25px;
}

}


@keyframes floating {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
}

 #nav-toggle img {
  animation: floating 2s ease-in-out infinite;
  position: fixed;
}

#header {
  /* height: 100px; */
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#header-border {
  height: 1px;
  width: 97vw;
  background-color: var(--color-border);
}

#header-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 96vw;

  margin-bottom: 10px;
  margin-top: 10px;
}

#nav-toggle {
 z-index: 12;
}


#header-logo , #nav-toggle {
 display: flex;
 justify-content: center;
 align-items: center;
}


#header-box img {
  height: 40px;
}

#header-logo img{
  height: 30px;
}
</style>
