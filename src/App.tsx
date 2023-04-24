import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { Route, Routes} from 'react-router-dom';
import Cafe from "./components/pagecafe/cafe";

function App() {
  return (
    <>
      <Header />
      <Routes >
          <Route path="/" element={<Main />} />  
          <Route path="/cafe" element={<Cafe />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
