'use server';

import { email, string, object, minLength, Output, parse, ValiError } from 'valibot';
import { eq } from 'drizzle-orm';

import { sendEmail } from '@/lib/email';
import { db } from './db/client';
import { posts, snippets } from './db/schema';

const contactFormSchema = object({
    name: string([minLength(3, 'Name must be at least 3 characters long')]),
    email: string([email('Please enter a valid email address')]),
    subject: string([minLength(3, 'Subject must be at least 3 characters long')]),
    message: string([minLength(10, 'Message must be at least 10 characters long')]),
});

export type InputData = Output<typeof contactFormSchema>;

export type CustomIssue = {
    field: string;
    input: string;
    message: string;
};

export async function submitContactFormAction(data: FormData) {
    const formData = Object.fromEntries(data);

    try {
        const data = parse(contactFormSchema, formData);

        await sendEmail(data);

        return {
            success: true,
            error: false,
            errors: [],
            message: 'Email successfully sent! 🎊',
        };
    } catch (err: unknown) {
        let errors: Array<CustomIssue> = [];
        console.error(err);

        if (err instanceof ValiError) {
            errors = err.issues.map(issue => {
                return { field: issue.validation, input: issue.input, message: issue.message };
            });

            return {
                success: false,
                errors,
                message: 'Please fix the errors below',
            };
        }

        return {
            success: false,
            errors: [],
            message: 'An unknown error occurred',
        };
    }
}

export async function incrementCountAction(slug: string, type: 'posts' | 'snippets' = 'posts') {
    // NOTE: there is no clear way of doing upsert at the moment for mysql
    // https://github.com/drizzle-team/drizzle-orm/issues/649
    const table = type === 'posts' ? posts : snippets;
    const result = await db.select().from(table).where(eq(table.slug, slug));

    if (result.length > 0)
        return await db
            .update(table)
            .set({ views: result[0]?.views + 1 })
            .where(eq(table.slug, slug));

    console.log('inserting new row');
    return await db.insert(table).values({ slug, views: 1 });
}
