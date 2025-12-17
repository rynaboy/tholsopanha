import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Kou Sophearen</title>
        <meta name="description" content="Kou Sophearen" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href="https://www.facebook.com/share/15QY6ee8AR/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.logo}
                src="/facebook.png"
                alt="Facebook"
                width={20}
                height={20}
              />
              Facebook
            </a>
            <a
              className={styles.primary}
              href="https://www.instagram.com/ren_9._9?igsh=MWo5bWJibzBtMXhpMQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.logo}
                src="/instagram.png"
                alt="Instagram"
                width={20}
                height={20}
              />
              Instagram
            </a>
            <a
              className={styles.primary}
              href="https://t.me/Sophearen_kou"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.logo}
                src="/telegram.png"
                alt="Telegram"
                width={20}
                height={20}
              />
              Telegram
            </a>
            <a
              className={styles.primary}
              href="https://www.tiktok.com/@rren3?_t=ZS-8tWV18LeWud&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.logo}
                src="/tik-tok.png"
                alt="Tik Tok"
                width={20}
                height={20}
              />
              Ticktok
            </a>
           
          </div>
        </main>
        <footer className={styles.footer}>
        </footer>
      </div>
    </>
  );
}
