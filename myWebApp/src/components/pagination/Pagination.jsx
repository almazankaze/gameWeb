import { useNavigate } from "react-router-dom";

import "./pagination.scss";

function Pagination({ currentPage, pages, search }) {
  let navigate = useNavigate();

  const handleBtn = (number) => {
    navigate(`/shop?term=${search}&page=${number}`);
  };

  const addBtns = () => {
    let content = [];
    let start = currentPage;
    let end = start + 2;

    if (currentPage > 1) start = currentPage - 1;
    if (pages - currentPage < 3) end = pages;

    if (currentPage !== 1) {
      content.push(
        <button
          className="page-btn"
          key="prev"
          onClick={() => handleBtn(currentPage - 1)}
        >
          prev
        </button>
      );
    }

    for (let i = start; i <= end; i++) {
      content.push(
        <button
          className={
            currentPage === i
              ? "page-btn page-num-btn active-page-btn"
              : "page-btn page-num-btn"
          }
          key={i}
          onClick={() => handleBtn(i)}
        >
          {i}
        </button>
      );
    }

    if (currentPage !== pages) {
      content.push(
        <button
          className="page-btn"
          key="next"
          onClick={() => handleBtn(currentPage + 1)}
        >
          next
        </button>
      );
    }

    return content;
  };
  return <div className="pagination-container">{addBtns()}</div>;
}

export default Pagination;
