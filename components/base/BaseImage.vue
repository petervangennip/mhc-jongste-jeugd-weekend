<template>
  <NuxtImg
    :provider="props.provider"
    :src="props.src"
    :alt="props.alt"
    :width="props.width"
    :height="props.height"
    :sizes="props.sizes"
    :modifiers="props.modifiers"
    :loading="lazyLoading"
  />
</template>

<script setup>
  const props = defineProps({
    provider: {
      type: String,
      default: 'storyblok',
    },
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
    sizes: {
      type: String,
      default: '',
    },
    modifiers: {
      type: Object,
      default: () => ({}),
    },
    lazy: {
      type: Boolean,
      default: true,
    },
  });

  const lazyLoading = computed(() => (props.lazy ? 'lazy' : null));
</script>
