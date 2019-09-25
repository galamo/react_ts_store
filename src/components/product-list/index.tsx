import React from "react";
import Product from "../product";

export default class ProductList extends React.Component<any, any>{

    render() {
        const { products, addToCart } = this.props
        return (
            <div>
                {products.map((prod: any) => <Product addToCart={addToCart} key={prod.id} {...prod} />)}
            </div>
        )
    }
}

