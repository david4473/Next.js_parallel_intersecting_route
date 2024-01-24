import Card from "@/components/card/page";
import Link from "next/link";

export default function Members() {
  return (
    <Card>
      <h1>Members page</h1>
      <Link href="/dashboard">
        <p>
          Got back to <code>/teams</code> page
        </p>
      </Link>
    </Card>
  );
}
