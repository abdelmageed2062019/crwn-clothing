import './cart-icon.styles.scss'
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.action'
import { selectCartItemsCount } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect'


import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

const CartIcon = ({ toggleCartHidden, ItemCount }) => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon'  onClick={toggleCartHidden} />
        <span className='item-count'>{ItemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    ItemCount: selectCartItemsCount
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartIcon)