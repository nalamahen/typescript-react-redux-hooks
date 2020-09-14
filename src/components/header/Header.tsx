import React, { FC } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase-utils';
import { ICurrentUser, IGlobalState } from '../../interfaces';
import { selectCartHidden, selectCartItems } from '../../redux/selectors/cart';
import { selectCurrentUser } from '../../redux/selectors/user';

// Components
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../card-icon/CardIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './Header.styles';

interface IProps {
  currentUser: ICurrentUser;
  hidden: boolean;
}

const Header: FC<IProps> = ({ currentUser, hidden }: IProps): JSX.Element => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector<IGlobalState, IProps>({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
