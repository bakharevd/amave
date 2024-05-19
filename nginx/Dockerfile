FROM nginx:latest

COPY nginx.conf.template /etc/nginx/nginx.conf.template

COPY start-nginx.sh /
RUN chmod +x start-nginx.sh
ENTRYPOINT ["/start-nginx.sh"]
CMD ["nginx", "-g", "daemon off;"]