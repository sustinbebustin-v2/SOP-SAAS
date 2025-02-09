import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Dashboard from "./pages/dashboard";
import EditorPage from "./pages/editor";
import LibraryPage from "./pages/library";
import TeamPage from "./pages/team";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/library"
          element={
            <MainLayout>
              <LibraryPage />
            </MainLayout>
          }
        />
        <Route
          path="/editor/:id"
          element={
            <MainLayout>
              <EditorPage />
            </MainLayout>
          }
        />
        <Route
          path="/team"
          element={
            <MainLayout>
              <TeamPage />
            </MainLayout>
          }
        />
        {import.meta.env.VITE_TEMPO === "true" && <Route path="/tempobook/*" />}
      </Routes>
    </Suspense>
  );
}

export default App;
