module.exports = {
  appId: "com.interactiveknowledge.storymaps",
  productName: "Story Map Wrapper",
  asar: false,
  directories: {
    buildResources: "./",
    output: "release"
  },
  files: [
    "!.{DS_Store,eslintignore,eslintrc.yml,gitignore,sass-lint.yml}",
    "!README.md",
    "!src",
    "!release",
    "!public"
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
    target: [
      {
        target: "nsis",
        arch: [
          "x64"
        ]
      }
    ],
    icon: "build/icon.png"
  }
}