<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="relative flex h-full w-full justify-end">
    <BaseLink
      :link="{ cached_url: '/' }"
      class="absolute left-0 top-2"
    >
      <img
        src="@/assets/img/mhc-logo.svg"
        alt="Go to homepage"
        class="max-w-[65px] lg:left-auto lg:max-w-[90px]"
      />
    </BaseLink>
    <AppNavigation />
  </div>
</template>
