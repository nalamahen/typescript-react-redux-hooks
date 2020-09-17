// Libs
import React, { FC } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ISectionValues } from '../../interfaces';
import { selectDirctorySections } from '../../redux/selectors/directory';

// Components
import MenuItem from '../menu-item';
import { IGlobalState } from '../../interfaces';

// Styles
import { DirectoryMenuContainer } from './Directory.styles';

interface IProps {
  sections?: ISectionValues[];
}

const Directory: FC<IProps> = ({ sections }): JSX.Element => {
  return (
    <DirectoryMenuContainer>
      {sections?.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector<IGlobalState, IProps>({
  sections: selectDirctorySections,
});

export default connect(mapStateToProps)(Directory);
