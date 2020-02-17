const directConnect = true;
const specs = ["spec/*.spec.js"];

const headed = {
  directConnect,
  specs,
  capabilities: {
    browserName: "chrome"
  }
};

const headless = {
  directConnect,
  specs,
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless", "--no-sandbox", "--disable-gpu"]
    }
  }
};

const config = process.env.GITHUB_ACTIONS ? headless : headed;

exports.config = config;
