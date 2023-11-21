<template>
  <component
    :is="props.level"
    :class="[props.visualLevel ? `${props.visualLevel}` : null, alignment ? 'text-center' : null]"
  >
    <slot />
  </component>
</template>

<script setup>
  const props = defineProps({
    level: {
      type: String,
      default: 'h1',
    },
    visualLevel: {
      type: String,
      default: '',
    },
    alignment: {
      type: Boolean,
      default: false,
    },
  });
</script>
