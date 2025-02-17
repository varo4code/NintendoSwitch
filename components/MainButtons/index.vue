<template>
  <div
    class="flex items-center gap-3 transition-all duration-1200 opacity-0"
    :class="{ 'opacity-100': show }"
  >
    <img src="assets/icons/avatarMario.svg" alt="Avatar" class="h-18" />
    <svg
      width="2"
      height="45"
      viewBox="0 0 2 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0.914062 0.922413V44.9224" stroke="#F0F0F0" />
    </svg>

    <div
      class="grid place-content-center h-18 w-18 p-4 rounded-full bg-[#FE0000] hover:bg-[#2E2E2E]/70"
    >
      <img src="assets/icons/switchLogo.svg" alt="Avatar" class="h-16" />
    </div>

    <div class="grid place-content-center h-18 w-18 rounded-full bg-[#2E2E2E]/40 hover:bg-[#2E2E2E]/70">
        <img src="assets/icons/message.svg" alt="Chat" class="h-11" />
    </div>
    <div class="grid place-content-center h-18 w-18 rounded-full bg-[#2E2E2E]/40 hover:bg-[#2E2E2E]/70">
        <img src="assets/icons/shop.svg" alt="Shop" class="h-11" />
    </div>
    <div class="grid place-content-center h-18 w-18 rounded-full bg-[#2E2E2E]/40 hover:bg-[#2E2E2E]/70">
        <img src="assets/icons/frame.svg" alt="Screen" class="h-11" />
    </div>
    <div class="grid place-content-center h-18 w-18 rounded-full bg-[#2E2E2E]/40 hover:bg-[#2E2E2E]/70">
        <img src="assets/icons/joycon.svg" alt="Joycon" class="h-11" />
    </div>
    <div class="grid place-content-center h-18 w-18 rounded-full bg-[#2E2E2E]/40 hover:bg-[#2E2E2E]/70">
        <img src="assets/icons/brightness.svg" alt="Brightness" class="h-11" />
    </div>
    <div class="grid place-content-center h-18 w-18 rounded-full bg-[#2E2E2E]/40 hover:bg-[#2E2E2E]/70">
        <img src="assets/icons/power.svg" alt="Power" class="h-11" />
    </div>

  </div>
</template>

<script setup lang="ts">
interface Props {
  show: boolean;
}

defineProps<Props>();
</script>
