import "./TeacherFilters.css";
import { MdKeyboardArrowDown, MdSearch } from "react-icons/md";

type TeacherFiltersProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
  onFilterClick?: () => void;
};

const TeacherFilters = ({
  searchValue,
  onSearchChange,
  onFilterClick,
}: TeacherFiltersProps) => {
  return (
    <div className="teacher-filters">
      <button
        className="filter-button"
        onClick={onFilterClick}
      >
        <span>Add Filter</span>

        <MdKeyboardArrowDown size={20} />
      </button>

      <div className="search-box">
        <MdSearch className="search-icon" />

        <input
          type="text"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search for a teacher by name or email"
        />
      </div>
    </div>
  );
};

export default TeacherFilters;