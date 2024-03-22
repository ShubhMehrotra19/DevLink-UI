import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <div>
          <div className='flex justify-between items-center mb-20'>
          <Link href='/'>
          <div className="ml-5 flex justify-center items-center md:scale-100 scale-90 cursor-pointer">
          <Image
            height={50}
            width={50}
            className="scale-50 "
            src="/icons/link.png"
            alt=""
          />
          <p className="text-lg text-white font-medium">DevLink</p>
        </div></Link>
            <Link href='/'><div className='w-full flex justify-end items-end mt-3'><div className='bg-white px-5 py-2 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out font-semibold rounded-md flex justify-center items-center mr-5'>back</div></div></Link>
          </div>
          
          <div className='md:mx-auto my-8 md:max-w-7xl flex justify-center items-start flex-col ml-5' style={{ textAlign: 'left', color: 'white' }}>
          <h1 className='text-5xl font-semibold mb-16 pb-1 border-white border-b-2'>Privacy Policy</h1>
    
          <h2 className='mb-5 pb-1 border-white border-b-2 text-3xl font-semibold'>🔒 Introduction</h2>
          <p className='px-3 leading-snug text-lg font-normal mb-20'>
          At DevLink, we are committed to protecting the privacy and security of our users. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you use our website and services.
          </p>

          <h1 className='text-4xl font-semibold mb-12'>📋 Information we collect</h1>

          <h2 className='mb-5 pb-1 border-white border-b-2 text-3xl font-semibold'>👤 Personal Information</h2>
          <p className='px-3 leading-snug text-lg font-normal mb-12'>
          We may collect personal information such as your name, email address, and contact details when you register an account or use our services.
          </p>

          <h2 className='mb-5 pb-1 border-white border-b-2 text-3xl font-semibold'>🔍 Usage Information</h2>
          <p className='px-3 leading-snug text-lg font-normal mb-12'>
          We may collect information about how you interact with our website and services, including your browsing activity, IP address, and device information.
          </p>

          <h2 className='mb-5 pb-1 border-white border-b-2 text-3xl font-semibold'>🍪 Cookies</h2>
          <p className='px-3 leading-snug text-lg font-normal mb-12'>
          We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and personalize content.
          </p>
          <ol className='mb-12'>
        <li className='px-3 leading-snug text-lg font-normal mb-3'>👉🏽 To provide and improve our services.</li>
        <li className='px-3 leading-snug text-lg font-normal mb-3'>👉🏽 To communicate with you about your account and updates.</li>
        <li className='px-3 leading-snug text-lg font-normal mb-3'>👉🏽 To analyze usage patterns and improve our website and services</li>
        <li className='px-3 leading-snug text-lg font-normal mb-3'>👉🏽 To personalize content and recommendations</li>
        <li className='px-3 leading-snug text-lg font-normal mb-3'>👉🏽 To prevent fraud and ensure the security of our platform</li>
        </ol>


          <h2 className='mb-5 pb-1 border-white border-b-2 md:text-3xl text-xl font-semibold'>🤝 Information Sharing and Disclosure</h2>
          <p className='px-3 leading-snug text-lg font-normal mb-12'>
          We may share your information with third-party service providers and business partners who assist us in operating our website and providing our services. We may also disclose your information in response to legal requests or to protect our rights and interests.
          </p>

          <h2 className='mb-5 pb-1 border-white border-b-2 md:text-3xl text-xl font-semibold'>🔐 Data Security</h2>
          <p className='px-3 leading-snug text-lg font-normal mb-12'>
          We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.
          </p>

          <h2 className='mb-5 pb-1 border-white border-b-2 md:text-3xl text-xl font-semibold'>🔧 Your Choices and Rights</h2>
          <p className='px-3 leading-snug text-lg font-normal mb-12 uppercase'>
          You may update your account information and preferences at any time. You may also request access to, correction of, or deletion of your personal information by contacting us.
          </p>
          
          <h2 className='mb-5 pb-1 border-white border-b-2 md:text-3xl text-xl font-semibold'>🔄 Updates to This Privacy Policy</h2>
          <p className='px-3 leading-snug text-lg font-normal mb-12'>
          We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website.
          </p>

          <p className=' text-slate-600 text-base'>all rights reserved ©️ Devlink</p>
        </div>
        </div>
      );
}

export default Page
