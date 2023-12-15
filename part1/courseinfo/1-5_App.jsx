const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) => {
    console.log(props)
    return (
      <div>
        <h1>{props.name}</h1>
      </div>
    )
  }

  const Content = (propsContent) => {
    console.log(propsContent.parts[0])
    console.log(propsContent.parts[1])
    console.log(propsContent.parts[2])
    return (
      <div>
        <p>{propsContent.parts[0].name} {propsContent.parts[0].exercises}</p>
        <p>{propsContent.parts[1].name} {propsContent.parts[1].exercises}</p>
        <p>{propsContent.parts[2].name} {propsContent.parts[2].exercises}</p>
      </div>
    )
  }

  const Total = (propsTotal) => {
    console.log(propsTotal)
    return (
      <div>
        <p>Number of exercises {propsTotal.parts[0].exercises + propsTotal.parts[1].exercises + propsTotal.parts[2].exercises}</p>
      </div>
    )
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
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

// <Content parts={course.parts}/>
// <Total parts={course.parts}/>

export default App
