import React from "react";
import Card from "@/components/card/page";
import { wait } from "@/lib/wait/page";
import Link from "next/link";

export default async function Team() {
  return (
    <Card>
      <Link href="/dashboard/members">
        <p>
          Got to <code>/members</code> page
        </p>
      </Link>
      <h2>Teams slot</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        style={{ width: "100px" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    </Card>
  );
}
