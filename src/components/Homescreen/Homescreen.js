import "./Homescreen.css";
import Nav from "../Navbar/Nav";
import Banner from "../Banner/Banner";
import Row from "../Rows/Row";
import requests from "../../Requests";
import Footer from "../../Screens/Footer";
import { useState } from "react";

const Homescreen = () => {
  const [preview, setPreview] = useState(null);
  return (
    <div className="homeScreen">
      Navbar
      <Nav />
      {/* Banner */}
      <div className="banner__container">
        <Banner preview={preview} />
      </div>
      {/* Rows */}
      <div className="row__container" id="row__container">
        <Row
          unique="NetflixOriginals"
          title="Netflix Originals"
          isLarge="true"
          fetchUrl={requests.fetchNetflixOriginals}
          setPreview={setPreview}
        />
        <Row
          unique="TopRated"
          title="Top Rated"
          fetchUrl={requests.fetchTopRated}
          setPreview={setPreview}
        />
        <Row
          unique="TrendingNow"
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
          setPreview={setPreview}
        />
        <Row
          unique="ActionMovies"
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
          setPreview={setPreview}
        />
        <Row
          unique="ComedyMovies"
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
          setPreview={setPreview}
        />
        <Row
          unique="HorrorMovies"
          title="Horror Movies"
          fetchUrl={requests.fetchHorroMovies}
          setPreview={setPreview}
        />
        <Row
          unique="RomanceMovies"
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
          setPreview={setPreview}
        />
        <Row
          unique="Documentaries"
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
          setPreview={setPreview}
        />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homescreen;
