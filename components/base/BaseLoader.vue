<template>
  <div
    class="loader absolute bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-white bg-opacity-75"
  >
    <img
      src="@/assets/img/mhc-logo.svg"
      alt=""
      class="rotating h-10 w-10"
    />
  </div>
</template>

<style lang="postcss">
  .loader {
    .rotating {
      animation: rotating 1s linear infinite;
    }
  }

  @keyframes rotating {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
