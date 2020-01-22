# Android Build Stage
FROM xlanor/turtle-android-base:latest
# Set the npm location and changes the path
USER root

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH="/home/node/.npm-global/bin:/home/node/.local/bin:${PATH}"

RUN mkdir /home/node/app
# Copy from the intermidate container into the new container
COPY . /home/node/app
WORKDIR /home/node/app
RUN find . -type d -exec chown node:node {} \;
RUN find . -type f -exec chown node:node {} \;
WORKDIR /home/node
RUN chown node:node ./app

USER node
WORKDIR /home/node/app/deploy
RUN ls -la
RUN chmod +x jenkins_android.sh
WORKDIR /home/node/app

ENTRYPOINT ["bash", "/home/node/app/deploy/jenkins_android.sh"]
