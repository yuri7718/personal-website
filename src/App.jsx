import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToHash from './components/ScrollToHash'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ClayhouseGame from './pages/projects/ClayhouseGame'
import DaimonPage from './pages/projects/DaimonPage'
import GraphsToWordsPage from './pages/projects/GraphsToWordsPage'
import ProjectPlaceholderPage from './pages/projects/ProjectPlaceholderPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/daimon" element={<DaimonPage />} />
        <Route path="/projects/clayhouse-game" element={<ClayhouseGame />} />
        <Route
          path="/projects/from-graphs-to-words"
          element={<GraphsToWordsPage />}
        />
        <Route path="/projects/:slug" element={<ProjectPlaceholderPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
