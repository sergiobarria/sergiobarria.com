import * as dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';

dotenv.config({ path: './.env.local' });

export default {
    schema: './lib/db/schema.ts',
    out: './drizzle',
    driver: 'mysql2',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL as string,
    },
    breakpoints: true,
} satisfies Config;
