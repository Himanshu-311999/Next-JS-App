import Link from 'next/link';

// Not using this code, since we are calling this component from CLIENT compo.

// async function fetchCourses () {
//   const response = await fetch("http://localhost:3000/api/courses");
//   const courses = response.json();

//   return courses;
// }
const Courses = ({ courses }) => {
  return (
    <div className='courses'>
      {courses.map((course) => (
        <div key={course.id} className='card'>
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} target='_blank' className='btn'>
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses