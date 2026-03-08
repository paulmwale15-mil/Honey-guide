export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8EE] text-gray-900">

      {/* Header */}
      <header className="flex items-center justify-between px-8 py-5 bg-white shadow-sm">
        <div className="text-2xl font-bold">🐝 Honey Guide</div>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#">Explore</a>
          <a href="#">Become a Provider</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>

        <button className="bg-[#F2B705] px-5 py-2 rounded-full text-sm font-semibold">
          Login
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 py-24 bg-gradient-to-b from-[#FFE6A6] to-[#FFF8EE]">
        <h1 className="text-4xl md:text-5xl font-extrabold max-w-3xl mx-auto">
          Helping you find the right help, every time.
        </h1>

        <p className="mt-6 max-w-xl mx-auto text-lg text-gray-700">
          Discover trusted skills, transport, homes, and local services near you.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-[#F2B705] px-8 py-3 rounded-full font-semibold">
            Explore Services
          </button>

          <button className="border border-gray-400 px-8 py-3 rounded-full font-semibold">
            Become a Provider
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Explore Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Skills & Services</h3>
            <p className="text-gray-600">
              Plumbers, electricians, builders, creatives, and more.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-3">
              Transport & Logistics
            </h3>
            <p className="text-gray-600">
              Drivers, deliveries, rentals, and movers.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold mb-3">
              Property & Spaces
            </h3>
            <p className="text-gray-600">
              Homes, rentals, land, and commercial spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why People Trust Honey Guide
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          <p>✔ Verified Providers</p>
          <p>⭐ Community Reviews</p>
          <p>📍 Local & Reliable</p>
          <p>💬 Direct Communication</p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Are you a service provider?
        </h2>

        <p className="mb-8 text-gray-700">
          Join Honey Guide and reach customers looking for you today.
        </p>

        <button className="bg-[#F2B705] px-10 py-4 rounded-full font-semibold">
          Join as a Provider
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-6">
          <div className="font-bold">🐝 Honey Guide © 2026</div>

          <div className="flex gap-6 text-sm">
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

