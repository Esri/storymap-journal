module.exports = {
  appId: "com.interactiveknowledge.storymaps",
  productName: "Story Map Wrapper",
  asar: false,
  directories: {
    buildResources: "./",
    output: "release"
  },
  files: [
    "!.{DS_Store,eslintignore,eslintrc.yml,gitignore,sass-cache,sass-lint.yml,vscode}",
    "!CONTRIBUTING.md",
    "!README.*",
    "!api/*",
    "!public",
    "!release",
    "!src",
    "!static/download/**/*"
  ],
  nsis: {
    "oneClick": true
  },
  mac: {
    target: [
      {
        target: "dmg",
        arch: [
          "x64"
        ]
      }
    ],
    icon: "build/icon.png"
  },
  win: {
    icon: "build/icon.png",
    publisherName: "Interactive Knowledge",
    target: [
      {
        target: "nsis",
        arch: [
          "x64"
        ]
      }
    ]
  }
}