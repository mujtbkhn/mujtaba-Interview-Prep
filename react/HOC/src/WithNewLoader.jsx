import React, { useState } from 'react'

const WithNewLoader = (WrappedComponent) => {
    return () => {
        const [loading, setLoading] = useState(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000);

        return <>{loading ? <h1>...Loading from new user</h1> : <WrappedComponent />}</>
    }

}

export default WithNewLoader;