import axios from "axios";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import SingleContent from "../../components/single-content/SingleContent";
import CustomPagination from "../../components/pagination/CustomPagination";
import "./Trending.css";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPage, setTotalPage] = useState();
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    setContent(data.results);
    setLoading(false);
    setTotalPage(data.total_pages)
  };
  useEffect(() => {
    fetchTrending();
  }, [page]);
  
  return (
    <div>
      <span className="pageTitle">پربازدیدترین ها</span>
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
                    media_type={c.media_type}
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

export default Trending;
