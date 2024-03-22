import { Fade } from 'react-awesome-reveal'

export const MessageModel = () => {
    return (
        <div className="absolute top-0 left-0 bg-black bg-opacity-25 w-screen min-h-screen flex justify-center items-center z-[2]">
            <Fade direction="up">
                <div className="w-[350px] flex flex-col justify-center items-center gap-[20px] p-4 bg-white rounded-lg">
                    <p className="text-2xl font-semibold tracking-wide text-center">
                        Thank You for Your Submission
                    </p>

                    <p className="text-lg text-center">
                        You will be redirected to our homepage
                    </p>
                </div>
            </Fade>
        </div>
    )
}