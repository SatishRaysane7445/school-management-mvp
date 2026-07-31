import "./TeacherTable.css";

import TeacherTableRow from "../TeacherTableRow";
import type{ Teacher } from "../../../models/teacher";

type Props = {
  teachers: Teacher[];
};

const TeacherTable = ({ teachers }: Props) => {
  return (
    <div className="teacher-table-wrapper">
      <table className="teacher-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Class</th>
            <th>Email</th>
            <th>Gender</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {teachers.map((teacher) => (
            <TeacherTableRow
              key={teacher.id}
              teacher={teacher}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherTable;