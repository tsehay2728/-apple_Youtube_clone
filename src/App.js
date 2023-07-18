import React, { Component } from "react";
import "./commonResource/css/bootstrap.css";
import "./index.css";
import Alert from "./Components/Alert/Alert";
import Fifth from "./Components/Fifth";
import First from "./Components/First";
import Footer from "./Components/Footer/Footer";
import Fourth from "./Components/Fourth";
import Header from "./Components/Header";
import Second from "./Components/Second";
import Sixth from "./Components/Sixth";
import Third from "./Components/Third";
import { Routes, Route } from "react-router-dom";
import Four04 from "./commonResource/RouteComponents/Four04";
import Iphones from "./commonResource/RouteComponents/Iphones";
import IphoneProducts from "./commonResource/RouteComponents/IphoneProducts";
import Mac from "./commonResource/RouteComponents/Mac";
import IPad from "./commonResource/RouteComponents/IPad";
import Watch from "./commonResource/RouteComponents/Watch";
import Tv from "./commonResource/RouteComponents/Tv";
import Music from "./commonResource/RouteComponents/Music";
import Support from "./commonResource/RouteComponents/Support";
// import YoutubeVideos from "./Components/YoutubeVideos/YoutubeVideos";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Alert /> <First />
                <Second />
                <Third />
                <Fourth />
                <Fifth />
                <Sixth />
                {/* <YoutubeVideos/> */}
              </>
            }
          />
          <Route path="/iphone" element={<Iphones />} />
          <Route path="/iPhone:ipd" element={<IphoneProducts />} />
          <Route path="*" element={<Four04 />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/ipad" element={<IPad />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/music" element={<Music />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </>
    );
  }
}
export default App;
