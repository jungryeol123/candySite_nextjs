import { Suspense } from "react";
import SuccessClient from "./SuccessClient";

export default function OAuthSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessClient />
    </Suspense>
  );
}
