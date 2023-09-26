import shoes from '@/assets/shoes.json';
import { Shoe } from '@/types';
import { useMemo } from 'react';

const ResultsScreen = () => {
  const sortedShoes = useMemo(() => [...shoes.value].sort((a, b) => b.rating - a.rating), []);

  return (
    <div className="page">
      <h1>Your Recommended Shoes</h1>
      <ul>
        {sortedShoes.map((shoe: Shoe) => (
          <li key={shoe.id}>
            <img src={`@/assets/images/shoes/${shoe.id}.png`} alt={shoe.name} />
            <h2>
              {shoe.name} rating: {shoe.rating}
            </h2>
            <p>{shoe.description}</p>
            <p>Price: {shoe.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsScreen;
