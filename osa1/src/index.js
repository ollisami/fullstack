import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content  = (props) => {
    return (
        <>
            <p>{props.parts[0]} {props.excerises[0]}</p>
            <p>{props.parts[1]} {props.excerises[1]}</p>
            <p>{props.parts[2]} {props.excerises[2]}</p>
        </>
    )
}

const Total = (props) => {
    return (
        <p>yhteensä {props.excerises[0] + props.excerises[1] + props.excerises[2]} tehtävää</p>
    )
}

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} excerises={[exercises1, exercises2, exercises3]} />
      <Total excerises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))