import React, { FC } from 'react';

import { IItem } from '../../interfaces';
import CollectionItem from '../collection-item';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './CollectionPreview.styles';

interface IProps {
  title: string;
  items: Array<any>;
}

const PreviewCollection: FC<IProps> = ({ title, items }): JSX.Element => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map((item: IItem) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default PreviewCollection;
