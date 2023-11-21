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
        <ul class="flex w-full gap-4">
          <li
            v-for="(sponsor, index) in props.blok.sponsors"
            :key="index"
          >
            <BaseImage
              v-if="sponsor.image"
              :image="sponsor.image"
              class="max-w-[140px]"
            >
            </BaseImage>
          </li>
        </ul>
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
