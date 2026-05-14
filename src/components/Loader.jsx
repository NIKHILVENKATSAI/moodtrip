import { motion } from "framer-motion"

function Loader() {

  return (

    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        scale: 1.1,
        filter: "blur(10px)",
      }}
      transition={{
        delay: 1.8,
        duration: 1,
      }}
      className="fixed inset-0 z-[999] bg-[#050505] flex items-center justify-center pointer-events-none"
    >

      {/* GLOW */}

      <div className="absolute w-[400px] h-[400px] bg-violet-500/20 blur-[120px] rounded-full"></div>

      {/* LOGO */}

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
        }}
        style={{ fontFamily: "Instrument" }}
        className="relative z-10 text-6xl md:text-8xl text-white"
      >
        MoodTrip.
      </motion.h1>

    </motion.div>

  )
}

export default Loader