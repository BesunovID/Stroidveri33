import { useEffect, useState } from "react";
import { ANIMATION_TIME } from "./constant";

export const useMount = ({ isOpen }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (isOpen && !mounted) {
            setMounted(true);
            document.body.classList.add('modal-open');
            document.body.style.width = document.body.clientWidth;
        } else if (!isOpen && mounted) {
            setTimeout(() => {
                setMounted(false);
                document.body.classList.remove('modal-open');
            }, ANIMATION_TIME)
        }
    }, [isOpen]);

    return {
        mounted,
    };
}