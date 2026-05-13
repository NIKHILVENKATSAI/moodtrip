import CursorGlow from "../components/CursorGlow"
import PageTransition from "../components/PageTransition"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function Home() {

  return (

    <PageTransition>

      <CursorGlow />

      <div className="min-h-screen bg-[#050505] text-white overflow-hidden relative">

        {/* BACKGROUND */}

        <div className="absolute top-[-250px] left-[-150px] w-[600px] h-[600px] bg-violet-500/10 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-[-250px] right-[-150px] w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

        {/* NAVBAR */}

        <nav className="relative z-20 max-w-7xl mx-auto px-6 md:px-8 pt-8 flex items-center justify-between">

          <h1
            style={{ fontFamily: "Instrument" }}
            className="text-3xl md:text-4xl"
          >
            MoodTrip.
          </h1>

          <Link to="/explore">

            <button className="px-4 md:px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-300 text-sm md:text-base">
              Explore
            </button>

          </Link>

        </nav>

        {/* HERO */}

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 min-h-screen flex items-center">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl"
          >

            <p className="uppercase tracking-[0.35em] text-neutral-500 text-xs md:text-sm mb-8 md:mb-10">
              Emotional Travel Experience
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-[140px] leading-[0.95] font-medium">

              Every emotion
              <br />

              deserves a

              <span
                style={{ fontFamily: "Instrument" }}
                className="italic ml-3 md:ml-5"
              >
                destination.
              </span>

            </h1>

            <p className="text-neutral-400 text-lg md:text-xl mt-10 md:mt-12 leading-relaxed max-w-2xl">
              Discover cinematic places based on your emotions,
              atmosphere, and inner feelings.
            </p>

            <Link to="/explore">

              <button className="mt-12 md:mt-14 bg-white text-black px-7 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-medium hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition duration-300">
                Explore Moods
              </button>

            </Link>

          </motion.div>

        </div>

      </div>

    </PageTransition>

  )
}

export default Home