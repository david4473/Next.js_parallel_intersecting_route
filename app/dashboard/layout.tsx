import React from "react";

interface ISlots {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
  revenue: React.ReactNode;
}

export default function DashboardLayout(props: ISlots) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>{props.children}</h1>
      <div style={{ display: "flex", height: "600px", gap: "10px" }}>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <>{props.analytics}</>
          <>{props.team}</>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{props.revenue}</div>
      </div>
    </div>
  );
}
