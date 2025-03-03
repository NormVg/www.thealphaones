<script setup>
import flow from "../assets/image/FollowUp/flow-home.png";
</script>

<template>

  <div id="hero-box">


    <div id='hb-n'>We are:</div>
    <div id='hb-b'>TheAlphaOnes</div>
    <div id='hb-n'>Contrary to Popular Belief, <br /> I Know Exactly What I'm Doing.
    </div>
    <!-- <MoveNextHome /> -->

    <div id="hb-flow">
      <img :src="flow" alt="">
    </div>

  </div>


</template>

<style scoped>



#hb-flow img {
  animation: floating 4s ease-in-out infinite;
}


#hb-flow{
    display: flex;
    justify-content: center;
    margin-top:25vh ;
  }

#hb-flow img{
  height: 60px;
}


#hb-n {
  font-size: 27px;
  animation: slideInFromLeft 1250ms forwards;
}

#hb-b {
  font-family: var(--font-special);
  color: var(--font-color-white);
  font-size: 145px;
  animation: slideInFromLeft 1800ms forwards;

}



#hero-box {
  margin-left: 20px;
  margin-top: 20px;

  height: 80vh;
}


@media only screen and (max-width: 768px) {

  /* For mobile phones: */

  #hero-box {
    margin-left: 20px;
    margin-top: 100px;

    height: 70vh;


  }

  #hb-n {
    font-size: 24px;
    margin-bottom: 10px;
  }

  #hb-b {
    font-family: var(--font-special);
    color: var(--font-color-white);
    font-size: 75px;
  }


  #hb-flow{
    display: flex;
    justify-content: center;
    margin-top:40vh ;
  }

#hb-flow img{
  height: 60px;
}

}
</style>
