import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import {
  Book,
  Favourite,
  UnreadingBook,
  UserList,
  Wishlist,
  Progress,
  ReadingGoal,
} from '../Models/Book.js';
import { User } from '../Models/User.js';
import authMiddleware from '../Middleware/middleware.js';

dotenv.config();

const router = express.Router();

router.get('/profile', authMiddleware, async (req, res) => {
  res.status(200).json(await User.find(req.user));
});

//Google Books API URL
const googleBooksAPI = process.env.GOOGLE_BOOKS_API_KEY; //SOM

//Eine generische Funktion zum Arufen von Büchern von Google Books API
const fetchGoogleBooks = async (query, startIndex = 0, maxResults = 40) => {
  try {
    const response = await axios.get(googleBooksAPI, {
      params: {
        q: query,
        startIndex: startIndex,
        maxResults: maxResults,
        key: process.env.GOOGLE_BOOKS_API_KEY,
      },
    });
    return response.data.items;
  } catch (err) {
    throw new Error('Error retreiving Google Books');
  }
};

//SOM
async function getBookDetail(id) {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );
    return response.data;
  } catch (err) {
    return { message: 'Error retreiving Books', error: err };
  }
}

//addBooksToList
async function checkBookExist(bookId) {
  let book = await Book.findOne({ bookId: bookId });
  if (!book) {
    try {
      const data = await getBookDetail(bookId);
      console.log(`bookData:${JSON.stringify(data, null, 2)}`);
      book = new Book({
        bookId: data.id,
        title: data.volumeInfo.title,
        isbn: data.volumeInfo.industryIdentifiers[0].identifier,
        isbn: data.volumeInfo.industryIdentifiers
          ? data.volumeInfo.industryIdentifiers[0].identifier
          : null,
        authors: data.volumeInfo.authors
          ? data.volumeInfo.authors.join(', ')
          : null,
        description: data.volumeInfo.description,
        imageUrl: data.volumeInfo.imageLinks
          ? data.volumeInfo.imageLinks.thumbnail
          : null,
        thumnail: data.volumeInfo.imageLinks
          ? data.volumeInfo.imageLinks.smallThumbnail
          : null,
      });
      await book.save();
    } catch (error) {
      console.error(`err:${error}`);
    }
  }
  return book;
}

//getTarget
async function createReadingGoal(
  userId,
  bookId,
  targetType,
  quantity,
  recurring,
  recurringInterval,
  endDate,
  note
) {
  try {
    let book = await checkBookExist(bookId);

    const readingGoal = new ReadingGoal({
      userId: userId,
      book: book._id,
      targetType: targetType,
      quantity: quantity,
      recurring: recurring,
      recurringInterval: recurringInterval,
      endDate: endDate,
      note: note,
    });
    await readingGoal.save();
    console.log('Reading goal created:', readingGoal);
    return readingGoal;
  } catch (error) {
    console.error('Error creating reading goal:', error);
    throw error;
  }
}

//Route : Bücher Suchen, Search funktion, brandnew und mustread
router.get('/searchBooks/:query/:startIndex', async (req, res) => {
  const { query, startIndex } = req.params;

  try {
    const books = await fetchGoogleBooks(query, parseInt(startIndex));
    res.status(200).json(books);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error retreiving Books', error: err.message });
  }
});

//Route: Buchdetails abrufen brandnew und mustread -> descruption
router.get('/getBookDetails/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );
    res.status(200).json(response.data);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error retreiving Books', error: err.message });
  }
});

//Route: Wishlist eines Benutzers
router.post('/wishlist', async (req, res) => {
  const { userId, bookId } = req.body;

  try {
    let wishlist = await Wishlist.findOne({ userId }).populate('books'); //SOM

    //SOM
    let book;
    if (bookId) {
      book = await checkBookExist(bookId);
    }

    if (!wishlist) {
      if (book) {
        wishlist = new Wishlist({ userId, books: [book] });
        await wishlist.save();
      } else {
        wishlist = { userId: userId, books: [] }; //return empty list
      }
    } else {
      try {
        if (!wishlist.books.some((item) => item._id.equals(book._id))) {
          wishlist.books.push(book);
          await wishlist.save();
        }
      } catch (err) {}
    }

    res.status(201).json(wishlist);
  } catch (error) {
    let ret = { userId: userId, books: [] };
    res.status(200).json(ret);
    // res.status(500).json({ message: 'Error saving Wishlist', error });
  }
});

//Route: Favourite eines Benutzers
router.post('/favourite', async (req, res) => {
  const { userId, bookId } = req.body;

  try {
    let favourite = await Favourite.findOne({ userId }).populate('books'); //SOM

    //SOM
    let book;
    if (bookId) {
      book = await checkBookExist(bookId);
    }

    if (!favourite) {
      if (book) {
        favourite = new Favourite({ userId, books: [book] });
        await favourite.save();
      } else {
        favourite = { userId: userId, books: [] }; //return empty list
      }
    } else {
      try {
        if (!favourite.books.some((item) => item._id.equals(book._id))) {
          favourite.books.push(book);
          await favourite.save();
        }
      } catch (err) {}
    }

    res.status(201).json(favourite);
  } catch (error) {
    let ret = { userId: userId, books: [] };
    res.status(200).json(ret);
    // res.status(500).json({ message: 'Error saving Favourite', error });
  }
});

//Route: Unreading Books
router.post('/unreadBooks', async (req, res) => {
  const { userId, bookId } = req.body;

  try {
    let unreadBooks = await UnreadingBook.findOne({ userId }).populate('books'); //SOM

    //SOM
    let book;
    if (bookId) {
      book = await checkBookExist(bookId);
    }

    if (!unreadBooks) {
      if (book) {
        unreadBooks = new UnreadingBook({ userId, books: [book] });
        await unreadBooks.save();
      } else {
        unreadBooks = { userId: userId, books: [] }; //return empty list
      }
    } else {
      try {
        if (!unreadBooks.books.some((item) => item._id.equals(book._id))) {
          unreadBooks.books.push(book);
          await unreadBooks.save();
        }
      } catch (err) {}
    }

    res.status(201).json(unreadBooks);
  } catch (error) {
    let ret = { userId: userId, books: [] };
    res.status(200).json(ret);
    // res.status(500).json({ message: 'Error saving UnreadingBooks', error })
  }
});

//Route: UserList eines Benutzers
router.post('/userList', async (req, res) => {
  const { userId, bookId } = req.body;

  try {
    let userList = await UserList.findOne({ userId }).populate('books'); //SOM

    //SOM
    let book;
    if (bookId) {
      book = await checkBookExist(bookId);
    }

    if (!userList) {
      if (book) {
        userList = new UserList({ userId, books: [book] });
        await userList.save();
      } else {
        userList = { userId: userId, books: [] }; //return empty list
      }
    } else {
      try {
        if (!userList.books.some((item) => item._id.equals(book._id))) {
          userList.books.push(book);
          await userList.save();
        }
      } catch (err) {}
    }

    res.status(201).json(userList);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error saving UserList', error: err.message });
  }
});

//Route: Büche zu einer Liste des Benutzers hinzufügen
router.post('/addBookToList', async (req, res) => {
  const { userId, listType, bookId } = req.body; //listType könnte 'wishlist, 'favourite', etc. sein

  try {
    let list;

    if (listType === 'wishlist') {
      list = await Wishlist.findOne({ userId }).populate('books'); //SOM
    } else if (listType === 'favourite') {
      list = await Favourite.findOne({ userId }).populate('books'); //SOM
    } else if (listType === 'unreadingBook') {
      list = await UnreadingBook.findOne({ userId }).populate('books'); //SOM
    } else {
      //Wenn der listType ungültig ist, gebe eine Fehlermeldung zurück
      return res.status(400).json({ message: 'Ungültiger listType' });
    }

    //SOM
    let book;
    if (bookId) {
      book = await checkBookExist(bookId);
    }

    if (!list) {
      if (book) {
        if (listType === 'Wishlist') {
          list = new Wishlist({ userId, books: [book] });
        } else if (listType === 'favourite') {
          list = new Favourite({ userId, books: [book] });
        } else if (listType === 'unreadingBook') {
          list = new UnreadingBook({ userId, books: [book] });
        }
        await list.save();
      } else {
        list = { userId: userId, books: [] }; //return empty list
      }
    } else {
      try {
        if (!list.books.some((item) => item._id.equals(book._id))) {
          list.books.push(book);
          await list.save();
        }
      } catch (err) {}
    }

    res.status(201).json(list);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error adding book to list', error: err.message });
  }
});

//loading bar loading circel
router.post('/progress', async (req, res) => {
  const { userId, bookId, progress, /* progressType, */ note } = req.body;

  try {
    const book = await checkBookExist(bookId);
    let progressEntry;
    // progressEntry = await Progress.findOne({ userId, book: book._id }).populate('book');

    // if (!progressEntry) {
    progressEntry = new Progress({
      userId,
      book: book._id,
      progress,
      // progressType,
      note,
    });
    await progressEntry.save();
    // } else {
    // 	progressEntry.progress = progress;
    // 	// progressEntry.progressType = progressType;
    // 	progressEntry.note = note;
    // 	progressEntry.date = Date.now();
    // 	await progressEntry.save();
    // }

    await progressEntry.populate('book');
    res.status(201).json(progressEntry);
  } catch (error) {
    res.status(500).json({
      message: 'Error saving/updating Progress',
      error: error.message,
    });
  }
});

router.post('/readingGoal', async (req, res) => {
  const {
    userId,
    bookId,
    targetType,
    quantity,
    recurring,
    recurringInterval,
    endDate,
    note,
  } = req.body;

  try {
    const readingGoal = await createReadingGoal(
      userId,
      bookId,
      targetType,
      quantity,
      recurring,
      recurringInterval,
      endDate,
      note
    );
    await readingGoal.populate('book');
    await readingGoal.populate('userId');
    res.status(201).json(readingGoal);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error saving ReadingGoal', error: err.message });
  }
});

export default router;
