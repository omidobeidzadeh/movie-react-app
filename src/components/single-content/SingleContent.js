import { Badge } from "@mui/material";
import React from "react";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import moment from "jalali-moment";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  function generateDate() {
    return moment(date, 'YYYY/MM/DD').locale('fa').format('YYYY/MMMM/DD')
  }
  return (
    <div className="media">
      <Badge badgeContent={vote_average} color={vote_average>7 ? 'success' : 'secondary'} />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === 'tv' ? 'سریال' : 'فیلم'}
        <span className="subTitle">{generateDate()}</span>
      </span>
    </div>
  );
};

export default SingleContent;
