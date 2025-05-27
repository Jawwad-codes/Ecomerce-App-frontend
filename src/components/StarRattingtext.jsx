/** @format */

// StarRatingText.jsx
import React from "react";

const StarRatingText = ({ rating }) => {
  const full = "★".repeat(rating);
  const empty = "☆".repeat(5 - rating);
  return <span className="text-yellow-400 text-3xl">{full + empty}</span>;
};

export default StarRatingText;
