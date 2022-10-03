import { createContext, ReactNode, useContext, useState } from 'react'

type BackdropChildrenProps = {
    children: ReactNode;
}
type BackdropContextProps = {
    showBackdrop: boolean;
    setBackdrop: (value: boolean) => void;
}

const BackdropContext = createContext({} as BackdropContextProps)

export function useBackdrop() {
    return useContext(BackdropContext)
}

export function BackdropProvider({ children }: BackdropChildrenProps) {

    const [showBackdrop, setShowBackdrop] = useState<boolean>(false)
    function setBackdrop(value: boolean) {
        setShowBackdrop(value)
    }
    return (
        <BackdropContext.Provider
            value={{
                showBackdrop,
                setBackdrop
            }}>
            {children}
        </BackdropContext.Provider>
    )
}