<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    v-editable="props.blok"
    :class="props.blok.backgroundColor"
    class="py-16 lg:py-40"
  >
    <BaseGridContainer class="relative px-8 lg:px-0">
      <BaseGridCol100>
        <BaseHeading
          v-if="props.blok.title"
          level="h2"
          class="title-outline mb-8"
        >
          {{ props.blok.title }}
        </BaseHeading>
        <div class="iframe-wrapper">
          <iframe
            :title="props.blok.title"
            :src="props.blok.source"
          />
        </div>
      </BaseGridCol100>
    </BaseGridContainer>
  </section>
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
  .iframe-wrapper {
    @apply relative overflow-hidden;
    padding-bottom: 66.6666%;
  }

  iframe {
    @apply absolute bottom-0 left-0 right-0 top-0 h-full w-full;
  }
</style>
