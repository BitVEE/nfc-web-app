import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import Image from 'next/image';
import { useState, CSSProperties, useEffect } from 'react';
import dynamic from 'next/dynamic';


import styles from './Header.module.scss'
import useWindowSize from '@/hooks/useWindowSize';

const Popup = dynamic(() => import('antd-mobile').then(mod => mod.Popup), { ssr: false });

type Props = {};


const popupStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    marginTop: '56px',
    background: "url('/images/lag-bg.png') no-repeat center center / cover",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};
const popupTitleStyle: CSSProperties = {
    fontWeight: '500',
    fontSize: '24px',
    color: '#DDDDDD',
    marginTop: '52px',
    marginBottom: '12px'
};
const popupPCTitleStyle: CSSProperties = {
    marginTop: '230px',
    marginBottom: '12px',
    fontWeight: '500',
    fontSize: '24px',
    color: '#DDDDDD',
};
const popupDesBoxStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '28px',
    fontFamily: 'Lato !important',
    fontWeight: '500',
    lineHeight: '100%',
    fontSize: '14px'
};
const popupActiveTxtStyle: CSSProperties = {
    color: '#FFFFFF',
    marginLeft: '6.5px',
};

const popupInactiveTxtStyle: CSSProperties = {
    color: 'rgba(255, 255, 255, 0.5)',
    marginLeft: '6.5px'
};

const placeDivStyle: CSSProperties = {
    width: '12px',
    height: '12px'
};

const Header = (props: Props) => {
    const router = useRouter()
    const { t, i18n } = useTranslation('common', { keyPrefix: "common" })
    const [visible, setVisible] = useState(false)
    const { width, height } = useWindowSize();


    const handleLanguageChange = (lang: string) => {
        router.push({
            pathname: router.pathname,
            query: {
                ...router.query,
            }
        }, router.asPath, {
            locale: lang,
        });
        setVisible(false)
    };


    return (
        <div className={styles.header_component}>
            <div className={styles.header_box}>
                <div className={styles.header}>
                    <Image
                        src="/icons/logo.png"
                        alt="RWA OLIVE OIL"
                        width={42}
                        height={49}
                        className={styles.logo}
                        onClick={() => router.push('/')}
                    />
                    <div className={styles.title_box}>
                        <div className={styles.title}>
                            {t('herderCompany')}
                        </div>
                        <div className={styles.subtitle}>
                            {t('herderDes')}
                        </div>
                    </div>
                    <Image
                        src={visible ? '/icons/close.svg' : "/icons/language.svg"}
                        alt={visible ? "close" : "language"}
                        width={24}
                        height={24}
                        className={styles.lag}
                        onClick={() => setVisible(!visible)}
                    />
                </div>
            </div>
            <Popup
                visible={visible}
                position='top'
                bodyStyle={{ height: '100vh' }}
            >
                <div style={popupStyle}>
                    <div style={width && width > 768 ? popupPCTitleStyle : popupTitleStyle}>
                        语言 language
                    </div>
                    <div style={popupDesBoxStyle}>
                        {
                            i18n.language === 'zh' ? <Image src='/icons/select.svg' width={12} height={12} alt='select' /> : <div style={placeDivStyle}></div>
                        }
                        <div style={i18n.language === 'zh' ? popupActiveTxtStyle : popupInactiveTxtStyle} onClick={() => handleLanguageChange('zh')}>
                            中文
                        </div>
                    </div>

                    <div style={popupDesBoxStyle}>
                        {
                            i18n.language === 'en' ? <Image src='/icons/select.svg' width={12} height={12} alt='select' /> : <div style={placeDivStyle}></div>
                        }
                        <div style={i18n.language === 'en' ? popupActiveTxtStyle : popupInactiveTxtStyle} onClick={() => handleLanguageChange('en')}>
                            English
                        </div>
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default Header