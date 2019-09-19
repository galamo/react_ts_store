
import React from 'react';
import './App.css';
// import Header from "./components/header"
import { productsWithImages, images } from "./images/imagesLoader";
import ProductList from './components/product-list';
import Product from './components/product';
import Header from "./components/header";
import AddProduct from "./components/add-products";


class StoreInput extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return <input value={this.props.input} />;
    }
}
// string, number, boolean, any

function StoreInput1(props: { input: number }) {
    return <input value={props.input} />
}

const productOfTheWeek = productsWithImages[Math.round(Math.random() * 4)]


// code ! out of context 


class App extends React.Component<any, any>{

    constructor(props: any) {
        super(props)

        this.state = {
            // filters: { searchValue: "", onSale: false },
            searchValue: "",
            onSale: false,
            connectedUser: "Gal",
            filteredProductList: productsWithImages,
            fullProductList: productsWithImages,
            pow: Math.round(Math.random() * 4),
        }
    }

    searchOperation = (searchText: string, onSale: Boolean): void => {
        // if (!searchText || !onSale) return;

        const { fullProductList } = this.state
        const filteredData = fullProductList.filter((product: any) => {
            const isOnSale = onSale ? product.onSale : true
            return product.Name.toLowerCase().includes(searchText) && isOnSale
        })
        this.setState({ filteredProductList: filteredData, searchValue: searchText, onSale })

    }

    render() {
        const { connectedUser, productList, pow, filteredProductList, fullProductList } = this.state;





        return (
            <div className="App" >
                <Header title={"hello " + connectedUser} />
                <Header title="Add Product" />
                <Header title="Search" />
                <div>
                    <input value={this.state.searchValue} onChange={(e) => {
                        const searchValue = e.target.value;
                        const { onSale } = this.state;
                        this.searchOperation(searchValue, onSale);

                    }} />
                </div>
                <div>
                    OnSale ?
                    <input type="checkbox" onChange={(e) => {
                        const onSale = e.target.checked;
                        const { searchValue } = this.state;
                        this.searchOperation(searchValue, onSale);
                    }} />
                </div>
                <Header title="Products" />
                {filteredProductList.length ? <ProductList products={filteredProductList} /> : <h1> No Prodcuts Found</h1>}
                <Header title="Product of the week!" />
                <Product {...fullProductList[pow]} />
                {images.map((p: string) => <img key={p} src={p} />)}
            </div >
        );
    }

}
//     const props = { products: [...products] }
// <ProductList {...props} />

export default App;
