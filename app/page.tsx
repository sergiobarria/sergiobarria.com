import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';

import { KitImage, ContactForm } from '@/components';

export default function Home() {
    const posts = allPosts.sort((a, b) =>
        compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
    );
    // console.log(posts);

    return (
        <div className="space-y-16">
            <section id="hero">
                <div className="flex flex-col max-w-3xl gap-6 mx-auto md:flex-row md:items-center">
                    <div className="flex justify-center">
                        {/* TODO: Fix image component */}
                        {/* <KitImage
                            path="profile.jpeg"
                            alt="hero profile"
                            width={768}
                            height={1024}
                            transformation={[
                                {
                                    width: '768',
                                    height: '1024',
                                    effectGray: 'auto',
                                    radius: 'max',
                                    quality: '20',
                                },
                            ]}
                            className="max-w-[200px] border-4 rounded-full shadow-lg shadow-neutral-700/90"
                        /> */}
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
                        {/* <SocialLinks size={30} /> */}
                    </div>
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

// ---
// import { getCollection, type CollectionEntry } from 'astro:content';

// import MainLayout from '@/layouts/MainLayout.astro';
// import SocialLinks from '@/components/SocialLinks.astro';
// import PostCard from '@/components/PostCard.astro';
// import ContactForm from '@/components/svelte/ContactForm.svelte';
// import KitImage from '@/components/KitImage.astro';
// import { sortByDate } from 'lib/utils';

// const postsEntries = await getCollection('posts');
// const posts = sortByDate(postsEntries, 'publishedAt').slice(0, 3) as CollectionEntry<'posts'>[];
// ---

// <MainLayout>
// 	<div class="space-y-16">

// 		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-0">
// 			<!-- section: latest articles -->
// 			<section id="latest-articles" class="">
// 				<h2 class="text-xl font-semibold text-center md:text-2xl lg:text-3xl mb-6">
// 					Latest Articles
// 				</h2>

// 				<div class="space-y-6">
// 					{posts.map((post) => <PostCard post={post} />)}
// 				</div>
// 			</section>

// 			<!-- section: what I do -->
// 			<section id="featured" class="md:pl-16">
// 				<div class="border border-gray-500/50 p-4 rounded-xl">
// 					<h2 class="text-xl font-semibold text-center md:text-2xl lg:text-3xl">
// 						Featured
// 					</h2>
// 					<div>Projects</div>
// 					<div>Stack</div>
// 				</div>
// 			</section>
// 		</div>
// 	</div>
// </MainLayout>
