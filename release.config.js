module.exports = {
  branches: [
    "master",
    "release/v[0-9]+\\.x",
    { name: "next/*", channel: "next" },
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
};
