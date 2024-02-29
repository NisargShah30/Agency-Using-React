import React from 'react'

const Services = () => {
    const service = [
        { id: 1, title: "Membership Organisations", descroption: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", image: "/src/assets/service-2.png" },
        { id: 2, title: "Membership Organisations", descroption: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", image: "/src/assets/service-2.png" },
        { id: 3, title: "Membership Organisations", descroption: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard", image: "/src/assets/service-2.png" },
    ]
    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
            <div className='text-center my-8'>
                <h2 className='text-4xl text-neutraalGrey font-semibold mb-2'>Our Clients</h2>
                <p className='text-neutraalGrey'>We have been working with some Fortune 500++ clients</p>
                {/* Compnay Logo */}
                <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                    <img src="/src/assets/service-2.png" />
                    <img src="/src/assets/service-2.png" />
                    <img src="/src/assets/service-2.png" />
                    <img src="/src/assets/service-2.png" />
                    <img src="/src/assets/service-2.png" />
                    <img src="/src/assets/service-2.png" />
                    {/* <img src="/src/assets/service-2.png" /> */}
                </div>
            </div>
            {/* Servis card */}
            <div className=' mt-20 md:w-1/2 mx-auto text-center'>
                <h2 className=' text-4xl text-neutraalGrey font-semibold mb-3'>Manage your entire community in a single system</h2>
                <p className='text-neutraalGrey'>Who is Nextcent suitable for?</p>
            </div>
            <div className=' mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                {
                    service.map(servis => <div key={servis.id} className=' px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:translate-x-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                        <div>
                            <div className=' bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img src={servis.image} className=' -ml-5'/></div>
                            <h4 className=' text-2xl font-bold text-neutraalGrey mb-2 px-2'>{servis.title}</h4>
                            <p className=' text-sm text-neutraalGrey'>{servis.descroption}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Services
// Servisis ne app.js ma import kairu che // 