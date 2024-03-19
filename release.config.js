/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: ["develop"],
  plugins: [
    // https://github.com/semantic-release/commit-analyzer
    "@semantic-release/commit-analyzer",

    // https://github.com/semantic-release/release-notes-generator
    "@semantic-release/release-notes-generator",

    // https://github.com/semantic-release/changelog
    "@semantic-release/changelog",

    // https://github.com/semantic-release/npm
    "@semantic-release/npm",

    // https://github.com/semantic-release/exec
    [
      "@semantic-release/exec",
      {
        // eslint-disable-next-line no-template-curly-in-string
        prepareCmd: "./release-prepare.sh ${nextRelease.version}",
      },
    ],

    // https://github.com/semantic-release/git
    [
      "@semantic-release/git",
      {
        // eslint-disable-next-line no-template-curly-in-string
        message: "chore(release): ${nextRelease.version} [skip ci]",
        assets: [
          "charts/self-service-ui/values.yaml",
          "CHANGELOG.md",
          "package.json",
          "package-lock.json",
        ],
      },
    ],

    // https://github.com/semantic-release/github
    "@semantic-release/github",
  ],
};
