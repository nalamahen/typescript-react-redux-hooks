// Libs
import React, { FC, useState } from 'react';

// Components
import MenuItem from '../menu-item';

// Styles
import { DirectoryMenuContainer } from './styles';

interface ISections {
  title: string;
  imageUrl: string;
  id: number;
}

const Directory: FC = () => {
  const sectionValues = [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      id: 1,
      linkUrl: 'hats',
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      id: 2,
      linkUrl: '',
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      id: 3,
      linkUrl: '',
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      id: 4,
      linkUrl: '',
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      id: 5,
      linkUrl: '',
    },
  ];

  const [sections, setSections] = useState(sectionValues);
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, imageUrl, size, title }) => (
        <MenuItem
          key={id}
          title={title.toUpperCase()}
          imageUrl={imageUrl}
          size={size}
        />
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
