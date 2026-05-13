import { Link } from "react-router-dom"

function Navbar() {

  return (

    <div className="fixed top-0 left-0 w-full z-50 px-6 pt-6">

      <div className="max-w-7xl mx-auto">

        <nav className="flex items-center justify-between px-6 py-4 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-2xl">

          {/* LOGO */}

          <Link to="/">

            <h1
              style={{ fontFamily: "Instrument" }}
              className="text-3xl text-white"
            >
              MoodTrip.
            </h1>

          </Link>

          {/* NAV LINKS */}

          <div className="flex items-center gap-4">

            <Link to="/">

              <button className="px-5 py-2 rounded-full text-white hover:bg-white/5 transition duration-300">
                Home
              </button>

            </Link>

            <Link to="/explore">

              <button className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition duration-300">
                Explore
              </button>

            </Link>

          </div>

        </nav>

      </div>

    </div>

  )
}

export default Navbar