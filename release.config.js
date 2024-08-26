module.exports = {
  branches: [
    "master",
    {
      name: "release/v[0-9]+\\.x",
      range: (branch) => branch.name.replace("release/v", "") + ".x",
      channel: "maintenance",
    },
  ],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
};
