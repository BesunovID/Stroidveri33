import style from '../../styles/Layout.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return(
      <footer className={style.footer}>
        <div className={style.links}>
          <span>Мы в социальных сетях:</span>
          <Link href="viber://chat?number=%2B79300310053">
            <Image 
              src="/viber.svg"
              alt="Написать нам в Viber"
              width={45}
              height={45}
            />
          </Link>
          <Link href="https://wa.me/79300310053">
            <Image 
              src="/whatsapp.svg"
              alt="Написать нам в WhatsApp"
              width={45}
              height={45}
            />
          </Link>
          <Link href="https://vk.com/stroidveri33">
            <Image 
              src="/vk.svg"
              alt="Наша группа ВКонтакте"
              width={45}
              height={45}
            />
          </Link>
        </div>
        <div className={style.logoFooter}>
          <Image src="/logo.png" alt="ООО Стройдвери" width={90} height={90} />
          <Link href="/">
            ООО СтройДвери33
          </Link>
        </div>
        <div className={style.copypaste}>
          <span>© Все права защищены</span>
        </div>
      </footer>
    )
}