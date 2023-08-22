import styles from "./App.module.css"
import { MoviesGrid } from "./components/MoviesGrid"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { MovieDetails } from "./pages/MovieDetails"
import { LandingPage } from "./pages/LandingPage"
import { NotFound } from "./pages/NotFound"


export function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
          <Routes>
            <Route path="/movies/:movieId" element={<MovieDetails/>}/>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/" element={<NotFound/>} />
          </Routes>
      </main>
    </Router>
  )
}

export default App
