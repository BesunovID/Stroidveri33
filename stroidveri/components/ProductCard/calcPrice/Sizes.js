import { useEffect, useState } from "react";
import style from '../../../styles/Product.module.scss'
import Modal from "../../Modal";
import Image from "next/image";


export default function Sizes({sizes, activeSize, setSize, windowWidth}) {
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        setOpenModal(false);
    }, [activeSize])

    return(
        <div className={style.sizes}>
            <p className={style.prop_name}>Доступные размеры:</p>
            <SizesView 
                windowWidth={windowWidth} 
                openModal={openModal} 
                setOpenModal={setOpenModal}
                sizes={sizes}
                activeSize={activeSize}
                setSize={setSize}
            />
        </div>
    )
}

const SizesView = ({ windowWidth, 
                    openModal, 
                    setOpenModal,
                    sizes,
                    activeSize,
                    setSize}) => {
    if (windowWidth === 'portable') {
        return(
            <ul className={style.props}>
                {sizes.map((e, i) => (
                    <li className={style.prop} key={i}>
                        <button 
                        id={i}
                        className={activeSize.sizeID === i ? 
                            `${style.butProp} ${style.butActive}`:
                            style.butProp}  
                        onClick={() => (setSize({sizeName: e.size, sizeID: i}))}>
                            {e.size}
                        </button>
                    </li>
                ))}
            </ul>
        )
    } else if (windowWidth === 'mobile') {
        if (activeSize.sizeID === '') {
            setSize({sizeName: sizes[0].size, sizeID: 0});
        }; 
        return(
           <>
            <ul className={style.props}>
                    <li className={style.prop} key={activeSize.sizeID}>
                        <button 
                            id={activeSize.sizeID}
                            className={`${style.butProp} ${style.butActive}`}  
                            onClick={() => (setOpenModal(true))}
                        >
                            {activeSize.sizeName}
                            <div className={style.selectImage}>
                                <Image 
                                    src={'/open-other.svg'} 
                                    layout='fill'
                                    alt={'select'}
                                />
                            </div>  
                        </button>
                    </li>
                </ul>
                <Modal isOpen={openModal} setOpen={setOpenModal}>
                    {<div className={style.propsModal}>
                        <ul className={style.props}>
                            {sizes.map((e, i) => (
                                <li className={style.prop} key={i}>
                                    <button 
                                        id={i}
                                        className={activeSize.sizeID === i ? 
                                            `${style.butProp} ${style.butActive}`:
                                            style.butProp}  
                                        onClick={() => {
                                            setSize({sizeName: e.size, sizeID: i});
                                        }}
                                    >
                                        {e.size}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>}
                </Modal> 
            </>
        )
    }
}