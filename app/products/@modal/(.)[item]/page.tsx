import { getImage } from "@/lib/unsplash/page";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

interface IimageProps {
  params: {
    item: string;
  };
}

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItem: "center",
  height: "100%",
  alignItems: "center",
  position: "absolute",
  width: "100%",
  top: "0",
  left: "0",
  background: "rgba(0,0,0,.7)",
} as React.CSSProperties;

const cardStyle = {
  padding: "10px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  border: "1px solid #ddd",
  borderRadius: "10px",
} as React.CSSProperties;

const imageStyle = {
  position: "relative",
  maxWidth: "600px",
  height: "300px",
  aspectRatio: "55/55",
} as React.CSSProperties;

export default async function Page({ params: { item } }: IimageProps) {
  const res = await getImage(item);
  const image = await res.json();

  return (
    <>
      <div style={containerStyle}>
        <div style={cardStyle}>
          <div style={imageStyle}>
            <Image
              src={image.urls.regular}
              alt={image.alt_description}
              priority
              fill
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
        <p>{image.alt_description}</p>
      </div>
    </>
  );
}
