import { Hero } from './components/Hero'

function App() {
  return (
    <div className="poster-stage min-h-screen bg-ground">
      <div className="crt-overlay" aria-hidden="true" />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
