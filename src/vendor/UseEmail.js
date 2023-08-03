import { ref } from 'vue'

const UseEmail = (endpointUrl) => {
    const submitted = ref(false)
    const loading = ref(false)
    const error = ref()

    function sendEmail(data) {
        loading.value = true
        submitted.value = false
        error.value = undefined

        fetch(endpointUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => {
                // Endpoint thinks that it's likely a spam/bot request, you need to change "spam protection mode" to "never" in HeroTofu forms
                if (response.status === 422) {
                    throw new Error('Are you robot?')
                }

                if (response.status !== 200) {
                    throw new Error(`${response.statusText} (${response.status})`)
                }

                return response.json()
            })
            .then(() => {
                submitted.value = true
                loading.value = false
            })
            .catch((err) => {
                console.log('catch')

                error.value = err.toString()
                loading.value = false
            })
    }

    return {
        submitted,
        loading,
        error,
        sendEmail
    }
}

export default UseEmail
