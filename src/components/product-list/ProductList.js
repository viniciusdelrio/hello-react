import Products from './Products';

function ProductList(props) {
    return (
        <div className='row'>
            <div className='col-lg-8 mx-auto'>
                <ul className="list-group shadow">
                    {
                        props.newProductList.map((product) => { 
                            return <Products 
                                id={product?.pID} 
                                name={product?.pName}
                                description={product?.desc}
                                isAvailable={product?.isAvailable}
                                imageUrl={product?.image}
                                price={product?.price}>
                            </Products> })
                    }
                </ul>
            </div>
        </div>
    );
}

export default ProductList;