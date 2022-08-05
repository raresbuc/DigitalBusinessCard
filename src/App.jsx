import React from "react"
import Top from "/src/components/Top.jsx"
import About from "/src/components/About.jsx"
import Interests from "/src/components/Interests.jsx"
import Footer from "/src/components/Footer.jsx"

export default function App() {
  return (
      <div className="container">
        <Top />
        <About />
        <Interests />
        <Footer />
      </div>
  )
}
