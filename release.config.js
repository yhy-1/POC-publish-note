module.exports = {
  branches: [
    "master",
    { name: "next/*", channel: "next" },
    { name: "release/v*", range: ".x", channel: "maintenance" },
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
};
