import React from 'react'

const StatisticList = ({good,neutral,bad,neutralPercent,goodPercent}) => {
  return (
    <ul className="results">
        <li>Good : {good}</li>
        <li>Neutral : {neutral}</li>
        <li>Bad : {bad}</li>
        <li>Average : {neutralPercent.toFixed(2)}%</li>
        <li>Positive : {goodPercent.toFixed(2)}%</li>
      </ul>
  )
}

export default StatisticList