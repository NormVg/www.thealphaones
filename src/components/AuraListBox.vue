<script setup>

import roseBar from "../assets/image/rose-bar-ver.png"

</script>

<template>

  <div id='aura-list-box'>
    <img :src="roseBar" alt="" />
    <ul>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aperiam quaerat velit voluptatibus eaque
        minima corrupti aliquid, quam veniam ratione eveniet et illo facilis voluptatum laboriosam tempore labore qui
        numquam.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ex nemo fugit repellat officia magnam, quis,
        id excepturi impedit, nobis harum quod. Ducimus nostrum voluptatem ipsum natus, magni assumenda numquam.</li>
      <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus temporibus cum molestiae aliquam labore
        odio doloribus illum reiciendis voluptates, autem earum laborum eos! Optio fuga officia fugiat repellat sapiente
        eaque.</li>
    </ul>
    <img :src="roseBar" alt="" />
  </div>
</template>


<style scoped>
ul {
  list-style-image: url("../assets/list-img.png");
  list-style-position: outside;

  width: 90vw;

}

li {
  margin-bottom: 20px;
}

#aura-list-box {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  color: #adadad;
  margin-left: 50px;
  margin-top: 50px;
  animation: animationOpacity 3000ms forwards ;

  width: 70vw;
}

#aura-list-box img {
  height: 350px;

}


@media only screen and (max-width: 768px) {

  /* For mobile phones: */


  #aura-list-box img {
    height: 350px;
    margin: -120px;
    transform: rotate(90deg);


  }


  #aura-list-box {


    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    color: #adadad;
    margin-left: 0px;
    margin-top: 50px;

    width: 95vw;
  }

}
</style>
