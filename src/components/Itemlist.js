import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Item from './Item';


export default function Itemlist() {
    const itemlistobj = useSelector(store => store.itemlistReducer)
    const [itemlis , setitemlis] = useState(itemlistobj.itemlist) //creating list using the oject itemslis
    const[searchkey , setsearchkey] =useState('')

    function filteritemlist(){
        const duplicatelist = itemlistobj.itemlist
        const filteredlist = duplicatelist.filter(item=>item.itemName.toLowerCase().includes(searchkey.toLowerCase()))
        setitemlis(filteredlist)
    }

    const itemsdata = itemlis.map((item) => {
        return <div className='col-md-4'>
            <Item item={item} />
        </div>

    })
    return (
        <div className='container p-3'>
            {/* <h3 style={{fontSize:'20px'}}>Total items = {itemlistobj.itemlist.length}</h3> */}
            <input type="text" className='form-control' placeholder='Search Items'
            value={searchkey} onChange={(e)=>{setsearchkey(e.target.value)}} 
            onKeyUp={filteritemlist}/>
            <br/>
            <div className="row">
                {itemsdata}
            </div>
        </div>
    )
}
