import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';
import {products} from "@/db/schema";
import {raw_data} from "@/data/json-data";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {

    console.log("Seeding database with initial data...");

    await db.insert(products).values(raw_data);

    console.log("Database seeded successfully!");

}

main();
