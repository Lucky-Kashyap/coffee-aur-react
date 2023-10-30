import { useEffect, useState } from "react";

const Joke = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      setJoke(data.value);
    };
    fetchJoke();
  }, []);

  return (
    <section className="joke">
      <p>
        <span data-testid="jokeHeadline">{joke}</span>
        <span> - api.chucknorris.io</span>
      </p>
    </section>
  );
};

export default Joke;
