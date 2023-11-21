<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    v-editable="props.blok"
    class="hero relative overflow-hidden"
  >
    <div class="flex min-h-[320px] lg:min-h-[600px]">
      <BaseGridContainer class="relative z-[2] flex">
        <div class="grid w-full grid-cols-12">
          <div class="col-span-12 px-4 lg:px-0">
            <div class="flex h-full flex-col justify-center">
              <span
                v-if="props.blok?.payoff"
                class="mb-2 font-kavoon text-2xl leading-5 text-white max-md:drop-shadow-lg lg:mb-4 lg:text-4xl lg:leading-8"
              >
                {{ props.blok.payoff }}
              </span>
              <BaseRichText
                v-if="props.blok?.title"
                :rich-text="props.blok.title"
                class="text-white max-md:drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </BaseGridContainer>
    </div>
    <div
      v-if="props.blok.image?.filename"
      class="absolute left-0 top-0 z-[1] h-[500px] w-full overflow-hidden bg-gradient-to-t from-black/75 from-10% via-black/50 via-30% to-transparent to-90% lg:h-full"
    />
    <BaseImage
      v-if="props.blok.image?.filename"
      class="absolute left-0 top-0 z-0 h-full w-full overflow-hidden object-cover"
      :src="props.blok.image.filename"
      :alt="props.blok.image?.alt"
      sizes="xxl:1440px xl:100vw lg:100vw md:100vw sm:100vw xs:100vw xxs:100vw"
      :lazy="false"
      height="500"
    />
  </section>
  <Countdown />
</template>

<script setup>
  const props = defineProps({
    blok: {
      type: Object,
      default: () => ({}),
    },
  });
</script>

<style lang="postcss">
  .hero {
    .rte {
      h1 {
        @apply text-7xl leading-10 lg:text-[6.8rem] lg:leading-[8rem];
      }

      .text-green {
        -webkit-text-stroke: 2px #fff;
        text-shadow: 0 2px 0 #097348;
      }

      .text-blue {
        -webkit-text-stroke: 2px #fff;
        text-shadow: 0 2px 0 #000;
      }

      .text-white {
        -webkit-text-stroke: 2px #3267b2;
        text-shadow: 0 2px 0 #000;
      }
    }
  }
</style>
