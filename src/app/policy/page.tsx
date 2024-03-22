import React from 'react'
import Link from 'next/link'

interface Props {}

function Page(props: Props) {
    const {} = props

    return (
        <div>
          <Link href='/'><div className='w-full flex justify-end items-end mt-3'><div className='bg-white px-5 py-2 hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out font-semibold rounded-md flex justify-center items-center mr-5'>back</div></div></Link>
          <div className='mx-auto my-8 max-w-7xl flex justify-center items-start flex-col' style={{ textAlign: 'left', color: 'white' }}>
          <h1 className='text-5xl font-semibold mb-16'>Privacy Policy</h1>
    
          <h2 className='mb-3 text-3xl font-semibold'>Introduction</h2>
          <p className='px-3 leading-snug text-lg font-normal mb-12'>
          At DevLink, we are committed to protecting the privacy and security of our users. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you use our website and services.
          </p>

          
          <h2 className='mb-3 text-3xl font-semibold'>Acceptance of Terms</h2>
          <p className='px-3 leading-snug text-lg font-normal mb-12'>
          By accessing or using the Service, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not access or use the Service.
          </p>

          <h2 className='mb-3 text-3xl font-semibold'>Changes of Terms</h2>
          <p className='px-3 leading-snug text-lg font-normal mb-12'>
          DevLink reserves the right to modify or revise these Terms at any time, and such modifications or revisions will be effective immediately upon posting on the Service. Your continued use of the Service after any such modifications or revisions constitutes your acceptance of the updated Terms.
          </p>

          <h2 className='mb-3 text-3xl font-semibold'>User Conduct</h2>
          <p className='px-3 leading-snug text-lg font-normal mb-12'>
          You agree to use the Service in compliance with all applicable laws and regulations and in a manner that does not infringe upon the rights of others. You further agree not to:
          </p>
          <ol className='mb-12'>
        <li className='px-3 leading-snug text-lg font-normal mb-3'>👉🏽 Use the Service for any unlawful purpose or in any way that violates these Terms.</li>
        <li className='px-3 leading-snug text-lg font-normal mb-3'>👉🏽 Transmit or distribute any material that is harmful, offensive, defamatory, or infringing upon the rights of others.</li>
        <li className='px-3 leading-snug text-lg font-normal mb-3'>👉🏽 Interfere with or disrupt the operation of the Service or the networks or servers connected to the Service.</li>
        <li className='px-3 leading-snug text-lg font-normal mb-3'>👉🏽 Attempt to gain unauthorized access to any portion of the Service or any other accounts, computer systems, or networks connected to the Service.</li>
        </ol>


          <h2 className='mb-3 text-3xl font-semibold'>User Content</h2>
          <p className='px-3 leading-snug text-lg font-normal mb-12'>
          By submitting any content or materials to the Service, including but not limited to text, images, videos, or other media ("User Content"), you grant DevLink a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content in connection with the Service. You represent and warrant that you have all necessary rights and permissions to submit User Content to the Service and that such User Content does not violate any third-party rights.
          </p>

          <h2 className='mb-3 text-3xl font-semibold'>Intellectual Property</h2>
          <p className='px-3 leading-snug text-lg font-normal mb-12'>
          The Service, including its content, features, and functionality, is owned by DevLink and is protected by copyright, trademark, and other intellectual property laws. You may not modify, reproduce, distribute, transmit, display, perform, or create derivative works from any part of the Service without the prior written consent of DevLink.
          </p>

          <h2 className='mb-3 text-3xl font-semibold'>Disclaimer of Warranty</h2>
          <p className='px-3 leading-snug text-lg font-normal mb-12 uppercase'>
          THE SERVICE IS PROVIDED ON AN "AS-IS" AND "AS-AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. DEVINK DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. DEVLINK DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, OR THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED.
          </p>
          
          <h2 className='mb-3 text-3xl font-semibold'>Limitation of Liabilty</h2>
          <p className='px-3 leading-snug text-lg font-normal mb-12'>
          N NO EVENT SHALL DEVLINK, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, EVEN IF DEVLINK HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT SHALL DEVLINK'S TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, OR CAUSES OF ACTION EXCEED THE AMOUNT PAID BY YOU, IF ANY, FOR ACCESSING OR USING THE SERVICE.
          </p>

          <h2 className='mb-3 text-3xl font-semibold'>Indemnification</h2>
          <p className='px-3 leading-snug text-lg font-normal mb-12'>
          You agree to indemnify, defend, and hold harmless DevLink, its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or related to your use of the Service, your violation of these Terms, or your violation of any rights of any other person or entity.
          </p>

          <p className=' text-slate-600 text-base'>all rights reserved ©️ Devlink-Org</p>
        </div>
        </div>
      );
}

export default Page
