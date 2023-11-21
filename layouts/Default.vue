<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="app">
    <AppHeader />
    <slot />
    <AppFooter />
    <CookieControl
      v-if="!inEditMode"
      locale="nl"
    />
  </main>
</template>

<script setup>
  const { cookiesEnabledIds } = useCookieControl();
  const inEditMode = useInEditMode();

  // example: react to a cookie being accepted
  watch(
    () => cookiesEnabledIds.value,
    (current, previous) => {
      if (!previous?.includes('google-analytics') && current?.includes('google-analytics')) {
        // cookie with id `google-analytics` got added
        window.location.reload(); // placeholder for your custom change handler
      }
    },
    { deep: true },
  );
</script>
