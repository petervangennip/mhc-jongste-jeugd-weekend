<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section v-editable="props.blok">
    <div class="flex flex-col lg:flex-row mb-8">
      <NuxtLink
        to="/"
        class="flex title-font font-medium items-center max-w-[55px] lg:max-w-[75px] shrink-0 mb-8 lg:mb-0"
        aria-labelledby="companylogo"
      >
        <BaseImage
          v-if="navigationData.logo?.filename"
          :src="navigationData.logo.filename"
          :alt="navigationData.logo?.alt"
        />
      </NuxtLink>

      <nav class="flex flex-wrap items-center text-base justify-center lg:ml-16">
        <ul class="flex flex-col xs:flex-row gap-4 w-full">
          <li
            v-for="(navItem, index) in navigationData.nav"
            :key="index"
          >
            <BaseLink
              v-if="navItem.link?.cached_url"
              class="font-bold text-primary-500 no-underline text-lg nav-link underline-offset-[6px] decoration-2 px-4 py-2 rounded-2xl transition-all"
              :href="`/${navItem.link?.cached_url}`"
              :target="navItem.link?.target"
            >
              {{ navItem.label }}
            </BaseLink>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script setup>
  const config = useRuntimeConfig();
  const storyblokApi = useStoryblokApi();
  let navigationData = [];

  const navigation = await storyblokApi.get(`cdn/stories/navigation`, {
    version: config.public.contentVersion,
  });
  navigationData = navigation.data.story.content;

  const props = defineProps({
    blok: {
      type: Object,
      default: () => ({}),
    },
  });
</script>

<style lang="postcss">
  .router-link-exact-active {
    @apply bg-primary-500 text-white;
  }
</style>
