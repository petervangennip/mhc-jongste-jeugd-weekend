<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    v-editable="props.blok"
    :class="props.blok.backgroundColor"
    class="py-16 lg:py-40"
  >
    <BaseGridContainer class="relative px-8 lg:px-0">
      <BaseGridCol50-50>
        <template #col-1>
          <div class="p-4 shadow">
            <BaseHeading
              v-if="props.blok.title"
              level="h2"
              class="title-outline mb-8"
            >
              {{ props.blok.title }}
            </BaseHeading>
            <BaseRichText
              v-if="props.blok.text"
              :class="{ 'mb-4': props.blok.text }"
              :rich-text="props.blok.text"
            />
            <BaseLink
              v-if="props.blok.link"
              :link="props.blok.link"
            >
            </BaseLink>
          </div>
        </template>
        <template #col-2>
          <Parallaxy
            v-if="props.blok.image"
            class=""
            :speed="80"
          >
            <BaseImage
              v-if="props.blok.image"
              :image="props.blok.image"
            >
            </BaseImage>
          </Parallaxy>
        </template>
      </BaseGridCol50-50>
    </BaseGridContainer>
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
