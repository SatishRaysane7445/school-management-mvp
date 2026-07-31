import "./TeacherHeader.css";

type TeacherHeaderProps = {
    onExport: () => void;
}


const TeacherHeader = ({ onExport }: TeacherHeaderProps) => {


  const handleAddTeacher = () => {
    console.log("Add Teacher");
  };

  return (
    <div className="teacher-header">

      <button
        className="teacher-btn export-btn"
        onClick={onExport}
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