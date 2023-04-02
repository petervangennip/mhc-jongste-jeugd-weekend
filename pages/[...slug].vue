<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <StoryblokComponent
      v-if="story"
      :blok="story.content"
    />
  </div>
</template>

<script setup>
  const config = useRuntimeConfig();

  const route = useRoute();
  const { slug } = route.params;
  let story = null;

  // add current language to html tag
  useHead({
    htmlAttrs: {
      lang: 'en',
    },
  });

  try {
    story = await useAsyncStoryblok(slug && slug.length > 0 ? slug.join('/') : 'home', {
      version: config.public.contentVersion,
    });

    // add story to a state
    const stateStory = useState('story');
    stateStory.value = story;
    const { content } = story.value;

    // meta tags
    const companyName = 'MHC Best';
    const pageName = story.value.name;
    const title = `${pageName} | ${companyName}`;
    const description = 'MHC Best - Jongste Jeugd Weekend | 23 & 24 juni 2023 | Best';
    const robots = content.metaRobots || 'noindex,nofollow';
    const metaFullUrl = `${config.public.siteHostname}/${slug && slug.length > 0 ? slug.join('/') : ''}`;

    useSeoMeta({
      title,
      description,
      robots,
      // open graph
      ogType: 'website',
      ogTitle: title,
      ogDescription: description,
      // ogImage: shareImage,
      ogUrl: metaFullUrl,
      // twitter
      twitterCard: 'summary_large_image',
      twitterTitle: title,
      twitterDescription: description,
      twitterUrl: metaFullUrl,
    });
  } catch (error) {
    showError({ statusCode: 404, statusMessage: 'Page Not Found' });
  }
</script>
