import { NextResponse } from 'next/server';
import { email, string, object, minLength, Output, parse, ValiError } from 'valibot';

import { sendEmail } from '@/lib/email';

const schema = object({
    name: string([minLength(3, 'Name must be at least 3 characters long')]),
    email: string([email('Please enter a valid email address')]),
    subject: string([minLength(3, 'Subject must be at least 3 characters long')]),
    message: string([minLength(10, 'Message must be at least 10 characters long')]),
});

export type InputData = Output<typeof schema>;

export async function POST(request: Request) {
    const body = await request.json();

    try {
        const { name, email, subject, message } = parse(schema, body);

        await sendEmail({ name, email, subject, message });
    } catch (err: unknown) {
        console.error(err);
        if (err instanceof ValiError) {
            console.log(err);
            const errors = err.issues.map(issue => {
                return { field: issue.validation, input: issue.input, message: issue.message };
            });
            return NextResponse.json({ success: false, errors });
        }

        return NextResponse.json({ success: false, error: err });
    }

    // TODO: send thanks email to user (maybe) 👇🏼
    // ...

    return NextResponse.json(
        { success: true, message: 'Message successfully sent! 🎊' },
        { status: 200 }
    );
}
