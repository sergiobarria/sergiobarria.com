import * as fs from 'fs';
import * as path from 'path';

import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '../../.env.local') });

import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { connect } from '@planetscale/database';
import { PlanetScaleDatabase } from 'drizzle-orm/planetscale-serverless';

import { db } from './client';
import { posts } from './schema';

const postsDirectory = path.resolve(__dirname, '../../content/posts/en');
console.log('postsDirectory', postsDirectory);

const files = fs.readdirSync(postsDirectory);
console.log('files', files);

async function main() {
    try {
        const slugs = files.map(file => ({
            slug: file.split('_')[1].replace(/\.mdx$/, ''),
        }));

        console.log('=> Inserting posts...: ', slugs);
        await db.insert(posts).values(slugs);
    } catch (error) {
        console.error(error);
    }
}

main();
