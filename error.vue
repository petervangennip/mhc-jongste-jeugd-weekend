<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="app">
    <div class="app-wrapper container relative mx-auto rounded-sm bg-white shadow-xl lg:my-32">
      <div class="absolute top-[-112px] w-full text-center">
        <span class="jjw-title font-anton text-[6.5rem] text-white">JONGSTE JEUGD WEEKEND</span>
      </div>

      <div class="app-inner p-12 lg:p-32">
        <slot />
      </div>
    </div>
  </main>
</template>

<!-- <script setup>
  // get global fallback settings
  const siteSettings = useState('sitesettings');
  const siteDefaults = await useSiteSettings();
  siteSettings.value = siteDefaults;

  // response status
  setResponseStatus(404, 'Page Not Found');

  const config = useRuntimeConfig();

  const { value: story } = await useAsyncStoryblok('error404', {
    version: config.public.contentVersion,
  });
  const { content } = story;

  const companyName = 'SNV';
  const metaTitle = content.title ? `${content.title} | ${companyName}` : companyName;

  useHead({
    title: metaTitle,
    bodyAttrs: {
      lang: 'en',
    },
  });
</script> -->
