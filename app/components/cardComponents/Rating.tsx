import React from 'react';

interface RatingProps {
  defaultRating?: number;
  onChange?: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ defaultRating = 2, onChange }) => {
  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRating = parseInt(event.target.value, 5);
    if (onChange) {
      onChange(newRating);
    }
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <input
          key={value}
          type="radio"
          name="rating"
          className="mask mask-star-2 bg-orange-400"
          value={value}
          defaultChecked={value === defaultRating}
          onChange={handleRatingChange}
        />
      ))}
    </div>
  );
};

export default Rating;