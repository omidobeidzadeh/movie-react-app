import React from "react";
import { Pagination } from "@mui/material";


const CustomPagination = ({setPage, totalPage}) => {
  function handlePagination(page) {
    setPage(page);
    window.scroll(0,0);
  }
  return (
    <div className="pagination">
      <Pagination
        count={totalPage>500 ? 500 : totalPage}
        variant="outlined"
        onChange={(e) => {handlePagination(e.target.textContent)}}
        color="primary"
        hideNextButton
        hidePrevButton
      />
    </div>
  );
};

export default CustomPagination;
