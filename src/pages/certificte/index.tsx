import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react';
import Image from 'next/image'

import getLocaleProps from '@/utils/getLocaleProps';
import styles from './Certificate.module.scss'

type Props = {};

const Verify = (props: Props) => {
    const router = useRouter()
    const { t } = useTranslation('common', { keyPrefix: "common" })
    const [id, setId] = useState<string | string[] | undefined>(undefined);

    const share = () => {
        try {
            if (navigator.share) {
                navigator.share({
                    title: 'Caiyunzhilan Olive Oil Certificate',
                    text: t('shareSuccess'),
                    url: window.location.href,
                }).then(() => {
                }).catch((error) => console.log(error));
            } else {
                try {
                    navigator.clipboard.writeText(window.location.href).then(() => {
                        alert(t('copySuccess'))
                    }).catch((error) => {
                        // console.log('Failed to copy link: ', error);
                    });
                }
                catch (error) {

                    const textArea = document.createElement('textarea');
                    textArea.value = window.location.href;
                    textArea.style.width = '0';
                    textArea.style.position = 'fixed';
                    textArea.style.left = '-999px';
                    textArea.style.top = '10px';
                    textArea.setAttribute('readonly', 'readonly');
                    document.body.appendChild(textArea);

                    textArea.select();
                    try {
                        document.execCommand('copy');
                        alert(t('copySuccess'))
                    } catch (err) {
                        // console.error('降级方案复制失败:', err);
                    } finally {
                        document.body.removeChild(textArea);
                    }
                }

            }
        } catch (error) {
            console.log('Error sharing: ', error);
            alert(error)
        }
    }

    useEffect(() => {
        setId(router.query.id ? router.query.id : undefined);
    }, [router.query]);

    return (
        <div className={styles.certificate}>

            <div className={styles.content}>
                <div className={styles.certificte_title}>
                    {t('certificteTitle')}
                </div>
                <Image
                    src="/icons/right.svg"
                    alt='certificte'
                    width={36}
                    height={44}
                    className={styles.result_img}
                />

                <div className={styles.certificte_des}>
                    {t('certificteDes')}
                </div>

                <div className={styles.certificte_form}>
                    <div className={styles.certificte_form_title}>
                        {t('bottleId')}
                    </div>
                    <div className={styles.certificte_form_val}>
                        00000000000000000000001
                    </div>
                </div>

                <div className={styles.certificte_form}>
                    <div className={styles.certificte_form_title}>
                        {t('productId')}
                    </div>
                    <div className={styles.certificte_form_val}>
                        00000000000000000000001
                    </div>
                </div>

                <div className={styles.certificte_form}>
                    <div className={styles.certificte_form_title}>
                        {t('harvestDate')}
                    </div>
                    <div className={styles.certificte_form_val}>
                        11/11/2025
                    </div>
                </div>

                <div className={styles.certificte_form}>
                    <div className={styles.certificte_form_title}>
                        {t('origin')}
                    </div>
                    <div className={styles.certificte_form_val}>
                        {t('companyName')}
                    </div>
                </div>


                <div className={styles.certificte_form} onClick={() => window.open('https://mainnetexplorer.v.systems/transactions/DNzTbYwfk3W4SK4ZfiM6P5kYhMkBXJHLXZDwAg8ia77G')}>
                    <div className={styles.certificte_form_title}>
                        {t('tokenId')}
                    </div>
                    <div className={styles.certificte_form_val}>
                        TWbTUFLjM6hi1Ci1qv9e3mrcEsewfMedMSG7pYipt
                    </div>
                </div>

                <div className={styles.certificte_form}>
                    <div className={styles.certificte_form_title}>
                        {t('timestamp')}
                    </div>
                    <div className={styles.certificte_form_val}>
                        1762939550384
                    </div>
                </div>

                <div className={styles.result_des} style={{ marginTop: '30px' }}>
                    {t('checkDes')}
                </div>
            </div>

            <div className={styles.start_page_footer}>
                <div className={styles.start_btn} onClick={() => share()}>{t('share')}</div>
                <div className={styles.copyright}>
                    <div>{t('about') + ' ' + t('companyName')} </div>
                    <div>© 2025 Caiyunzhinan All Rights Reserved</div>
                </div>
            </div>
        </div>
    )
}

export default Verify

export const getStaticProps = getLocaleProps(["common"])