import "./App.css";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import Routing from "./routes/Routing";
import { Location } from 'react-router-dom'
function App() {
  return (
    <div className="App">

      <Header />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
