import { createContext, ReactNode, useContext, useState } from "react";

type OpenModal = {
    open: boolean;
    setOpen: (open: boolean) => void;
}

const OpenModalContext = createContext<OpenModal>({
    open: false,
    setOpen: () => {}
});

export const OpenModalProvider = ({children} : {children: ReactNode}) => {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <OpenModalContext.Provider value={{open, setOpen}}>
            {children}
        </OpenModalContext.Provider>
    )

};

export const useOpenModal = () => useContext(OpenModalContext);