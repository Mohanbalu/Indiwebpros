/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { InternshipPage } from "./pages/InternshipPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white selection:bg-indigo-100">
        <ScrollToTop />
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/internship" element={<InternshipPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

