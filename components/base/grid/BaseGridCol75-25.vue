<template>
  <div
    class="grid grid-cols-12"
    :class="{ 'gap-4': !props.noGap }"
  >
    <div
      class="col-span-12"
      :class="indentRight ? 'lg:col-span-8' : 'lg:col-span-9'"
    >
      <slot name="col-1"></slot>
    </div>

    <div
      class="col-span-12"
      :class="indentLeft ? 'lg:col-span-2 lg:col-start-2' : 'lg:col-span-3'"
    >
      <slot name="col-2"></slot>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    indentLeft: {
      type: Boolean,
      default: false,
    },
    indentRight: {
      type: Boolean,
      default: false,
    },
    noGap: {
      type: Boolean,
      default: false,
    },
  });
</script>
