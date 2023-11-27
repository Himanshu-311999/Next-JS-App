'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import LoadingPage from './loading';
import Courses from './component/Courses';
import CourseSearch from './component/CourseSearch';
import AddCourse from './component/AddCourse';

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

// Loading page only rendered automatically in server Compo., 
// for Client Compo. we need add it like tradictional React Component.

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h1>Welcome To Home Page</h1>
      <CourseSearch getSearchResults={(results) => setCourses(results)}/>
      <AddCourse addCourseInList={(data) => setCourses(data)} />
      <Courses courses={courses}  />
    </>
  );
};
export default HomePage;

// Note:  We can not inject server component who is fetching/Calling API, in CLIENT component 
// If we do that will get Error 
// To work this, we need to Move Api Logic from Server Component to Client Component as pass data as Props in Server Component 
