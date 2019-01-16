import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

  const Statistics = ({good, neutral, bad}) => {
    const total = () => (
        good + neutral + bad
    )

    const median = () => (
        (1 * good + 0 * neutral + -1 * bad) / total()
    )

    const positive = () => (
        (good / total()) * 100
    )

    if(total() !== 0) {
        return (
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Statistic text='hyvä'/>
                            <Statistic text='neutraali'/>
                            <Statistic text='huono'/>
                            <Statistic text='yhteensä'/>
                            <Statistic text='keskiarvo'/>
                            <Statistic text='positiivisia'/>
                        </td>
                        <td>
                            <Statistic text={good}/>
                            <Statistic text={neutral}/>
                            <Statistic text={bad}/>
                            <Statistic text={total()}/>
                            <Statistic text={median()}/>
                            <Statistic text={`${positive()} %`}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
    return (
        <p>Ei yhtään palautetta annettu</p>
    )
  }

  const Statistic = ({text}) => (
    <div>{text}</div>
  )

  

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newValue => {
    setGood(newValue)
  }

  const setToNeutral = newValue => {
    setNeutral(newValue)
  }

  const setToBad = newValue => {
    setBad(newValue)
  }



  return (
    <>
        <div>
            <h1>Anna plautetta</h1>
            <Button handleClick={() => setToGood(good+1)} text="hyvä" />
            <Button handleClick={() => setToNeutral(neutral+1)} text="neutraali" />
            <Button handleClick={() => setToBad(bad+1)} text="huono" />
        </div>
        <h1>Statistiikka</h1>
        <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)