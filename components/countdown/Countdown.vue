<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex justify-center bg-brown">
    <client-only>
      <VueCountdown
        v-slot="{ days, hours, minutes, seconds }"
        :time="endDate"
        :transform="dateTime"
      >
        <div class="flex justify-start text-black">
          <div class="flex gap-2 rounded-md px-4 py-4 font-fira lg:gap-8">
            <CountdownItem
              :value="days"
              title="Dagen"
            />
            <CountdownItem
              :value="hours"
              title="Uren"
            />
            <CountdownItem
              :value="minutes"
              title="Minuten"
            />
            <CountdownItem
              :value="seconds"
              title="Seconden"
            />
          </div>
        </div>
      </VueCountdown>
    </client-only>
  </div>
</template>

<script setup>
  import VueCountdown from '@chenfengyuan/vue-countdown';

  const dateTime = (props) => {
    const formattedProps = {};

    Object.entries(props).forEach(([key, value]) => {
      formattedProps[key] = value < 10 ? `0${value}` : String(value);
    });

    return formattedProps;
  };

  const endDate = computed(() => {
    return new Date('2024-06-21T12:00:00+02:00') - new Date();
  });
</script>
