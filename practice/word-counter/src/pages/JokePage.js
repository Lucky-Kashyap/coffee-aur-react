import React from "react";
import Header from "../components/Header";
import Joke from "../components/Joke";

const JokePage = () => {
  return (
    <main>
      <Header
        heading="ChuckNorris Jokes"
        subHeading="Free JSON API for hand curated Chuck Norris facts."
      />
      <Joke />
    </main>
  );
};

export default JokePage;
