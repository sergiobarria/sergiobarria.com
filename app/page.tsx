import Image from 'next/image';
import { compareDesc } from 'date-fns';

import { ContactForm } from '@/components';
import { PostPreview } from '@/components/PostPreview';
import { allPosts } from 'contentlayer/generated';
import profile from 'public/images/profile.jpg';
import { getPostsViews } from '@/lib/metrics';

export default async function Home() {
    const featuredPosts = allPosts
        // .filter(post => post.isFeatured)
        .sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)));
    const allViews = await getPostsViews();

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
                                Full-stack developer, engineer and amateur writer
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

            <section id="featured-posts">
                <h2 className="text-xl font-semibold text-center md:text-2xl lg:text-3xl mb-3">
                    Latest Articles 📝
                </h2>

                <div className="space-y-3">
                    {featuredPosts.map(post => {
                        const postData = {
                            ...post,
                            views: allViews.find(p => p.slug === post.slug)?.views ?? 0,
                        };
                        return <PostPreview key={post._id} post={postData} />;
                    })}
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
