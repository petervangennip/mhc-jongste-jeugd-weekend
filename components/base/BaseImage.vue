<template>
  <NuxtImg
    :provider="props.provider"
    :src="imageSrc"
    :alt="imageAlt"
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
    image: {
      type: Object,
      default: () => ({}),
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

  const imageSrc = computed(() => {
    return props.image.filename ? props.image.filename : null;
  });

  const imageAlt = computed(() => {
    return props.image.alt ? props.image.alt : null;
  });
</script>
