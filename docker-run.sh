# Build "ibtube" image
# docker image build -t ibtube .
docker build -t ibtube .

# Try removing "ibtube-container" container first
docker rm ibtube-container;

# Run "ibtube" image on "ibtube-container"
docker run \
    --name ibtube-container \
    -e YOUTUBE_API_KEY="" \
    -p 80:80 \
    ibtube

# -p 80:4200 \
# --net=host \