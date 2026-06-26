import { use } from "react";
import StepCard from "../Ui/Card/StepCard";

const Steps = ({stepsPromise}) => {
    const steps = use(stepsPromise)
  return (
    <div className="container mx-auto my-30 space-y-10">
      <div className="space-y-4 flex flex-col text-center items-center justify-center">
        <h1 className="font-bold text-5xl">Get Started in 3 Steps</h1>
        <p className="text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-7.5">
            {steps.map(step => {
                return <StepCard step={step} key={step.id}  />
            })}
        </div>
    </div>
  );
};

export default Steps;
