/*
Given a list of accounts where each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.

Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some common email to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.

After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.

Example 1:
Input: accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
Output: [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
Explanation:
The first and second John's are the same person as they have the common email "johnsmith@mail.com".
The third John and Mary are different people as none of their email addresses are used by other accounts.
We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'],
['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.
*/

//Solution: Union Find

function accountsMerge = function(accounts) {
  const parents = {};
  const email2Name = {};

  //create the find function
  function find (val) {
    if (parents[val] !== val) {
      parents[val] = find(parents[val])
    }
    return parents[val]
  }

  //create union function
  function union (valOne, valTwo) {
    let valOneRoot = find(valOne);
    let valTwoRoot = find(valTwo)
    parents[valTwoRoot] = valOneRoot
  }

  //iterate throught all emails associated to name
  for (const [name, ...emails] of accounts) {
    //for each email
    for (const email of emails) {
      //if never appeared, add to disjoin set
      if (!parents[email]) parents[email] = email
      //set email to matching name
      email2Name[email] = name
      //union current email with first email under this name
      union(email, emails[0])
    }
  }

  const emails = {};
  //for each email we encountered
  for (const email of Object.keys(parents)) {
    //find the root of the email
    const parent = find(email)
    //if not in our data strucutre, create a root
    if (!(parent in emails)) emails[parent] = []
    //add email to root
    emails[parent].push(email)
  }

  //return each key value pair, mapping key to owner of email and emails in sorted order
  return Object.entries(emails).map(([email, emails]) => [email2Name[email], ...emails.sort()])
}