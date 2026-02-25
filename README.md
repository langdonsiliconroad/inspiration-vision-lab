# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Configure landing page data endpoint

<<<<<<< codex/use-json-data-for-landing-page-0c3vw4
The landing page requests:

`/api/public/properties/by-kiosk/F7F71F04-3660-1C31-92FD-F229BFF2B8EF/frontend-data`

### Local development (no CORS issues)

Vite is configured to proxy `/api` to `http://127.0.0.1:5000`, so run:

```sh
npm run dev -- --host 127.0.0.1 --port 8080
```

This keeps browser requests same-origin (`127.0.0.1:8080`) while the dev server forwards them to your API.

### Optional override

If you need to bypass the dev proxy and call an external API directly, set:

```sh
VITE_PROPERTY_API_BASE_URL=http://103.230.158.111 npm run dev -- --host 127.0.0.1 --port 8080
=======
The landing page now loads JSON data directly from:

`$VITE_PROPERTY_API_BASE_URL/api/public/properties/by-kiosk/F7F71F04-3660-1C31-92FD-F229BFF2B8EF/frontend-data`

If `VITE_PROPERTY_API_BASE_URL` is not set, it defaults to `http://103.230.158.111`.

For local development against your local API server, run:

```sh
VITE_PROPERTY_API_BASE_URL=http://127.0.0.1:5000 npm run dev
>>>>>>> main
```
