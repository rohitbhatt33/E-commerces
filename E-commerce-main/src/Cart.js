import React from 'react'
import './sty.css'
import {useCart} from 'react-use-cart'
//import {UseNavigate} from "react-router-dom"
const Cart =()=> {
  
  
  const {
      isEmpty,
      items,
      totalUniqueItems,
      totalItems,
      cartTotal,
      updateItemQuantity,
      removeItem,
      emptyCart,} = useCart();
      if(isEmpty) return <h1 className='text-center'>your cart is Empty</h1>

return (
 
   <section className='py-3 container'>  
      <div className='row-justify-content-center'>
        <div className='col-10'>
           <h5>Cart:({totalUniqueItems}), total Items:({totalItems}) </h5>
           <table className='table table-light table-hover m-0'>
               <tbody>
               {items.map((item,index) =>{
                   return(
                   <tr key ={index}>
                      <td>
                          <img src={item.img} alt="" style={{height:'3rem'}}/> 
                      </td> 
                      <td> {item.title}</td>
                      <td> ₹{item.price}</td>
                      <td> quantity({item.quantity})</td>
                      <td >
                          <button className='btn btn-danger ms-2 ' onClick={()=>updateItemQuantity(item.id, item.quantity -1)}>-</button>
                          <button className='btn btn-info ms-2'onClick={()=>updateItemQuantity(item.id, item.quantity +1)}>+</button>
                          <button className='btn btn-danger si ms-2' onClick={()=>removeItem(item.id)}>Remove</button>
                       </td>
                   </tr>
               )})}

              </tbody> 
            </table> 
        </div>
        <div className='col-auto ms-auto'>
             <h2>Total amount:₹{cartTotal}</h2>
             <button className='btn btn-danger ms-2' onClick={()=>emptyCart()}>Empty Cart</button>
             <button className='btn btn-info ms-2'  onClick={()=>alert("Order confirmed")}>Pay Now</button>
        </div>
        </div>

      </section>  
  
    );
}
export default Cart;