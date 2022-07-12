import React, {useState} from "react";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import Layout from "./components/common/layout/Layout";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
function App() {
    const [action, setAction] = useState("Run Forward");
  return (
    <div className="App">
      <Header/>
      <Layout>
      </Layout>
      <Footer/>
    </div>
  );
}

export default App;
