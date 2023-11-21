<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    v-editable="props.blok"
    class="py-16 lg:py-40"
  >
    <BaseGridContainer class="relative px-8 lg:px-0">
      <div class="grid w-full grid-cols-12 lg:gap-8">
        <div class="col-span-12 mb-8 flex flex-col justify-start lg:col-span-12 lg:mb-0">
          <BaseRichText
            v-if="props.blok.text"
            :rich-text="props.blok.text"
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
