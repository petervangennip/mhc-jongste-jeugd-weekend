<template>
  <!-- eslint-disable vue/no-v-html -->
  <div
    class="rte"
    v-html="resolvedRichText"
  ></div>
</template>

<script setup>
  const props = defineProps({
    richText: {
      type: Object,
      default: () => ({}),
    },
  });

  const resolvedRichText = computed(() =>
    renderRichText(props.richText, {
      resolver: (component, blok) => {
        return `<component :blok='${JSON.stringify(blok)}' is="${component}" />`;
      },
    }),
  );
</script>

<style lang="postcss">
  .rte {
    blockquote,
    dl,
    dd,
    ul,
    ol,
    hr,
    figure,
    p,
    pre {
      @apply mb-3 text-black;

      &:last-child {
        @apply mb-0;
      }
    }
  }
</style>
