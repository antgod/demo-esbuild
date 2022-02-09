import * as React from 'react'

const Styled = () => {
  return (<div>
    <p>only this paragraph will get the style, but style-jsx not support esbuild!</p>
  </div>);
}

export default () => {
  return (<h1>
    <Styled />
    good mornning world!
  </h1>);
}