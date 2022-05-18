export default class Research {
  constructor(browser) {
    for (let p of browser.findAllChildrenOf("John")) {
      console.log(`John has a child named ${p.name}`);
    }
  }
}
