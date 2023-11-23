import { useState, useEffect } from "react";
import style from '../../../styles/Product.module.scss'
import Sizes from "./Sizes";
import Colors from "./Colors";
import { ButtonFeedBack } from "../../Layout/Header";

export default function CalcPrice({ prices, colors }) {
    const [windowWidth, setWindowWidth] = useState('portable');

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
        const resizeHandler = () => {
            if ((windowWidth === 'portable') && (window.innerWidth <= 700)){
                setWindowWidth('mobile');
            } 
            else if ((windowWidth === 'mobile') && (window.innerWidth > 700)){
                setWindowWidth('portable');
            }
        }
        
        if (colors === 'null') setPrice(prices);
        else{
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
        }

        window.addEventListener('resize', resizeHandler);
        resizeHandler();
        return () => {
            window.removeEventListener('resize', resizeHandler);
        }
    }, [activeSize.sizeName, activeColor.colorName, activeColor.colorID, prices, colors, windowWidth]);


    if (colors === 'null') {
        return(
            <Price price={price} />
        )
    } 
    else{
        return(
            <>
                <Sizes sizes={prices} activeSize={activeSize} setSize={setSize} windowWidth={windowWidth}/>
                <Colors colors={colors} activeColor={activeColor} setColor={setColor} windowWidth={windowWidth}/>
                <Price price={price} />
            </>
        )
    }
}


const Price = ({ price }) => {
    return(
        <div className={style.price_wrap}>
            <p className={style.price}>
                Цена от: {price}
            </p>
            <p className={style.text}>
                для оформления заказа или уточнения цены 
            </p>
            <ButtonFeedBack />
        </div>
    )
}
