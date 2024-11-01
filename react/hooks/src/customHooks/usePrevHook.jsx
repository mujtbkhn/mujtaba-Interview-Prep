import React, { useEffect, useRef, useState } from 'react'

const usePrevHook = (value) => {
    const previousValueRef = useRef(value)

    useEffect(() => {
        previousValueRef.current = value
    }, [value])

    return previousValueRef.current
}

export default usePrevHook