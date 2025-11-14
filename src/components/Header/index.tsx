import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import Image from 'next/image';


import styles from './Header.module.scss'

type Props = {};

const Header = (props: Props) => {
    const router = useRouter()
    const { t, i18n } = useTranslation('common', { keyPrefix: "common" })

    const handleLanguageChange = () => {
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
            }
        }, router.asPath, {
            locale: i18n.language === 'en' ? 'zh' : 'en',
        });
    };

    return (
        <div className={styles.header}>
            <div className={styles.header_box}>
                <div className={styles.header}>
                    <Image
                        src="/favicon.png"
                        alt="RWA OLIVE OIL"
                        width={42}
                        height={49}
                        className={styles.logo}
                        onClick={() => router.push('/')}
                    />
                    <div className={styles.title_box}>
                        <div className={styles.title}>
                            Caiyunzhilan Olive Oil
                        </div>
                        <div className={styles.subtitle}>
                            Blockchain Traceability & Asset Tokenization Platform
                        </div>
                    </div>
                    <Image
                        src="/icons/language.svg"
                        alt="language"
                        width={24}
                        height={24}
                        className={styles.lag}
                        onClick={() => handleLanguageChange()}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header