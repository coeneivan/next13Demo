import React from "react";

export default function Footer({}: {}) {
  return (
    <div className="bg-dark rounded-tr-[150px] mt-32">
      <div className="container py-12 flex gap-8">
        <img className="mb-8" src="https://via.placeholder.com/200x50" />
        <div className="text-white">
          <p>
            Weblighting is een creative software bedrijf gespecialiseerd in web
            en mobile apps.
          </p>
          <p>
            Met de laaste nieuwe technologie, helpen wij onze klanten hun doelen
            bereiken.
          </p>
          <p>We don't stop until you see the light.</p>
        </div>
      </div>
    </div>
  );
}
