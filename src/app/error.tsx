"use client";

import { useEffect } from "react";
import { Button } from "@/components/common/Button";
import { RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
        Something went wrong!
      </h2>
      <p
        style={{
          color: "var(--text-secondary)",
          maxWidth: "400px",
          marginBottom: "2rem",
        }}
      >
        An unexpected error occurred. Please try again or refresh the page.
      </p>
      <Button
        variant="primary"
        onClick={() => reset()}
        icon={<RefreshCw size={16} />}
      >
        Try Again
      </Button>
    </div>
  );
}
