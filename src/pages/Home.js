import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row title="Up Coming" fetchUrl={requests.requestUpcoming} />
    </>
  );
};

export default Home;
