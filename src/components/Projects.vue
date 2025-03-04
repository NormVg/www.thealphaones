<script setup>
import ArrowHeading from './ArrowHeading.vue';

import progBoxLeft from "../assets/image/prog-box-left.png"
import progBoxRight from "../assets/image/prog-box-right.png"
import ProjectCard from './ProjectCard.vue';
import ProjectFull from './ProjectFull.vue';
import { useProgStore } from '@/stores/ProgFull';
import { Vue3Marquee } from 'vue3-marquee';


import flow from "../assets/image/FollowUp/flow-prog.png"

const  ProgStore = useProgStore()



</script>

<template>




  <div id='prog-box'>
    <ArrowHeading title="Building" sub="What Is The Point Of Owning A Race Car If You Can’t Drive It?"
      BorderWidth="150px" PhoneBorderWidth="200px" />

    <Transition>
    <ProjectFull v-if="ProgStore.isProgFull" />
  </Transition>

    <div id='pojects-box'>
      <img id='pojects-box-side' :src="progBoxLeft" />



      <div id='prog-box-inner'>




        <Vue3Marquee :clone="true" :duration="55" :pause-on-hover="true" :gradient="true" :gradient-color="[0, 0, 0]"
          gradient-length="15%">



          <ProjectCard title="Title 1" img="test.png" link="https://github.com/TheAlphaOnes"
            content="1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore recusandae harum, fuga quam libero quos deserunt quaerat asperiores amet inventore dolorum quo earum saepe quae, expedita nobis mollitia tenetur."
            disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
          <ProjectCard title="Title 2" link="https://github.com/TheAlphaOnes"
            content="2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore recusandae harum, fuga quam libero quos deserunt quaerat asperiores amet inventore dolorum quo earum saepe quae, expedita nobis mollitia tenetur."
            disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
          <ProjectCard title="Title 1" img="test.png" link="https://github.com/TheAlphaOnes"
            content="1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore recusandae harum, fuga quam libero quos deserunt quaerat asperiores amet inventore dolorum quo earum saepe quae, expedita nobis mollitia tenetur."
            disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
          <ProjectCard title="Title 2" link="https://github.com/TheAlphaOnes"
            content="2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore recusandae harum, fuga quam libero quos deserunt quaerat asperiores amet inventore dolorum quo earum saepe quae, expedita nobis mollitia tenetur."
            disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
          <ProjectCard title="Title 1" img="test.png" link="https://github.com/TheAlphaOnes"
            content="1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore recusandae harum, fuga quam libero quos deserunt quaerat asperiores amet inventore dolorum quo earum saepe quae, expedita nobis mollitia tenetur."
            disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
          <ProjectCard title="Title 2" link="https://github.com/TheAlphaOnes"
            content="2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore recusandae harum, fuga quam libero quos deserunt quaerat asperiores amet inventore dolorum quo earum saepe quae, expedita nobis mollitia tenetur."
            disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />

        </Vue3Marquee>


        <Vue3Marquee :clone="true" :duration="25" :pause-on-hover="true" :gradient="true" :gradient-color="[0, 0, 0]"
          gradient-length="15%">



          <ProjectCard title="Title 1" img="test.png" link="https://github.com/TheAlphaOnes"
            content="1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore recusandae harum, fuga quam libero quos deserunt quaerat asperiores amet inventore dolorum quo earum saepe quae, expedita nobis mollitia tenetur."
            disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
          <ProjectCard title="Title 2" link="https://github.com/TheAlphaOnes"
            content="2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore recusandae harum, fuga quam libero quos deserunt quaerat asperiores amet inventore dolorum quo earum saepe quae, expedita nobis mollitia tenetur."
            disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
          <ProjectCard title="Title 1" img="test.png" link="https://github.com/TheAlphaOnes"
            content="1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore recusandae harum, fuga quam libero quos deserunt quaerat asperiores amet inventore dolorum quo earum saepe quae, expedita nobis mollitia tenetur."
            disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
          <ProjectCard title="Title 2" link="https://github.com/TheAlphaOnes"
            content="2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore recusandae harum, fuga quam libero quos deserunt quaerat asperiores amet inventore dolorum quo earum saepe quae, expedita nobis mollitia tenetur."
            disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
          <ProjectCard title="Title 1" img="test.png" link="https://github.com/TheAlphaOnes"
            content="1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore recusandae harum, fuga quam libero quos deserunt quaerat asperiores amet inventore dolorum quo earum saepe quae, expedita nobis mollitia tenetur."
            disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />
          <ProjectCard title="Title 2" link="https://github.com/TheAlphaOnes"
            content="2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dolore recusandae harum, fuga quam libero quos deserunt quaerat asperiores amet inventore dolorum quo earum saepe quae, expedita nobis mollitia tenetur."
            disc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui? Aspernatur." />

        </Vue3Marquee>


      </div>

      <img id='pojects-box-side' :src="progBoxRight" />
    </div>


    <div id="hb-flow">
      <img :src="flow" alt="">
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
  animation: animationOpacity 3000ms forwards ;

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
  margin: -170px ;
}

}

</style>
