<template>
  <div
    class="grid grid-cols-12"
    :class="{ 'gap-4': !props.noGap }"
  >
    <div class="col-span-12 lg:col-span-7">
      <slot name="col-1"></slot>
    </div>

    <div class="col-span-12 lg:col-span-5">
      <slot name="col-2"></slot>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    noGap: {
      type: Boolean,
      default: false,
    },
  });
</script>
