<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    v-editable="props.blok"
    class="py-16 lg:py-40"
  >
    <BaseGridContainer class="relative border-b border-b-black px-8 lg:px-0">
      <BaseHeading
        v-if="props.blok.title"
        level="h2"
        class="mb-8"
      >
        {{ props.blok.title }}
      </BaseHeading>
      <FaqList :questions="props.blok.questions"></FaqList>
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
