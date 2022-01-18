const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

const credentials = [
  { id: 1, username: "mpower@mail.com", password: "1234" },
  { id: 2, username: "power@mal.com", password: "123" },
];

function signinTest() {
  describe("Sign in test", function () {
    this.timeout(20000);
    let webDriver = new Builder().forBrowser("chrome").build();
    webDriver.manage().window().maximize();

    it("Providing wrong password - expected alert Password incorrect, try again.", async () => {
      await webDriver.get("http://localhost:3000/signIn");
      await webDriver
        .findElement(By.className("email"))
        .sendKeys(credentials[0].username);
      await webDriver
        .findElement(By.className("password"))
        .sendKeys(credentials[1].password);
      await webDriver.sleep(3000);
      await webDriver.findElement(By.className("linkSignIn")).click();
      await webDriver.sleep(3000);
      const alert = await webDriver.switchTo().alert().getText();
      assert.strictEqual(alert, "Password incorrect, try again.");

      //webDriver.quit();
    });

    /*   it("Providing wrong mail - expected alert Mail incorrect, try again.", async () => {
      await webDriver.get("http://localhost:3000/signIn");
      await webDriver
        .findElement(By.className("email"))
        .sendKeys(credentials[1].username);
      await webDriver
        .findElement(By.className("password"))
        .sendKeys(credentials[0].password);
      await webDriver.sleep(3000);
      await webDriver.findElement(By.className("linkSignIn")).click();
      await webDriver.sleep(3000);
      const alert = await webDriver.switchTo().alert().getText();
      assert.strictEqual(alert, "Mail incorrect, try again.");
      
      //webDriver.quit();
    }); */
    it("Providing correct password - expected alert welcome power", async () => {
      await webDriver.get("http://localhost:3000/signIn");
      await webDriver
        .findElement(By.className("email"))
        .sendKeys(credentials[0].username);
      await webDriver
        .findElement(By.className("password"))
        .sendKeys(credentials[0].password);
      await webDriver.sleep(3000);
      await webDriver.findElement(By.className("linkSignIn")).click();
      await webDriver.sleep(3000);
      const alert = await webDriver.switchTo().alert().getText();
      assert.strictEqual(alert, "welcome power");
      webDriver.quit();
    });
  });
}

signinTest();
