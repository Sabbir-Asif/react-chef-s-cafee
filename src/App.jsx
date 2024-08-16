import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Recipes from "./components/recipes/Recipes"

function App() {

  return (
    <div className="container mx-auto font-lexend">
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <Hero></Hero>
        <Recipes></Recipes>
      </main>

      <footer>

      </footer>
    </div>
  )
}

export default App
