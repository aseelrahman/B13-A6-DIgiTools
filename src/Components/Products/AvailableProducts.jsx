import Card from "../Ui/Card/Card";

const AvailableProducts = ({products, items, setItems, price, setPrice}) => {
    return (
        <div className="grid grid-cols-3 gap-7.5">
            {products.map(product => {
                return <Card product={product} key={product.id} items={items} setItems={setItems} price={price} setPrice={setPrice} />
            })}
        </div>
    );
};

export default AvailableProducts;