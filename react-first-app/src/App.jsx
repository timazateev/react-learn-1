import { Count } from './components/Count';
import { Child } from './components/Child';
import { Form as FormClass } from './class-components/Form/Form';
import { useState } from 'react';

import './index.css'

export const App = () => {
  const [name, setName] = useState('geek')
  const [count, setCount] = useState(0)

  const handleChangeName = (ev) => {
    setName(ev.target.value)
  }

  return (
    <div className="App">
      <Count />
      <hr></hr>
      <h3> Parent </h3>
      <p>{count}</p>
      <h3>Child</h3>
      <Child name={name} handleChangeCount={setCount}></Child>

      <h3> FormClass </h3>
      <FormClass />
    </div>
  )
}
