import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IGlobalState } from '../../interfaces';
import { selectCartItemsCount } from '../../redux/selectors/cart';

import { toggleCartHidden } from '../../redux/actions/cart';

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from './CardIcon.styles';

interface IProps {
  toggleCartHidden: () => void;
  itemCount: number;
}

const CardIcon: FC<IProps> = ({ toggleCartHidden, itemCount }): JSX.Element => {
  return (
    <CartContainer onClick={toggleCartHidden}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon);
