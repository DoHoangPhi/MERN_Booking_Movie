import express from 'express'
import { createBooking, getOccupiedSeats } from '../controllers/BookingController.js';

const bookignRouter = express.Router();

bookignRouter.post('/create', createBooking);
bookignRouter.get('/seats/:showId', getOccupiedSeats);

export default bookignRouter;