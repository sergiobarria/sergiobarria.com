'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { cn } from '@/lib/utils';
import type { InputData } from '@/app/api/contact/route';

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<InputData>();

    async function onSubmit(data: InputData) {
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const json = await res.json();
            if (json.success) {
                toast('Message sent successfully!', {
                    icon: '✅',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
                reset(); // reset the form
            }

            if (!json.success && json.errors) {
                toast(
                    'Oops!\n\nSomething went wrong sending your email.\n\nPlease all fields are filled correctly.',
                    {
                        icon: '❌',
                        style: {
                            borderRadius: '10px',
                            background: '#333',
                            color: '#fff',
                        },
                    }
                );
            }
        } catch (err: unknown) {
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-screen-md py-3 mx-auto my-3 mt-3 space-y-3"
        >
            <div className="flex flex-col gap-3 md:flex-row">
                <label className="relative w-full">
                    <input
                        type="text"
                        disabled={isSubmitting}
                        placeholder="Name*"
                        className="w-full px-4 py-3 text-sm bg-transparent rounded-lg border-neutral-600 focus:ring-neutral-600 focus:border-transparent"
                        {...register('name', { required: true, minLength: 3 })}
                    />
                </label>
                <label className="relative w-full">
                    <input
                        type="email"
                        disabled={isSubmitting}
                        placeholder="Email*"
                        className="w-full px-4 py-3 text-sm bg-transparent rounded-lg border-neutral-600 focus:ring-neutral-600 focus:border-transparent"
                        {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
                    />
                </label>
            </div>
            <label className="relative block w-full">
                <input
                    type="text"
                    disabled={isSubmitting}
                    placeholder="Subject*"
                    className="w-full px-4 py-3 text-sm bg-transparent rounded-lg border-neutral-600 focus:ring-neutral-600 focus:border-transparent"
                    {...register('subject', { required: true })}
                />
            </label>
            <label className="relative block w-full">
                <textarea
                    placeholder="Message*"
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full px-4 py-3 text-sm bg-transparent rounded-lg border-neutral-600 focus:ring-neutral-600 focus:border-transparent"
                    {...register('message', { required: true, minLength: 10 })}
                ></textarea>
            </label>

            <div>
                {Object.keys(errors).length > 0 && (
                    <div className="space-y-1">
                        {Object.keys(errors).map(error => (
                            <p key={error} className="text-xs text-red-500 capitalize">
                                - {error} is required
                            </p>
                        ))}
                    </div>
                )}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                    'flex items-center gap-2 px-4 py-2 border border-zinc-700 text-sm rounded-full transform',
                    'hover:bg-neutral-600 hover:border-transparent hover:scale-[1.02] custom-transition',
                    'focus:outline-none focus:ring-1 focus:ring-neutral-600 focus:ring-offset-1 focus:ring-offset-transparent'
                )}
            >
                <span>{isSubmitting ? 'Sending...' : "Let's talk"}</span>
                {!isSubmitting && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 icon icon-tabler icon-tabler-arrow-up-right"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M17 7l-10 10" />
                        <path d="M8 7l9 0l0 9" />
                    </svg>
                )}
            </button>
        </form>
    );
}
