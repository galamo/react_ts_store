import React from "react";
import Product from "../product";

export default class ProductList extends React.Component<any, any>{

    render() {
        const { products } = this.props
        return (
            <div>   
                {products.map((prod: any) => <Product key={prod.id} {...prod} />)}
            </div>
        )
    }
}

