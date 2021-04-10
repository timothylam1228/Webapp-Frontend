import Item1 from '../../assets/items/images/item1.png'
import Item2 from '../../assets/items/images/item2.png'
import Item3 from '../../assets/items/images/item3.png'
import Item4 from '../../assets/items/images/item4.png'
import Item5 from '../../assets/items/images/item5.png'
import Item6 from '../../assets/items/images/item6.png'


const initState = {
    items: [
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
    
    return state;

}
export default cartReducer;