import style from '../../styles/Layout.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return(
      <footer className={style.footer}>
        <Link href="/">
          <>
            <Image src="/logo.png" alt="ООО Стройдвери" width={90} height={90} />
            <span>ООО Стройдвери</span>
          </>
        </Link>
      </footer>
    )
}