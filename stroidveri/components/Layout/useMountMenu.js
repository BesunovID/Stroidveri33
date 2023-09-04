import { useEffect, useState } from "react";

export const useMountMenu = ({ isOpen }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (isOpen && !mounted) {
            setMounted(true);
        } else if (!isOpen && mounted) {
            setTimeout(() => {
                setMounted(false);
            }, 800)
        }
    }, [isOpen]);

    return {
        mounted,
    };
}