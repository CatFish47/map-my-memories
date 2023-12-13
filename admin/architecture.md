Last updated 12/12/2023

This file will be used to outline the architectural design of the application as well as outline some of the technical details of the app.

# Techstack

## Frontend

-   Framework: React
-   File Upload: React Dropzone
-   Storage: IndexedDB
-   Map API: Leaflet with OpenStreetMap

## Backend

-   Node.js
-   Serverless(?): AWS Lambda
-   Authentication(?): JWT

## Additional Considerations

-   File Storage and Access API: File System API
-   PWA

# CI/CD Pipeline

## CI

-   Typescript Linting: ESLint with Prettier
-   CSS Linting: Stylelint
-   Code Quality: Codacy
-   Testing: Jest
-   Github Actions to run CI

## CD

-   Netlify to deploy branch previews
-   Netlify to deploy dev branch
-   [Website](https://m3.grantcheng.com) to deploy prod branch
-   [Website](https://m3-docs.grantcheng.com) to deploy docs
