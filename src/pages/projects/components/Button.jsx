import React from 'react'

function Button(props) {
  return (
    <a href={props.url} target="_blank">{props.text}</a>
  )
}

export default Button