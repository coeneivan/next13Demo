import React from "react";

export default function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm w-1/4 flex-none">
      <div id="icon">
        <img src="https://via.placeholder.com/50x50" />
      </div>
      <h3 className="my-4 text-2xl">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
