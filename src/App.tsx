import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import EditorPage from "./pages/editor";
import LibraryPage from "./pages/library";
import TeamPage from "./pages/team";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/editor/:id" element={<EditorPage />} />
        <Route path="/team" element={<TeamPage />} />
        {import.meta.env.VITE_TEMPO === "true" && (
          <>
            <Route path="/tempobook/*" />
            <Route path="/storybook/*" element={null} />
          </>
        )}
      </Routes>
    </Suspense>
  );
}

export default App;
