import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import getLocaleProps from "@/utils/getLocaleProps";

import styles from '@/styles/Home.module.scss'

export default function Home() {
  const { t } = useTranslation('common', { keyPrefix: "home" })

  return (
    <div className={styles.home}>

      <div className={styles.home_olive}>
        <div className={styles.home_olive_title}>
          {t('oliveTitle')}
        </div>
        <div className={styles.home_olive_des}>
          {t('oliveDes')}
        </div>
        <div className={styles.home_olive_img_box}>
          <div className={styles.home_olive_img_item}>
            <Image className={styles.home_olive_img} src='/icons/olive.png' alt='olive' width={48} height={48} />
            {t('iconsTitle1')}
          </div>
          <div className={styles.home_olive_img_item}>
            <Image className={styles.home_olive_img} src='/icons/cold.png' alt='cold' width={48} height={48} />
            {t('iconsTitle2')}
          </div>
          <div className={styles.home_olive_img_item}>
            <Image className={styles.home_olive_img} src='/icons/mechanical.png' alt='mechanical' width={48} height={48} />
            {t('iconsTitle3')}
          </div>
          <div className={styles.home_olive_img_item}>
            <Image className={styles.home_olive_img} src='/icons/press.png' alt='press' width={48} height={48} />
            {t('iconsTitle4')}
          </div>
          <div className={styles.home_olive_img_item}>
            <Image className={styles.home_olive_img} src='/icons/chemical.png' alt='chemical' width={48} height={48} />
            {t('iconsTitle5')}
          </div>
          <div className={styles.home_olive_img_item}>
            <Image className={styles.home_olive_img} src='/icons/quality.png' alt='quality' width={48} height={48} />
            {t('iconsTitle6')}
          </div>
        </div>
        <div className={styles.home_olive_check_btn}>
          {t('checkData')}
        </div>
        <div className={styles.home_olive_sponser_box}>
          <Image className={styles.home_olive_sponser_cyberport} src='/images/cyberport.png' alt='cyberport' width={64} height={31} />
          <Image className={styles.home_olive_sponser_eth} src='/images/eth.png' alt='eth' width={25} height={42} />
          <Image className={styles.home_olive_sponser_fintech} src='/images/fintech.png' alt='fintech' width={84} height={23} />
          <Image className={styles.home_olive_sponser_codeSolution} src='/images/codeSolution.png' alt='codeSolution' width={85} height={31} />
        </div>
      </div>

      <div className={styles.home_footer}>
        <div className={styles.home_footer_logo_box}>
          <Image className={styles.home_footer_logo} src='/favicon.png' alt='logo' width={42} height={49} />
        </div>
        <div className={styles.home_footer_company}>
          {t('footerCompany')}
        </div>
        <div className={styles.home_footer_number}>
          (078) 12345 12112
        </div>
        <div className={styles.home_footer_address}>
          {t('footerAddress')}
        </div>
        <div className={styles.home_footer_divider}></div>

        <div className={styles.home_footer_contact}>
          {t('footerContact')}
        </div>

        <div className={styles.home_footer_about}>
          {t('footerAbout')}
        </div>

        <div className={styles.home_footer_rights}>
          {t('footerRights')}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = getLocaleProps(["common"]);
