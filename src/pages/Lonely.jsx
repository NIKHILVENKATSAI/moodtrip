import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import PageTransition from "../components/PageTransition"

function Lonely() {

  const places = [

    {
      name: "Kyoto, Japan",
      description: "Rainy streets, glowing lanterns, quiet midnight walks.",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop",
    },

    {
      name: "Tokyo Nights",
      description: "Neon reflections, empty streets, peaceful loneliness.",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1600&auto=format&fit=crop",
    },

    {
      name: "Iceland Cabins",
      description: "Cold air, silence, isolated wooden homes near rivers.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    },

    {
      name: "Paris Rain",
      description: "Soft rain, lonely cafés, reflective evening walks.",
      image:
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1600&auto=format&fit=crop",
    },

    {
      name: "Seoul Midnight",
      description: "Quiet neon alleys and comforting solitude after midnight.",
      image:
        "https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=1600&auto=format&fit=crop",
    },

    {
      name: "Norway Fjords",
      description: "Massive cliffs, empty roads, and emotional silence.",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    },

  ]

  return (

    <PageTransition>

      <div className="min-h-screen bg-black text-white overflow-hidden relative">

        <Navbar />

        {/* BACKGROUND GLOW */}

        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-violet-500/10 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

        {/* HEADER */}

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-36">

          <p className="uppercase tracking-[0.35em] text-white/40 text-sm mb-8">
            Lonely Mood
          </p>

          <h1
            style={{ fontFamily: "Instrument" }}
            className="text-6xl md:text-[120px] leading-[0.9]"
          >
            Beautiful places
            <br />

            for quiet souls.
          </h1>

          <p className="text-white/60 text-lg mt-10 max-w-2xl leading-relaxed">
            Explore cinematic destinations filled with solitude,
            rainy nights, peaceful silence, and emotional atmosphere.
          </p>

        </div>

        {/* GRID */}

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {places.map((place) => (

            <div
              key={place.name}
              className="group relative h-[450px] rounded-[35px] overflow-hidden border border-white/10"
            >

              {/* IMAGE */}

              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

              {/* CONTENT */}

              <div className="absolute bottom-0 p-8">

                <h2
                  style={{ fontFamily: "Instrument" }}
                  className="text-5xl leading-tight"
                >
                  {place.name}
                </h2>

                <p className="text-white/70 mt-5 leading-relaxed text-lg">
                  {place.description}
                </p>

              </div>

            </div>

          ))}

        </div>

        <Footer />

      </div>

    </PageTransition>

  )
}

export default Lonely