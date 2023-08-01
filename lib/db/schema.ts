import { InferModel } from 'drizzle-orm';
import { mysqlTable, serial, int, varchar, uniqueIndex } from 'drizzle-orm/mysql-core';

export const posts = mysqlTable(
    'posts',
    {
        id: serial('id').primaryKey(),
        slug: varchar('slug', { length: 256 }).notNull().unique(),
        views: int('views').notNull().default(0),
    },
    posts => ({
        slugIndex: uniqueIndex('slug_idx').on(posts.slug),
    })
);

export type NewPost = InferModel<typeof posts, 'insert'>;
export type DBPost = InferModel<typeof posts>; // called DBPost to avoid confusion with the Post type from contentlayer types
