const SelectedCard = ({item, deleteItem}) => {
  return (
    <>
      <div className="p-5 my-6 bg-[#F9FAFC] rounded-2xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="inline-flex border bg-[#FFFFFF] border-[#F2F2F2] rounded-full p-3.5">
              <img src={item.icon} alt="" />
            </div>
            <div>
              <h2 className="font-semibold text-[20px]">{item.name}</h2>
              <span className="text-[#627382]">${item.price}</span>
            </div>
          </div>
          <div>
            <button onClick={deleteItem} className="text-[#FF3980] font-semibold">Remove</button>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default SelectedCard;
