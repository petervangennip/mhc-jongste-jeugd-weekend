<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    v-editable="props.blok"
    :class="props.blok.backgroundColor"
  >
    <BaseGridContainer class="relative">
      <BaseGridCol100
        :indent-left="true"
        :indent-right="true"
        no-indent-mobile
      >
        <BaseSpacer :size="props.blok.size"></BaseSpacer>
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
