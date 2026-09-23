import Link from "next/link";
import { Button } from "@/components/common/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
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
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: 900,
          background: "var(--accent-gradient)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        404
      </h1>
      <h2 style={{ fontSize: "1.75rem", margin: "1rem 0" }}>Page Not Found</h2>
      <p
        style={{
          color: "var(--text-secondary)",
          maxWidth: "420px",
          marginBottom: "2rem",
        }}
      >
        The page you are looking for doesn&apos;t exist or has been moved to
        another address.
      </p>
      <Button variant="primary" href="/" icon={<ArrowLeft size={16} />}>
        Back to Homepage
      </Button>
    </div>
  );
}
