<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="relative">
    <Swiper
      :pagination="showPagination ? pagination : false"
      :navigation="showNavigation ? navigation : false"
      :space-between="props.spaceBetween"
      :modules="modules"
      :breakpoints="props.breakpoints"
      :centered-slides="props.centeredSlides"
      :autoplay="
        autoplayEnable
          ? {
              delay: props.autoplayDelay,
              disableOnInteraction: props.autoplayDisableOnInteraction,
            }
          : false
      "
      class="my-swiper max-w-full"
    >
      <SwiperSlide
        v-for="item in props.carouselItems"
        :key="item._uid"
        class="overflow-hidden"
      >
        <slot :item="item"></slot>
      </SwiperSlide>
      <div v-if="showNavigation">
        <button
          type="button"
          :class="`swiper-prev-${props.id}`"
          class="absolute left-2 top-1/2 z-10 ml-3 -translate-y-1/2 transform"
          aria-label="Previous slide"
        >
          <Icon
            name="fa-solid:arrow-left"
            class="text-primary-alpha mb-auto h-8 w-8 ease-in-out"
          />
        </button>
        <button
          type="button"
          :class="`swiper-next-${props.id}`"
          class="swiper-next absolute right-2 top-1/2 z-10 mr-3 -translate-y-1/2 transform"
          aria-label="Next slide"
        >
          <Icon
            name="fa-solid:arrow-right"
            class="text-primary-alpha mb-auto h-8 w-8 ease-in-out"
          />
        </button>
      </div>
    </Swiper>
  </div>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import { Pagination, Navigation, Autoplay } from 'swiper/modules';

  const props = defineProps({
    id: {
      type: String,
      default: '',
    },
    carouselItems: {
      type: Object,
      default: () => ({}),
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
    autoplayEnable: {
      type: Boolean,
      default: false,
    },
    autoplayDelay: {
      type: Number,
      default: 2500,
    },
    autoplayDisableOnInteraction: {
      type: Boolean,
      default: false,
    },
  });

  const modules = [Pagination, Navigation, Autoplay];

  const pagination = ref({
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  });

  const navigation = ref({
    nextEl: `.swiper-next-${props.id}`,
    prevEl: `.swiper-prev-${props.id}`,
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
      @apply bottom-0;
    }

    .swiper-pagination-bullet {
      @apply mr-2;
      transform: scale(0.8);

      &.swiper-pagination-bullet-active {
        @apply relative;
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
