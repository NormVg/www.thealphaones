<script setup>
import ArrowBorder from './ArrowBorder.vue';


const prop = defineProps({
  title: {
    type: String,
    default: "Heading 1"
  },
  sub: {
    type: String,
    default: "Sub heading of the title"
  },
  BorderWidth: {
    type: String,
    default: '200px'
  },
  PhoneBorderWidth: {
    type: String,
    default: '175px'
  }
})



</script>

<template>


  <div id='sub-head' :style="{ '--custom-width-phone': prop.PhoneBorderWidth,  '--custom-width': prop.BorderWidth  }">



    {{ prop.title }}
    <div id='heading-sub'>
      <div id="arrow-box">
        <ArrowBorder />
      </div>
      <div id="arrow-text"> {{ prop.sub }}</div>

    </div>
  </div>
</template>

<style scoped>





#arrow-box {
  width: var(--custom-width);
  margin-left: -10px;
}

#arrow-text {
  opacity: 0;
  animation: animationOpacity forwards 650ms;
  animation-delay: 850ms;
}

#heading-sub {
  display: flex;
  flex-direction: row;
  gap: 5px;
  position: absolute;
  font-family: "K2D", sans-serif;
  font-weight: 400;
  font-style: normal;

  font-size: 15px;
  margin-top: -20px;

  color: #8f8f8f;
  animation: slideInFromLeft 1500ms forwards;
}


#sub-head {
  font-family: "Italianno", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 45px;
  padding: 0%;
  margin-top: -35px;
  animation: slideInFromLeft 850ms forwards;

}

@media only screen and (max-width: 768px) {

/* For mobile phones: */
#arrow-box {
  width:  var(--custom-width-phone);
  /* width: 175px; */
}


#sub-head {
  font-size: 40px;
}





}

</style>
