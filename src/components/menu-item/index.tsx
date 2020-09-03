import React, { FC } from 'react';

import {
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
  MenuItemContainer,
} from './styles';

interface IProps {
  title: string;
  imageUrl: string;
  size?: string;
}

const MenuItem: FC<IProps> = ({ title, imageUrl, size }) => {
  return (
    <MenuItemContainer size={size}>
      <BackgroundImageContainer imageUrl={imageUrl} />
      <ContentContainer className="content">
        <ContentTitle>{title}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
