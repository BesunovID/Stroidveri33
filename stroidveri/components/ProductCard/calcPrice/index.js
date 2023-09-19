import { useState, useEffect } from "react";
import style from '../../../styles/Product.module.scss'
import Sizes from "./Sizes";
import Colors from "./Colors";
import { ButtonFeedBack } from "../../Layout/Header";

export default function CalcPrice({ prices, colors }) {
    const [windowWidth, setWindowWidth] = useState('portable');
    
    const resizeHandler = () => {
        if ((windowWidth === 'portable') && (window.innerWidth <= 700)){
            setWindowWidth('mobile');
        } 
        else if ((windowWidth === 'mobile') && (window.innerWidth > 700)){
            setWindowWidth('portable');
        }
    }

    const [activeSize, setSize] = useState({
        'sizeName': '',
        'sizeID': '',
    });
    const [activeColor, setColor] = useState({
        'colorName': '',
        'colorID': '',
    });
    const [price, setPrice] = useState('');

    useEffect(() => {
        if (activeSize.sizeName != ''){
            if (activeColor.colorName != ''){
                setPrice(prices.filter((e) => (
                    e.size === activeSize.sizeName
                ))[0][`color${activeColor.colorID}`]);
            }
            else {
                setPrice(prices.filter((e) => (
                    e.size === activeSize.sizeName
                ))[0]['color1']);
            }
        }
        else if (activeColor.colorName != ''){
            const arr = prices.map((e) => (
                e[`color${activeColor.colorID}`]
            ));
            setPrice(Math.min(...arr));
        }
        else{
            setPrice(prices[0]['color1']);
        }

        window.addEventListener('resize', resizeHandler);
        resizeHandler();
        return () => {
            window.removeEventListener('resize', resizeHandler);
        }
    });
    
    return(
        <>
            <Sizes sizes={prices} activeSize={activeSize} setSize={setSize} windowWidth={windowWidth}/>
            <Colors colors={colors} activeColor={activeColor} setColor={setColor} windowWidth={windowWidth}/>
            <Price size={activeSize.sizeName} color={activeColor.colorName} price={price} />
        </>
    )
}


const Price = ({ size, color, price }) => {
   // if (size === '' || color === '') {
        return(
            <div className={style.price_wrap}>
                <p className={style.price}>
                    Цена от: {price}
                </p>
                <p className={style.text}>
                    для уточнения цены 
                </p>
                <ButtonFeedBack />
            </div>
        )
  /*  } else {
        return(
            <p className={style.price}>
                Цена: {price}
            </p>
        )
    } */
    
}
