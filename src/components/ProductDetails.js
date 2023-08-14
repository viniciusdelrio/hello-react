import Button from "./Button";

let productCount = 0;

function displayFormattedProductCount() {
    return productCount > 0 ? productCount : 'Zero';
}

function ProductDetails(props) {
    let badgeClass = 'badge-margin-left-240 badge ';
    badgeClass += props.isAvailable ? "bg-success" : "bg-danger";
    
    return (
        <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2" style={{'margin-right': 30}}>${props.price}</h6>
            <Button>-</Button>
            <span style={{padding: '0px 14px', 'font-size': 13}}>{displayFormattedProductCount()}</span>
            <Button>+</Button>
            <span className={badgeClass}>{props.isAvailable ? 'Available' : 'Unavailable' }</span>
        </div>
    );
}

export default ProductDetails;