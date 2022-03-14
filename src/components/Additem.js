import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function Additem() {
  const[itemname , setitemname]=useState('')
  const[itemprice , setitemprice]=useState('')
  const[itemimage , setitemimage]=useState('')
  const dispatch = useDispatch()
  function additem(){
    var item ={ 
      itemName : itemname, //for keys we are using the names as mentioned in item reducer and for values as mentioned in hook variable
      itemPrice : itemprice,
      itemImage : itemimage
    }
    dispatch({type:'ADD_ITEM', payload: item})
  }
  return (
    <div className='row mt-5 justify-content-center'>
      <div className='col-md-8'>
        <input htmltype="text"  className='form-control' placeholder='Item Name'
        value={itemname} onChange={(e)=>{setitemname(e.target.value)}} />
        <input htmltype="text"  className='form-control' placeholder='Item Price' 
        value={itemprice} onChange={(e)=>{setitemprice(e.target.value)}}/>
        <input htmltype="text"  className='form-control' placeholder='Item Image'
        value={itemimage} onChange={(e)=>{setitemimage(e.target.value)}} />
        <button onClick={additem} className='btn btn-success'>ADD Item</button>
      </div>
    </div>
  )
}
