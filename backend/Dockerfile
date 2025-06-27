# Stage 1: Build the Rust application
FROM rust:latest as builder

# Create a new empty shell project
WORKDIR /usr/src/app
COPY . .

# Build for release
RUN cargo build --release

# Stage 2: Create a minimal image to run the binary
FROM debian:buster-slim
RUN apt-get update && apt-get install -y libssl-dev ca-certificates && rm -rf /var/lib/apt/lists/*

# Copy the compiled binary from the builder stage
COPY --from=builder /usr/src/app/target/release/rust_radio /usr/local/bin/rust_radio

# Create the directory for the runtime
RUN mkdir -p /tmp/rust_radio

# Expose the port the server runs on
EXPOSE 8080

# Set the entrypoint
CMD ["rust_radio"]