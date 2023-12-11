import Head from 'next/head';
import styles from '../styles/global.scss';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={nunito.className}>
      <Head>
        <title>Кондитерский цех ИП Бурлакова Т.А.</title>
        <meta keywords="Кондитерский цех ИП Бурлаков Т.А." />
        <meta keywords="Торты на заказ Рязань" />
        <meta keywords="Торты Рязань" />
        <meta keywords="Кондитерские изделия Рязань" />
        <meta name="yandex-verification" content="2d46ad2aa2ab80f6" />
        <link rel="shortcut icon" href="/favicon64.png" />
        <meta property="og:url" content="https://lak.tawerdev.ru" />
        <meta property="og:title" content="Кондитерский цех ИП Бурлакова Т.А." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru" />
        <meta
          property="og:description"
          content="Кондитерский цех ИП Бурлакова Т.А. занимается производством кондитерских изделий: торты на заказ, пирожные"
        />
        <meta
          name="description"
          content="Кондитерских цех ИП Бурлакова - это место ваших шоколадных фантазий. У нас вы найдете торты на заказ, пирожные и прочие кондитерские изделия."
        />
        <meta property="og:site_name" content="Кондитерский цех ИП Бурлакова Т.А." />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
