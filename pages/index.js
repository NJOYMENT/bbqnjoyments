export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.guestName.value.trim().toLowerCase().replace(/\s+/g, '-');
    if (name) {
      window.location.href = `/guest/${name}`;
    }
  };

  return (
    <div style={{
      backgroundColor: 'white',
      color: 'black',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      padding: '1rem'
    }}>
      <h1>Welcome to the BBQ Guest Page 🔥</h1>
      <p>Enter your full name to get your personalized message and instructions.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="guestName"
          placeholder="e.g. Janay Marie"
          required
          style={{
            padding: '10px',
            fontSize: '1rem',
            width: '300px',
            border: '1px solid black',
            borderRadius: '4px'
          }}
        />
        <br />
        <button
          type="submit"
          style={{
            marginTop: '1rem',
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Continue
        </button>
      </form>
    </div>
  );
}
