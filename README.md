# Install

+ Install NodeJS and NPM
+ Install NPM dependencies by executing: `npm i`

# Build

+ Run the build script: `npm run build`
    + output will be in `dist` directory

# Run on Docker

Run `bash -x docker-run.sh` to build `ibtube` image and start a server at port 80 (`http://localhost:80/`) on a container named:`ibtube-container`

+ NOTE: you need to set the `YOUTUBE_API_KEY` environment variable


# Running unit tests & coverage report:

Run `npm run test`
+ Coverage report is generated at `docs/coverage`


# Publish as GitHub Page

+ Enable Github Pages from the repository settings
+ Run `npm run build:docs`
+ Push `docs` directory changes

# Try online:

+ [yoga1290.github.io/ibtube](https://yoga1290.github.io/ibtube)
+ test report: [yoga1290.github.io/ibtube/coverage/](https://yoga1290.github.io/ibtube/coverage/)
