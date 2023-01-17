import Image from "next/image";
import React from "react";
import headerImage from "../../images/Header.png";
export default function Header({}: {}) {
  return (
    <div
      style={{
        backgroundImage: "url(/Header.png)",
        backgroundSize: "contain",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container flex place-items-center">
        <div className="w-full mt-72 mb-64">
          <p className="text-6xl text-gray-700">
            Wij helpen jouw
            <br />
            Business{" "}
            <span className="underline-offset-2 underline">groeien</span>
          </p>
          <p className="my-8 tracking-wide text-gray-800 text-opacity-70">
            Weblighting helpt jou om online en offline te stralen. <br />
            Onze experten in online marketing staan klaar om je te helpen je
            doelen te behalen.
          </p>

          <a className="ctaBtn">Ontdek onze diensten</a>
        </div>
        <div className="flex justify-end w-full h-full"></div>
      </div>
    </div>
  );
}
