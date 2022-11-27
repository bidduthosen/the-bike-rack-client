import React from 'react';

const MyProductModal = ({title, message, modalData, handleDeleteMyProduct, closeModal, deleteButtonName}) => {
    return (
        <div>
            <input type="checkbox" id="myProduct-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
                <img src={modalData?.image_url} className='h-56 w-full' alt="" />
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="py-4">{message}</p>
                <div className="modal-action">
                <label onClick={()=>handleDeleteMyProduct(modalData)} htmlFor="myProduct-modal" className="btn btn-error">{deleteButtonName}</label>
                <label onClick={closeModal} htmlFor="myProduct-modal" className="btn btn-outline">Cancel</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default MyProductModal;