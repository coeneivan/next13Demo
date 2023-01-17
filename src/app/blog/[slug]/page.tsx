import React from "react";

export default function Post({ params }: { params: { slug: string } }) {
  return <h1 className="">{params.slug}</h1>;
}
