import express from 'express';
import { main, Product } from './database.js';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/product', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json({ msg: "New product registered", product: newProduct });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error registering product", error: error.message });
    }
});

main().catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
