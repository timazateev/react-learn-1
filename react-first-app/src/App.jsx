import { Count } from './components/Count';
import { Child } from './components/Child';
import { useState } from 'react';

export const App = () => {
  const [name, setName] = useState('geek')

  return (
    <div className="App">
      <Count />
      <hr></hr>
      <Child name={name}></Child>
      <label>Test</label>
    </div>
  )
}
