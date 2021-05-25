/* eslint-disable prettier/prettier */

import SingleProduct from '../../components/SingleProduct';
import Header from '../../components/Header';

export default function SingeProductPage( { query } ) {
    
    return (
        <div>
            <Header />
            <SingleProduct id={query.id} />
        </div>
    );
}