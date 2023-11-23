import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import style from '../styles/Contacts.module.scss'

export default function YMap() {
    const defaultState = {
        center: [56.395841, 41.317580],
        zoom: 12,
    };

   return(
        <YMaps>
            <Map defaultState={defaultState} className={style.map}>
                <Placemark geometry={defaultState.center} />
            </Map>
        </YMaps>
   )
}