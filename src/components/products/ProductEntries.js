import React from 'react'
import { useSelector } from 'react-redux';
import { ProductEntry } from './ProductEntry';

export const ProductEntries = () => {

    const { products } = useSelector( state => state.products );
    //console.log(products);

    return (
        <div className="app__entries">
            
            {
                products.map( product => (
                    <ProductEntry 
                        key={ product.id }
                        { ...product }
                    />
                ))
            }

        </div>
    )
}
