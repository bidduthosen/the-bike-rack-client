import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Context/AuthProvider';

const BookingModal = ({products, setProducts}) => {
    const {user} = useContext(AuthContext);
    const {_id, title, image_url, resale_price, using_year} = products;


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
            date,
            image_url,
            using_year

        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                toast.success(`${title} Booking confirmed!`)
                setProducts(null);
            }
            console.log(data)
        })
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
                    <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Full Name" className="input input-bordered w-full my-2" />
                    <input name='location' type="text"  placeholder="location" className="input input-bordered w-full my-2" required/>
                    <input name='phone' type="number" placeholder="Phone Number" className="input input-bordered w-full my-2" />
                    <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full my-2" />
                    <input name='date' type="date" placeholder="Type here" className="input input-bordered w-full" required />
                    <button type='submit' className="btn btn-active w-full mt-3">SUBMIT</button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default BookingModal;