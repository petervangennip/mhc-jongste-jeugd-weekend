<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    v-editable="props.blok"
    class="parallax relative overflow-hidden"
  >
    <div class="flex h-[500px] flex-col justify-center overflow-hidden">
      <Parallaxy
        class=""
        :speed="50"
      >
        <img
          v-if="props.blok.image?.filename"
          :src="props.blok.image.filename"
          alt="Parallax Image"
          class="h-auto w-full"
        />
      </Parallaxy>
    </div>
  </section>
</template>

<script setup>
  import Parallaxy from '@lucien144/vue3-parallaxy';

  const props = defineProps({
    blok: {
      type: Object,
      default: () => ({}),
    },
  });
</script>
