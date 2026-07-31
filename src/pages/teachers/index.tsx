import { useState } from "react";
import DashboardLayout from "../../components/Common/Dashboard/DashboardLayout";
import TeacherHeader from "../../components/Teachers/TeacherHeader";
import TeacherPagination from "../../components/Teachers/TeacherPagination";
import TeacherTable from "../../components/Teachers/TeacherTable";
import TeacherFilters from "../../components/Teachers/TeacherFilters";
import { dummyTeachers } from "../../constants/dummyTeachers";

const Teachers = () => {
const [search, setSearch] = useState("");
  return (
<DashboardLayout 
//showHeader={false}
leftHeaderContent={<TeacherHeader />}
>

      <TeacherFilters
      searchValue={search}
      onSearchChange={setSearch}
      onFilterClick={() => console.log("Open Filter")}
      />
      <TeacherTable teachers={dummyTeachers}/>
     <TeacherPagination/>
    </DashboardLayout>
  );
};

export default Teachers;