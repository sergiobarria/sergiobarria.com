import Image from 'next/image';

import site from '@/site/site.json';
import profile from 'public/images/profile.jpg';

function ContactLinks() {
    const { github, linkedin, email } = site.socialLinks;

    return (
        <ul role="list" className="self-start space-y-3 transition-colors duration-200 ease-in-out">
            <li className="flex items-center gap-3 text-sm cursor-pointer md:ml-10 text-zinc-500 group">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 icon icon-tabler icon-tabler-brand-github group-hover:text-zinc-200"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="currentColor"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
                <a
                    href={github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group-hover:text-zinc-200"
                >
                    {github.label}
                </a>
            </li>
            <li className="flex items-center gap-3 text-sm cursor-pointer md:ml-10 text-zinc-500 group">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 icon icon-tabler icon-tabler-brand-linkedin group-hover:text-zinc-200"
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
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M8 11l0 5" />
                    <path d="M8 8l0 .01" />
                    <path d="M12 16l0 -5" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
                <a
                    href={linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group-hover:text-zinc-200"
                >
                    {linkedin.label}
                </a>
            </li>
            <hr className="py-6 md:ml-10 opacity-10" />
            <li className="flex items-center gap-3 text-sm cursor-pointer md:ml-10 text-zinc-500 group">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 icon icon-tabler icon-tabler-mail group-hover:text-zinc-200"
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
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                    <path d="M3 7l9 6l9 -6" />
                </svg>
                <a
                    href={email.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group-hover:text-zinc-200"
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
                    <div className="relative w-full h-3/5 aspect-w-3 aspect-h-4">
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
                <h1 className="text-2xl font-bold tracking-tight md:text-3xl text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                    Hey!, I’m Sergio. 👋
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
