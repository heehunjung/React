import React from "react";
import {Routes,Route,Link} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Counter from "./pages/Counter"
import Input from "./pages/Input"
import Input2 from "./pages/Input2"
import List from "./pages/List"


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home </Link> |
        <Link to="/about"> About</Link> |
        <Link to="/Counter"> Counter</Link> |
        <Link to="/input"> Input</Link> |
        <Link to="/Input2"> Input2</Link> |
        <Link to="/List"> List</Link> |
      </nav>
      {/*Link: 해당 url path을 가진 route를 찾아서 해당 rounte의 element
       에 mapping되어있는 컴포넌트를 찾아 화면에 보여준다. */}
      <Routes> 
      {/* Route 들의 모임*/}
        <Route path ="/" element={<Home />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/Counter" element={<Counter />} />
        <Route path ="/input" element={<Input />} />
        <Route path ="/Input2" element={<Input2 />} />
        <Route path ="/List" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
