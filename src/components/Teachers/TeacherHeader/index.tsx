import "./TeacherHeader.css";

const TeacherHeader = () => {
  const handleExport = () => {
    console.log("Export CSV");
  };

  const handleAddTeacher = () => {
    console.log("Add Teacher");
  };

  return (
    <div className="teacher-header">

      <button
        className="teacher-btn export-btn"
        onClick={handleExport}
      >
        Export CSV
      </button>

      <button
        className="teacher-btn add-btn"
        onClick={handleAddTeacher}
      >
        Add Teacher
      </button>

    </div>
  );
};

export default TeacherHeader;