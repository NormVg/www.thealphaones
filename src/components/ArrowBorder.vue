<script setup>
const prop = defineProps({
  RightPlace:{
    type: Boolean,
    default: true
  },
  BorderHeight:{
    type: String,
    default: "2px"
  },
  BorderWidth:{
    type: String,
    default:"100%"
  },
  ShapeHeight:{
    type: String,
    default: "10px"
  },
  ShapeWidth:{
    type: String,
    default: "10px"
  },
  customStyle:{
    type: Object,
    default:{}
  },
  isGrowAnimtion:{
    type: Boolean,
    default: false
  }

});

import {computed} from 'vue';

const cStyleBorder = computed(() => {

  return {
    height: `${prop.BorderHeight}`,
    width: `${prop.BorderWidth}`,
    justifyContent: prop.RightPlace ? 'flex-end' : 'flex-start',

    ...prop.customStyle
  }
}
);

const cStyleShape = computed(() => {

return {
  height: `${prop.ShapeHeight}`,
  width: `${prop.ShapeWidth}`,

}
});


const asd = `height:calc(${prop.ShapeHeight} + 1px )`
</script>

<template>
  <div :style="asd">
  <div id="arrow-border" :style="cStyleBorder" :class="prop.isGrowAnimtion ? 'IsAnimation': ''">
    <div id="arrow-shape" :style="cStyleShape">

    </div>

  </div>
</div>
</template>

<style scoped>



@keyframes growWidth {
  0% {
    /* width: 0; */
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    opacity: 1;
    width: 130%;
    transform: translateX(-10%);
  }
}


.IsAnimation{
  animation: growWidth 0.5s ease-in-out forwards;
}


#arrow-border{
  /* height: ;
  width: 200px; */
  background-color: white;

  justify-content: flex-end;
  display: flex;
  align-items: center;
  /* right: 0%; */
margin-top: 10px;


}

#arrow-shape{
  /* height: 10px;
  width: 10px; */
  background-color: white;
  transform: rotate(45deg);
}

</style>
