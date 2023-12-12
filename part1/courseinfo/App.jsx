const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (props) => {
    console.log(props)
    return (
      <div>
        <h1>{props.name}</h1>
      </div>
    )
  }

  const Content = (props) => {
    console.log(props)
    return (
      <div>
        <p>{part1} {exercises1}</p>
        <p>{part2} {exercises2}</p>
        <p>{part3} {exercises3}</p>
      </div>
    )
  }

  const Total = (props) => {
    console.log(props)
    return (
      <div>
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      </div>
    )
  }

  return (
    <div>
      <Header name={course} />
      <Content />
      <Total />
    </div>
  )
}

// const Header = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h1>{props.name}</h1>
//     </div>
//   )
// }

export default App
