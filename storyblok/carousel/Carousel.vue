<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    :id="blok.anchorId || null"
    v-editable="props.blok"
  >
    <BaseGridContainer>
      <BaseHeading
        v-if="props.blok.title"
        level="h2"
        class="mb-8"
      >
        {{ props.blok.title }}
      </BaseHeading>
      <BaseCarousel
        :carousel-items="props.blok.carouselItems"
        :space-between="8"
        :breakpoints="{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }"
      ></BaseCarousel>
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
