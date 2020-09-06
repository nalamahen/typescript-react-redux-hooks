import React, { FC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import {
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
  MenuItemContainer,
} from './MenuItem.styles';

interface IProps extends RouteComponentProps<any> {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl?: string;
}

const MenuItem: FC<IProps> = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}): JSX.Element => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer imageUrl={imageUrl} />
      <ContentContainer className="content">
        <ContentTitle>{title}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
