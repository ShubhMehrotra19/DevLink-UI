import { useRouter } from "next/navigation"
import { useState } from "react"
import { KnockAPI } from "./knockapi"
import { KnockClient } from "./knockclient"

interface FormInput {
    name: string
    email: string
    message: string
}

export const useToSetForm = () => {
    const router = useRouter()
    const [userId, setUserId] = useState<string>('')
    const [showModel, setShowModel] = useState<boolean>(false)
    const [formData, setFormData] = useState<FormInput>({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setFormData((prev: FormInput) => ({
            ...prev,
            [name]: value,
        }))
        if (name == 'email')
            setUserId(
                formData.email.substring(0, formData.email.indexOf('@') + 1)
            )
    }

    const handleSubmit = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        KnockAPI.setIdentify(userId, formData)
        KnockClient.getAuth(userId)
        KnockAPI.triggerWorkflow(userId, 'admin@10012023', formData)
        setTimeout(() => setShowModel(true), 500)
        setTimeout(() => {
            setShowModel(false)
            router.push('/')
        }, 4000)
    }

    return { showModel, handleChange, handleSubmit }
}

export const useToSetFAQS = () => {
    const [showAns, setShowAns] = useState<boolean>(false)
    const [qIndex, setQIndex] = useState<number>(-1)

    const handleClick = (id: number) => {
        setQIndex(id)
        if (id == qIndex && showAns) setShowAns(false)
        else {
            setShowAns(false)
            setShowAns((prev: boolean) => !prev)
        }
    }

    return { showAns, qIndex, handleClick }
}

export const useToSetCards = () => {
    const [showWeb, setShowWeb] = useState(false)
    const [showUIUX, setShowUIUX] = useState(false)
    const [showApp, setShowApp] = useState(false)

    const hideAll = () => {
        setShowWeb(false)
        setShowUIUX(false)
        setShowApp(false)
    }

    return { showWeb, setShowWeb, showUIUX, setShowUIUX, showApp, setShowApp, hideAll}
}