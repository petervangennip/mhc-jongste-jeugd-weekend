<template>
  <footer class="relative bg-black py-24 text-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-left lg:text-left">
        <div class="w-full px-4 lg:w-6/12">
          <h4 class="mb-4 text-2xl text-white">Volg ons!</h4>
          <h5 class="mb-2 mt-0 text-base text-white">Volg MHC Best op de volgende social media</h5>
          <div class="mb-6 mt-6 lg:mb-0">
            <ul class="flex gap-2">
              <li
                v-for="(social, index) in footerData.socialList"
                :key="index"
              >
                <BaseLink
                  :link="social.link"
                  :aria-label="social.name"
                  class="aspect-ratio flex h-8 w-8 items-center justify-center rounded-sm bg-green"
                >
                  <Icon
                    :name="social.icon"
                    class="h-5 w-5 text-white ease-in-out"
                  />
                </BaseLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full px-4 lg:w-6/12">
          <div class="items-top mb-6 flex flex-wrap">
            <div class="ml-auto w-full px-4 lg:w-4/12">
              <ul class="list-unstyled">
                <li
                  v-for="(navItem, index) in footerData.footerNavigation"
                  :key="index"
                >
                  <BaseLink
                    :link="navItem.link"
                    class="block pb-2 text-sm font-semibold text-white"
                  >
                    {{ navItem.label }}
                  </BaseLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
  const config = useRuntimeConfig();
  const storyblokApi = useStoryblokApi();
  let footerData = [];

  const footer = await storyblokApi.get(`cdn/stories/footer`, {
    version: config.public.contentVersion,
  });
  footerData = footer.data.story.content;
</script>
