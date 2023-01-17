import React from "react";
import ServiceCard from "./services/serviceCard";

export default function Services({}: {}) {
  return (
    <div id="services" className="flex flex-col relative">
      <div
        className="bg-decor"
      ></div>
      <div className="z-10">
        <h2 className="headingTitle text-center ">
          <b>Dit doen we</b> <br />
          Voor jouw Business{" "}
        </h2>
        <div className="flex overflow-x-auto gap-8 pl-96 pr-8 mb-16 w-screen">
          {[1, 2, 3, 4].map((item) => (
            <ServiceCard
              icon="https://via.placeholder.com/50x50"
              title="Lorem ipsum dolor sit amet"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
