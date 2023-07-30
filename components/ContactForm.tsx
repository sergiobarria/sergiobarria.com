import { cn } from '@/lib/utils';
import { submitContactForm } from '@/lib/actions';

// TODO: Finish this component using server actions
export function ContactForm() {
    return (
        <form
            action={submitContactForm}
            className="max-w-screen-md py-3 mx-auto my-3 mt-3 space-y-3"
        >
            <div className="flex flex-col gap-3 md:flex-row">
                <label className="relative w-full">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        className="w-full px-4 py-3 text-sm bg-transparent border-neutral-600 focus:ring-neutral-600 focus:border-transparent"
                    />
                </label>
                <label className="relative w-full">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        className="w-full px-4 py-3 text-sm bg-transparent border-neutral-600 focus:ring-neutral-600 focus:border-transparent"
                    />
                </label>
            </div>
            <label className="relative block w-full">
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject*"
                    className="w-full px-4 py-3 text-sm bg-transparent border-neutral-600 focus:ring-neutral-600 focus:border-transparent"
                />
            </label>
            <label className="relative block w-full">
                <textarea
                    placeholder="Message*"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 text-sm bg-transparent border-neutral-600 focus:ring-neutral-600 focus:border-transparent"
                ></textarea>
            </label>

            <button
                type="submit"
                // disabled={isSubmitting}
                className={cn(
                    'flex items-center gap-2 px-4 py-2 border border-zinc-700 text-sm transform',
                    'hover:bg-neutral-600 hover:border-transparent hover:scale-[1.02] custom-transition',
                    'focus:outline-none focus:ring-1 focus:ring-neutral-600 focus:ring-offset-1 focus:ring-offset-transparent'
                )}
            >
                Let&apos;s talk
                {/* <span>{isSubmitting ? 'Sending...' : "Let's talk"}</span>
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
                )} */}
            </button>
        </form>
    );
}
