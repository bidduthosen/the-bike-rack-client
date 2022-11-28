import React from 'react';

const MyOrderCard = ({MyOrder, index, setOrderDelete}) => {
    const {name, email, title, location, resale_price, using_year, date, phone} = MyOrder;
    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
            <div className="flex items-center space-x-3">
                <div>
                <div className="font-medium">{name}</div>
                <div className="text-sm mt-1 pb-0.5">{email}</div>
                <div className="text-sm">Phone: {phone}</div>
                </div>
            </div>
            </td>
            <td>
                <div className="font-medium">{title}</div>
            <span className="badge badge-ghost badge-sm my-1"> Price: ${resale_price}</span>
            <br />
            <div className=" badge-sm pt-0.5"> Using Years: {using_year} Years</div>
            </td>
            <td>
            <div className="text-sm">Order Date: {date}</div>
            <div className="text-sm pt-1">Meeting Location: {location}</div>
            </td>
            <th>
            <label onClick={()=>setOrderDelete(MyOrder)} htmlFor="confirmation-modal" className="btn btn-outline btn-error btn-sm">Order Cancel</label>
                <td><label className="btn btn-outline btn-primary btn-sm px-4">Payment</label></td>
            </th>
        </tr>
    );
};

export default MyOrderCard;