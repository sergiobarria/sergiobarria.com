export function ThankYouCard() {
    return (
        <div className="flex flex-col items-center justify-center p-4 m-4 bg-white rounded-lg shadow-lg text-neutral-700">
            <svg
                className="w-12 h-12 mb-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
            <h2 className="mb-2 text-2xl">Thank you!</h2>
            <p className="text-center text-gray-600">
                Your message has been sent successfully. I appreciate your reaching out to me and
                will get back to you as soon as possible.
            </p>
        </div>
    );
}
