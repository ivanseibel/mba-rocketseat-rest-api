import Fastify from "fastify";

const app = Fastify();

app.get("/hello", async () => {
	return "Hello World!!";
});

app.listen({ port: 3333 }).then(() => {
	console.log("Server is running on http://localhost:3333");
});
