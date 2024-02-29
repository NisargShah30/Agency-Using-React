import React from 'react'

const Blog = () => {
    const blogs = [
        { id: 1, title: "Lorem ipsum is placeholder text", image: "/src/assets/service-2.png" },
        { id: 2, title: "Lorem ipsum is placeholder text", image: "/src/assets/service-2.png" },
        { id: 3, title: "Lorem ipsum is placeholder text", image: "/src/assets/service-2.png" },
    ]
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12'>
            <div className=' text-center md:w-1/2 mx-auto'>
                <h2 className=' text-4xl text-neutraalGrey font-semibold mb-4'>Caring is the new Marketing.</h2>
                <p className=' text-sm text-neutraalGrey mb-8 md:w-3/4 mx-auto'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,</p>
            </div>
            {/* All Blogs*/}
            <div className=' grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                {
                    blogs.map(blog => <div key={blog.id} className=' mx-auto relative mb-12  cursor-pointer'>
                        <img src={blog.image} alt='' className=' hover:scale-95 transition-all duration-300' />
                        <div className=' text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-0'>
                            <h3 className=' mb-3 text-neutraalGrey font-semibold'>{blog.title}</h3>
                            <div className=" flex items-center justify-center gap-8">
                                <a href="" className=" font-bold text-brandPrimary hover:text-neutral-700">Read More</a>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Blog
// Blog ne app.js ma import kairu che // 
