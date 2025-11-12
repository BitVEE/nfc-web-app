import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react';
import Image from 'next/image'

import getLocaleProps from '@/utils/getLocaleProps';
import styles from './verify.module.scss'

type Props = {};

const Verify = (props: Props) => {
    const router = useRouter()
    const [isError, setIsError] = useState(false);
    const [id, setId] = useState<string | string[] | undefined>(undefined);
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

    useEffect(() => {
        setIsError(router.query.id === '282929292' ? false : true);
        setId(router.query.id ? router.query.id : undefined);
    }, [router.query]);

    return (
        <div className={styles.verify}>
            <div className={styles.header_box}>
                <div className={styles.header}>
                    <Image
                        src="/favicon.ico"
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

            <div className={styles.content}>
                <Image
                    src={isError ? "/images/err.svg" : "/images/check.svg"}
                    alt={isError ? "error" : "success"}
                    width={140}
                    height={360}
                    className={styles.result_img}
                />
                <div className={styles.result_text}>
                    {isError ? t('errorMessage') : t('checkMessage')}
                </div>

                {
                    isError ? null : <div className={styles.step_box}>
                        <div className={styles.step_item}>
                            <Image
                                src="/icons/tree.svg"
                                alt='tree'
                                width={17}
                                height={16}
                                className={styles.step_img_tree}
                            />
                            <Image
                                src="/icons/factory.svg"
                                alt='factory'
                                width={17}
                                height={15}
                                className={styles.step_img_factory}
                            />
                            <Image
                                src="/icons/tp.svg"
                                alt='tp'
                                width={17}
                                height={11}
                                className={styles.step_img}
                            />
                            <Image
                                src="/icons/client.svg"
                                alt='client'
                                width={12}
                                height={13}
                                className={styles.step_img_client}
                            />
                        </div>

                        <div className={styles.step_item}>
                            <div className={styles.circle_line}>
                                <div className={styles.circle}>
                                </div>
                                <div className={styles.circle}>
                                </div>
                                <div className={styles.circle}>
                                </div>
                                <div className={styles.circle}>
                                </div>
                            </div>
                        </div>

                        <div className={styles.step_item}>
                            <div className={styles.step_text_box}>
                                <div className={styles.step_title}>
                                    {t('step1')}
                                </div>
                                <div className={styles.step_des}>
                                    {t('step1Desc')}
                                </div>
                            </div>
                            <div className={styles.step_text_box}>
                                <div className={styles.step_title}>
                                    {t('step2')}
                                </div>
                                <div className={styles.step_des}>
                                    {t('step2Desc')}
                                </div>
                            </div>
                            <div className={styles.step_text_box}>
                                <div className={styles.step_title}>
                                    {t('step3')}
                                </div>
                                <div className={styles.step_des}>
                                    {t('step3Desc')}
                                </div>
                            </div>
                            <div className={styles.step_text_box}>
                                <div className={styles.step_title}>
                                    {t('step4')}
                                </div>
                                <div className={styles.step_des}>
                                    {t('step4Desc')}
                                </div>
                            </div>
                        </div>

                    </div>
                }

                <div className={styles.result_des} style={{ marginTop: isError ? '60px' : '30px' }}>
                    {isError ? t('errorDes') : t('checkDes')}
                </div>
            </div>

            <div className={styles.start_page_footer}>
                <div className={styles.start_btn} onClick={() => (id && !isError ? router.push(`/certificte?id=${id}`) : null)}>{t(isError ? 'error' : 'check')}</div>
                <div className={styles.copyright}>
                    <div>{t('about') + ' ' + t('companyName')} </div>
                    <div>© 2025 Caiyunzhinan All Rights Reserved</div>
                </div>
            </div>
        </div>
    )
}

export default Verify

export const getStaticProps = getLocaleProps(["common"]);