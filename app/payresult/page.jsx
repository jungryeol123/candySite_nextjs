import { Suspense } from "react";
import PayResultClient from "./PayResultClient.jsx";

export default function PayResultPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PayResultClient />
    </Suspense>
  );
}
