import { Router, Routes, Route } from "./route-module";
import { Root, About } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={<Root />} />
        <Route path="/about" component={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
