import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToHash from "./components/ScrollToHash";
import ArtworkPage from "./pages/ArtworkPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ClayhouseGame from "./pages/projects/ClayhouseGame";
import DaimonPage from "./pages/projects/DaimonPage";
import GraphsToWordsPage from "./pages/projects/GraphsToWordsPage";
import HessaireStorefrontPage from "./pages/projects/HessaireStorefrontPage";
import ProjectPlaceholderPage from "./pages/projects/ProjectPlaceholderPage";
import ResearchSurveyPlatformPage from "./pages/projects/ResearchSurveyPlatformPage";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToHash />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artwork" element={<ArtworkPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/daimon" element={<DaimonPage />} />
        <Route
          path="/projects/occlusion-type-classification"
          element={<ResearchSurveyPlatformPage />}
        />
        <Route path="/projects/clayhouse-game" element={<ClayhouseGame />} />
        <Route
          path="/projects/hessaire-storefront"
          element={<HessaireStorefrontPage />}
        />
        <Route
          path="/projects/from-graphs-to-words"
          element={<GraphsToWordsPage />}
        />
        <Route path="/projects/:slug" element={<ProjectPlaceholderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
