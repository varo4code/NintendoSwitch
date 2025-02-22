<template>
  <div
    class="grid grid-rows-[7fr_4fr] h-full opacity-0 transition-all duration-1200"
    :class="{ 'opacity-100': initialized }"
  >
    <div class="relative flex w-full overflow-x-hidden scrollbar-hidden">
      <div
        ref="carousel"
        class="flex gap-6 px-6 py-4 transition-all duration-300"
      >
        <img
          v-for="g in games"
          :key="g.id"
          :data-id="g.id"
          ref="gameRefs"
          :src="'/images/miniatures/' + g.img"
          :alt="g.title"
          class="cursor-pointer transition-transform duration-300 hover:scale-110"
          :class="[g.active ? 'w-[300px] h-[300px]' : 'w-[200px] h-[200px]']"
          @click="selectGame(g.id)"
        />
      </div>
    </div>
    <div v-if="currentGame?.esbr" class="pl-26 pt-8 flex">
      <img
        v-if="currentGame?.esbr == 'a0'"
        src="assets/icons/esbr/a0.svg"
        alt="ESBR - A0"
        class="h-24"
      />
      <img
        v-if="currentGame?.esbr == 'e'"
        src="assets/icons/esbr/e.svg"
        alt="ESBR - E"
        class="h-24"
      />
      <img
        v-if="currentGame?.esbr == 'e10'"
        src="assets/icons/esbr/e10.svg"
        alt="ESBR - E10"
        class="h-24"
      />
      <img
        v-if="currentGame?.esbr == 'm'"
        src="assets/icons/esbr/m.svg"
        alt="ESBR - M"
        class="h-24"
      />
      <img
        v-if="currentGame?.esbr == 't'"
        src="assets/icons/esbr/t.svg"
        alt="ESBR - T"
        class="h-24"
      />
      <h1 class="ml-6 mt-1.5 text-white font-[Poppins] text-5xl tracking-wide">
        {{ currentGame?.title }}
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
const gamesStore = useGamesStore();
const { initialized, games, currentGame } = storeToRefs(gamesStore);

const gameRefs = ref<HTMLImageElement[]>([]);
const carousel = ref<HTMLElement | null>(null);

const selectGame = async (id: number) => {
  await nextTick();

  const gameElement = gameRefs.value.find((el) => el.dataset.id == String(id));
  
  if (gameElement) {
    console.log(gameElement);
    gameElement.scrollIntoView({
      behavior: 'smooth',
      inline: 'center'
    })

    gamesStore.setActive(id);
  }
};
</script>

<style scoped>
.carousel {
  scroll-snap-type: x mandatory;
}
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

.scrollbar-hidden {
  scrollbar-width: none;
  scroll-behavior: smooth;
}
</style>
