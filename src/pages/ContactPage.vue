<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import UseEmail from '@/assets/vendor/herotofu/UseEmail'
import { set, get } from '@/assets/js/localStorageWithExpiry'

const validationSchema = yup.object({
    fullname: yup.string().required(),
    email: yup.string().required().email(),
    message: yup.string().required().min(5).max(300)
})

const { handleSubmit, defineInputBinds, errors } = useForm({
    validationSchema
})

const fullname = defineInputBinds('fullname')
const email = defineInputBinds('email')
const message = defineInputBinds('message')

const { loading, submitted, error, sendEmail } = UseEmail(
    'https://public.herotofu.com/v1/e7ec6f90-310a-11ee-8bd0-fd82facb0a25'
)

const userSentEmail = get('user-sent-email')

const submit = handleSubmit((values) => {
    set('user-sent-email', true, 5 * 60)

    sendEmail({
        fullname: values.fullname,
        email: values.email,
        message: values.message
    })
})
</script>

<template>
    <article class="contact">
        <header>
            <h2 class="h2 article-title">Contact</h2>
        </header>
        <section class="mapbox" data-mapbox>
            <figure>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.030775467086!2d121.44795221744386!3d14.134287800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd57e0ed0d2e41%3A0x6d0c3ee60dc461fe!2sLiliw%20laguna!5e0!3m2!1sen!2sph!4v1690903712353!5m2!1sen!2sph"
                    width="400"
                    height="300"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </figure>
        </section>
        <section class="contact-form">
            <h3 class="h3 form-title">Contact Form</h3>

            <div
                v-if="submitted || userSentEmail"
                class="rounded-lg shadow-lg p-3 bg-black mb-5 text-green-500"
            >
                <p class="inline-block ml-2">
                    <ion-icon
                        name="information-circle"
                        class="inline-block align-middle"
                        size="large"
                    ></ion-icon>
                    Your message has been successfully sent, and I'll get back to you as soon as
                    I've had the chance to read it. Thank you for reaching out!
                </p>
            </div>

            <div v-if="error" class="rounded-lg shadow-lg p-3 bg-black mb-5 text-red-500">
                <p class="inline-block ml-2">
                    <ion-icon
                        name="information-circle"
                        class="inline-block align-middle"
                        size="large"
                    ></ion-icon>
                    Unexpected error: {{ setError }}
                </p>
            </div>

            <div v-if="loading" class="rounded-lg shadow-lg p-3 bg-black mb-5 text-yellow-500">
                <p class="inline-block ml-2">
                    <ion-icon
                        name="information-circle"
                        class="inline-block align-middle"
                        size="large"
                    ></ion-icon>
                    Your email is being sent right now! Kindly hang in there for a moment...
                </p>
            </div>

            <form
                action="#"
                class="form"
                @submit.prevent="submit"
                :hidden="submitted || userSentEmail"
            >
                <div class="input-wrapper">
                    <div>
                        <input
                            type="text"
                            class="form-input"
                            placeholder="Full name"
                            v-bind="fullname"
                        />
                        <span
                            class="text-red-600 mt-2 ml-2"
                            v-text="$filters.upperFirst(errors.fullname)"
                        ></span>
                    </div>
                    <div>
                        <input
                            name="email"
                            type="email"
                            class="form-input"
                            placeholder="Email address"
                            v-bind="email"
                        />
                        <span
                            class="text-red-600 mt-2 ml-2"
                            v-text="$filters.upperFirst(errors.email)"
                        ></span>
                    </div>
                </div>
                <div>
                    <textarea
                        class="form-input mb-0"
                        placeholder="Your Message"
                        v-bind="message"
                    ></textarea>
                    <span
                        class="text-red-600 mt-2 ml-2"
                        v-text="$filters.upperFirst(errors.message)"
                    ></span>
                </div>
                <button class="form-btn mt-8" type="submit">
                    <ion-icon name="paper-plane"></ion-icon>
                    <span>Send Message</span>
                </button>
                <div
                    style="
                        text-indent: -99999px;
                        white-space: nowrap;
                        overflow: hidden;
                        position: absolute;
                    "
                    aria-hidden="true"
                >
                    <input type="hidden" name="_gotcha" tabindex="-1" autocomplete="off" />
                </div>
            </form>
        </section>
    </article>
</template>
