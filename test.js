import React from 'react'

const test = () => {
  return React.createElement("div",{className:'title'}, [
    React.createElement('h1',{},'h1'),
    React.createElement('h2',{}, "h2"),
    React.createElement('h3',{}, "h3")
  ])
}

console.log(test);
export default test