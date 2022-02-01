import axios from "axios";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import SingleContent from "../../components/single-content/SingleContent";
import CustomPagination from "../../components/pagination/CustomPagination";
import Genres from "../../components/genres/Genres";
import useGenre from "../../hooks/useGenre";
import "./Movies.css";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPage, setTotalPage] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setLoading(false);
    setTotalPage(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
  }, [page,genreforURL]);

  return (
    <div>
      <span className="pageTitle">فیلم ها</span>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      {loading ? (
        <div className="loading">
          <ReactLoading type="spokes" height={"15%"} width={"15%"} />
        </div>
      ) : (
        <>
          <div className="trending">
            {content &&
              content.map((c) => {
                return (
                  <SingleContent
                    key={c.id}
                    id={c.id}
                    poster={c.poster_path}
                    title={c.title || c.name}
                    date={c.release_date || c.first_air_date}
                    media_type="movie"
                    vote_average={c.vote_average}
                  />
                );
              })}
          </div>
          {totalPage > 1 && (
            <CustomPagination setPage={setPage} totalPage={totalPage} />
          )}
        </>
      )}
    </div>
  );
};

export default Movies;
