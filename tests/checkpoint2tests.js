var pageObjects
module.exports = {
    beforeEach: browser => {
        pageObject = browser.page.obKcheckpoint2()
        pageObject
            .navigate()
            .maximizeWindow()

    },
    after: browser => {
        pageObject
            .end()
    },
    //EVEN ODD TESTS
    'Even Odd: Positive Inputs' : browser => {
        pageObject
        .pause(500)
        .click('@inputfieldEvenOdd')
        .setValue('@inputfieldEvenOdd', "1,2,3,4,5,6,7,8,9,10")
        .click('@splitButton')
        .verify.containsText('@resultsfieldEven', "[2,4,6,8,10]")
        .verify.containsText('@resultsfieldOdd', "[1,3,5,7,9]")
    },
    'Even Odd: Negative Inputs' : browser => {
        pageObject
        .pause(500)
        .click('@inputfieldEvenOdd')
        .setValue('@inputfieldEvenOdd', "-1,-2,-3,-4,-5,-6,-7,-8,-9,-10")
        .click('@splitButton')
        .verify.containsText('@resultsfieldEven', "[-2,-4,-6,-8,-10]")
        .verify.containsText('@resultsfieldOdd', "[-1,-3,-5,-7,-9]")
    },
    'Even Odd: Single Inputs - multiple' : browser => {
        pageObject
        .pause(500)
        .click('@inputfieldEvenOdd')
        .setValue('@inputfieldEvenOdd', "1")
        .click('@splitButton')
        .verify.containsText('@resultsfieldOdd', "[1]")
        .verify.containsText('@resultsfieldEven', "[]")
        .clearValue('@inputfieldEvenOdd')
        .setValue('@inputfieldEvenOdd', "2")
        .click('@splitButton')
        .verify.containsText('@resultsfieldEven', "[2]")
        .verify.containsText('@resultsfieldOdd', "[]")
    },
    'Even Odd: Single Negative Inputs - multiple' : browser => {
        pageObject
        .pause(500)
        .click('@inputfieldEvenOdd')
        .setValue('@inputfieldEvenOdd', "-1")
        .click('@splitButton')
        .verify.containsText('@resultsfieldOdd', "[-1]")
        .verify.containsText('@resultsfieldEven', "[]")
        .clearValue('@inputfieldEvenOdd')
        .setValue('@inputfieldEvenOdd', "-2")
        .click('@splitButton')
        .verify.containsText('@resultsfieldEven', "[-2]")
        .verify.containsText('@resultsfieldOdd', "[]")
    },
//Bugged Test
/*    'Even Odd: Non Acceptable characters' : browser => {
        pageObject
        .pause(500)
        .click('@inputfieldEvenOdd')
        .setValue('@inputfieldEvenOdd', "2A!")
        .click('@splitButton')
        .verify.containsText('@resultsfieldOdd', "[]")
        .verify.containsText('@resultsfieldEven', "[]")
        .setValue('@inputfieldEvenOdd', "-2A!")
        .click('@splitButton')
        .verify.containsText('@resultsfieldEven', "[]")
        .verify.containsText('@resultsfieldOdd', "[]")
*/  
    //FILTER OBJECT TESTS
    'Object Filter: Filter by Name' : browser => {
        pageObject
        .pause(500)
        .click('@inputfieldObjectFilter')
        .setValue('@inputfieldObjectFilter', "name")
        .click('@objectfilterButton')
        .verify.containsText('@resultsfieldObjectFilter', '"Jimmy Joe"')
        .verify.containsText('@resultsfieldObjectFilter', '"Jeremy Schrader"')
        .verify.containsText('@resultsfieldObjectFilter', '"Carly Armstrong"')
    },
    'Object Filter: Filter by Title' : browser => {
        pageObject
        .pause(500)
        .click('@inputfieldObjectFilter')
        .setValue('@inputfieldObjectFilter', "title")
        .click('@objectfilterButton')
        .verify.containsText('@resultsfieldObjectFilter', '"Jimmy Joe"')
        .verify.containsText('@resultsfieldObjectFilter', '"Carly Armstrong"')
    },
    'Object Filter: Filter by Age' : browser => {
        pageObject
        .pause(500)
        .click('@inputfieldObjectFilter')
        .setValue('@inputfieldObjectFilter', "age")
        .click('@objectfilterButton')
        .verify.containsText('@resultsfieldObjectFilter', '"Jimmy Joe"')
        .verify.containsText('@resultsfieldObjectFilter', '"Jeremy Schrader"')
    },
    'Object Filter: Filter by Hair Color' : browser => {
        pageObject
        .pause(500)
        .click('@inputfieldObjectFilter')
        .setValue('@inputfieldObjectFilter', "hairColor")
        .click('@objectfilterButton')
        .verify.containsText('@resultsfieldObjectFilter', '"Jeremy Schrader"')
    },
    'Object Filter: Improper use of Filter' : browser => {
        pageObject
        .pause(500)
        .click('@inputfieldObjectFilter')
        .setValue('@inputfieldObjectFilter', "Jimmy Joe")
        .click('@objectfilterButton')
        .verify.containsText('@resultsfieldObjectFilter', '[]')
    },
    //FILTER STRING TESTS
    'Filter String: Full Name Input' : browser => {
        pageObject
        .pause(500)
        .click('@inputfieldNameFilter')
        .setValue('@inputfieldNameFilter', "James")
        .click('@namefilterButton')
        .verify.containsText('@resultsfieldNameFilter', '"James"')
        .clearValue('@inputfieldNameFilter')
        .click('@inputfieldNameFilter')
        .setValue('@inputfieldNameFilter', "Jessica")
        .click('@namefilterButton')
        .verify.containsText('@resultsfieldNameFilter', '"Jessica"')
        .clearValue('@inputfieldNameFilter')
        .click('@inputfieldNameFilter')
        .setValue('@inputfieldNameFilter', "Melody")
        .click('@namefilterButton')
        .verify.containsText('@resultsfieldNameFilter', '"Melody"')
        .clearValue('@inputfieldNameFilter')
        .click('@inputfieldNameFilter')
        .setValue('@inputfieldNameFilter', "Tyler")
        .click('@namefilterButton')
        .verify.containsText('@resultsfieldNameFilter', '"Tyler"')
        .clearValue('@inputfieldNameFilter') 
        .click('@inputfieldNameFilter')
        .setValue('@inputfieldNameFilter', "Blake")
        .click('@namefilterButton')
        .verify.containsText('@resultsfieldNameFilter', '"Blake"')
        .clearValue('@inputfieldNameFilter')
        .click('@inputfieldNameFilter')
        .setValue('@inputfieldNameFilter', "Jennifer")
        .click('@namefilterButton')
        .verify.containsText('@resultsfieldNameFilter', '"Jennifer"')
        .clearValue('@inputfieldNameFilter')
        .click('@inputfieldNameFilter')
        .setValue('@inputfieldNameFilter', "Mark")
        .click('@namefilterButton')
        .verify.containsText('@resultsfieldNameFilter', '"Mark"')
        .clearValue('@inputfieldNameFilter')
        .click('@inputfieldNameFilter')
        .setValue('@inputfieldNameFilter', "Maddy")
        .click('@namefilterButton')
        .verify.containsText('@resultsfieldNameFilter', '"Maddy"')
    },
    'Filter String: Single Character Input' : browser => {
        pageObject
        .pause(500)
        .click('@inputfieldNameFilter')
        .setValue('@inputfieldNameFilter', "J")
        .click('@namefilterButton')
        .verify.containsText('@resultsfieldNameFilter', '"James"')
        .verify.containsText('@resultsfieldNameFilter', '"Jessica"')
        .verify.containsText('@resultsfieldNameFilter', '"Jennifer"')
        .clearValue('@inputfieldNameFilter')
        .setValue('@inputfieldNameFilter', "M")
        .click('@namefilterButton')
        .verify.containsText('@resultsfieldNameFilter', '"Melody"')
        .verify.containsText('@resultsfieldNameFilter', '"Mark"')
        .verify.containsText('@resultsfieldNameFilter', '"Maddy"')
        .clearValue('@inputfieldNameFilter')
        .setValue('@inputfieldNameFilter', 'a')
        .click('@namefilterButton')
        .verify.containsText('@resultsfieldNameFilter', '"James"')
        .verify.containsText('@resultsfieldNameFilter', '"Jessica"')
        .verify.containsText('@resultsfieldNameFilter', '"Blake"')
        .verify.containsText('@resultsfieldNameFilter', '"Mark"')
        .verify.containsText('@resultsfieldNameFilter', '"Maddy"')
    },
    
    'Filter String: Character Pair Inputs' : browser => {
        pageObject
        .pause(500)
        .click('@inputfieldNameFilter')
        .setValue('@inputfieldNameFilter', "es")
        .click('@namefilterButton')
        .verify.containsText('@resultsfieldNameFilter', '"James"')
        .verify.containsText('@resultsfieldNameFilter', '"Jessica"')
        .clearValue('@inputfieldNameFilter')
        .setValue('@inputfieldNameFilter', "yl")
        .click('@namefilterButton')
        .verify.containsText('@resultsfieldNameFilter', '"Tyler"')
    },

    'Filter String: Field used Improperly' : browser => {
        pageObject
        .pause(500)
        .click('@inputfieldNameFilter')
        .setValue('@inputfieldNameFilter', "z!1")
        .click('@namefilterButton')
        .verify.containsText('@resultsfieldNameFilter', '[]')
    },
    //PALINDROME TESTS

    'Palindrome: Non Palindrome Input' : browser => {
        pageObject
        .pause(500)
        .click('@inputfieldPalindrome')
        .setValue("@inputfieldPalindrome", "palindrome")
        .click('@palindromeButton')
        .verify.containsText('@resultsfieldPalindrome', 'false')
        .clearValue('@inputfieldPalindrome')
        .setValue('@inputfieldPalindrome', "!!!!1111....")
        .click('@palindromeButton')
        .verify.containsText('@resultsfieldPalindrome', 'false')
    },

    'Palindrome: Palindrome Input' : browser => {
        pageObject
        .pause(500)
        .click('@inputfieldPalindrome')
        .setValue("@inputfieldPalindrome", "racecar")
        .click('@palindromeButton')
        .verify.containsText('@resultsfieldPalindrome', 'true')
        .clearValue('@inputfieldPalindrome')
        .setValue("@inputfieldPalindrome", "11111111")
        .click('@palindromeButton')
        .verify.containsText('@resultsfieldPalindrome', 'true')
    },

    'Palindrome: Single Input' : browser => {
        pageObject
        .pause(500)
        .click('@inputfieldPalindrome')
        .setValue("@inputfieldPalindrome", "i")
        .click('@palindromeButton')
        .verify.containsText('@resultsfieldPalindrome', 'true')
    },

    //Bugged Test **Returns as True

/*    'Palindrome: No Input : browser => {
        pageObject
        .pause(500)
        .click('@splitButton')
        .verify.containsText('@resultsfieldPalindrome', '[]')
*/

    //SUM TESTING
    'Sum: Testing Positive Sum' : browser => {
        pageObject
        .pause(500)
        .click('@inputfieldSum1')
        .setValue('@inputfieldSum1', 10)
        .click('@inputfieldSum2')
        .setValue('@inputfieldSum2', 5)
        .click('@sumButton')
        .expect.element('@resultfieldSum').text.to.equal("Sum: 15")
    },
    'Sum: Testing Negative Sum' : browser => {
        pageObject
        .pause(500)
        .click('@inputfieldSum1')
        .setValue('@inputfieldSum1', -10)
        .click('@inputfieldSum2')
        .setValue('@inputfieldSum2', -5)
        .click('@sumButton')
        .expect.element('@resultfieldSum').text.to.equal("Sum: -15")
    },
    'Sum: Input Followed by Another Equation' : browser => {
        pageObject
        .pause(500)
        .setValue('@inputfieldSum1', 200)
        .setValue('@inputfieldSum2', 300)
        .click('@sumButton')
        .expect.element('@resultfieldSum').text.to.equal("Sum: 500")
        pageObject
        .clearValue('@inputfieldSum2')
        .setValue('@inputfieldSum2', -450)
        .click('@sumButton')
        .expect.element('@resultfieldSum').text.to.equal("Sum: -250")
        pageObject
        .clearValue('@inputfieldSum1')
        .setValue('@inputfieldSum1', 1000)
        .click('@sumButton')
        .expect.element('@resultfieldSum').text.to.equal("Sum: 550")
    }

   //POTENTIAL TESTS FOR SUM - Automation Failing, needs work

    /*'Sum: Testing only One Field used & 0 Before Number' : browser => {
        pageObject
        .pause(500)
        .click('@inputfieldSum1')
        .setValue('@inputfieldSum1', "100000")
        .click('@sumButton')
        .expect.element('@resultfieldSum').text.to.equal("Sum: 100000")
        pageObject
        .clearValue('@inputfieldSum1')
        .setValue('@inputfieldSum1', "0101")
        .click('@sumButton')
        .expect.element('@resultfieldSum').text.to.equal("Sum: 101")
    }, 

    'Sum: Testing Improper Character Inputs' : browser => {
        pageObject
        .pause(500)
        .click('@inputfieldSum1')
        .setValue('@inputfieldSum1', "e")
        .click('@sumButton')
        .expect.element('@resultfieldSum').text.to.equal("Sum: NaN")
    }   */
}