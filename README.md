# rmaafs-push

A minimal web application for subscribing to **Firebase Cloud Messaging (FCM)** push notifications. It registers a service worker, requests notification permissions from the user, and displays the generated FCM token.

## Features

- One-click notification permission request
- Service worker registration for background message handling
- FCM token generation and display
- Custom background notification rendering

## How It Works

1. The user clicks **Enable Notification**.
2. The browser requests notification permission.
3. A service worker (`firebase-messaging-sw.js`) is registered.
4. An FCM token is generated and displayed on screen.
5. Background messages are handled and shown as native notifications.

## Tech Stack

- **HTML / CSS / JavaScript** — Static frontend
- **Firebase Cloud Messaging** — Push notification service
- **GitHub Actions** — CI/CD pipeline for deployment
- **GitHub Pages** — Hosting at [push.rmaafs.com](https://push.rmaafs.com)
- **Docker / Nginx** — Alternative containerized deployment

## Deployment

Every push to the `master` branch triggers a GitHub Actions workflow that deploys the site to GitHub Pages automatically.

A `CNAME` file is included to serve the site on the custom domain `push.rmaafs.com`.

## Running Locally

### Static

Open `index.html` in a browser. Note that service workers require HTTPS or `localhost`.

### Docker

```bash
docker compose up -d
```

The app will be available at `http://localhost:8824`.

## License

This project is licensed under the [MIT License](LICENSE).
