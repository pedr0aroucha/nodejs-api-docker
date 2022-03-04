import { createServer } from "http";
import { randomUUID } from "crypto";

function handler(req, res) {
	if (req.url === "/") {
		res.write(
			JSON.stringify({
				message: "Hello World!",
			}),
		);
		res.end();
	}

	if (req.url === "/users") {
		const users = Array.from({ length: 10 }, (key, index) => ({
			id: randomUUID(),
			name: `User ${index}`,
		}));

		res.write(
			JSON.stringify({
				users,
			}),
		);
		res.end();
	}
}

const server = createServer(handler);

server.listen(process.env.PORT, () =>
	console.log(`nodejs-api is listening on port ${process.env.PORT}`),
);
