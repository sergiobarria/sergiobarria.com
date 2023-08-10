import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import { allSnippets, allProjects, type Project } from 'contentlayer/generated';

function TagList({ tags }: { tags: string[] }) {
    return (
        <div className="flex flex-wrap mt-2 gap-y-2">
            {tags.map(tag => (
                <span
                    key={tag}
                    className="px-2 py-1 mr-2 text-[10px] text-neutral-100 bg-neutral-800 rounded"
                >
                    {tag}
                </span>
            ))}
        </div>
    );
}

function ProjectCard({ project }: { project: Project }) {
    const { title, description, cover, live, github, stack } = project;

    return (
        <div className="border border-neutral-600 flex items-center gap-3 p-3 h-full flex-col md:flex-row rounded">
            <Image
                src={cover}
                alt="project"
                width={2400}
                height={1581}
                className="hidden md:block w-44 h-33 mx-auto mb-4 md:mb-0 md:w-32 md:h-24 grayscale rounded"
            />

            <div className="flex-grow flex flex-col justify-between">
                <div className="text-center md:text-start">
                    <h3 className="font-semibold group-hover:opacity-80">{title}</h3>
                    <p className="opacity-80 mt-1 text-sm">{description}</p>
                </div>

                <div className="flex flex-col items-center space-y-3 md:space-y-0 md:items-end md:flex-row md:justify-between">
                    <div className="mt-4">
                        <TagList tags={stack} />
                    </div>

                    <div className="flex items-center gap-3">
                        <p className="flex items-center gap-1 hover:opacity-80 text-neutral-400">
                            <a
                                href={live}
                                className="text-xs"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                live
                            </a>
                            <ArrowUpRight className="w-3 h-3 self-end" />
                        </p>
                        <p className="flex items-center gap-1 hover:opacity-80 text-neutral-400">
                            <a
                                href={github}
                                className="text-xs"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                github
                            </a>
                            <ArrowUpRight className="w-3 h-3 self-end" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectsList() {
    const projects = allProjects.filter(project => !project.isDraft);

    return (
        <>
            {projects.map(project => (
                <ProjectCard key={project._id} project={project} />
            ))}
        </>
    );
}

function SnippetsList() {
    const snippets = allSnippets.filter(snippet => !snippet.isDraft);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
            {snippets.map(snippet => {
                return (
                    <Link href={`/showcase/${snippet.slug}`} key={snippet._id}>
                        <div className="flex flex-col p-4 border border-neutral-800 rounded shadow-md hover:cursor-pointer hover:bg-neutral-800 h-full">
                            <h3 className="text-lg font-semibold">{snippet.title}</h3>
                            <p className="text-sm text-gray-500 mb-auto">{snippet.description}</p>

                            {snippet.tags && <TagList tags={snippet.tags} />}
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default function ProjectsPage() {
    return (
        <div className="space-y-12">
            <header className="space-y-3">
                <h1 className="text-3xl font-bold tracking-tight text-neutral-300">Showcase</h1>
                <p className="text-zinc-400">
                    Welcome to my personal showcase. Here you can find some of the projects
                    I&apos;ve worked on and useful code snippets I use regularly.
                </p>
            </header>

            <section id="projects">
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-neutral-300">
                    Projects
                </h2>
                <p className="mt-3 mb-6 text-zinc-400">
                    These are some of the projects I&apos;ve developed, including links to live
                    versions and source code.
                </p>
                <ProjectsList />
            </section>

            <section id="snippets">
                <h2 className="mb-3 text-2xl font-bold tracking-tight text-neutral-300">
                    Code Snippets
                </h2>
                <p className="mt-3 mb-6 text-zinc-400">
                    These are useful code snippets that I use regularly in my work. Click on each to
                    see more details.
                </p>
                <SnippetsList />
            </section>
        </div>
    );
}
