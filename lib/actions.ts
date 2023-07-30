'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { email, string, object, minLength, Output, parse, ValiError } from 'valibot';

import { sendEmail } from '@/lib/email';

type InputData = Output<typeof schema>;

const schema = object({
    name: string([minLength(3, 'Name must be at least 3 characters long')]),
    email: string([email('Please enter a valid email address')]),
    subject: string([minLength(3, 'Subject must be at least 3 characters long')]),
    message: string([minLength(10, 'Message must be at least 10 characters long')]),
});

// TODO: Finish this action to submit the contact form
export async function submitContactForm(data: FormData) {
    const formData = Object.fromEntries(data);

    try {
        const { name, email, subject, message } = parse(schema, formData);

        await sendEmail({ name, email, subject, message });

        // redirect('/success');
        revalidatePath('/');
    } catch (err: unknown) {
        console.log('I GOT AND ERROR!');
        console.error(err);

        if (err instanceof ValiError) {
            const errors = err.issues.map(issue => {
                return { field: issue.validation, input: issue.input, message: issue.message };
            });
        }

        // NOTE: Need to handle form errors when server actions give a way
        // to return errors to the form
    }
}
