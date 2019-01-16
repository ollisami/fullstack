import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [topVoted, setTopVoted] = useState(0)
  const [votes, setVotes] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))

  const setNewAnecdote = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  const voteAnecdote = (sel) => {
    const copy = [...votes]
    copy[sel] += 1
    setVotes(copy)
    setTopVotedAnacdote()
  }

  const setTopVotedAnacdote = () => {
      setTopVoted(votes.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0))
  }

  return (
    <>
        <h1>Anacdote of the day</h1>
        <div>
        <p>{props.anecdotes[selected]}</p>
        <p>has {votes[selected]} votes </p>
        <Button handleClick={() => voteAnecdote(selected)} text="vote" />
        <Button handleClick={() => setNewAnecdote()} text="next anecdote" />
        </div>

        <h1>Anacdote with most votes</h1>
        <p>{props.anecdotes[topVoted]}</p>
        <p>has {votes[topVoted]} votes </p>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)