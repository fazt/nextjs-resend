"use client"

function HomePage() {
  return (
    <button
      onClick={async () => {
        const res = await fetch("/api/send", {
          method: "POST",
        });
        const data = await res.json();
        console.log(data)
      }}
    >
      Send Email
    </button>
  );
}

export default HomePage;
