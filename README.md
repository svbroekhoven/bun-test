A simple HTTP server build with JavaScript and using Bun as runtime to serve a simple JSON response. This is for Docker's [Bun Language Guide](https://docs.docker.com/language/bun/).

## API

The server only supports the HTTP GET method at the moment. When a GET request is received, the server responds with a JSON object:

```json
{
    "message": "OK"
}
```

## Running with Docker Compose

Below is the [Dockerfile](Dockerfile) for the our server:

```Dockerfile
# Use the official Bun image as the base image
FROM oven/bun:latest

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . .

# Expose the port on which the API will listen
EXPOSE 3000

# Run the server when the container launches
CMD ["bun", "server.js"]
```

To run this application using Docker Compose, you'll need to create a `compose.yml` file.

Here's the `compose.yml` file:

```yaml
services:
  server:
    image: bun-api
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
```

To build and run the Docker image using Docker Compose, use the following command:

```bash
docker compose up
```

This will build the Docker image and then run it, mapping the container's port 3000 to port 3000 on the host machine. You can then access the API by visiting `http://localhost:3000` in your web browser.

## Contributing

Any feedback and contributions are welcome! Please open an issue before submitting a pull request.

## License

[MIT License](LICENSE)
