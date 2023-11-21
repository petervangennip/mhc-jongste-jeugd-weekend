<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    id="plug"
    class="v"
  >
    {{ timerOutput }}
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';

  const countDownToTime = new Date('Sep 26, 2029 00:00:00').getTime();
  const timerOutput = ref(null);

  const startTimer = () => {
    const timeNow = new Date().getTime();
    const timeDifference = countDownToTime - timeNow;
    const millisecondsInOneSecond = 1000;
    const millisecondsInOneMinute = millisecondsInOneSecond * 60;
    const millisecondsInOneHour = millisecondsInOneMinute * 60;
    const millisecondsInOneDay = millisecondsInOneHour * 24;
    const differenceInDays = timeDifference / millisecondsInOneDay;
    const remainderDifferenceInHours = (timeDifference % millisecondsInOneDay) / millisecondsInOneHour;
    const remainderDifferenceInMinutes = (timeDifference % millisecondsInOneHour) / millisecondsInOneMinute;
    const remainderDifferenceInSeconds = (timeDifference % millisecondsInOneMinute) / millisecondsInOneSecond;
    const remainingDays = Math.floor(differenceInDays);
    const remainingHours = Math.floor(remainderDifferenceInHours);
    const remainingMinutes = Math.floor(remainderDifferenceInMinutes);
    const remainingSeconds = Math.floor(remainderDifferenceInSeconds);
    timerOutput.value = `${remainingDays} Days : ${remainingHours} Hours : ${remainingMinutes} Minutes : ${remainingSeconds} Seconds`;
  };

  onMounted(() => {
    setInterval(startTimer, 1000);
  });
</script>
