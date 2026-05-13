import PageTransition from "../components/PageTransition"
import Navbar from "../components/Navbar"

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

          <div className="absolute bottom-20 left-10 md:left-20 z-10">

            <p className="uppercase tracking-[0.4em] text-sm text-white/60">
              Romantic Mood
            </p>

            <h1
              style={{ fontFamily: "Instrument" }}
              className="text-7xl md:text-[140px] mt-4"
            >
              Romantic.
            </h1>

            <p className="text-xl text-white/70 mt-6 max-w-2xl">
              Golden lights, dreamy evenings, and unforgettable memories.
            </p>

          </div>

        </div>

        {/* CARDS */}

        <div className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-3 gap-8">

          {places.map((place) => (

            <div
              key={place.name}
              className="group relative overflow-hidden rounded-[30px] h-[420px]"
            >

              <img
                src={place.image}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-8">

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

    </PageTransition>

  )
}

export default Romantic