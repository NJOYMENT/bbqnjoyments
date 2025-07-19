// pages/guest/[slug].js
import { useRouter } from "next/router";
import guestMessages from "../../data/guest-messages.json";

export default function GuestMessagePage() {
  const router = useRouter();
  const { slug } = router.query;

  const guest = guestMessages[slug];

  if (!guest) {
    return (
      <div style={{ textAlign: "center", marginTop: "4rem" }}>
        <h1>404 - Guest Not Found</h1>
        <p>We couldn't find your message. Please check your name or contact the host.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1>Hello {guest.displayName} 👋🏾</h1>
      <p>{guest.message}</p>
    </div>
  );
}
