# Use a lightweight Nginx image as the base
FROM nginx:alpine

# Copy your HTML file and any other necessary static resources
COPY . /usr/share/nginx/html/
# If you have other files (images, styles, scripts, etc.), copy them as well:
# COPY static /usr/share/nginx/html/static

# Expose port 80 to make the service accessible from outside
EXPOSE 80

# Command to start the Nginx server in the foreground
CMD ["nginx", "-g", "daemon off;"]
