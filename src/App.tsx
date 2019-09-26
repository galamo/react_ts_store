
import React from 'react';
import './App.css';
// import Header from "./components/header"
import { productsWithImages, images } from "./images/imagesLoader";
import ProductList from './components/product-list';
import Product from './components/product';
import Header from "./components/header";
import AddProduct from "./components/add-products";
import Search from './components/search';
import CreateProduct from './components/create-product';
import AddBook from './components/add-book-ooc';
import CountriesPage from './components/countries';
import ButtonAppBar from "./components/navBar/index"

import { BrowserRouter, Switch, Route } from "react-router-dom";
// BrowserRouter as Router, Route,


const productOfTheWeek = productsWithImages[Math.round(Math.random() * 4)]


function TestComponent() {
    return <div>
        This Component is Great!!!
    </div>
}


class App extends React.Component<any, any>{

    constructor(props: any) {
        super(props)

        this.state = {
            cat: "all",
            // filters: { searchValue: "", onSale: false },
            searchValue: "",
            onSale: false,
            connectedUser: "Gal",
            filteredProductList: productsWithImages,
            fullProductList: productsWithImages,
            pow: Math.round(Math.random() * 4),
            cart: []
        }
    }

    searchOperation = (searchText: string, onSale: Boolean, cat?: string): void => {
        // if (!searchText || !onSale) return;

        const { fullProductList } = this.state
        const filteredData = fullProductList.filter((product: any) => {
            const isOnSale = onSale ? product.onSale : true;
            const isCat = cat !== "all" ? product.Category === cat : true
            return product.Name.toLowerCase().includes(searchText) && isOnSale && isCat
        })
        this.setState({ cat, filteredProductList: filteredData, searchValue: searchText, onSale })

    }

    addBookFather = (book: any) => {
        this.setState({ books: [...this.state.books, book] })
    }

    addToCart = (product: any) => {
        this.setState({ cart: [...this.state.cart, product] })
    }

    render() {
        const { connectedUser, cart, pow, filteredProductList, fullProductList, onSale, searchValue } = this.state;
        const searchProps = { cat: this.state.cat, categories: getCategories(fullProductList), searchOperation: this.searchOperation, onSale, searchValue }
        return (
            <div className="App" >
                <BrowserRouter>
                    <ButtonAppBar />

                    <Switch>
                        <Route path="/countries" component={CountriesPage} />
                        <Route path="/products" component={TestComponent} />
                    </Switch>

                    {/**
                <Header title="Add Product" />
                <CreateProduct addProductToList={(product: any) => {
                    const newData = [...this.state.fullProductList, { ...product, onSale: true }];
                    this.setState({ filteredProductList: newData, fullProductList: newData })
                }} />
                <Header title="Search" />
                <Search {...searchProps} />

                <Header title="Products" />
                {filteredProductList.length ? <ProductList addToCart={this.addToCart} products={filteredProductList} /> : <h1> No Prodcuts Found</h1>}
                <Header title="Cart" />
                {filteredProductList.length ? <ProductList products={cart} /> : <h1> No Cart Items</h1>}
                <Header title="Product of the week!" />
                <Product {...fullProductList[pow]} />
                {images.map((p: string) => <img key={p} src={p} />)}

                
                */}

                </BrowserRouter>
            </div >
        );
    }

}
//     const props = { products: [...products] }
// <ProductList {...props} />


// {filteredProductList.length ? <ProductList addToCart={this.addToCart} products={filteredProductList} /> : <h1> No Prodcuts Found</h1>}
// <CountriesPage />


function getCategories(products: Array<any>) {
    return Object.keys(products.reduce((allCats, p: any) => {
        return { ...allCats, [p.Category]: true }
    }, { "all": true }))

}

export default App;
