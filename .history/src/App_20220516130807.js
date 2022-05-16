import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/:id" component={Detail}></Route>
    </Router>
  );
}

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/:id" element={<Detail />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App;