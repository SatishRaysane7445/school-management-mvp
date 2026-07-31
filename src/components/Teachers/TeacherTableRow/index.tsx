import type { Teacher } from '../../../models/teacher';

import './TeacherTableRow.css';
import { BsThreeDotsVertical } from "react-icons/bs";

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

      <td>{teacher.email}</td>
      <td>{teacher.phone}</td>

      <td>{teacher.gender}</td>

      <td>{teacher.age}</td>

      <td>{teacher.company.title}</td>

      <td className="action-column">
    <button className="action-btn">
        <BsThreeDotsVertical />
    </button>
</td>
    </tr>
  );
};

export default TeacherTableRow;
