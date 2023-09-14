import { useEffect, useState } from "react";
import { ANIMATION_TIME } from "./constant";

export const useMount = ({ isOpen }) => {
    const [mounted, setMounted] = useState(false);
    const [inModal, setInModal] = useState(false);

    useEffect(() => {
        if (isOpen && !mounted) {
            const width = document.body.clientWidth;
            setMounted(true);
            if(document.body.classList.contains('modal-open')) {
                setInModal(true);
            } else {
                document.body.classList.add('modal-open');
                document.body.style['padding-right'] = `${document.body.clientWidth - width}px`;
            }
        } else if (!isOpen && mounted) {
            setTimeout(() => {
                setMounted(false);
                if (!inModal) {
                    document.body.classList.remove('modal-open');
                    document.body.style['padding-right'] = '';
                }  else {
                    setInModal(false);
                };
            }, ANIMATION_TIME)
        }
    }, [isOpen]);

    return {
        mounted,
    };
}