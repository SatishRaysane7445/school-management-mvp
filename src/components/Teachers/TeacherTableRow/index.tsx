import type{ Teacher } from "../../../models/teacher";

import "./TeacherTableRow.css";

type Props = {
  teacher: Teacher;
};

const TeacherTableRow = ({ teacher }: Props) => {
  return (
    <tr>
      <td>
        <div className="teacher-info">
          <img
            src={teacher.image}
            alt={teacher.firstName}
            className="teacher-image"
          />

          <span>
            {teacher.firstName} {teacher.lastName}
          </span>
        </div>
      </td>

      <td>{teacher.subject}</td>

      <td>{teacher.className}</td>

      <td>{teacher.email}</td>

      <td>{teacher.gender}</td>

      <td>⋮</td>
    </tr>
  );
};

export default TeacherTableRow;