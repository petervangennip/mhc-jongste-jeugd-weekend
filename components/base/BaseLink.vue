<template>
  <nuxt-link
    :id="props.id || null"
    :to="url"
    :target="props.link?.target"
  >
    <slot />
  </nuxt-link>
</template>

<script setup>
  const props = defineProps({
    id: {
      type: String,
      default: null,
    },
    link: {
      type: Object,
      default: () => ({}),
    },
  });

  const url = computed(() => {
    if (props.link?.target === '_blank') {
      return props.link?.cached_url;
    } else {
      return `${props.link?.cached_url}`;
    }
  });
</script>
