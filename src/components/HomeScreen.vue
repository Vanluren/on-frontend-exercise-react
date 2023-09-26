rac
<template>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'HomeScreen',
  setup() {
    const router = useRouter();


    return { startQuiz };
  },
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

</style>
