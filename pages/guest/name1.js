import { useRouter } from 'next/router';
import guestData from '../../data/guests.json';

export default function GuestPage() {
  const router = useRouter();
  const { name } = router.query;

  if (!name) return <p>Loading...</p>;

  const guest = guestData[name.toLowerCase()];
  if (!guest) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>Name Not Found</h1>
        <p>Please double-check the spelling and try again.</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '700px', margin: 'auto', padding: '2rem', textAlign: 'center' }}>
      <h1>Hi {guest.displayName},</h1>
      <p>Thanks for getting this far and listing your name down. Please make sure you read all the information below and if you have any questions give us a shout!</p>
      <p><strong>{guest.message}</strong></p>
      <hr />
      <p><strong>DIETARY REQUIREMENTS:</strong><br />For anyone bringing food, please ensure to list anything with (egg, nuts or fish in it) we have multiple people attending with allergies.</p>
      <p><strong>DIETARY REQUESTS:</strong><br />If you have requested either no pork, no fish or have an allergy. Please make sure NJ, Hillary or Renee know as soon as you arrive to ensure you get something to eat. (Heads up!) We won’t be able to do much if you arrive too late!</p>
      <p>Thanks so much and see you soon!<br /><em>The full address will be listed 24 hrs to the event and the closest station is Norbury Station!</em></p>
    </div>
  );
}
