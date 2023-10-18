import { useEffect, useState } from "react";
import style from '../../../styles/Product.module.scss'
import Modal from "../../Modal";
import Image from "next/image";

export default function Colors({colors, activeColor, setColor, windowWidth}) {
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        setOpenModal(false);
    }, [activeColor])

    return(
        <div className={style.colors}>
            <p className={style.prop_name}>Обработка:</p>
                <ColorsView 
                    windowWidth={windowWidth} 
                    openModal={openModal} 
                    setOpenModal={setOpenModal}
                    colors={colors}
                    activeColor={activeColor}
                    setColor={setColor}
                />
        </div>
    )
}

const ColorsView = ({ windowWidth, 
                        openModal, 
                        setOpenModal,
                        colors,
                        activeColor,
                        setColor,}) => {
    if (windowWidth === 'portable') {
        return(
            <ul className={style.props}>
                {colors.map((e) => (
                    <li className={style.prop} key={e.colorID}>
                        <button 
                            className={activeColor.colorID === e.colorID ?
                                `${style.butProp} ${style.butActive}`:
                                style.butProp} 
                            onClick={() => (
                                setColor({colorName: e.color, colorID: e.colorID})
                            )}
                        >
                            {e.color}
                        </button>
                    </li>
                ))}
            </ul>
        )
    } else if (windowWidth === 'mobile') {
        if (activeColor.colorID === '') {
            setColor({colorName: colors[0].color, colorID: colors[0].colorID});
        };
        return(
            <>
                <ul className={style.props}>
                    <li className={style.prop} key={activeColor.colorID}>
                        <button 
                            id={activeColor.colorID}
                            className={`${style.butProp} ${style.butActive}`}  
                            onClick={() => (
                                setOpenModal(true)
                            )}
                        >
                            {activeColor.colorName}
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
                            {colors.map((e) => (
                                <li className={style.prop} key={e.colorID}>
                                    <button 
                                        id={e.colorID}
                                        className={activeColor.colorID === e.colorID ?
                                            `${style.butProp} ${style.butActive}`:
                                            style.butProp} 
                                        onClick={() => {
                                            setColor({colorName: e.color, colorID: e.colorID});
                                        }}
                                    >
                                        {e.color}
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