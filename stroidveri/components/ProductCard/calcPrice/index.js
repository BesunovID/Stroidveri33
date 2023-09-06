import { useState, useEffect } from "react";
import style from '../../../styles/Product.module.scss'
import Sizes from "./Sizes";
import Colors from "./Colors";

export default function CalcPrice({ prices, colors }) {
    const [windowWidth, setWindowWidth] = useState('portable');
    
    const resizeHandler = () => {
        if ((windowWidth === 'portable') && (window.screen.width <= 700)){
            setWindowWidth('mobile');
        } 
        else if ((windowWidth === 'mobile') && (window.screen.width > 700)){
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
              //  setColor({colorName: colors[0].color, colorID: colors[0].colorID});
                setPrice(prices.filter((e) => (
                    e.size === activeSize.sizeName
                ))[0]['color1']);
            }
        }
        else if (activeColor.colorName != ''){
          //  setSize({sizeName: prices[0].size, sizeID: 0});
            const arr = prices.map((e) => (
                e[`color${activeColor.colorID}`]
            ));
            setPrice(Math.min(...arr));
        }
        else{
       //     setSize({sizeName: prices[0].size, sizeID: 0});
        //    setColor({colorName: colors[0].color, colorID: colors[0].colorID});
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
