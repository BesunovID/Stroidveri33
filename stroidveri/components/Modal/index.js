import LayoutModal from './LayoutModal'
import Portal from './Portal';
import { useMount } from './useMount'

export default function Modal({ children, isOpen, setOpen}) { 
    const { mounted } = useMount({isOpen});

    if (!mounted) {
        return null;
    };

    return(
        <Portal>
            <LayoutModal isOpen={isOpen} setOpen={setOpen}>
                {children}
            </LayoutModal>
        </Portal>
    )
}