import { useState, useEffect } from "react";
import style from '../../styles/Product.module.scss'

export default function CalcPrice({ prices, colors }) {
    const [size, setSize] = useState({
        'size': '',
        'activeBut': '',
    });
    const [color, setColor] = useState({
        'color': '',
        'activeBut': '',
    });
    const [price, setPrice] = useState('');

    useEffect(() => {
        if (size.size != ''){
            if (color.color != ''){
                setPrice(prices.filter((e) => (
                    e.size === size.size
                ))[0][`color${color.color}`]);
            }
            else {
                setPrice(prices.filter((e) => (
                    e.size === size.size
                ))[0]['color1']);
            }
        }
        else if (color.color != ''){
            const arr = prices.map((e) => (
                e[`color${color.color}`]
            ));
            setPrice(Math.min(...arr));
        }
        else{
            setPrice(prices[0]['color1']);
        }
    });
    
    return(
        <>
            <Sizes sizes={prices} activeBut={size.activeBut} setSize={setSize} />
            <Colors colors={colors} activeBut={color.activeBut} setColor={setColor} />
            <Price size={size.size} color={color.color} price={price} />
        </>
    )
}

const Sizes = ({sizes, activeBut, setSize}) => {
    return(
        <div className={style.sizes}>
            <p>Доступные размеры:</p>
            <ul>
                {sizes.map((e, i) => (
                    <li key={i}>
                        <button 
                        id={i}
                        className={activeBut === i ? 
                            `${style.butSize} ${style.butActive}`:
                            style.butSize}  
                        onClick={() => (setSize({size: e.size, activeBut: i}))}>
                            {e.size}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const Colors = ({colors, activeBut, setColor}) => {
    return(
        <div className={style.colors}>
            <p>Обработка:</p>
            <ul>
                {colors.map((e) => (
                    <li key={e.colorID}>
                        <button 
                        className={activeBut === e.colorID ?
                            `${style.butColor} ${style.butActive}`:
                            style.butColor} 
                        onClick={() => (setColor({color: e.colorID, activeBut: e.colorID}))}>
                            {e.color}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const Price = ({ size, color, price }) => {
    if (size === '' || color === '') {
        return(
            <p className={style.price}>
                Цена от: {price}
            </p>
        )
    } else {
        return(
            <p className={style.price}>
                Цена: {price}
            </p>
        )
    }
    
}
