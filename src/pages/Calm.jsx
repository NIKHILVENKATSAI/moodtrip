import PageTransition from "../components/PageTransition"
import Navbar from "../components/Navbar"

function Calm() {

  const places = [

    {
      name: "Swiss Alps",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    },

    {
      name: "Lake Como",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
    },

    {
      name: "Kyoto Gardens",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop",
    },

    {
      name: "Bali Rice Fields",
      image:
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1600&auto=format&fit=crop",
    },

    {
      name: "Maldives",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
    },

    {
      name: "Norwegian Lake",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    },

  ]

  return (

    <PageTransition>

      <div className="min-h-screen bg-[#050505] text-white">

        <Navbar />

        {/* HERO */}

        <div className="relative h-[70vh]">

          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>

          <div className="absolute bottom-20 left-6 md:left-20 z-10">

            <p className="uppercase tracking-[0.4em] text-sm text-white/60">
              Calm Mood
            </p>

            <h1
              style={{ fontFamily: "Instrument" }}
              className="text-6xl md:text-[140px] mt-4"
            >
              Calm.
            </h1>

            <p className="text-lg md:text-xl text-white/70 mt-6 max-w-2xl">
              Peaceful places that slow down the noise inside your mind.
            </p>

          </div>

        </div>

        {/* CARDS */}

        <div className="max-w-7xl mx-auto px-6 md:px-8 py-24">

          <div className="mb-16">

            <p className="uppercase tracking-[0.35em] text-white/40 text-sm">
              Peaceful Destinations
            </p>

            <h2 className="text-4xl md:text-5xl mt-4">
              Places to breathe slowly.
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

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

      </div>

    </PageTransition>

  )
}

export default Calm