import { lexend } from './fonts'
import { Form } from './Form'

export default function SubmissionPage(){
    return (
        <>
            <div className="w-screen min-h-screen p-[80px] max-[850px]:p-[40px] max-[850px]:pt-[80px] max-[550px]:p-[20px] max-[550px]:pt-[80px]">
                <h1
                    className={`w-full text-white text-center text-5xl my-[30px] ${lexend.className}`}
                >
                    Let us know how we can help you
                </h1>
                <Form />
            </div>
        </>
    )
}