'use client'

import { poppins } from './fonts'
import { useToSetForm } from './hooks'
import { MessageModel } from './MessageModel'

export const Form = () => {
    const { showModel, handleChange, handleSubmit } = useToSetForm()

    return (
        <form
            encType="multipart/form-data"
            className={`flex flex-col justify-center items-center max-w-[700px] m-auto border-dashed border-2 border-white p-[30px] rounded-[32px] max-[550px]:p-[15px] ${poppins.className}`}
            onSubmit={(e: any) => {
                e.preventDefault()
                handleSubmit()
                e.target.reset()
            }}
        >
            <label htmlFor="name" className="text-lg text-white w-full px-3 py-1">
                Name
            </label>

            <input
                type="text"
                name="name"
                id="name"
                className="text-xl border-2 border-white outline outline-2 outline-transparent rounded-2xl w-full p-3 mb-[15px] hover:outline-white focus:outline-white"
                onChange={handleChange}
                placeholder="Name"
            />

            <label htmlFor="email" className="text-lg text-white w-full px-3 py-1">
                Email
            </label>

            <input
                type="email"
                name="email"
                id="email"
                className="text-xl border-2 border-white outline outline-2 outline-transparent rounded-2xl w-full p-3 mb-[15px] hover:outline-white focus:outline-white"
                onChange={handleChange}
                placeholder="Email"
            />

            <label htmlFor="message" className="text-lg w-full text-white px-3 py-1">
                Description
            </label>

            <textarea
                id="message"
                name="message"
                className="min-h-[300px] text-xl border-2 border-white outline outline-2 outline-transparent rounded-2xl w-full p-3 mb-[15px] hover:outline-white focus:outline-white"
                onChange={handleChange}
                placeholder="Feel free to share your awesome ideas and proposals here. We're all ears and excited to explore creativity together."
            />

            <button
                type="submit"
                className="py-2 px-7 mt-[34px] text-xl text-white font-medium tracking-wide border-2 border-white rounded-lg outline outline-2 outline-transparent hover:outline-white hover:font-semibold"
            >
                Send
            </button>
            {showModel && <MessageModel />}
        </form>
    )
}