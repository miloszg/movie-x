import { useCallback, useState } from 'react'

type UseToggleProps = [boolean, () => void]

const useToggle = (initialState: boolean = false): UseToggleProps => {
    // Initialize the state
    const [state, setState] = useState(initialState)

    const toggle = useCallback(() => setState((state) => !state), [])

    return [state, toggle]
}

export default useToggle
