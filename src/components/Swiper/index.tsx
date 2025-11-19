import styles from './Swiper.module.scss'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import dynamic from 'next/dynamic';
import { useState } from 'react';

const Mask = dynamic(() => import('antd-mobile').then(mod => mod.Mask), { ssr: false });

type Props = {};

const Swiper = (props: Props) => {
    const { t } = useTranslation('common', { keyPrefix: "home" })
    const [visible, setVisible] = useState(false)
    const [viewImg, setViewImg] = useState('')
    const [viewTxt, setViewTxt] = useState('')

    const swiperOpt = (opt: string) => {
        document.getElementById('home_swiper_box')!.scrollBy({
            left: opt === 'prev' ? -200 : 200,
            behavior: 'smooth',
        });
        console.log(document.getElementById('home_swiper_box')!.scrollLeft);
    }

    const handleItemClick = (img: string, txt: string) => {
        setVisible(true);
        setViewImg(img)
        setViewTxt(txt)
    }

    return (
        <div className={styles.swiper}>
            <div className={styles.home_enterprise_swiper_box} id="home_swiper_box">
                <div className={styles.home_enterprise_swiper_item} onClick={() => handleItemClick('/images/bl.jpg', 'enterpriseSwiperTitle1')}>
                    <Image className={styles.home_enterprise_swiper_img} src='/images/bl.jpg' alt='bl' width={120} height={150} />
                    <div className={styles.home_enterprise_swiper_item_text}>
                        {t('enterpriseSwiperTitle1')}
                    </div>
                </div>
                <div className={styles.home_enterprise_swiper_item} onClick={() => handleItemClick('/images/ip.jpg', 'enterpriseSwiperTitle2')}>
                    <Image className={styles.home_enterprise_swiper_img} src='/images/ip.jpg' alt='bl' width={120} height={150} />
                    <div className={styles.home_enterprise_swiper_item_text}>
                        {t('enterpriseSwiperTitle2')}
                    </div>
                </div>
                <div className={styles.home_enterprise_swiper_item} onClick={() => handleItemClick('/images/fhc.jpg', 'enterpriseSwiperTitle3')}>
                    <Image className={styles.home_enterprise_swiper_img} src='/images/fhc.jpg' alt='bl' width={120} height={150} />
                    <div className={styles.home_enterprise_swiper_item_text}>
                        {t('enterpriseSwiperTitle3')}
                    </div>
                </div>
            </div>
            <div className={styles.home_enterprise_swiper_btn_box}>
                <Image onClick={() => swiperOpt('prev')} className={styles.home_enterprise_btn_img} src='/icons/left-arrow-active.svg' alt='bl' width={16} height={15.5} />
                <Image onClick={() => swiperOpt('next')} className={styles.home_enterprise_btn_img} src='/icons/right-arrow-active.svg' alt='bl' width={16} height={15.5} />
            </div>

            <Mask visible={visible} onMaskClick={() => setVisible(false)} color='#202020E5'>
                <div className={styles.overlayContent}>
                    <Image className={styles.overlayContent_img} src={viewImg} alt='orchards' width={300} height={400} />
                    <div className={styles.overlayContent_form}>
                        <div className={styles.overlayContent_form_title}>
                            {t(viewTxt as any)}
                        </div>
                        {/* <div className={styles.overlayContent_form_val}>
                            100000
                        </div> */}
                    </div>
                    <Image className={styles.overlayContent_close} src='/icons/close-img.svg' alt='close' width={40} height={40} onClick={() => setVisible(false)} />
                </div>
            </Mask>
        </div>
    )
}

export default Swiper