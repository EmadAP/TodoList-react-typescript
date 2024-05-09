import { BrowserRouter, Routes, Route } from "react-router-dom";

import TodoHome from "./Todo/TodoHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
