import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import getLocaleProps from "@/utils/getLocaleProps";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import styles from './Start.module.scss'

export default function Home() {
  const { t } = useTranslation('common', { keyPrefix: "common" })
  const router = useRouter();
  const [id, setId] = useState<string | string[] | undefined>(undefined);

  useEffect(() => {
    setId(router.query.id ? router.query.id : undefined);
  }, [router.query]);

  return (
    <div className={styles.start_page}>
      <div className={styles.start_page_bg}>
        <Image
          src="/favicon.png"
          alt="RWA OLIVE OIL"
          width={520}
          height={126}
          className={styles.start_page_logo}
        />
        <div className={styles.start_page_text}>
          {t('verifyBottle')}
        </div>
      </div>

      <div className={styles.start_page_footer}>
        <div className={styles.start_btn} onClick={() => id ? router.push('/verify?id=' + id) : alert(t('scanNFC'))}>{t('start')}</div>
        <div className={styles.copyright}>
          <div>{t('about') + ' ' + t('companyName')} </div>
          <div>© 2025 Caiyunzhinan All Rights Reserved</div>
        </div>
      </div>

    </div>
  )
}

export const getStaticProps = getLocaleProps(["common"]);
