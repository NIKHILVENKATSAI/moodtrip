import PageTransition from "../components/PageTransition"
import Navbar from "../components/Navbar"
import { motion } from "framer-motion"
import { useState } from "react"

function Lonely() {

  const [saved, setSaved] = useState([])

  const toggleSave = (name) => {

    if (saved.includes(name)) {
      setSaved(saved.filter((item) => item !== name))
    } else {
      setSaved([...saved, name])
    }

  }

  const places = [

    {
      name: "Kyoto, Japan",
      description: "Rainy streets, glowing lanterns, quiet midnight walks.",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop",
    },

    {
      name: "Tokyo Nights",
      description: "Neon reflections, silent cafés, late train rides.",
      image:
        "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1600&auto=format&fit=crop",
    },

    {
      name: "Iceland Cabins",
      description: "Cold air, snowy silence, peaceful isolation.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    },

  ]

  return (

    <PageTransition>

      <div className="min-h-screen bg-[#050505] text-white overflow-hidden">

        <Navbar />

        {/* HERO SECTION */}

        <div className="relative h-[70vh]">

          <img
            src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=2000&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>

          <div className="absolute bottom-20 left-10 md:left-20 z-10">

            <p className="uppercase tracking-[0.4em] text-sm text-white/60">
              Lonely Mood
            </p>

            <h1
              style={{ fontFamily: "Instrument" }}
              className="text-7xl md:text-[140px] leading-none mt-4"
            >
              Lonely.
            </h1>

            <p className="text-xl text-white/70 mt-6 max-w-2xl leading-relaxed">
              Some places understand silence better than people do.
            </p>

          </div>

        </div>

        {/* DESTINATIONS */}

        <div className="max-w-7xl mx-auto px-8 py-24">

          <div className="flex items-center justify-between mb-16">

            <div>

              <p className="uppercase tracking-[0.35em] text-white/40 text-sm">
                Cinematic Destinations
              </p>

              <h2 className="text-5xl mt-4">
                Places for midnight emotions.
              </h2>

            </div>

          </div>

          {/* GRID */}

          <div className="grid md:grid-cols-3 gap-8">

            {places.map((place, index) => (

              <motion.div
                key={place.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >

                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-white/20 hover:shadow-[0_0_60px_rgba(255,255,255,0.06)] transition duration-500">

                  {/* IMAGE */}

                  <div className="h-[420px] overflow-hidden">

                    <img
                      src={place.image}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />

                  </div>

                  {/* OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent group-hover:from-black/80 transition duration-500"></div>

                  {/* SAVE BUTTON */}

                  <button
                    onClick={() => toggleSave(place.name)}
                    className={`absolute top-5 right-5 z-20 w-12 h-12 rounded-full backdrop-blur-xl border transition duration-300
                    ${saved.includes(place.name)
                        ? "bg-red-500 border-red-400"
                        : "bg-white/10 border-white/10 hover:bg-white/20"
                      }`}
                  >
                    ❤️
                  </button>

                  {/* CONTENT */}

                  <div className="absolute bottom-0 left-0 p-8 z-10 translate-y-6 group-hover:translate-y-0 transition duration-500">

                    <h3
                      style={{ fontFamily: "Instrument" }}
                      className="text-4xl"
                    >
                      {place.name}
                    </h3>

                    <p className="text-white/70 mt-4 leading-relaxed opacity-0 group-hover:opacity-100 transition duration-500">
                      {place.description}
                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </PageTransition>

  )
}

export default Lonely