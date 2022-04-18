let puppeteer = require('puppeteer')

//by default .launch()--> headless hota hai means dikhega nahi
let browserWillBeLaunchedPromise = puppeteer.launch({
    headless:false,
    defaultViewport:null, //fullscreen property
    rgs: ['--start-maximized']
})

browserWillBeLaunchedPromise.then(function(browserInstance){
    let newTabPromise = browserInstance.newPage()
    return newTabPromise;
    
}).then(function(newTab){
console.log('new tab opened');
let pageWillBeOpenedPromise = newTab.goto('https://www.pepcoding.com')
return pageWillBeOpenedPromise

}).then(function(webpage){
    console.log('website opened')
})
