function Footer() {

  return (

    <footer className="border-t border-white/10 mt-24">

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        <div>

          <h2
            style={{ fontFamily: "Instrument" }}
            className="text-3xl text-white"
          >
            MoodTrip.
          </h2>

          <p className="text-white/40 mt-2 text-sm">
            Emotional travel experience for modern explorers.
          </p>

        </div>

        <div className="flex items-center gap-6 text-sm text-white/50">

          <p className="hover:text-white transition cursor-pointer">
            Instagram
          </p>

          <p className="hover:text-white transition cursor-pointer">
            Twitter
          </p>

          <p className="hover:text-white transition cursor-pointer">
            Dribbble
          </p>

        </div>

      </div>

    </footer>

  )
}

export default Footer