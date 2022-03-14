import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

export default function Item({item}) {
  const dispatch = useDispatch()
  return (
    <div className="shadow p-3 mb-5 bg-white rounded">
      <h3 style={{fontSize:'20px'}}>{item.itemName}</h3>
      <img src={item.itemImage} className='img-fluid'/>
      <h3 style={{fontSize:'15px'}}>{item.itemPrice}/-</h3>
      <button className='btn btn-primary' onClick={()=>dispatch({type:'ADD_ITEM_TO_CART', payload : item})}>Add to cart</button>
    </div>
  )
}

