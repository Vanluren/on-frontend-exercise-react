<template>
  <div class="page">
    <h1>Your Recommended Shoes</h1>
    <ul>
      <li v-for="shoe in sortedShoes" :key="shoe.id">
        <img
          :src="require(`@/assets/images/shoes/${shoe.id}.png`)"
          :alt="shoe.name"
        />
        <h2>{{ shoe.name }} => rating: {{ shoe.rating }}</h2>
        <p>{{ shoe.description }}</p>
        <p>Price: {{ shoe.price }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { shoes } from '@/store/index';

export default defineComponent({
  name: 'ResultsScreen',
  setup() {
    const sortedShoes = computed(() => {
      return [...shoes.value].sort((a, b) => b.rating - a.rating);
    });

    return {
      sortedShoes,
    };
  },
});
</script>
