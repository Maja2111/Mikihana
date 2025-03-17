import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv'
import { Favourite, UnreadingBook, UserList, Wishlist } from '../Models/Book.js';
import User from '../Models/User.js';
import authMiddleware from '../Middleware/middleware.js';

dotenv.config();

const router = express.Router();

router.get("/profile", authMiddleware , async (req, res) => {
    res.status(200).json(await User.find())
})

//Google Books API URL
const googleBooksAPI = 'https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyDH6ZVxSe8UVqaqDxOOJ2T8rRi0Qdn3tE8';

//Eine generische Funktion zum Arufen von Büchern von Google Books API
const fetchGoogleBooks = async (query, startIndex = 0, maxResults = 40) => {
    try {
        const response = await axios.get(googleBooksAPI, {
            params: {
                q: query,
                startIndex: startIndex,
                maxResults: maxResults,
                key: process.env.GOOGLE_BOOKS_API_KEY,
            }
        });
        return response.data.items;

    } catch(err){
        throw new Error('Error retreiving Google Books');

    }
};

//Route : Bücher Suchen
router.get('/searchBooks/:query/:startIndex', async (req, res) => {
    const { query, startIndex } = req.params;

    try{
        const books = await fetchGoogleBooks(query, parseInt(startIndex));
        res.status(200).json(books);

    }catch(err){
        res.status(500).json({ message: 'Error retreiving Books', error: err.message });

    }
});

//Route: Buchdetails abrufen
router.get('/getBookDetails/:id', async(req,res) => {
    const { id } = req.params;

    try{
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
        res.status(200).json(response.data);

    }catch(err){
    res.status(500).json({ message: 'Error retreiving Books', error: err.message})
    }
});

//Route: Wishlist eines Benutzers
router.post('/wishlist', async(req, res) => {
    const { userId, bookId } = req.body;

    try{
        let wishlist = await Wishlist.findOne({ userId });

        if (!wishlist) {
            wishlist = new wishlist({ userId, books: [bookId] })
        } else {
            if (!wishlist.books.includes(bookId)) {
                wishlist.books.push(bookId);
            }
        }

        await wishlist.save();
        res.status(201).json(wishlist);

    }catch(error){
        res.status(500).json({  message: 'Error saving Wishlist', error});

    }
});

//Route: Favourite eines Benutzers
router.post('/favourite', async (req, res) => {
    const { userId, bookId } = req.body;

    try{
        let favourite = await Favourite.findOne({ userId });

        if (!favourite) {
            favourite = new Favourite({ userId, books: [bookId] });
        }else  {
            if (!favourite.books.includes(bookId)) {
                favourite.books.push(bookId);
            }
        }

        await favourite.save();
        res.status(201).json(favourite);

    }catch(error) {
        res.status(500).json({ message: 'Error saving Favourite', error });

    }
});


//Route: Unreading Books
router.post('/unreadBooks' ,async (req, res) => {
    const { userId, bookId } = req.body;

    try{
        let unreadBooks = await UnreadBook.findOne({ userId });

        if(!unreadBooks) {
            //Wenn noch keine UnreadingBooks vorhanden ist, erstellen eine neue Sammlung
            unreadBooks = new unreadBooks({ userId, books: [bookId] });
        } else {
            //Wenn das Buch nicht schon inde Liste ist, füge es hin zu
            if(!unreadBooks.books.includes(bookId)){
                unreadBooks.books.push(bookId);
            }
        }

        await unreadBooks.save();
        res.status(201).json(unreadBooks);

    }catch(error){
        res.status(500).json({ message:'Error saving UnreadingBooks', error})

    }
});

//Route: UerList eines Benutzers
router.post('/userList', async (req,res) => {
    const { userId, bookId } = req.body;
    
    try{
        let userList = await UserList.findOne({ userId });

        if(!userList) {
            //Wenn keine UserList vorhanden ist, erstelle eine neue Liste
            userList = new UserList({ userId, books:  [bookId] });
        } else {
            //Wenn das Buch noch nicht in der Liste ist, füge es hinzu
            if(!userList.books.includes(bookId)){
                userList.books.push(bookId);
            }
        }

        await userList.save();
        res.status(201).json(userList)

    }catch(err){
        res.status(500).json({ message: 'Error saving UserList', error: err.message })

    }
});


//Route: Büche zu einer Liste des Benutzers hinzufügen
router.post('/addBookToList', async (req, res) => {
    const { userId, listType, bookId } = req.body //listType könnte 'wishlist, 'favourite', etc. sein

    try{
        let list;

        if(listType === 'wishlist'){
            list = await Wishlist.findOne({ userId });
        }else if (listType === 'favourite'){
            list = await Favourite.findOne({ userId });
        }else if(listType === 'unreadingBook'){
            list = await UnreadingBook.findOne({ userId });
        } else {
            //Wenn der listType ungültig ist, gebe eine Fehlermeldung zurück
            return res.status(400).json({ message: 'Ungültiger listType' });
        }

        if(!list) {
            //Wenn die Liste nicht existiert, erstelle eine neue Liste basierend auf dem List-type
            if(listType === 'Wishlist') {
                list = new Wishlist({ userId, books: [bookId] });
            }else if(listType === 'favourite'){
                list = new Favourite({ userId, books: [bookId] })
            }else if (listType === 'unreadingBook') {
                list = new UnreadingBook({ userId, books: [bookId] })
            }
        } else {
            //Wenn das Buch nicht schon in der Liste ist, füge es hinzu
            if(!list.books.includes(bookId)) {
                list.books.push(bookId);
            }
        }

        await list.save();
        res.status(201).json(list);

    }catch(err){

        res.status(500).json({ message: 'Error adding book to list', error: err.message })
    }
})

export default router;
