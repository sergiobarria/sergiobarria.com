import Image from 'next/image';
import Link from 'next/link';
import { compareDesc } from 'date-fns';

import { ContactForm, ViewsCounter } from '@/components';
import { allPosts } from 'contentlayer/generated';
import { getPostsViews } from '@/lib/metrics';
import {
    ArrowUpRightIcon,
    DjangoIcon,
    FlutterIcon,
    GoIcon,
    JavaScriptIcon,
    NextjsIcon,
    PythonIcon,
    ReactIcon,
    SvelteIcon,
    VueIcon,
} from '@/components/icons';
import { formatDate } from '@/lib/utils';
import profile from 'public/images/profile.jpg';

interface CardProps {
    title: string;
    slug: string;
    publishedAt: string;
    readingTime: string;
}

async function PostCard({ title, slug, publishedAt, readingTime }: CardProps) {
    const allViews = await getPostsViews();
    const views = allViews.find(view => view.slug === slug)?.views ?? 0;
    const formattedDate = formatDate(new Date(publishedAt));

    return (
        <Link
            href={`/blog/${slug}`}
            className="border border-neutral-600 bg-neutral-800 rounded flex items-center justify-between p-3"
        >
            <div>
                <h3 className="font-semibold group-hover:opacity-80">{title}</h3>
                <p className="opacity-80 flex items-center gap-2 text-xs">
                    <span>{formattedDate}</span>
                    <span>•</span>
                    <ViewsCounter slug={slug} views={views} />
                    <span>•</span>
                    <span>{readingTime}</span>
                </p>
            </div>
            <div>
                <ArrowUpRightIcon />
            </div>
        </Link>
    );
}

export default async function Home() {
    const featuredPosts = allPosts
        .filter(post => post.isFeatured && !post.isDraft)
        .sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)));

    return (
        <div className="space-y-16">
            <section id="hero">
                <div className="flex flex-col max-w-3xl gap-6 mx-auto md:flex-row md:items-center">
                    <div className="relative w-52 h-52 aspect-1 mx-auto">
                        <Image
                            src={profile}
                            alt="hero profile"
                            fill
                            placeholder="blur"
                            quality={10}
                            className="rounded-full grayscale border-4 shadow-lg shadow-neutral-700/90 object-cover"
                        />
                    </div>

                    <div className="text-center space-y-6 md:max-w-[70%] md:text-start md:space-y-4">
                        <div className="space-y-1">
                            <h1 className="text-3xl font-semibold lg:text-4xl">
                                hey, I&apos;m Sergio 👋
                            </h1>
                            <p className="max-w-[80%] mx-auto opacity-70 md:w-full md:mx-0">
                                developer, engineer and amateur writer
                            </p>
                        </div>
                        <p>
                            I&apos;m a civil engineer turn into web developer. Welcome to my small
                            space of the internet, where I write and share about different topics
                            related to the web.
                        </p>
                        {/* TODO: Add social links */}
                        {/* <SocialLinks size={30} /> */}
                    </div>
                </div>
            </section>

            <section id="frameworks">
                <div className="flex items-center justify-center gap-3">
                    <JavaScriptIcon />
                    <PythonIcon />
                    <GoIcon />
                    <ReactIcon />
                    <NextjsIcon />
                    <VueIcon />
                    <SvelteIcon />
                    <DjangoIcon />
                    <FlutterIcon />
                </div>
            </section>

            <section id="featured-posts">
                <h2 className="text-xl font-semibold text-center md:text-2xl lg:text-3xl mb-3">
                    Latest Articles 📝
                </h2>

                <div className="space-y-3">
                    {featuredPosts.map(({ _id, title, slug, publishedAt, readingTime }) => (
                        <PostCard
                            key={_id}
                            title={title}
                            slug={slug}
                            publishedAt={publishedAt}
                            readingTime={readingTime.text}
                        />
                    ))}
                </div>
            </section>

            <section id="contact">
                <h2 className="text-xl font-semibold text-center md:text-2xl lg:text-3xl">
                    Get in touch! 📨
                </h2>

                <ContactForm />
            </section>
        </div>
    );
}
