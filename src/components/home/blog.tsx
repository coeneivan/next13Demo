import React from "react";
import BlogCard from "./blog/blogCard";
import EmptyBlogCard from "./blog/emptyBlogCard";

export default function Blog({}: {}) {
  const blogs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div id="services" className="mx-auto flex flex-col relative">
      <div className="bg-decor reverse"></div>
      <div className="z-10">
        <div className="flex justify-between items-center container">
          <h2 className="headingTitle !mt-16">
            <b>Dit zijn onze recente</b> <br />
            creaties en blog{" "}
          </h2>
          <p className="w-1/3 text-right">
            Bekijk onze creaties en blijf op de hoogte van onze recente
            artikelen. Misschien doe je hier wat inspiratie op?
          </p>
        </div>
        <div>
          <div className="flex overflow-x-auto gap-8 pl-96 pr-8 mb-8 pb-8 w-screen">
            {blogs.slice(0, 9).map((blog) => (
              <BlogCard
                key={blog}
                icon="https://via.placeholder.com/50x50"
                title="Lorem ipsum dolor sit amet"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed"
              />
            ))}
            {blogs.length > 10 && <EmptyBlogCard />}
          </div>
        </div>
      </div>
    </div>
  );
}
