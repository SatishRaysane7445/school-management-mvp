import { useState } from 'react';
import DashboardLayout from '../../components/Common/Dashboard/DashboardLayout';
import TeacherHeader from '../../components/Teachers/TeacherHeader';
import TeacherPagination from '../../components/Teachers/TeacherPagination';
import TeacherTable from '../../components/Teachers/TeacherTable';
import TeacherFilters from '../../components/Teachers/TeacherFilters';
import { useGetTeachersQuery } from '../../redux/services/teacherApi';
import { exportToCSV } from "../../utils/csvHelper";

const Teachers = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const limit = 5;
  const { data, isLoading } = useGetTeachersQuery({
        page,
        limit,
        search
    },
  {
        refetchOnMountOrArgChange: true,
  }
);
const filteredTeachers = (data?.users ?? []).filter((teacher) => {
  const query = search.toLowerCase().trim();

  return (
    teacher.firstName.toLowerCase().includes(query) ||
    teacher.lastName.toLowerCase().includes(query) ||
    `${teacher.firstName} ${teacher.lastName}`
      .toLowerCase()
      .includes(query) ||
    teacher.email.toLowerCase().includes(query)
  );
});


    const totalPages = data ? Math.ceil(data.total / limit) : 0;
  console.log(data);

 const handleExportCSV = () => {
  exportToCSV("Teachers", data?.users ?? [], [
    {
      header: "Name",
      accessor: teacher =>
        `${teacher.firstName} ${teacher.lastName}`,
    },
    {
      header: "Email",
      accessor: "email",
    },
    {
      header: "Phone",
      accessor: "phone",
    },
    {
      header: "Gender",
      accessor: "gender",
    },
    {
      header: "Age",
      accessor: "age",
    },
    {
      header: "Company",
      accessor: teacher => teacher.company.title,
    },
  ]);
}; 
  return (
    <DashboardLayout
      //showHeader={false}
      leftHeaderContent={<TeacherHeader onExport={handleExportCSV} />}
    >
      <TeacherFilters
        searchValue={search}
        onSearchChange={setSearch}
        onFilterClick={() => console.log('Open Filter')}
      />
      <TeacherTable 
      teachers={filteredTeachers}
      loading={isLoading}
      />
<TeacherPagination
  currentPage={page}
  totalPages={totalPages}
  onPageChange={setPage}
/>
  </DashboardLayout>
  );
};

export default Teachers;
