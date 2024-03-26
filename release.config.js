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
      "@semantic-release/git",
      {
        // eslint-disable-next-line no-template-curly-in-string
        message: "chore(release): ${nextRelease.version} [skip ci]",
        assets: [
          "build/*",
          "CHANGELOG.md",
          "package.json",
          "package-lock.json",
        ],
      },
    ],
    "@semantic-release/github",
  ],
};
