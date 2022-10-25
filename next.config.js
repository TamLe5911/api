/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const baseUrl = '';
const cmsApiKey = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6Ijc4NjIzZTc3LTVjNDItNDYxNS1hNjQwLTU4YTg4ZDBkMjA4MCJ9.eyJpYXQiOiIxNjYxNzY2OTg4IiwibGFuZ3VhZ2UiOiJlbiJ9.9EeE0b01OV3vEq_2UuOm6kFLNCdZPcUCzxdhk5PtPoKsjq9jUJIJWLJemVXDn26sfGvMHrUxpJLlh2zOLu45Uw';
const apiEndpoint = 'https://apitest.oneibc.com/frontend/v3/'
module.exports = withBundleAnalyzer({
    poweredByHeader: false,
    trailingSlash: true,
    basePath: baseUrl,
    env: {
        baseUrl,
        cmsApiKey,
        apiEndpoint
    },
    reactStrictMode: true,

    // The starter code load resources from `public` folder with `router.basePath` in React components.
    // So, the source code is "basePath-ready".
    // You can remove `basePath` if you don't need it.
    reactStrictMode: true,
});