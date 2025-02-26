import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

router.get('/search', async (req, res) => {
    try {
        const query = req.query.q;
        if (!query) return res.status(400).json({ messge: 'Query is required' });

        const books= await BookSchema.find({ title: { $regex: query, $options: 'i'} });
            res.json(books);

    }catch (err) {
        res.status(500).json({ message: 'Server error' })
    }
});

router.get('/brandnew', async (req, res) => {
    try{
        const books = await BookSchema.find( {category: 'brandnew'} );
        res.json(books);

    }catch(err){
        res.status(500).json({ message: 'Server Error' })

    }
});

router.get('/mustread', async (req, res) => {
    try{
      const books = await BookSchema.find({ category: 'mustread' });
        res.json(books)

    }catch(err){
    res.status(500).json({ message: 'Server error' })
    }
});


router.get('/googlebooks', async (req, res) => {
    try {
        const query = req.query.q;
        if (!query) return res.status(400).json({ message: 'Query is required' });

            const googlebooksAPI = `https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyDH6ZVxSe8UVqaqDxOOJ2T8rRi0Qdn3tE8`;
            const response = await axios.get(googlebooksAPI);

            const books = response.data.items.map((book) => ({
                title: book.volumeInfo.title,
                author: book.volumeInfo.author ? book.volumeInfo.author.join(',') : 'Unknow',
                description: book.volumeInfo.imageLinks?.thumbnail || ','
            } ));
            
            res.json(books);

    } catch(err){
        res.status(500).json({ message: 'Error fetching Google Books API' });
    }
});


export default router;