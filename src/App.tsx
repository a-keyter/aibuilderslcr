import { Events } from './components/Events'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Events />
      </main>
      <Footer />
    </div>
  )
}

export default App
