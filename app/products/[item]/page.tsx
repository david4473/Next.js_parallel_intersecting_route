import Card from "@/components/card/page";
import { getImage } from "@/lib/unsplash/page";
import Image from "next/image";

interface IimageProps {
  params: {
    item: string;
  };
}

const containerStyle = {
  padding: "70px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  border: "1px solid #ddd",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  gap: "10px",
};

const span = {
  color: "orange",
};

export default async function Page({ params: { item } }: IimageProps) {
  const res = await getImage(item);
  const image = await res.json();
  console.log(image);

  return (
    <div style={containerStyle}>
      <div>
        <Image
          src={image.urls.regular}
          alt={image.alt_description}
          width={500}
          height={500}
          objectFit="cover"
        />
      </div>
      <div>
        <p>
          <span style={span}>Name:</span> {image.alt_description}
        </p>
        <p>
          <span style={span}>Description:</span> {image.description}
        </p>
        <p>
          <span style={span}>Author:</span> {image.user.name}
        </p>
        <div className="social">
          <span style={span}>Socials:</span>
          <ul>
            <li style={{ display: "inline-block", marginRight: "5px" }}>
              <a href={`twitter.com/${image.user.twitter_username}`}>Twitter</a>
              ,
            </li>
            <li style={{ display: "inline-block" }}>
              <a href={image.user.portfolio_url}>Portfolio</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
