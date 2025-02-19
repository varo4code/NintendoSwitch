<template>
  <div class="flex items-center gap-10 transition-all duration-1200 opacity-0" :class="{'opacity-100' : show}">
    <!-- OPTIONS BUTTON -->
    <div
      class="flex justify-around items-center gap-2 text-white font-[Poppins] font-extralight text-3xl"
    >
      <img src="assets/icons/buttonPlus.svg" alt="Options" class="h-7" />
      <span>Options</span>
    </div>
    <!-- CHANGE USER -->
    <div
      v-if="isPlaying"
      class="flex justify-around items-center gap-2 text-white font-[Poppins] font-extralight text-3xl"
    >
      <img src="assets/icons/buttonY.svg" alt="Change User" class="h-7" />
      <span>Change User</span>
    </div>
    <!-- CLOSE SOFTWARE -->
    <div
      v-if="isPlaying"
      class="flex justify-around items-center gap-2 text-white font-[Poppins] font-extralight text-3xl"
    >
      <img src="assets/icons/buttonX.svg" alt="Close Software" class="h-7" />
      <span>Close Software</span>
    </div>
    <div
      class="flex justify-around items-center gap-2 text-white font-[Poppins] font-extralight text-3xl"
    >
      <img src="assets/icons/buttonA.svg" alt="Start" class="h-7" />
      <span v-if="isPlaying">Continue</span>
      <span v-else>Start</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const isPlaying = ref(true);
interface Props {
  show: boolean;
}

defineProps<Props>();

const gamesStore = useGamesStore()
const { initialized } = storeToRefs(gamesStore)
</script>
