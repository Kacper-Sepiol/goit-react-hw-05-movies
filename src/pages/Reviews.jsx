import { useEffect, useState } from 'react';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const apiKey = '493ca07ced65ee69b94ce62a3e3db755';

    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`
    )
      .then(response => response.json())
      .then(data => setReviews(data.results))
      .catch(error => console.error('Error fetching reviews:', error));
  }, [movieId]);

  return (
    <div>
      <h2>Recenzje</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
