import style from "@/components/card/card.module.css";

const cardStyle = {
  padding: "70px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  border: "1px solid #ddd",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  flexDirection: "column-reverse" as "column-reverse",
};

const Card = ({ children }: { children: React.ReactNode }) => {
  return <div style={cardStyle}>{children}</div>;
};

export default Card;
