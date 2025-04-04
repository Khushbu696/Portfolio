import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Parent from "./Parent.jsx"
import All_Projects from "./Components/Projects/All_Projects";

function App() {
    return (
        <Router>
            <>
                <Routes>
                    <Route path="/" element={<Parent />} />
                    <Route path="/all-projects" element={<All_Projects />} />
                </Routes>
            </>
        </Router>
    )
}

export default App