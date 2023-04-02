<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section v-editable="props.blok">
    <BaseGridContainer class="relative">
      <div class="grid grid-cols-12 gap-8 w-full">
        <div class="col-span-12 lg:col-span-10 flex justify-start flex-col">
          <Navigation />
        </div>
        <div class="col-span-12 lg:col-span-12 flex justify-start flex-col">
          <h2
            v-if="props.blok.title"
            class="mb-6"
          >
            {{ props.blok.title }}
          </h2>
          <BaseRichText
            v-if="props.blok.richText"
            :rich-text="props.blok.richText"
          />
        </div>
        <div class="col-span-12 lg:absolute -top-52 -right-48">
          <BaseImage
            v-if="props.blok.image?.filename"
            :src="props.blok.image.filename"
            :alt="props.blok.image.alt"
            sizes="xxl:360px xl:360px lg:360px md:100vw sm:100vw xs:100vw xxs:100vw"
            class="w-full lg:rounded-lg lg:rotate-[8deg] shadow-2xl"
          />
        </div>
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
  });
</script>
