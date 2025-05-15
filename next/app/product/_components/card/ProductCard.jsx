import './ProductCard.scss';
import HeartIcon from './HeartIcon';
import CartIcon from './CartIcon';

export default function ProductCard({ image, name, price }) {
  return (
    <div className="product-card">
      <img className="product-card-img" src={image} alt={name} />
      <div className="product-card-content">
        <div className="product-card-name">{name}</div>
        <div className="product-card-price">{price}</div>
        <div className="product-card-icon">
          <HeartIcon />
          <CartIcon />
        </div>
      </div>
    </div>
  );
}
