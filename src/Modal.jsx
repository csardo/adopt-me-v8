import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
    const elRef = useRef(null); // I have a piece of something and I want to have the same div back every time
    if (!elRef.current) {
        elRef.current = document.createElement('div');
    }

    useEffect(() => {
        const modalRoot = document.getElementById("modal")
        modalRoot.appendChild(elRef.current);

        // remove it from the DOM
        return () => modalRoot.removeChild(elRef.current);
    }, []); // we only  want this to happen once, we don't need to append over and over again

    return createPortal(<div>{children}</div>, elRef.current)
}

export default Modal;
