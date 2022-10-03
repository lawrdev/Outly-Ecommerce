import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {

    // get value from localStorage
    const [value, setValue] = useState<T>(() => {
        const jsonValue = localStorage.getItem(key)

        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof initialValue === 'function') {

            // return initialValue()
            // typescript error, tsc need to know it's a func
            return (initialValue as () => T)()

        } else {
            return initialValue
        }
    })

    // setItem to localStorage
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    // return [value, setValue]
    // error because the types can be interchangeable
    return [value, setValue] as [typeof value, typeof setValue]
}
