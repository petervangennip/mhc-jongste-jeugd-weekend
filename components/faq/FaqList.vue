<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    v-for="(question, index) in props.questions"
    :key="question.id"
    class="faqlist border-t border-t-black"
  >
    <BaseHeading
      level="h3"
      class="relative py-2 text-xl leading-5"
    >
      <button
        :id="`accordion-${index}`"
        type="button"
        :aria-expanded="questions[index].isExpanded"
        :aria-controls="`question-${index}`"
        class="flex w-full items-center justify-between"
        @click="handleAccordion(index)"
      >
        <span>{{ question.title }}</span>
        <Icon
          v-if="questions[index].isExpanded"
          name="material-symbols:remove-rounded"
          class="h-8 w-8 text-black ease-in-out"
        />
        <Icon
          v-else
          name="material-symbols:add-rounded"
          class="h-8 w-8 text-black ease-in-out"
        />
      </button>
    </BaseHeading>
    <Collapse
      :id="`question-${index}`"
      :when="questions[index].isExpanded"
      :aria-labelledby="`accordion-${index}`"
      class="overflow-hidden"
      :class="[questions[index].isExpanded ? 'h-auto' : 'h-0']"
    >
      <BaseRichText
        v-if="question.answer"
        :rich-text="question.answer"
      />
    </Collapse>
  </div>
</template>

<script setup>
  import { Collapse } from 'vue-collapsed';

  const props = defineProps({
    questions: {
      type: Array,
      default: () => [],
    },
  });

  const handleAccordion = (selectedIndex) => {
    props.questions.forEach((_, index) => {
      // eslint-disable-next-line vue/no-mutating-props
      props.questions[index].isExpanded = index === selectedIndex ? !props.questions[index].isExpanded : false;
    });
  };
</script>
