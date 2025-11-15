import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-60">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] bg-indigo-500/20 blur-[120px] rounded-full" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] bg-fuchsia-500/20 blur-[120px] rounded-full" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Showcase />
      </main>
      <Footer />
    </div>
  )
}

export default App
