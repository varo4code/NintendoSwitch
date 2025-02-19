<template>
  <div
    class="h-screen w-screen bg-cover grid grid-rows-[3fr_13fr_2fr] transition-all duration-1200"
    :class="{ 'opacity-100': initialized }"
    :style="styleObj"
  >
    <MenuBar>
      <MainButtons :show="initialized" v-on:power="turnOff"></MainButtons>
      <Status></Status>
    </MenuBar>
    <div v-if="!initialized" class="grid place-items-center">
      <img
        @click="startSwitch"
        src="assets/icons/power.svg"
        alt="Power"
        class="w-35 h-35 rounded-full border-6 p-4 border-white transition-all duration-700 hover:bg-[#43D6DF] hover:w-38 hover:h-38"
      />
    </div>
    <div v-else>
      <slot></slot>
    </div>
    <MenuBar>
      <img src="assets/icons/switch.svg" alt="Nintendo" class="h-10" />
      <ActionButtons :show="initialized"></ActionButtons>
    </MenuBar>
  </div>
</template>

<script setup>
const styleObj = ref({ backgroundImage: `url(/images/bg/gray.svg)` });
const initialized = ref(false);

const startSwitch = () => {
  const element = document.documentElement;

  if (
    !document.fullscreenElement &&
    !document.webkitFullscreenElement &&
    !document.mozFullScreenElement &&
    !document.msFullscreenElement
  ) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      // Safari
      element.webkitRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
      // Firefox
      element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      // Internet Explorer / Edge
      element.msRequestFullscreen();
    } else {
      console.warn("Fullscreen API is not supported in this browser.");
    }
    setTimeout(() => {
      initialized.value = true;
      setTimeout(() => {
        styleObj.value = { backgroundImage: `url(/images/bg/marioOdyssey.svg)` };
      }, 1100);
    }, 1100);
  }else{
    initialized.value = true;
    setTimeout(() => {
      styleObj.value = { backgroundImage: `url(/images/bg/marioOdyssey.svg)` };
    }, 1100);
  }
};

const turnOff = () => {
  initialized.value = false;
  styleObj.value = { backgroundImage: `url(/images/bg/gray.svg)` };
};
</script>
