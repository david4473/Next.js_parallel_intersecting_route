import { getImages } from "@/lib/unsplash/page";
import Link from "next/link";
import { image } from "@/lib/types";
import Image from "next/image";

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "auto auto auto",
  gap: "20px",
  placeItem: "center",
} as React.CSSProperties;

const itemStyle = {
  position: "relative",
  maxWidth: "600px",
  aspectRatio: "75/45",
} as React.CSSProperties;

export default async function Products() {
  const res = await getImages();
  const images = await res.json();

  return (
    <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
      <h1>Products</h1>
      <div style={containerStyle}>
        {images.map((img: image) => (
          <div key={img.id} style={itemStyle}>
            <Link href={`/products/${img.id}`}>
              <Image
                src={img.urls.regular}
                alt={img.alt_description}
                priority
                fill
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
