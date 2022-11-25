import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AuthProvider';

const BookingModal = ({products}) => {
    const {user} = useContext(AuthContext);
    const {_id,title, resale_price} = products;


    const handleBooking = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const date = form.date.value;
        const booking ={
            product_id: _id,
            title,
            resale_price,
            name,
            location,
            phone,
            email,
            date
        }
        console.log("booking",booking)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <div className="font-semibold text-2xl absolute left-2 top-2 p-3">{title}</div>
                <div className="font-semibold text-lg absolute left-2 top-10 p-3">Price: ${resale_price}</div>
                <form onSubmit={handleBooking} className='mt-16'>
                    <input name='name' type="text" defaultValue={user?.displayName} readOnly placeholder="Full Name" className="input input-bordered w-full my-2" />
                    <input name='location' type="text"  placeholder="location" className="input input-bordered w-full my-2" required/>
                    <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full my-2" />
                    <input name='email' type="email" defaultValue={user?.email} readOnly placeholder="Email" className="input input-bordered w-full my-2" />
                    <input name='date' type="date" placeholder="Type here" className="input input-bordered w-full" required />
                    <button type='submit' className="btn btn-active w-full mt-3">SUBMIT</button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default BookingModal;