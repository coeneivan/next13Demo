import React from "react";

export default function EmptyBlogCard({}: {}) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm w-1/3 flex-none grid place-items-center">
      <div className="flex gap-4 flex-col">
        <p className="text-center">
          Nog niet genoeg? <br />
        </p>

        <a href="" className="ctaBtn">
          Ontdek ze allemaal
        </a>
      </div>
    </div>
  );
}
