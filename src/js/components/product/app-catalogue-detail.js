import React from 'react';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import AppActions from '../../actions/app-actions';
import CartButton from '../cart/app-cart-button';
import {Link} from 'react-router';

function getCatalogueItem( props ){
  let item = AppStore.getCatalogue().find( ({ id }) => id === props.params.item )
  return {item}
}

const CatalogueDetail = (props) => {
  return (
    <div>
      <h4>{props.item.title}</h4>
      <img src="http://placehold.it/250x250"/>
      <p>{props.item.description}</p>
      <p>${props.item.cost} <span
        className="text-success">
          {props.item.qty && `(${props.item.qty} in cart)`}
        </span>
      </p>

      <div className="btn-group">
        <Link to="/" className="btn btn-default btn-sm">Continue Shopping</Link>
      <CartButton
      handler={
        AppActions.addItem.bind(null, props.item)
      }
      txt="Add to cart"
      />
      </div>
    </div>
  )
}

export default StoreWatchMixin( CatalogueDetail, getCatalogueItem )
