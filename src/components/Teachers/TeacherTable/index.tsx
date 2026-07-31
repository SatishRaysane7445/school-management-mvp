import './TeacherTable.css';

import TeacherTableRow from '../TeacherTableRow';
import type { Teacher } from '../../../models/teacher';

type Props = {
  teachers: Teacher[];
    loading: boolean;

};

const TeacherTable = ({ teachers,loading }: Props) => {
  if (loading) {
    return <p>Loading teachers...</p>;
  }

  if (!teachers.length) {
    return <p>No teachers found.</p>;
  }
  return (
    <div className="teacher-table-wrapper">
      <table className="teacher-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Company</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {teachers.map(teacher => (
            <TeacherTableRow key={teacher.id} teacher={teacher} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherTable;
