import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user: { type: String, require: true, ref: 'User' },
    show: { type: String, require: true, ref: 'Show' },
    amount: { type: Number, require: true },
    bookedSeats: { type: Array, require: true },
    isPaid: { type: Boolean, default: false },
    paymentLink: { type: String },
}, { timestamps: true })

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;