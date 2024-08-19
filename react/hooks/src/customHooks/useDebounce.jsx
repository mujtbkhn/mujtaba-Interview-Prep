import React, { useEffect, useState } from 'react'

const useDebounce = (value, delay) => {
  const [debouncedVal, setDebouncedVal] = useState(value)

  useEffect(() => {
    let timerId = setTimeout(() => {
      setDebouncedVal(value)
    }, delay);

    return () => clearTimeout(timerId)
  }, [value, delay])

  return debouncedVal
}

export default useDebounce