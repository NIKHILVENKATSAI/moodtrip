import { useState } from "react"

function CursorGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  return (

    <div
      onMouseMove={(e) =>
        setPosition({
          x: e.clientX,
          y: e.clientY,
        })
      }
      className="fixed inset-0 pointer-events-none z-0"
    >

      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-[140px]"
        style={{
          left: position.x - 350,
          top: position.y - 350,
          background:
            "radial-gradient(circle, rgba(120,119,198,0.12), transparent 70%)",
        }}
      />

    </div>

  )
}

export default CursorGlow