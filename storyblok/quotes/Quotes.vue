<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    v-editable="props.blok"
    class="py-16 lg:py-40"
  >
    <BaseGridContainer class="relative px-8 lg:px-0">
      <BaseHeading
        v-if="props.blok.title"
        level="h2"
        class="mb-8"
        :alignment="props.blok.centerTitle"
      >
        {{ props.blok.title }}
      </BaseHeading>
      <!-- eslint-disable vue/multi-word-component-names -->

      <div class="relative overflow-hidden">
        <BaseCarousel
          :carousel-items="props.blok.quotes"
          :space-between="8"
          slides-per-view="1"
          :show-navigation="false"
          :autoplay-enable="true"
        >
          <template #default="{ item }">
            <QuoteItem :quote="item" />
          </template>
        </BaseCarousel>
      </div>
    </BaseGridContainer>
  </section>
</template>

<script setup>
  const props = defineProps({
    blok: {
      type: Object,
      default: () => ({}),
    },
    id: {
      type: String,
      default: '',
    },
    spaceBetween: {
      type: Number,
      default: 0,
    },
    breakpoints: {
      type: Object,
      default: () => ({}),
    },
    centeredSlides: {
      type: Boolean,
      default: false,
    },
    showNavigation: {
      type: Boolean,
      default: true,
    },
    showPagination: {
      type: Boolean,
      default: true,
    },
  });
</script>

<style lang="postcss">
  .swiper {
    &-button-disabled {
      @apply opacity-40;
    }
  }

  .swiper-pagination-bullets {
    &.swiper-pagination-horizontal {
      @apply bottom-4;
    }

    .swiper-pagination-bullet {
      @apply mr-2;
      transform: scale(0.8);

      &.swiper-pagination-bullet-active {
        @apply relative bg-black text-green;
        transform: scale(0.8);

        &::after {
          @apply absolute left-[-6px] top-[-5.9px] rounded-full border-4 p-[6px];
          content: '';
        }
      }
    }
  }

  .my-swiper {
    @apply container relative mx-auto overflow-visible pt-4;
  }
</style>
