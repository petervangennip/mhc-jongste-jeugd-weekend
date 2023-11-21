<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    v-editable="props.blok"
    class="py-16 lg:py-40"
  >
    <BaseGridContainer class="relative px-8 lg:px-0">
      <BaseGridCol100>
        <BaseHeading
          v-if="props.blok.title"
          level="h2"
          class="mb-8"
        >
          {{ props.blok.title }}
        </BaseHeading>
        <ul class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-2">
          <li
            v-for="(photo, index) in props.blok.photos"
            :key="index"
          >
            <BaseImage
              v-if="photo.filename"
              :src="photo.filename"
              :alt="photo.alt"
              sizes="xxl:200px xl:200px lg:200px md:330px sm:100vw xs:100vw xxs:100vw"
              class="h-full max-h-48 w-full cursor-pointer object-cover shadow-md sm:max-h-72 lg:max-h-36"
              @click="handleEnlargement(photo, index)"
              @keydown="handleEnlargement(photo, index)"
            />
          </li>
        </ul>
      </BaseGridCol100>
    </BaseGridContainer>
    <ModalContainer
      v-if="modal.open"
      @modal-close="modalClose()"
    >
      <button
        type="button"
        class="relative z-[1] bg-blue p-4 text-white"
        :class="[currentPhotoIndex === 0 ? 'pointer-events-none opacity-50' : null]"
        @click="prev()"
        @keydown="prev()"
      >
        PREV
      </button>

      <BaseLoader v-if="photoIsLoading"></BaseLoader>

      <BaseImage
        v-if="currentPhoto"
        :src="currentPhoto.filename"
        :alt="currentPhoto.alt"
        sizes="xxl:1920px xl:1440px lg:100vw md:100vw sm:100vw xs:100vw xxs:100vw"
        class="h-3/4 w-3/4 object-contain shadow-md"
        @load="handleImageLoad"
      />

      <button
        type="button"
        class="relative z-[1] bg-blue p-4 text-white"
        :class="[totalPhotos === currentPhotoIndex ? 'pointer-events-none opacity-50' : null]"
        @click="next()"
        @keydown="next()"
      >
        Next
      </button>
    </ModalContainer>
  </section>
</template>

<script setup>
  const currentPhoto = ref(null);
  const currentPhotoIndex = ref(null);
  const photoIsLoading = ref(false);

  const props = defineProps({
    blok: {
      type: Object,
      default: () => ({}),
    },
  });

  const totalPhotos = ref(props.blok.photos.length);

  const { modal, modalClose, modalOpen } = useModal();

  const handleImageLoad = () => {
    photoIsLoading.value = false; // Set loading state to false once the image has loaded
  };

  const handleEnlargement = (photo, i) => {
    modalOpen();
    currentPhoto.value = photo;
    currentPhotoIndex.value = i;
  };

  const next = () => {
    if (currentPhotoIndex.value !== null && currentPhotoIndex.value < props.blok.photos.length - 1) {
      photoIsLoading.value = true;
      currentPhotoIndex.value++;
      currentPhoto.value = props.blok.photos[currentPhotoIndex.value];
    }
  };

  const prev = () => {
    if (currentPhotoIndex.value !== null && currentPhotoIndex.value > 0) {
      photoIsLoading.value = true;
      currentPhotoIndex.value--;
      currentPhoto.value = props.blok.photos[currentPhotoIndex.value];
    }
  };
</script>
