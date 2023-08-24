import LayoutModal from './LayoutModal'
import Portal from './Portal';
import { useMount } from './useMount'

export default function Modal({ isOpen, setOpen, product }) { 
    const { mounted } = useMount({isOpen});

    if (!mounted) {
        return null;
    };

    return(
        <Portal>
            <LayoutModal product={product} isOpen={isOpen} setOpen={setOpen} />
        </Portal>
    )
}