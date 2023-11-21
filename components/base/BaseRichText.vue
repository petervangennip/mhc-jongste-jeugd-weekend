<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="rte">
    <div v-html="resolvedRichText"></div>
  </div>
</template>

<script setup>
  import { renderRichText } from '@storyblok/vue';

  const props = defineProps({
    richText: {
      type: Object,
      default: () => {},
    },
  });

  const resolvedRichText = computed(() => renderRichText(props.richText));
</script>
