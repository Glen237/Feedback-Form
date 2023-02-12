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
    <p>{test.number} {test.exercises}</p>
  )
}
const Contents = (test) => {
  return (
    <div>
      <Part number = {test.part1} exercises = {test.exercises1}/>
      <Part number = {test.part2} exercises = {test.exercises2}/>
      <Part number = {test.part3} exercises = {test.exercises3}/>
    </div>
  )
  }
const Total = (test) => {
  return (
    <div><p>Total is {test.exercises1 + test.exercises2 + test.exercises3}</p>
    </div>
  )
  }
const App = () => {
  // const definitions
  const course = 'Superadvanced web and mobile programming'
  const part1 = 'Basics of React'
  const exercises1 = 8
  const part2 = 'Using test'
  const exercises2 = 10
  const part3 = 'Component states'
  const exercises3 = 12

  return (

    <div>
      <Header course={course} />
	  
      <Contents 
      part1={part1} exercises1={exercises1} 
	    part2={part2} exercises2={exercises2}
	    part3={part3} exercises3={exercises3} />
	  
      <Total exercises1={exercises1} exercises2={exercises2}exercises3={exercises3}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)