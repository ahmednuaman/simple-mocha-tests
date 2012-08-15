// get our assertation function ready
var expect = require('chai').expect;

// get zombie ready
var zombie = require('zombie');

// load in our js file
var scripts = require('../../scripts');

// let's test!
// first, we start by testing our scripts files
describe('Testing our scripts file', function()
{
    // our first test
    // like css we use # to determine that we're testing a function within our namespace, in this case 'scripts'
    describe('#multiplyByN', function()
    {
        it('should return number * multiplier', function()
        {
            expect(scripts.multiplyByN(2, 2)).to.equal(4); // 2 * 2 = 4
        });
    });

    // so now how about we test some html loaded with zombie?
    // I'm running the repo under http://tests.dev/simple-mocha-tests/
    // I'm pretty sure that your url will be different so make sure you set it below
    describe('testing zombie', function()
    {
        // create a new browser instance
        var browser = new zombie();

        it('check that our h1 text is correct', function(done)
        {
            // tell zombie to go to our url
            browser.visit('http://tests.dev/simple-mocha-tests/', function()
            {
                // if you check the html you'll see we've loaded jquery
                // we're gonna use this to run some tests
               expect(browser.window.$('h1').text()).to.equal('Here is a simple web page');

               // you'll notice that this is an async test, so when we define it, we use the done argument to tell mocha we're done
               done(); 
            });
        });
    });
});