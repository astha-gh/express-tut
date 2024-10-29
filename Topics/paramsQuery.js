const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
    res.status(200).send('<h1>Home Page</h1><a href = "/api/products">Products</a>');
})

app.get('/api/products', (req, res) => {
    //when you don't want to send all of the json, you map over it and select whatever you want to display
    const newProduct = products.map((product) => {
        const { id, name, price, image } = product;
        return { id, name, price, image };
    })
    res.json(newProduct);
})

//what if we want to search for product with id 1 /api/products/1
//use find method
app.get('/api/products/1', (req, res) => {
    const singleProduct = products.find((product) => product.id === 1);
    res.json(singleProduct);
})

app.get('/api/products/:productId', (req, res) => {
    const { productId } = req.params;
    const allProducts = products.find(
        (product) => product.id === Number(productId)
    )
    if (allProducts) {
        res.json(allProducts);
    }
    else {
        res.status(404).send("Product not found");
    }
})


app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query;
    let searchProduct = [...products]; // Changed to 'let' so it can be reassigned

    if (search) {
        searchProduct = searchProduct.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    if (limit) {
        searchProduct = searchProduct.slice(0, Number(limit));
    }
    if (searchProduct.length < 1) {
        return res.status(200).json({ success: true, data: [] });
    }

    return res.status(200).json(searchProduct);
});


app.listen(3000, () => {
    console.log("Listening at port 3000");
})