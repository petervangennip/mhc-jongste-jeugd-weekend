<template>
  <div class="card relative w-full rounded-xl">
    <div
      v-if="item.image?.filename"
      class="absolute left-0 top-0 z-[1] h-full w-full overflow-hidden rounded-3xl bg-gradient-to-t from-black/75 from-10% via-black/50 via-30% to-transparent to-90%"
    ></div>
    <BaseImage
      v-if="item.image?.filename"
      class="relative z-0 aspect-4/3 w-full rounded-3xl object-cover"
      :src="item.image.filename"
      :alt="item.image?.alt"
      sizes="xxl:475px xl:425px lg:510px md:100vw sm:100vw xs:100vw xxs:100vw"
    />
  </div>
  <div
    v-if="item.caption"
    class="text-dark-500 mt-3 border-l-2 pl-2 font-thin"
  >
    <p class="pr-6 text-base leading-4">
      {{ item.caption }}
    </p>
  </div>
</template>

<script setup>
  defineProps({
    item: {
      type: Object,
      default: () => ({}),
    },
  });
</script>
