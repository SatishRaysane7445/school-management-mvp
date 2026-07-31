import "./TeacherPagination.css";

type TeacherPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const TeacherPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: TeacherPaginationProps) => {
  return (
    <div className="teacher-pagination">

      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(1)}
      >
        {"<<"}
      </button>

      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {"<"}
      </button>

      <button className="active-page">
        {currentPage}
      </button>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {">"}
      </button>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(totalPages)}
      >
        {">>"}
      </button>

    </div>
  );
};

export default TeacherPagination;