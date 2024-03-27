/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: ["develop"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
      },
    ],
    "@semantic-release/git",
    "@semantic-release/github",
  ],
};