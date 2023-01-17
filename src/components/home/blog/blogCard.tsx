import React from "react";

export default function BlogCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm w-1/3 flex-none">
      <img className="w-full h-32 object-cover" src="https://via.placeholder.com/50x50" />
      <h3 className="my-4 text-2xl">{title}</h3>
      <div className="flex">
        <p>{description}</p>
        <a href="" className="ctaBtn flex justify-center h-min whitespace-nowrap text-xs">Lees verder</a>
      </div>
    </div>
  );
}
