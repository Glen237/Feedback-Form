import React from 'react'
import ReactDOM from 'react-dom'
const Header = (test) => { 
return (
  <div>{test.course}
  </div>
)
}
const Part = (test) => {
  return (
    <p>{test.part.name} {test.part.exercises}</p>
  )
}
const Contents = (test) => {
  return (
    <div>
      <Part part = {test.parts[0]} />
      <Part part = {test.parts[1]} />
      <Part part = {test.parts[2]} />
    </div>
  )
  }
const Total = (test) => {
  return (
    <div><p>Total is {test.parts[0].exercises + test.parts[1].exercises + test.parts[2].exercises}</p>
    </div>
  )
  }
const App = () => {
  const course = 'Superadvanced web and mobile programming'
  const parts = [
    {
      name: 'Basics of React',
      exercises: 8
    },
    {
      name: 'Using props',
      exercises: 10
    },
    {
      name: 'Component states',
      exercises: 12
    }
  ]
	
return (
    <div>
      <Header course={course} />
      <Contents parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)





  