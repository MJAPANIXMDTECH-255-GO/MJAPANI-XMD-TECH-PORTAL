
const services = [
  {
    title: "AI Assistant",
    description: "Explore multilingual AI tools and intelligent assistance."
  },
  {
    title: "Cybersecurity",
    description: "Learn, practise and improve your digital security skills."
  },
  {
    title: "Tech Community",
    description: "Connect, share ideas and learn with other members."
  },
  {
    title: "Creator Marketplace",
    description: "Discover digital products, tools and learning resources."
  },
  {
    title: "Promote & Grow",
    description: "Promote your channels, websites and digital services."
  },
  {
    title: "Support Center",
    description: "Get assistance through our support ticket system."
  }
];

export default function Home() {
  return (
    <main>
      <header>
        <div className="container">
          <div className="logo">mjapani tech.</div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <p style={{ color: "#FFD700", marginBottom: 18 }}>
            TECHNOLOGY WITHOUT BORDERS
          </p>

          <h1>
            Welcome to <span>MJAPANI XMD TECH</span>
          </h1>

          <p>
            Discover technology, artificial intelligence,
            cybersecurity, digital creativity and education
            in one powerful platform.
          </p>

          <div className="actions">
            <a className="btn btn-primary" href="/register">
              Create Account
            </a>

            <a className="btn btn-secondary" href="/login">
              Sign In
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">Explore Our Platform</h2>

          <div className="cards">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <p>mjapani tech. — LEARN • BUILD • SECURE</p>
        <p style={{ marginTop: 10 }}>
          © {new Date().getFullYear()} MJAPANI XMD TECH
        </p>
      </footer>
    </main>
  );
}
