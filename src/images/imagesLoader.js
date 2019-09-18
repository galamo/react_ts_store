import image8 from "./8.jpg";
import image4 from "./4.jpg";
import image5 from "./5.jpg";
import image6 from "./6.jpg";
import image7 from "./7.jpg";
// export const products = [image1, image2, image3]



function importAll(r) {
    return r.keys().map(r);
}

export const images = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));



// export const products = [
//     { image: image4, "Name": "Cheese", "Price": 2.50, "Location": "Refrigerated foods" },
//     { image: image7, "Name": "Crisps", "Price": 3, "Location": "the Snack isle" },
//     { image: image5, "Name": "Pizza", "Price": 4, "Location": "Refrigerated foods" },
//     { image: image8, "Name": "Chocolate", "Price": 1.50, "Location": "the Snack isle" },
//     { image: image6, "Name": "Ground almonds", "Price": 3, "Location": "Home baking" }
// ]


const products = [
    { id: 1, "Name": "Cheese", "Price": 2.50, "Location": "Refrigerated foods" },
    { id: 2, "Name": "Crisps", "Price": 3, "Location": "the Snack isle" },
    { id: 3, "Name": "Pizza", "Price": 4, "Location": "Refrigerated foods" },
    { id: 4, "Name": "Chocolate", "Price": 1.50, "Location": "the Snack isle" },
    { id: 5, "Name": "Ground almonds", "Price": 3, "Location": "Home baking" },
    { id: 6, "Name": "Corn", "Price": 32, "Location": "afadf" }
]

export const productsWithImages = products.map((p, index) => { return { ...p, image: images[index] } })
