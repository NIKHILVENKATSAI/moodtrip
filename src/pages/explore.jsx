import Footer from "../components/Footer"
import PageTransition from "../components/PageTransition"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

function Explore() {

  const moods = [

    {
      title: "Lonely",
      path: "/lonely",
      color: "from-violet-500/20 to-transparent",
      description: "Rainy nights, silent cafés, midnight city walks.",
    },

    {
      title: "Calm",
      path: "/calm",
      color: "from-cyan-500/20 to-transparent",
      description: "Peaceful mountains, lakes, slow peaceful mornings.",
    },

    {
      title: "Romantic",
      path: "/romantic",
      color: "from-pink-500/20 to-transparent",
      description: "Golden lights, dreamy evenings, soft conversations.",
    },

    {
      title: "Adventure",
      path: "/adventure",
      color: "from-orange-500/20 to-transparent",
      description: "Wild energy, waterfalls, freedom and exploration.",
    },

  ]

  return (

    <PageTransition>

      <div className="min-h-screen bg-[#050505] text-white overflow-hidden relative">

        <Navbar />

        {/* BACKGROUND GLOWS */}

        <div className="absolute top-[-250px] left-[-150px] w-[500px] h-[500px] bg-violet-500/10 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-[-250px] right-[-150px] w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

        {/* HEADER */}

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 pt-40">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <p className="uppercase tracking-[0.35em] text-neutral-500 text-xs md:text-sm mb-8">
              Choose Your Emotion
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-[120px] leading-[0.9] font-medium max-w-5xl">

              How are you
              <br />

              feeling

              <span
                style={{ fontFamily: "Instrument" }}
                className="italic ml-3 md:ml-5"
              >
                today?
              </span>

            </h1>

          </motion.div>

          {/* MOOD GRID */}

          <div className="grid md:grid-cols-2 gap-8 mt-24 pb-24">

            {moods.map((mood, index) => (

              <motion.div
                key={mood.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
              >

                <Link to={mood.path}>

                  <div className="group relative h-[300px] rounded-[40px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:-translate-y-3 hover:border-white/20 hover:shadow-[0_0_80px_rgba(255,255,255,0.06)] transition duration-500">

                    {/* CARD GLOW */}

                    <div className={`absolute inset-0 bg-gradient-to-br ${mood.color} opacity-60 group-hover:opacity-100 transition duration-500`} />

                    {/* CONTENT */}

                    <div className="relative z-10 h-full flex flex-col justify-between">

                      <div>

                        <p className="uppercase tracking-[0.3em] text-sm text-white/50">
                          Mood Journey
                        </p>

                        <h2
                          style={{ fontFamily: "Instrument" }}
                          className="text-5xl md:text-6xl mt-6 group-hover:translate-x-2 transition duration-500"
                        >
                          {mood.title}
                        </h2>

                      </div>

                      <div>

                        <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-sm">
                          {mood.description}
                        </p>

                        <p className="mt-6 text-sm text-white/40">

                          <span className="group-hover:ml-2 transition-all duration-300 inline-block">
                            Enter mood →
                          </span>

                        </p>

                      </div>

                    </div>

                  </div>

                </Link>

              </motion.div>

            ))}

          </div>

        </div>

      <Footer />

</div>

</PageTransition>

  )
}

export default Explore