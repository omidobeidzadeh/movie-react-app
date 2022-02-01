import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { Chip } from "@mui/material";

const Genres = ({
  setPage,
  setGenres,
  genres,
  setSelectedGenres,
  selectedGenres,
  type,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(
      genres.filter((g) => {
        return g.id !== genre.id;
      })
    );
    setPage(1);
  };
  const handleRemove = (genre) => {
      setSelectedGenres(selectedGenres.filter((selected)=> {
          return selected.id !== genre.id;
      }))
      setGenres([...genres, genre]);
      setPage(1);
  }
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };
  useEffect(() => {
    fetchGenres();
    return () => {
      setGenres({}); // unmounting
    };
  }, []);

  return (
    <div
      style={{
        padding: "6px 0",
        backgroundColor: "white",
        borderRadius: "5px",
        direction: "ltr",
      }}
    >
      {selectedGenres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="medium"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          size="medium"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;
