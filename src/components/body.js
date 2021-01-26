import React from "react";

function Body({ products }) {
    return (
        <div className='right'>
            {products.map((product) => {
                let img = '../image/' + product.image;
                return (<div key={product.id} className='prod_card'>
                    <img src={img} alt="" />
                    <div className='prod_info'>
                        <h2>{product.name}</h2>
                        <h3>{product.price} UAH</h3>
                        <h4>{product.description}</h4>
                    </div>
                </div>) ;
            })}
        </div>
    );
}

export default Body;