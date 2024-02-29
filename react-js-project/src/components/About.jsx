import React from 'react'
import aboutImg from '../assets/n-2.jpg'
const About = () => {
    return (
        <div>
            <div className=' px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
                <div className=' md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={aboutImg} alt='' />
                    </div>
                    <div className='md:w3/5 mx-auto'>
                        <h2 className='text-4xl text-neutraalGrey font-semibold mb-4 md:w-4/5'>The unseen of spending three years at Pixelgrande</h2>
                        <p className=' md:w-3/4 text-sm text-neutraalGrey mb-8'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</p>
                        <button className='btn-primary'>Learn More</button>
                    </div>
                </div>

            </div>

            {/* Compnay Stars */}
            <div className=' px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutraalSilver py-16'>
                <div className=' flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className=' md:w-1/2'>
                        <h2 className='text-4xl text-neutraalGrey font-semibold mb-4 md:w-2/3'>The unseen of <br /> spending three <span className=' text-brandPrimary'>years at Pixelgrande</span></h2>
                        <p>The unseen of spending three years at Pixelgrande</p>
                    </div>
                    {/* staps */}
                    <div className=' md:w-1/2 mx-auto flex sm:flex-row flex-col items-center justify-around gap-12'>
                        <div className=' space-y-8'>
                            <div className=' flex items-center gap-4'>
                                <img src='/src/assets/m-2.png' alt='' />
                                <div>
                                    <h4 className=' text-2xl text-neutraalGrey font-semibold'>2,245,341</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className=' flex items-center gap-4'>
                                <img src='/src/assets/m-2.png' alt='' />
                                <div>
                                    <h4 className=' text-2xl text-neutraalGrey font-semibold'>2,245,341</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                        </div>
                        <div className=' space-y-8'>
                            <div className=' flex items-center gap-4'>
                                <img src='/src/assets/m-2.png' alt='' />
                                <div>
                                    <h4 className=' text-2xl text-neutraalGrey font-semibold'>2,245,341</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className=' flex items-center gap-4'>
                                <img src='/src/assets/m-2.png' alt='' />
                                <div>
                                    <h4 className=' text-2xl text-neutraalGrey font-semibold'>2,245,341</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
// About ne app.js ma import kairu che // 
