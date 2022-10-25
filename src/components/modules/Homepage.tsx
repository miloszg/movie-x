import { useEffect } from 'react'
import { movieRoute } from '../../utils/routes'

const Homepage = () => {
    useEffect(() => {
        window.location.replace(movieRoute(550))
    }, [])
    return <></>
}

export default Homepage
