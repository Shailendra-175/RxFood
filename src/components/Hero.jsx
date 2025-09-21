import BeforeAfter from './BeforeAfter'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Transform Your Health</h1>
        <p>See the difference before and after with Nutribites.</p>
        <button className="hero-btn">Get Started</button>
      </div>
      <BeforeAfter />
    </section>
  )
}

export default Hero
