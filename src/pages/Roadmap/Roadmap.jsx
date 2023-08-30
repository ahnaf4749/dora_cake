
import { FcApproval } from "react-icons/fc";
import { FcRating } from "react-icons/fc";
const Roadmap = () => {

    return (
        <div className="bg-[#75B1D1] lg:p-20 p-0">
            <h1 className="text-[40px] text-white font-bold text-center">Roadmap</h1>
            <div className="mx-auto max-w-screen-xl bg-[#1F3664] lg:p-32 p-0 rounded-2xl">
                <div className="grid lg:grid-cols-3">
                    <div className="w-80">
                        <h2 className="text-center text-[20px] text-white font-bold">1nd Quarter of 2023</h2>
                        <div className="flex justify-between mt-5">
                            <div className="">
                                <div className="flex">
                                    <FcApproval className="h-6 w-6" />
                                    <p className="text-white font-medium">Contract Creation</p>
                                </div>
                                <div className="flex">
                                    <FcApproval className="h-6 w-6" />
                                    <p className="text-white font-medium">Audit Code</p>
                                </div>
                                <div className="flex">
                                    <FcApproval className="h-6 w-6" />
                                    <p className="text-white font-medium">Creation of Social Networks</p>
                                </div>
                                <div className="flex">
                                    <FcApproval className="h-6 w-6" />
                                    <p className="text-white font-medium">Frist Burnig Manual</p>
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                <FcRating />
                                <FcRating />
                                <FcRating />
                                <FcRating />
                                <FcRating />
                                <FcRating />
                                <FcRating />
                            </div>
                        </div>
                    </div>
                    <div className="w-80">
                        <h2 className="text-center text-[20px] text-white font-bold">1nd Quarter of 2023</h2>
                        <div className="flex justify-between mt-5">
                            <div>
                                <div className="flex">
                                    <FcApproval className="h-6 w-6" />
                                    <p className="text-white font-medium">Contract Creation</p>
                                </div>
                                <div className="flex">
                                    <FcApproval className="h-6 w-6" />
                                    <p className="text-white font-medium">Audit Code</p>
                                </div>
                                <div className="flex">
                                    <FcApproval className="h-6 w-6" />
                                    <p className="text-white font-medium">Creation of Social Networks</p>
                                </div>
                                <div className="flex">
                                    <FcApproval className="h-6 w-6" />
                                    <p className="text-white font-medium">Frist Burnig Manual</p>
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                <FcRating />
                                <FcRating />
                                <FcRating />
                                <FcRating />
                                <FcRating />
                                <FcRating />
                                <FcRating />
                            </div>
                        </div>
                    </div>




                    <div>
                        <h2 className="text-center text-[20px] text-white font-bold">1nd Quarter of 2023</h2>
                        <div className="flex mt-5">
                            <FcApproval className="h-6 w-6" />
                            <p className="text-white font-medium">Contract Creation</p>
                        </div>
                        <div className="flex">
                            <FcApproval className="h-6 w-6" />
                            <p className="text-white font-medium">Audit Code</p>
                        </div>
                        <div className="flex">
                            <FcApproval className="h-6 w-6" />
                            <p className="text-white font-medium">Creation of Social Networks</p>
                        </div>
                        <div className="flex">
                            <FcApproval className="h-6 w-6" />
                            <p className="text-white font-medium">Frist Burnig Manual</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;