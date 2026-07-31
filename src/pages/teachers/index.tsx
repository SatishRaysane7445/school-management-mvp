import DashboardLayout from "../../components/Common/Dashboard/DashboardLayout";
import TeacherHeader from "../../components/Teachers/TeacherHeader";
import TeacherPagination from "../../components/Teachers/TeacherPagination";
import TeacherTable from "../../components/Teachers/TeacherTable";
import TeacherFilters from "../../components/Teachers/TeacherFilters";


const Teachers = () => {
  return (
<DashboardLayout showHeader={false}>
<TeacherHeader/>
      <TeacherFilters/>
      <TeacherTable/>
     <TeacherPagination/>
    </DashboardLayout>
  );
};

export default Teachers;