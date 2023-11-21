<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <blockquote class="content relative flex flex-col pl-4">
    <ContentHeading
      v-if="props.blok.quote"
      level="h3"
      class="text-dark mb-2"
    >
      {{ props.blok.quote }}
    </ContentHeading>
    <figcaption class="flex flex-col">
      <span
        v-if="props.blok.quotee"
        class="text-xl font-normal leading-6 lg:text-2xl lg:leading-7"
      >
        {{ props.blok.quotee }}
      </span>
      <span
        v-if="props.blok.source"
        class="text-sm font-thin"
      >
        {{ props.blok.source }}
      </span>
    </figcaption>
  </blockquote>
</template>

<script setup>
  const props = defineProps({
    blok: {
      type: Object,
      default: () => ({}),
    },
  });
</script>

<style lang="postcss">
  .quote-component {
    .content {
      &::before {
        content: '';
        background-image: url('/assets/svg/quote-open.svg');
        @apply absolute left-0 top-0 h-4 w-3 bg-no-repeat object-cover;
      }
    }
  }
</style>
