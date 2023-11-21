<template>
  <div class="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-80">
    <!-- eslint-disable-next-line vuejs-accessibility/no-static-element-interactions -->
    <span
      class="absolute left-0 top-0 h-full w-full"
      @click="handleClose()"
      @keydown="handleClose()"
    />
    <slot />
    <!-- eslint-disable-next-line vuejs-accessibility/no-static-element-interactions -->
    <div
      class="absolute right-16 top-16 cursor-pointer text-white"
      @click="handleClose()"
      @keydown="handleClose()"
    >
      sluiten
    </div>
  </div>
</template>

<script setup>
  const emit = defineEmits(['modalClose']);

  const handleClose = () => {
    emit('modalClose');
  };
</script>
