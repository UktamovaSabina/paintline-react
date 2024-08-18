import React from 'react';
import ProductsGroup from '../components/groups/ProductsGroup';
import { useTranslation } from 'react-i18next';

const GroupProducts = () => {
  const { t } = useTranslation();
  return (
    <>
      <ProductsGroup heading={t("group-products.title1")} />
    </>
  )
}

export default GroupProducts