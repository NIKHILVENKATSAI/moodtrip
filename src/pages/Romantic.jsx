import PageTransition from "../components/PageTransition"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Romantic() {

  const places = [

    {
      name: "Paris",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1600&auto=format&fit=crop",
    },

    {
      name: "Venice",
      image:
        "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=1600&auto=format&fit=crop",
    },

    {
      name: "Santorini",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1600&auto=format&fit=crop",
    },

    {
      name: "Paris Nights",
      image:
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1600&auto=format&fit=crop",
    },

    {
      name: "Rome Evenings",
      image:
        "https://images.unsplash.com/photo-1529260830199-42c24126f198?q=80&w=1600&auto=format&fit=crop",
    },

    {
      name: "Vienna Lights",
      image:
        "https://images.unsplash.com/photo-1516550893923-42d28e5677af?q=80&w=1600&auto=format&fit=crop",
    },

  ]

  return (

    <PageTransition>

      <div className="min-h-screen bg-[#050505] text-white">

        <Navbar />

        {/* HERO */}

        <div className="relative h-[70vh]">

          <img
            src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2000&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>

          <div className="absolute bottom-20 left-6 md:left-20 z-10">

            <p className="uppercase tracking-[0.4em] text-sm text-white/60">
              Romantic Mood
            </p>

            <h1
              style={{ fontFamily: "Instrument" }}
              className="text-6xl md:text-[140px] mt-4"
            >
              Romantic.
            </h1>

            <p className="text-lg md:text-xl text-white/70 mt-6 max-w-2xl">
              Golden lights, dreamy evenings, and unforgettable memories.
            </p>

          </div>

        </div>

        {/* CARDS */}

        <div className="max-w-7xl mx-auto px-6 md:px-8 py-24">

          <div className="mb-16">

            <p className="uppercase tracking-[0.35em] text-white/40 text-sm">
              Romantic Destinations
            </p>

            <h2 className="text-4xl md:text-5xl mt-4">
              Places made for beautiful moments.
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {places.map((place) => (

              <div
                key={place.name}
                className="group relative overflow-hidden rounded-[30px] h-[420px] border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-white/20 hover:shadow-[0_0_60px_rgba(255,255,255,0.06)] transition duration-500"
              >

                <img
                  src={place.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent group-hover:from-black/80 transition duration-500"></div>

                <div className="absolute bottom-0 left-0 p-8 translate-y-6 group-hover:translate-y-0 transition duration-500">

                  <h2
                    style={{ fontFamily: "Instrument" }}
                    className="text-4xl"
                  >
                    {place.name}
                  </h2>

                </div>

              </div>

            ))}

          </div>

        </div>

        <Footer />

      </div>

    </PageTransition>

  )
}

export default Romantic