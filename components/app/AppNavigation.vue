<template>
  <section v-editable="props.blok">
    <div class="mb-8 flex h-full flex-col lg:flex-row">
      <nav class="nav flex flex-wrap items-center justify-center text-base">
        <ul class="flex w-full flex-col gap-4 lg:flex-row">
          <li
            v-for="(navItem, index) in navigationData.navigation"
            :key="index"
          >
            <BaseLink
              v-if="navItem.link?.cached_url"
              class="nav-link rounded-sm border-2 border-transparent px-3 py-1 font-fira text-lg font-normal uppercase text-black no-underline decoration-2 underline-offset-[6px] transition-colors hover:border-2 hover:border-green hover:bg-green/80 hover:text-white"
              :link="navItem.link?.cached_url === 'home' ? { cached_url: '/' } : navItem.link"
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
  .nav {
    .router-link-exact-active {
      @apply border-2 border-green bg-green/80 text-white;
    }
  }
</style>
