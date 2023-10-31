import style from "../styles/Info.module.scss"

export default function Info() {
    return(
        <div className={style.info}>
            <p className={style.text}>На сайте представлена не вся продукция. Все двери производятся индивидуально по Вашему запросу. Доступно большое количество размеров, материалов, цветов.
            Для заказа и по всем интересующимся вопросам обращайтесь по указанным контактам или оставьте заявку.
            </p>
        </div>
    )
}