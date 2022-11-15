import React from 'react'
import { useTheme } from 'src/context';

const Toggle = () => {
  const { toggleChange } = useTheme();
  return (
    <button onClick={toggleChange}>Toggle</button>
  )
}

export default Toggle;