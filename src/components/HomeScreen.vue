<template>
  <div class="page home">
    <h1>Take the quiz and try your first pair!</h1>
    <button class="startButton primary" @click="startQuiz">Start quiz</button>
    <small class="footnote">30 days risk free</small>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'HomeScreen',
  setup() {
    const router = useRouter();

    function startQuiz() {
      router.push('/quiz');
    }

    return { startQuiz };
  },
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.home {
  padding-top: 50px;
  background-color: $color-light-grey;
  background-image: url('~@/assets/images/runner.png');
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: auto 80%;

  .startButton {
    margin-top: 20px;
  }

  .footnote {
    display: block;
    margin-top: 15px;
  }
}
</style>
