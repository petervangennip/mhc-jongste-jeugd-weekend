<template>
  <div
    class="grid grid-cols-12"
    :class="{ 'gap-4': !props.noGap }"
  >
    <div :class="indent">
      <slot />
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
    noIndentMobile: {
      type: Boolean,
      default: false,
    },
    noGap: {
      type: Boolean,
      default: false,
    },
    narrow: {
      type: Boolean,
      default: false,
    },
  });

  const indent = computed(() => {
    return props.narrow
      ? 'col-span-12 lg:col-start-4 lg:col-span-6'
      : !props.indentLeft && !props.indentRight
      ? 'col-span-12'
      : props.indentLeft && props.indentRight && props.noIndentMobile
      ? 'col-span-12 lg:col-start-2 lg:col-span-10'
      : props.indentLeft && props.indentRight
      ? 'col-start-2 col-span-10'
      : props.indentLeft
      ? 'col-start-2 col-span-11'
      : props.indentRight && !props.noIndentMobile
      ? 'col-span-11 col-end-12'
      : props.indentRight && props.noIndentMobile
      ? 'col-span-12 lg:col-span-11 lg:col-end-12'
      : '';
  });
</script>
