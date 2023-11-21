<!-- eslint-disable vue/multi-word-component-names vue/no-v-html -->
<template>
  <section v-editable="props.blok">
    <BaseGridContainer class="relative">
      <component
        :is="`script`"
        :src="props.blok.script"
        type="module"
      />

      <div v-html="props.blok.webComponent"></div>
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
