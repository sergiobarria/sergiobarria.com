import { useState } from 'react'
import { useRouter } from 'next/router'
import { UserSubmitForm } from '@/types/types'
import axios, { AxiosRequestConfig } from 'axios'

const useSubmit = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<string>('')
  const router = useRouter()

  async function submitFormHandler(
    url: string,
    formData: UserSubmitForm,
    reset: () => void
  ) {
    setIsLoading(true)

    const config: AxiosRequestConfig = {
      method: 'POST',
      url,
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      data: formData,
    }

    try {
      const res = await axios(config)
      if (res.status === 200) {
        reset()
        setIsLoading(false)
        setMessage(res.data.message)
        setTimeout(() => {
          router.push('/')
        }, 3000)
      }
    } catch (error: any) {
      setIsLoading(false)
      setMessage(error.message)
      console.error(error.message)
    }
  }

  return { isLoading, submitFormHandler, message }
}

export default useSubmit
