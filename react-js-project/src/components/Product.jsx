import React from "react";
import aboutImg from "../assets/n-2.jpg";
const Product = () => {
    return (
        <div>
            <div className=" px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
                <div className=" md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div>
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className="md:w3/5 mx-auto">
                        <h2 className="text-4xl text-neutraalGrey font-semibold mb-4 md:w-4/5">
                            The unseen of spending three years at Pixelgrande
                        </h2>
                        <p className=" md:w-3/4 text-sm text-neutraalGrey mb-8">
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                            It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia
                        </p>
                        <button className="btn-primary">Learn More</button>
                    </div>
                </div>
            </div>

            {/* Compnay Stars */}
            <div className=" px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutraalSilver py-16">
                <div className=" flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className=" md:w-1/3">
                        <img src="./src/assets/b-2.jpg" alt=""/>
                    </div>
                    {/* staps */}
                    <div className=" md:w-2/3 mx-auto">
                        <div>
                            <p className=" md:w-4/5 text-sm text-neutraalGrey mb-8 leading-7">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            <h5 className=" text-brandPrimary text-xl font-semibold mb-2">Nisarg Shah</h5>
                            <p className=" text-base text-neutraalGrey mb-8">Front End Devloper</p>
                            <div>
                                <div className=" flex items-center gap-8 flex-wrap">
                                    <img src="./src/assets/service-2.png" alt="" className=" cursor-pointer w-10" />
                                    <img src="./src/assets/service-2.png" alt="" className=" cursor-pointer w-10" />
                                    <img src="./src/assets/service-2.png" alt="" className=" cursor-pointer w-10" />
                                    <img src="./src/assets/service-2.png" alt="" className=" cursor-pointer w-10" />
                                    {/* <img src="./src/assets/service-2.png" alt="" className=" cursor-pointer" /> */}
                                    {/* <img src="./src/assets/service-2.png" alt="" className=" cursor-pointer" /> */}
                                    <div className=" flex items-center gap-2">
                                        <a href="" className=" font-bold text-brandPrimary hover:text-neutral-700">Meet All Customers</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
// Product ne app.js ma import kairu che //
