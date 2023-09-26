<template>
  <div class="page quiz">
    <h1>{{ currentQuestion.copy }}</h1>

    <div class="buttonContainer">
      <button
        v-for="answer in currentQuestion.answers"
        :key="answer.id"
        class="outline"
        @click="selectAnswer(answer)"
      >
        {{ answer.copy }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { currentQuestion, updateRatings, nextQuestion } from '@/store/index';
import { Answer } from '@/types';

export default defineComponent({
  name: 'QuizScreen',
  setup() {
    const router = useRouter();

    function selectAnswer(answer: Answer): void {
      updateRatings(answer.ratingIncrease);

      answer.nextQuestion !== null
        ? nextQuestion(answer.nextQuestion)
        : router.push('/results');
    }

    return {
      currentQuestion,
      selectAnswer,
    };
  },
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.quiz {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: $color-medium-grey;
  color: $color-white;
}

.buttonContainer {
  display: flex;
  gap: 15px;
  width: 100%;

  button {
    width: 100%;
  }
}
</style>
