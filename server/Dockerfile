FROM node:10

COPY entrypoint.sh /entrypoint/

RUN ["chmod", "+x", "entrypoint/entrypoint.sh"]

# Copy or mount node app here
WORKDIR /data/

EXPOSE 5000

ENTRYPOINT ["/entrypoint/entrypoint.sh"]

CMD ["npm", "start"]