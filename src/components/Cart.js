import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
export default function Cart() {
  const cartobj = useSelector(store => store.cartReducer)
  const dispatch = useDispatch()
  const tbody = cartobj.cartitems.map((item) => {
    return (
      <tr>
        <td>{item.itemName}</td>
        <td>{item.itemPrice}</td>
        <button className ='btn btn-danger'
        onClick={()=>{dispatch({type:'DELETE_ITEM_FROM_CART', payload: item})}}>Delete</button>
      </tr>
    )
  })
  return (
    <div className='row justify-content-center'>
      {/* Cart Component : cartlength = {cartobj.cartitems.length} */}
      <table className='table table-bordered col-md-8 mt-4' style={{backgroundColor : 'black', color:'whitesmoke'}}>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tbody}

        </tbody>

      </table>
    </div>
  )
}
