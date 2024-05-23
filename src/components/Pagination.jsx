import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
    scrollTop();
  };

  const handleNext = () => {
    if (page < lastPage) setPage(page + 1);
    scrollTop();
  };

  const renderPageButtons = () => {
    let pageButtons = [];
    let startPage = Math.max(1, page - 2);
    let endPage = Math.min(lastPage, page + 2);

    if (page <= 3) {
      endPage = Math.min(lastPage, 5);
    } else if (page >= lastPage - 2) {
      startPage = Math.max(1, lastPage - 4);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase transition-all ${
            page === i
              ? "bg-color-secondary text-color-primary dark:bg-color-primary  dark:text-color-secondary shadow-md shadow-color-secondary/10 dark:shadow-color-primary/10 hover:shadow-lg hover:shadow-color-secondary/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              : "text-color-secondary hover:bg-color-secondary/10 active:bg-color-secondary/20 dark:text-color-primary dark:hover:bg-color-primary/10 dark:active:bg-color-primary/20"
          } disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            {i}
          </span>
        </button>
      );
    }
    return pageButtons;
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={handlePrev}
        disabled={page === 1}
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center uppercase align-middle transition-all rounded-lg select-none text-secondary hover:bg-secondary/10 active:bg-secondary/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none dark:text-primary dark:hover:bg-primary/10 dark:active:bg-primary/20"
        type="button"
      >
        <IoChevronBack size={16} />
        Previous
      </button>
      <div className="flex items-center gap-2">{renderPageButtons()}</div>
      <button
        onClick={handleNext}
        disabled={page === lastPage}
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center uppercase align-middle transition-all rounded-lg select-none text-secondary hover:bg-secondary/10 active:bg-secondary/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none dark:text-primary dark:hover:bg-primary/10 dark:active:bg-primary/20"
        type="button"
      >
        Next
        <IoChevronForward size={16} />
      </button>
    </div>
  );
};

export default Pagination;
