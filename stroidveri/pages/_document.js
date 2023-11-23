import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <script type='text/javascript' async src='YMetrica.js'>
        </script>

        <noscript>
          <div>
            <img src='https://mc.yandex.ru/watch/56812144' style={{ position:'absolute', left:'-9999px' }} alt="" />
          </div>
        </noscript>
      </body>
    </Html>
  )
}