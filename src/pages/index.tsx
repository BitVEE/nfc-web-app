import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { useState } from 'react';
import dynamic from 'next/dynamic';

import getLocaleProps from "@/utils/getLocaleProps";
import styles from '@/styles/Home.module.scss'
import Swiper from '@/components/Swiper';

const Mask = dynamic(() => import('antd-mobile').then(mod => mod.Mask), { ssr: false });

export default function Home() {
  const { t } = useTranslation('common', { keyPrefix: "home" })
  const [selectedOrigin, setSelectedOrigin] = useState<string>('yuxi');
  const [visible, setVisible] = useState(false)



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

      <div className={styles.home_proof}>
        <div className={styles.home_proof_title}>{t('proofTitle')}</div>
        <div className={styles.home_proof_subtitle}>{t('proofSubtitle')}</div>
        <div className={styles.home_proof_des}>{t('proofDes1')}</div>
        <div className={styles.home_proof_des}>{t('proofDes2')}</div>
        <div className={styles.home_proof_card}>

          <div className={styles.home_proof_card_item}>
            <div className={styles.home_proof_card_item_title_box}>
              <div className={styles.home_proof_card_item_title}>
                {t('proofCardTitle1')}
              </div>
              <div className={styles.home_proof_card_item_title_divider}> </div>
            </div>
            <div className={styles.home_proof_card_item_unit_box}>
              <Image className={styles.home_proof_card_item_unit_img} src='/icons/card-tree.svg' alt='card-tree' width={16} height={16} />
              <div className={styles.home_proof_card_item_unit}>{t('proofCardUnit1')} </div>
              <div className={styles.home_proof_card_item_num}> {t('proofCardNum1')} </div>
            </div>

            <div className={styles.home_proof_card_item_unit_box}>
              <Image className={styles.home_proof_card_item_unit_img} src='/icons/card-acres.svg' alt='card-acres' width={16} height={16} />
              <div className={styles.home_proof_card_item_unit}>{t('proofCardUnit2')} </div>
              <div className={styles.home_proof_card_item_num}> {t('proofCardNum2')} </div>
            </div>

            <div className={styles.home_proof_card_item_unit_box}>
              <Image className={styles.home_proof_card_item_unit_img} src='/icons/card-climate.svg' alt='card-climate' width={16} height={16} />
              <div className={styles.home_proof_card_item_unit}>{t('proofCardUnit3')} </div>
              <div className={styles.home_proof_card_item_num}> {t('proofCardNum3')} </div>
            </div>

            <div className={styles.home_proof_card_item_unit_box}>
              <Image className={styles.home_proof_card_item_unit_img} src='/icons/card-harvesting.svg' alt='card-harvesting' width={16} height={16} />
              <div className={styles.home_proof_card_item_unit}>{t('proofCardUnit4')} </div>
              <div className={styles.home_proof_card_item_num}> {t('proofCardNum4')} </div>
            </div>
          </div>

          <div className={styles.home_proof_card_item}>
            <div className={styles.home_proof_card_item_title_box}>
              <div className={styles.home_proof_card_item_title}>
                {t('proofCardTitle2')}
              </div>
              <div className={styles.home_proof_card_item_title_divider}> </div>
            </div>
            <div className={styles.home_proof_card_item_unit_box}>
              <Image className={styles.home_proof_card_item_unit_img} src='/icons/card-chemical.svg' alt='card-chemical' width={16} height={16} />
              <div className={styles.home_proof_card_item_unit}>{t('proofCardUnit5')} </div>
            </div>

            <div className={styles.home_proof_card_item_unit_box}>
              <Image className={styles.home_proof_card_item_unit_img} src='/icons/card-sensory.svg' alt='card-sensory' width={16} height={16} />
              <div className={styles.home_proof_card_item_unit}>{t('proofCardUnit6')} </div>
            </div>

            <div className={styles.home_proof_card_item_unit_box}>
              <Image className={styles.home_proof_card_item_unit_img} src='/icons/card-thumbup.svg' alt='card-thumbup' width={16} height={16} />
              <div className={styles.home_proof_card_item_unit}>{t('proofCardUnit7')} </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.home_orchards}>
        <div className={styles.home_orchards_card}>
          <div className={styles.home_orchards_card_title}>{t('orchardsTitle')} </div>
          <div className={styles.home_orchards_card_des}>{t('orchardsDes')} </div>
        </div>
        <div className={styles.home_orchards_mechanical} onClick={() => setVisible(true)}>
          <Image className={styles.home_orchards_mechanical_img} src='/icons/orchards-mechanical.png' alt='mechanical' width={36} height={36} />
        </div>
        <div className={styles.home_orchards_tree} onClick={() => setVisible(true)}>
          <Image className={styles.home_orchards_mechanical_img} src='/icons/orchards-tree.png' alt='tree' width={36} height={36} />
        </div>
        <div className={styles.home_orchards_cold} onClick={() => setVisible(true)}>
          <Image className={styles.home_orchards_mechanical_img} src='/icons/orchards-cold.png' alt='cold' width={36} height={36} />
        </div>

        <div className={styles.home_orchards_olive} onClick={() => setVisible(true)}>
          <Image className={styles.home_orchards_mechanical_img} src='/icons/orchards-cold.png' alt='cold' width={36} height={36} />
        </div>

        <div className={styles.home_orchards_press} onClick={() => setVisible(true)}>
          <Image className={styles.home_orchards_mechanical_img} src='/icons/orchards-tree.png' alt='cold' width={36} height={36} />
        </div>
      </div>


      <div className={styles.home_tree}>
        <div className={styles.home_tree_title}>{t('treeTitle')} </div>
        <div className={styles.home_tree_des}>{t('treeDes')} </div>
        <div className={styles.home_tree_card}>

          <div className={styles.home_tree_card_title_box}>
            <div className={styles.home_tree_card_title_item} onClick={() => setSelectedOrigin('yuxi')} style={{ borderBottom: selectedOrigin === 'yuxi' ? '1px solid #DDDDDD' : '1px solid transparent' }}>
              <Image className={styles.home_tree_card_title_item_img} src='/icons/tree/ancient.svg' alt='logo' width={24} height={24} />
              <div className={styles.home_tree_card_title_item_txt_box}>
                <div className={styles.home_tree_card_title_item_txt_bold}>
                  {t('place1')}
                </div>
                <div className={styles.home_tree_card_title_item_txt_light}>
                  {t('treeCountry')}
                </div>
              </div>
            </div>

            <div className={styles.home_tree_card_title_item} onClick={() => setSelectedOrigin('Shangri-La')} style={{ borderBottom: selectedOrigin === 'Shangri-La' ? '1px solid #DDDDDD' : '1px solid transparent' }}>
              <Image className={styles.home_tree_card_title_item_img} src='/icons/tree/tent.svg' alt='logo' width={24} height={24} />
              <div className={styles.home_tree_card_title_item_txt_box}>
                <div className={styles.home_tree_card_title_item_txt_bold}>
                  {t('place2')}
                </div>
                <div className={styles.home_tree_card_title_item_txt_light}>
                  {t('treeCountry')}
                </div>
              </div>
            </div>

            <div className={styles.home_tree_card_title_item} onClick={() => setSelectedOrigin('Kunming')} style={{ borderBottom: selectedOrigin === 'Kunming' ? '1px solid #DDDDDD' : '1px solid transparent' }}>
              <Image className={styles.home_tree_card_title_item_img} src='/icons/tree/flower.svg' alt='logo' width={24} height={24} />
              <div className={styles.home_tree_card_title_item_txt_box}>
                <div className={styles.home_tree_card_title_item_txt_bold}>
                  {t('place3')}
                </div>
                <div className={styles.home_tree_card_title_item_txt_light}>
                  {t('treeCountry')}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.home_tree_card_info_box}>

            <div className={styles.home_tree_card_info_item}>
              <div className={styles.home_tree_card_info_item_title}>
                <Image className={styles.home_tree_card_info_item_title_img} src='/icons/tree/batch.svg' alt='batch' width={12} height={12} />
                {t('treeBatchID')}
              </div>
              <div className={styles.home_tree_card_info_item_val}>
                xxxxx
              </div>
            </div>

            <div className={styles.home_tree_card_info_item}>
              <div className={styles.home_tree_card_info_item_title}>
                <Image className={styles.home_tree_card_info_item_title_img} src='/icons/tree/location.svg' alt='location' width={12} height={12} />
                {t('treeOrigin')}
              </div>
              <div className={styles.home_tree_card_info_item_val}>
                {t('treeCountry')}
              </div>
            </div>

            <div className={styles.home_tree_card_info_item}>
              <div className={styles.home_tree_card_info_item_title}>
                <Image className={styles.home_tree_card_info_item_title_img} src='/icons/tree/age.svg' alt='age' width={12} height={12} />
                {t('treeAvgAge')}
              </div>
              <div className={styles.home_tree_card_info_item_val}>
                10
              </div>
            </div>

            <div className={styles.home_tree_card_info_item}>
              <div className={styles.home_tree_card_info_item_title}>
                <Image className={styles.home_tree_card_info_item_title_img} src='/icons/tree/index.svg' alt='index' width={12} height={12} />
                {t('treeIdx')}
              </div>
              <div className={styles.home_tree_card_info_item_val}>
                90%
              </div>
            </div>

            <div className={styles.home_tree_card_info_item}>
              <div className={styles.home_tree_card_info_item_title}>
                <Image className={styles.home_tree_card_info_item_title_img} src='/icons/tree/variety.svg' alt='variety' width={12} height={12} />
                {t('treeVariety')}
              </div>
              <div className={styles.home_tree_card_info_item_val}>
                {t('treeMainCultivar')}
              </div>
            </div>

            <div className={styles.home_tree_card_info_item}>
              <div className={styles.home_tree_card_info_item_title}>
                <Image className={styles.home_tree_card_info_item_title_img} src='/icons/tree/harvest-date.svg' alt='harvest-date' width={12} height={12} />
                {t('treeHarvestDate')}
              </div>
              <div className={styles.home_tree_card_info_item_val}>
                11/11/2025
              </div>
            </div>


            <div className={styles.home_tree_card_info_item}>
              <div className={styles.home_tree_card_info_item_title}>
                <Image className={styles.home_tree_card_info_item_title_img} src='/icons/tree/methods.svg' alt='methods' width={12} height={12} />
                {t('treeMethod')}
              </div>
              <div className={styles.home_tree_card_info_item_val}>
                {t('treeMethodManual')}
              </div>
            </div>

            <div className={styles.home_tree_card_info_item}>
              <div className={styles.home_tree_card_info_item_title}>
                <Image className={styles.home_tree_card_info_item_title_img} src='/icons/tree/milling-date.svg' alt='milling-date' width={12} height={12} />
                {t('treeMillingDate')}
              </div>
              <div className={styles.home_tree_card_info_item_val}>
                11/15/2025
              </div>
            </div>

            <div className={styles.home_tree_card_info_item}>
              <div className={styles.home_tree_card_info_item_title}>
                <Image className={styles.home_tree_card_info_item_title_img} src='/icons/tree/milling-temperature.svg' alt='milling-temperature' width={12} height={12} />
                {t('treeMillingTemperature')}
              </div>
              <div className={styles.home_tree_card_info_item_val}>
                24°C
              </div>
            </div>

            <div className={styles.home_tree_card_info_item}>
              <div className={styles.home_tree_card_info_item_title}>
                <Image className={styles.home_tree_card_info_item_title_img} src='/icons/tree/acidity.svg' alt='acidity' width={12} height={12} />
                {t('treeAcidity')}
              </div>
              <div className={styles.home_tree_card_info_item_val}>
                10%
              </div>
            </div>

            <div className={styles.home_tree_card_info_item}>
              <div className={styles.home_tree_card_info_item_title}>
                <Image className={styles.home_tree_card_info_item_title_img} src='/icons/tree/current-location.svg' alt='current-location' width={12} height={12} />
                {t('treeCurrentLocationDate')}
              </div>
              <div className={styles.home_tree_card_info_item_val}>
                {t(selectedOrigin === 'yuxi' ? 'place1' : (selectedOrigin === 'Kunming' ? 'place3' : 'place2'))}
              </div>
            </div>


            <div className={styles.home_tree_card_info_item}>
              <div className={styles.home_tree_card_info_item_title}>
                <Image className={styles.home_tree_card_info_item_title_img} src='/icons/tree/transport.svg' alt='transport' width={12} height={12} />
                {t('treeTransportTemperature')}
              </div>
              <div className={styles.home_tree_card_info_item_val}>
                30°C
              </div>
            </div>

            <div className={styles.home_tree_card_info_item}>
              <div className={styles.home_tree_card_info_item_title}>
                <Image className={styles.home_tree_card_info_item_title_img} src='/icons/tree/storage-date.svg' alt='storage-date' width={12} height={12} />
                {t('treeStorageDate')}
              </div>
              <div className={styles.home_tree_card_info_item_val}>
                11/15/2025
              </div>
            </div>

            <div className={styles.home_tree_card_info_item}>
              <div className={styles.home_tree_card_info_item_title}>
                <Image className={styles.home_tree_card_info_item_title_img} src='/icons/tree/storage-temperature.svg' alt='storage-temperature' width={12} height={12} />
                {t('treeStorageTemperature')}
              </div>
              <div className={styles.home_tree_card_info_item_val}>
                30°C
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className={styles.home_enterprise}>

        <div className={styles.home_enterprise_title}>
          {t('enterpriseTitle')}
        </div>
        <div className={styles.home_enterprise_des}>
          {t('enterpriseDes')}
        </div>
        <Swiper />
      </div>

      <div className={styles.home_block}>
        <div className={styles.home_block_title}>
          {t('blockchainTitle')}
        </div>
        <div className={styles.home_block_description}>
          {t('blockchainDes')}
        </div>
        <div className={styles.home_block_sub_box}>
          <div className={styles.home_block_sub_item}>
            <Image className={styles.home_block_sub_img} src='/icons/net.svg' alt='blockchain-1' width={80} height={80} />
            <div className={styles.home_block_sub_text}>
              {t('blockchainSubtitle1')}
            </div>
          </div>

          <div className={styles.home_block_sub_item}>
            <Image className={styles.home_block_sub_img} src='/icons/blockchain.svg' alt='blockchain-1' width={80} height={80} />
            <div className={styles.home_block_sub_text}>
              {t('blockchainSubtitle2')}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.home_footer}>
        <div className={styles.home_footer_logo_box}>
          <Image className={styles.home_footer_logo} src='/icons/logo.png' alt='logo' width={42} height={49} />
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

      <Mask visible={visible} onMaskClick={() => setVisible(false)} color='#202020E5'>
        <div className={styles.overlayContent}>
          <Image className={styles.overlayContent_img} src='/images/tree-img.svg' alt='orchards' width={300} height={400} />
          <div className={styles.overlayContent_form}>
            <div className={styles.overlayContent_form_title}>
              {t('orchardsCardUnit1')}
            </div>
            <div className={styles.overlayContent_form_val}>
              100000
            </div>
          </div>

          <div className={styles.overlayContent_form}>
            <div className={styles.overlayContent_form_title}>
              {t('orchardsCardUnit2')}
            </div>
            <div className={styles.overlayContent_form_val}>
              12
            </div>
          </div>

          <div className={styles.overlayContent_form}>
            <div className={styles.overlayContent_form_title}>
              {t('orchardsCardUnit3')}
            </div>
            <div className={styles.overlayContent_form_val}>
              {t('treeMainCultivar')}
            </div>
          </div>
          <Image className={styles.overlayContent_close} src='/icons/close-img.svg' alt='close' width={40} height={40} onClick={() => setVisible(false)} />
        </div>
      </Mask>
    </div>
  )
}

export const getStaticProps = getLocaleProps(["common"]);
