import crypto from "node:crypto";
import Fastify from "fastify";
import { knex } from "./database";

const app = Fastify();

app.get("/hello", async (request, reply) => {
	// const transaction = await knex("transactions")
	// 	.insert({
	// 		id: crypto.randomUUID(),
	// 		title: "Salary",
	// 		amount: Math.floor(Math.random() * 10000),
	// 	})
	// 	.returning("*");

	// console.log(transaction);

	const transactions = await knex("transactions")
		.where("amount", ">", 5000)
		.select("*");

	console.log(transactions);

	return transactions;
});

app.listen({ port: 3333 }).then(() => {
	console.log("Server is running on http://localhost:3333");
});
