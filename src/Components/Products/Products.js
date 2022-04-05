import React, { useEffect } from 'react'
import {getProduct} from '../Reducer/MainReducer'
import {connect} from 'react-redux'

function Products({products,getProduct}) {
  useEffect(()=>{
    getProduct()
  },[])
  console.log(products.data)
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 my-3'>
          <h1 className='explore'>Explore</h1>
          <p className='text-gray my-3'>Buy and sell digital fashion NFT art</p>
        </div>
      </div>
      <div className='row'>
        {products.data ? products.data.products.map((item,index)=><div className='col-md-3 my-3' key={item.product_id}>
          <div className='box border rounded'>
            <div className='second-box'>
              <p className='author'>created by <br/> <span>{item.created_by.display_name}</span></p>
              <img src={`https://cdn.artisant.io/api/files/630x819/${item.created_by.image.compressed}`} alt="Logo" />
            </div>
            <div className='footer'>
              <div className='left-content'>
                <p className='footer-text'>available</p>
                <span>{index+1} of {products.data.products.length}</span>
              </div>
              <div className='price'>
                <p>price</p>
                <span>{item.initial_price} ETH</span>
              </div>
            </div>
          </div>
        </div>) : ''}
      </div>
    </div>
  )
}

export default connect(state=>({products:state.posts.products}),{getProduct})(Products)