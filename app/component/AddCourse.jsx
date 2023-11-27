'use client';
import { useState } from 'react';

const AddCourse = ({ addCourseInList }) => {
  const [courseDetails , setCourseDetails] = useState({
    title:"",
    description:"",
    link:"",
    level:""
  })
  
  const handleValueChange = (e) => {
    setCourseDetails((courseDetails) => (
      { ...courseDetails, [e.target.name]: e.target.value }
      ));
  }

  const handleSubmit =async(e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      // headers: { 
      //     'Content-Type': 'application/json',
      //     'Authorization': 'Bearer my-token',
      //     'My-Custom-Header': 'foobar'
      // },
      body: JSON.stringify(courseDetails)
  };

  fetch('/api/courses', requestOptions)
    .then(response => response.json())
    .then(data => addCourseInList(data));

    setCourseDetails({
      title:"",
      description:"",
      link:"",
      level:""
    })
  }

return (
  <form onSubmit={handleSubmit} className='search-form' style={{marginTop:"10px"}}>
        <input
          type='text'
          name='title'
          className='search-input'
          placeholder='Add course title'
          value={courseDetails.title}
          onChange={handleValueChange}
        />
        <input
          type='text'
          name='description'
          className='search-input'
          placeholder='Add course Description'
          value={courseDetails.description}
          onChange={handleValueChange}
        />
        <input
          type='text'
          name='link'
          className='search-input'
          placeholder='Add course Link'
          value={courseDetails.link}
          onChange={handleValueChange}
        />
        <input
          type='text'
          name='level'
          className='search-input'
          placeholder='Add course Level'
          value={courseDetails.level}
          onChange={handleValueChange}
        />
        <button className='search-button' type='submit'>
          Add Course
        </button>
  </form>
);
};
export default AddCourse;