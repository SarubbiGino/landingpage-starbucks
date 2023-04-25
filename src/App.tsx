import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { Route, Routes} from 'react-router-dom';
import Cafe from "./components/pagecafe/cafe";
import PageExp from "./components/pageExperiencia/pageExp";

function App() {
  return (
    <>
      <Header />
      <Routes >
          <Route path="/" element={<Main />} />  
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/pageExp" element={<PageExp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
