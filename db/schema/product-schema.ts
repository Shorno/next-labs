import { pgTable, integer, varchar, decimal, text, timestamp } from 'drizzle-orm/pg-core';

export const products = pgTable("products", {
    id: integer().primaryKey().generatedByDefaultAsIdentity(),
    title: varchar({ length: 255 }).notNull(),
    category: varchar({length : 100}).notNull(),
    description: text(),
    price: decimal({ precision: 10, scale: 2 }).notNull().default("0.00"),
    image: text().notNull(),
    rating: decimal({ precision: 2, scale: 1 }).notNull().default("0.0"),
    totalRating: integer("total_rating").notNull().default(0),
    stock: integer().notNull().default(0),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
});


export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;