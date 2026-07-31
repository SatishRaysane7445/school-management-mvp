import "./TeacherFilters.css";

import { MdKeyboardArrowDown, MdSearch } from "react-icons/md";

const TeacherFilters = () => {
  return (
    <div className="teacher-filters">

      <button className="filter-button">
        <span>Add filter</span>

        <MdKeyboardArrowDown size={20} />
      </button>

      <div className="search-box">
        <MdSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search for a teacher by name or email"
        />
      </div>

    </div>
  );
};

export default TeacherFilters;