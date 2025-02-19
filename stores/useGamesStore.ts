export const useGamesStore = defineStore("games", () => {
  const games = ref([
    {
      id: 1,
      img: "zelda.svg",
      title: "The Legend of Zelda: Breath of the Wild",
      esbr: "e10",
    },
    {
      id: 2,
      img: "marioOdyssey.svg",
      title: "Super Mario Odyssey",
      esbr: "e10",
    },
    {
      id: 3,
      img: "animalCrossing.svg",
      title: "Animal Crossing: New Horizons",
      esbr: "e",
    },
    {
      id: 4,
      img: "hades.svg",
      title: "Hades",
      esbr: "t",
    },
    {
      id: 5,
      img: "minecraft.svg",
      title: "Minecraft",
      esbr: "e10",
    },
    {
      id: 6,
      img: "luigiMansion.svg",
      title: "Luigi's Mansion 3",
      esbr: "e",
    },
    {
      id: 7,
      img: "hollowKnight.svg",
      title: "Hollow Knight",
      esbr: "e10",
    },
    {
      id: 8,
      img: "pokemonArceus.svg",
      title: "Pokémon Legends: Arceus",
      esbr: "e",
    },
    {
      id: 9,
      img: "metroid.svg",
      title: "Metroid Dread",
      esbr: "t",
    },
    {
      id: 10,
      img: "portal2.svg",
      title: "Portal 2",
      esbr: "t",
    },
    {
      id: 99,
      img: "software.svg",
      title: "All Software",
      active: true
    },
  ]);
  const initialized = ref(false)

  const setActive = (id?:number) => {
    if (!id) id = games.value[0].id
    games.value.map((g) => g.active = false)
    const game = games.value.find((g) => g.id == id)
    if (game) game.active = true
  }

  return {
    initialized,
    games,
    currentGame: computed(() => {
        return games.value.find((g) => g.active)
    }),
    setActive
  };
});
