import React from "react";

export default function ReviewCard({
  review,
  name,
  company,
}: {
  review: string;
  name: string;
  company: string;
}) {
  return (
    <div className="shadow-sm bg-white p-8 w-1/3">
      <img src='https://via.placeholder.com/100' />
      <p className="my-8">{review}</p>
      <p className="text-right"><strong>{name}</strong> - {company}</p>
    </div>
  );
}
