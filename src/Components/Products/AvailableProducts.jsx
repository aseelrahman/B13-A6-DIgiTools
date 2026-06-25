import Card from "../Ui/Card/Card";

const AvailableProducts = ({products}) => {
    return (
        <div className="grid grid-cols-3">
            {products.map(product => {
                return <Card product={product} key={product.id}/>
            })}
        </div>
    );
};

export default AvailableProducts;