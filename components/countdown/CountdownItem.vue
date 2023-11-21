<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex min-w-[65px] flex-col text-center lg:min-w-[120px]">
    <span class="mb-2 w-full text-3xl lg:text-11xl lg:leading-14">{{ props.value }}</span>
    <span class="mt-1 text-sm uppercase leading-3 lg:text-lg">{{ props.title }}</span>
  </div>
</template>

<script setup>
  const props = defineProps({
    value: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  });
</script>
