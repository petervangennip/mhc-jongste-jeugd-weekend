/* eslint-disable no-undef */
export default async (contentType, options) => {
  const config = useRuntimeConfig();
  const storyblokApi = useStoryblokApi();

  const resp = await storyblokApi.get(`cdn/stories/`, {
    version: config.public.contentVersion,
    starts_with: contentType ? `${contentType}` : '',
    sort_by: 'first_published_at:desc',
    is_startpage: 0,
    ...options,
  });
  return resp;
};
