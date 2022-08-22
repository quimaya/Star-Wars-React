import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Characters from "./pages/Characters/Characters";
import CharacterDetail from "./pages/Characters/CharacterDetail/CharacterDetail";
import Movies from "./pages//Movies/Movies";
import MovieDetail from "./pages/MovieDetail"

function App() {
  return (
    <div className="App">
 <Router>

  <Header/>
  <Routes>
    <Route path= "/" element = {<Home/>}/>
    <Route path="/characters" element = {<Characters/>}/>
    <Route path= "/characters/_id" element = {<CharacterDetail/>} />
    
    <Route path="/movies" element ={<Movies/>} />
    <Route path="/movies/:name" element={<MovieDetail/>} />

  </Routes>
  <Footer/>



 </Router>
    </div>
  );
}

export default App;
