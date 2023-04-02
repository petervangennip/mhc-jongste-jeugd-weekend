<template>
  <div
    :id="props.anchorId"
    class="container mx-auto"
  >
    <slot />
  </div>
</template>

<script setup>
  const props = defineProps({
    anchorId: {
      type: String,
      default: null,
    },
  });
</script>
