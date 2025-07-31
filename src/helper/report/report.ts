const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright Automation Report",
    pageTitle: "Coffeeshop App Test Report",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "132.0.1",
        },
        device: "Sogeti - PC",
        platform: {
            name: "Windows",
            version: "11",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Coffeeshop Application" },
            { label: "Release", value: "1.1.1" },
            { label: "Cycle", value: "Smoke-1" }
        ],
    },
});