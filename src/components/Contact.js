import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-6">
        <div className='flex flex-col max-w-[1000px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-800 text-gray-300'>
                    Contact
                </p>
                <p className='text-gray-300 py-6 text-3xl'>I'm actively seeking new career opportunities in software development. If you're interested in hiring a motivated and skilled software developer, I'd love to connect with you. Please don't hesitate to reach out using the form below or by sending an email to the address provided. Let's discuss how I can contribute to your team and help you achieve your goals.</p>
                <p className='text-gray-300 py-6 text-2xl'>
                    Email me - tretorrence1@gmail.com
                </p>
            </div>
                
        </div>
    </div>
  )
}

export default Contact