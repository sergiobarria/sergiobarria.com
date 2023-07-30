import * as React from 'react';
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

interface ContactEmailProps {
    name: string;
    message: string;
    sender: string;
}

export function ContactEmail({ name, message, sender }: ContactEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New message from your portfolio site</Preview>
            <Tailwind>
                <Body className="bg-gray-100">
                    <Container>
                        <Section className="bg-white border-black my-10 px-10 py-4 rounded-md">
                            <Heading className="leading-tight text-sky-500">
                                You received the following message from the contact form
                            </Heading>
                            <Text>{message}</Text>
                            <Hr />
                            <Text>The sender&apos;s name is: {name}</Text>
                            <Text>The sender&apos;s email is: {sender}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
