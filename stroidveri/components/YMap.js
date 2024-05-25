import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import style from '../styles/Contacts.module.scss'

export default function YMap() {
    const defaultState = {
        center: [56.395841, 41.317580],
        zoom: 12,
    };

   return(
        <iframe className={style.map} src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=236394758693" style={{border: '0'}}></iframe>
        
            /*<YMaps>
            <Map defaultState={defaultState} className={style.map}>
                <Placemark geometry={defaultState.center} />
            </Map>
            </YMaps>*/
   )
}