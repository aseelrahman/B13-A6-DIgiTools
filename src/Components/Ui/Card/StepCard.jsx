import ellipse from "../../../assets/Ellipse 1.png"

const StepCard = ({step}) => {
    return (
        <div className="px-6 py-22 border-2 border-[#F2F2F2] rounded-2xl space-y-4 relative flex flex-col justify-center items-center">
            <span className="absolute aspect-square flex justify-center items-center top-3 right-3 py-1.5 px-3 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">{step.id}</span>
            <div className="flex relative items-center justify-center">
                <img className="absolute" src={step.icon} alt="" />
                <img  src={ellipse} alt="" />
            </div>
            <h2 className="font-semibold text-2xl">{step.title}</h2>
            <p className="text-[#627382] text-center">{step.description}</p>
        </div>
    );
};

export default StepCard;