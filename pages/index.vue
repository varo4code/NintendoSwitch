<template>
  <div class="grid grid-rows-[7fr_4fr] h-full">
    <div
      class="relative flex w-full overflow-x-auto scrollbar-hide scrollbar-hidden"
    >
      <div class="pl-26"></div>
      <div
        ref="carousel"
        class="flex gap-6 px-6 py-4 transition-all duration-300"
      >
        <img
          v-for="g in games"
          :key="g.id"
          :src="g.img"
          :alt="g.title"
          class=" cursor-pointer transition-transform duration-300 hover:scale-110"
          :class="[g.active ? 'w-[300px] h-[300px]': 'w-[200px] h-[200px]']"
        />
      </div>
    </div>
    <div class="pl-26 pt-8 flex">
      <img src="assets/icons/esbr/e10.svg" alt="ESBR - E10" class="h-24" />
      <h1 class="ml-6 mt-1.5 text-white font-[Poppins] text-5xl tracking-wide">
        The Legend of Zelda: Breath of the Wild
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
const games = ref([
  {
    id: 2,
    img: "/images/miniatures/marioOdyssey.svg",
    title: "Super Mario Odyssey",
    esbr: "e10",
    active: true
  },
  {
    id: 3,
    img: "/images/miniatures/animalCrossing.svg",
    title: "Animal Crossing: New Horizons",
    esbr: "e",
  },
  {
    id: 4,
    img: "/images/miniatures/hades.svg",
    title: "Hades",
    esbr: "t",
  },
  {
    id: 5,
    img: "/images/miniatures/minecraft.svg",
    title: "Minecraft",
    esbr: "e10",
  },
  {
    id: 6,
    img: "/images/miniatures/luigiMansion.svg",
    title: "Luigi's Mansion 3",
    esbr: "e",
  },
  {
    id: 7,
    img: "/images/miniatures/hollowKnight.svg",
    title: "Hollow Knight",
    esbr: "e10",
  },
]);
</script>

<style scoped>
.carousel {
  scroll-snap-type: x mandatory;
}
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

/* Ocultar scrollbar en Firefox */
.scrollbar-hidden {
  scrollbar-width: none;
}
</style>
