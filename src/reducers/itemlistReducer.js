const initialData = {
    itemlist: [{
        itemName: 'Silver Jewellery Set',
        itemImage: 'https://th.bing.com/th/id/OIP.qgy45BDFban-HDfI3jEjcAHaHa?pid=ImgDet&rs=1',
        itemPrice: '5600'
    },
    {
        itemName: 'Pearl Neckless Set',
        itemImage: 'https://i.pinimg.com/originals/a7/0e/18/a70e18e6c2ccf56dc8df83642644a3ca.jpg',
        itemPrice: ' 4200'
    },
    {
        itemName: 'Blue Sapphire',
        itemImage: 'https://ae01.alicdn.com/kf/HTB1uI7rmdqUQKJjSZFIq6AOkFXaR/Luxury-Brand-Jewelry-Women-Blue-Silver-Pendant-Pure-925-Sterling-Silver-Necklace-Fashion-Jewelry-Silver-Pendant.jpg',
        itemPrice: '4000'


    },
    {
        itemName:'Diamond Dangle Earrings',
        itemImage:'https://th.bing.com/th/id/R.66533473f3290fd85d11ef7e01e2f411?rik=TcUZJ1xlCaOs5g&riu=http%3a%2f%2fd1nr5wevwcuzuv.cloudfront.net%2fproduct_photos%2f25448445%2f001b_original.png&ehk=zWBDX5BCA7JDG%2ba9jVD7p61oiKbJ8pJ0XzTSIu4naBE%3d&risl=&pid=ImgRaw&r=0',
        itemPrice:'10500'

    },
{
    itemName:'Aquamarine Pendant',
    itemImage:'https://i.etsystatic.com/16854590/r/il/95ce34/1550100083/il_fullxfull.1550100083_t5nx.jpg',
    itemPrice:'3000'
},
{
    itemName:'Rose Gold Chain Bracelet',
    itemImage:'https://ae01.alicdn.com/kf/HTB1tVVjXcfrK1Rjy0Fmq6xhEXXan/Charm-Rose-Gold-Flat-Byzantine-Chain-Bracelet-Elegance-Womens-Men-Stainless-Steel-Cuff-Jewelry-6mm-8mm.jpg',
    itemPrice:'6350'

}]
}
function itemlistReducer(state=initialData, action){
    switch(action.type){
        case 'ADD_ITEM': return{
            ...state,
            itemlist : [...state.itemlist , action.payload]
        }
    }
    return state
    
}
export default itemlistReducer