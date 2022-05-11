import { useEffect, useState, useContext } from "react";
import { AuthContext } from "./_app";
import Layout from "../Layout";
import Box from '@mui/material/Box';

export default () => {
  const [results, setResults] = useState(null);
  const accessToken = useContext(AuthContext);

  useEffect(() => {
    if (accessToken === null) return;
    const fetchPets = async () => {
      const petResults = await fetch(
        "https://api.petfinder.com/v2/animals?type",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const json = await petResults.json();
      setResults(json.animals);
      
    };
    fetchPets();
  }, [accessToken]);
  if (results === null) return null;
  console.log(results, "on index.js");
  return (
      <Layout results={results} />
  );
};
