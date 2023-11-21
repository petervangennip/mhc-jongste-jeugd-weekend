<template>
  <div
    class="spacer relative w-full"
    :class="[spacerSize]"
  >
    <slot />
  </div>
</template>

<script setup>
  const props = defineProps({
    size: {
      type: String,
      default: 'md',
    },
  });

  const spacerSize = computed(() => {
    return props.size === 'sm' ? 'h-2 md:h-4' : props.size === 'lg' ? 'h-10 md:h-20' : 'h-6 md:h-12';
  });
</script>

<style lang="postcss">
  .spacer {
    &-divider {
      &::before {
        content: '';
        @apply absolute top-1/2 block h-[1px] w-full bg-blue;
      }
    }
  }
</style>
