import React, { useEffect, useState } from "react";
import Cardgallery from "../component/cardgallery";
import axios from "axios";

const Home = () => {
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json")
      .then((response) => {
        // handle success
        setCard(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // handle error
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <>
      <Cardgallery {...card} />
    </>
  );
};

export default Home;
