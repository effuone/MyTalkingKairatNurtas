import React, {useState} from "react";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import Layout from "./components/common/layout/Layout";
import Content from "./components/common/content/Content";
import {OrbitControls} from "@react-three/drei";
import { Suspense} from "react";
import { Canvas } from "react-three-fiber";
function App() {
    const [action, setAction] = useState("Run Forward");
  return (
    <div className="App">
      <Header/>
      <Layout>
          <Content />
      </Layout>
      <Footer/>
    </div>
  );
}

export default App;
