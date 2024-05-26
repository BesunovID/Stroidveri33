import style from '../../styles/Layout.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import viberImg from '../../public/viber.webp'
import vkImg from '../../public/vk.webp'
import whatsAppImg from '../../public/whatsapp.webp'

export default function Footer() {
    return(
      <footer className={style.footer}>
        <div className={style.links}>
          <span>Мы в социальных сетях:</span>
          <Link href="viber://chat?number=%2B79300310053">
            <Image 
              src={viberImg}
              width={40}
              height={40}
              alt="Написать нам в Viber"
            />
          </Link>
          <Link href="https://wa.me/79300310053">
            <Image 
              src={whatsAppImg}
              width={40}
              height={40}
              alt="Написать нам в WhatsApp"
            />
          </Link>
          <Link href="https://vk.com/stroidveri33">
            <Image 
              src={vkImg}
              width={40}
              height={40}
              alt="Наша группа ВКонтакте"
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