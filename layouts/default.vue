<template>
    <div class="h-screen w-screen bg-cover grid grid-rows-7" :class="`bg-[url(${bg})]`">
        <MenuBar>
            <MainButtons></MainButtons>
            <Status></Status>
        </MenuBar>
        <div class="row-span-5">
            <slot></slot>
        </div>
        <MenuBar>
            Footer
        </MenuBar>
    </div>
</template>

<script setup>

const bg = ref('assets/images/bg/marioOdyssey.svg')
</script>