<template>
  <div>
    <BaseHeading
      class="btn"
      :level="props.level"
      :visual-level="props.visualLevel"
      :alignment="props.alignment"
    >
      {{ props.title }}
    </BaseHeading>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
    level: {
      type: String,
      default: 'h1',
    },
    visualLevel: {
      type: String,
      default: '',
    },
    alignment: {
      type: [String, Boolean],
      default: null,
    },
  });
</script>
