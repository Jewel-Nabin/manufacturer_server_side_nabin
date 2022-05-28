import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingProduct, refetch, setDeletingProduct }) => {
    const { name, _id } = deletingProduct;
    const handleDelete = (id) => {
        console.log('Deleting ID', _id);
        fetch(`https://peaceful-dawn-98509.herokuapp.com/product/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.deletedCount) {
                    toast.success(`Product: ${name} is deleted.`)
                    setDeletingProduct(null)
                    refetch();
                }
            })
    }
    
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="text-red-500 font-bold text-lg">Are you sure you want to cancel ${name}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)} className='btn btn-xs'>Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">✕</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;