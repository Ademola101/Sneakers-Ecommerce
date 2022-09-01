import React from 'react';

export default function SelectedProductExerpt({ product }) {
  return (
    <div>
      <div>
        {product.name}
      </div>

      <div>
      &#36;{125.00} &times; {product.amount} &#36;{125 * product.amount}
      </div>
    </div>
  );
}
