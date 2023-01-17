import React from "react";
import ReviewCard from "./reviews/reviewCard";

export default function Reviews({}: {}) {
  const reviews = [1, 2];
  return (
    <div className="container">
      <h2 className="headingTitle text-center ">
        <b>Dit is wat</b> <br />
        onze klanten zeggen{" "}
      </h2>
      <div className="flex gap-12 justify-center">
        {reviews.map((item) => (
          <ReviewCard
            key={item}
            company="Ipsum inc"
            name="Lorem"
            review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl sit amet aliquam lacinia, nisl nisl aliquam lorem, nec ultricies nisl nisl eu nisl."
          />
        ))}
      </div>
    </div>
  );
}
