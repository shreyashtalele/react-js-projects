import { useParams } from "react-router-dom";

function Student() {
  const { id, name, course } = useParams();

  return (
    <>
      <div>
        <h1>Student Details</h1>
        <h3>Student Id : {id}</h3>
        <h3>Student name : {name}</h3>
        <h3>Course Enrolled : {course}</h3>
      </div>
    </>
  );
}

export default Student;
