import { migrate } from 'drizzle-orm/planetscale-serverless/migrator';

import { db } from './client';

async function main() {
    console.log('⇨ 🚀 Running migrations...');
    await migrate(db, { migrationsFolder: 'drizzle' });
    console.log('⇨ ✅ Migrations complete!');
}

main();
