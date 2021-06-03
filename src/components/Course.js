import React from 'react'

const Content = (props) => {
  // console.log(props)
  const {courses} = props
  return(
    <>
      <Header courses={courses}/>
      <Parts courses={courses}/>
    </>
  )
}

const Header = ({courses}) => {
  return(
    <h1 key={courses.id}>{courses.name}</h1>
  )
}

const Parts = ({courses}) => {
  return(
    <>
      {courses.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
      <p><b>Total of {courses.parts.map(part => part.exercises).reduce((s, p) => s + p)} Exercises</b></p>
    </>
  )
}

const Course = ({courses}) => {
  return(
    <div>
      {courses.map(course => <Content key={course.id} courses={course}/>)}
    </div>
  )
}

export default Course
