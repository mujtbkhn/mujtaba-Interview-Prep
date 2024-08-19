import { useEffect, useState } from "react"
import useDebounce from "./customHooks/useDebounce"

const UsingDebounce = () => {

  const [searchText, setSearchText] = useState('')

  const debouncedValue = useDebounce(searchText, 8000)

  useEffect(() => {
    console.log(debouncedValue)
  }, [debouncedValue])

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <>
      <input type="text" onChange={handleChange} />
    </>
  )
}

export default UsingDebounce