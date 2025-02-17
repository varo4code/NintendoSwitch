<template>
  <div class="flex items-center gap-2">
    <span
      class="text-white font-[Poppins] font-extralight text-3xl tracking-wide uppercase"
    >
      {{ currentTime }}
    </span>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

const currentTime = ref(dayjs().format("hh:mm A"));
let timer = null;

onMounted(() => {
  timer = setInterval(() => {
    currentTime.value = dayjs().format("hh:mm A");
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>
