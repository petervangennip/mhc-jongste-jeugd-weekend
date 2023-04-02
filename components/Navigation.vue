<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section v-editable="props.blok">
    <div class="flex mb-8">
      <NuxtLink
        to="/"
        class="flex title-font font-medium items-center max-w-[55px] lg:max-w-[75px]"
        aria-labelledby="companylogo"
      >
        <BaseImage
          v-if="navigationData.logo?.filename"
          :src="navigationData.logo.filename"
          :alt="navigationData.logo?.alt"
        />
      </NuxtLink>

      <nav class="hidden lg:flex flex-wrap items-center text-base justify-center ml-16">
        <ul class="flex gap-14 w-full">
          <li
            v-for="(navItem, index) in navigationData.nav"
            :key="index"
          >
            <BaseLink
              v-if="navItem.link?.cached_url"
              class="font-bold text-primary-500 no-underline text-lg nav-link hover:underline underline-offset-[6px] decoration-2"
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
