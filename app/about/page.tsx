import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';

import site from '@/site/site.json';
import profile from 'public/images/profile.jpg';

function ContactLinks() {
    const { github, linkedin, email } = site.socialLinks;

    return (
        <ul role="list" className="self-start space-y-3 transition-colors duration-200 ease-in-out">
            <li className="flex items-center gap-3 text-sm cursor-pointer md:ml-10 text-neutral-500 group">
                <Github className="w-4 h-4 group-hover:text-neutral-200" />
                <a
                    href={github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group-hover:text-neutral-200"
                >
                    {github.label}
                </a>
            </li>
            <li className="flex items-center gap-3 text-sm cursor-pointer md:ml-10 text-neutral-500 group">
                <Linkedin className="w-4 h-4 group-hover:text-neutral-200" />
                <a
                    href={linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group-hover:text-neutral-200"
                >
                    {linkedin.label}
                </a>
            </li>
            <hr className="py-6 md:ml-10 opacity-10" />
            <li className="flex items-center gap-3 text-sm cursor-pointer md:ml-10 text-neutral-500 group">
                <Mail className="w-4 h-4 group-hover:text-neutral-200" />
                <a
                    href={email.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group-hover:text-neutral-200"
                >
                    {email.label}
                </a>
            </li>
        </ul>
    );
}

export default function AboutPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-x-4 gap-y-8 md:gap-0">
            <div className="flex justify-center order-1 md:col-span-1">
                <div className="grid h-96 w-[60%] items-center">
                    <div className="relative w-full h-4/5">
                        <Image
                            src={profile}
                            alt="hero profile"
                            fill
                            placeholder="blur"
                            quality={50}
                            className="grayscale rounded-xl shadow-lg shadow-neutral-700/90 object-cover rotate-3"
                        />
                    </div>
                </div>
            </div>
            <div className="order-2 md:col-start-1 md:row-start-1 md:row-span-2">
                <h1 className="text-2xl font-bold tracking-tight md:text-3xl sm:text-5xl">
                    hey!, I’m Sergio. 👋
                </h1>
                <p className="text-base opacity-60">A full stack developer from Panama.</p>

                <div className="mt-6 prose-sm space-y-7">
                    <p>
                        I’ve loved building things for as long as I can remember, that&apos;s the
                        reason I became a <strong>Civil Engineer</strong>. I love to learn new
                        things and I&apos;m always looking for new challenges. That&apos;s why I
                        decided to become a <span>Software Engineer</span>.
                    </p>
                    <p>
                        I took my first programming course back in college and I fell in love with
                        it. I started learning by myself and I never stopped. I&apos;ve been working
                        as a Software Engineer for a few years now, mostly with{' '}
                        <strong>JavaScript</strong>.
                    </p>
                    <p>
                        I&apos;m currently working as a Full Stack Developer involved in different
                        projects in the <strong>JavaScript</strong> ecosystem, both for mobile and
                        web.
                    </p>
                    <p>
                        Besides JavaScript, I also love to learn about other technologies and
                        programming languages. Currently I&apos;m learning <strong>Go</strong> and
                        several other technologies, like
                        <em>Docker, DevOps, and more</em>. I also use <strong>Python</strong> for
                        some of my projects, tasks automatization and more.
                    </p>
                    <p>
                        When I&apos;m not coding, I love to play video games, watch movies or
                        series, and spend time with my family.
                    </p>
                </div>
            </div>
            <div className="order-3 md:col-start-2 md:row-span-2 md:self-center">
                <ContactLinks />
            </div>
        </div>
    );
}
