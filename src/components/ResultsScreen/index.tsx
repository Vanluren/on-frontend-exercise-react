import { useQuizStore } from '@/context';
import { useMemo } from 'react';

const ResultsScreen = () => {
  const { shoes } = useQuizStore();
  const sortedShoes = useMemo(() => shoes.sort((a, b) => b.rating - a.rating), [shoes]);

  return (
    <div className="page">
      <h1>Your Recommended Shoes</h1>
      <ul>
        {sortedShoes.map((shoe) => (
          <li key={shoe.id}>
            <img src={`/public/images/shoes/${shoe.id}.png`} alt={shoe.name} />
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
