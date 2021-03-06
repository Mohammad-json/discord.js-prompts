# Eamples
Examples are provided in this section. They are all listed here, separated by difficulty.

If you'd like to see how all the examples work with a bot, see the relevant [`js/index.js`](js/index.js) or [`ts/index.ts`](ts/index.ts). Note that you must set the env var `BOT_TOKEN` for them to work.

#### Table of Contents
1. Beginner

    - [askPersonDetails](#askPersonDetails)
2. Intermediate
3. Advanced

    - [askFriendNames](#askFriendNames)

## Beginner
### askPersonDetails 
Code: [ts/askPersonDetails.ts](ts/askPersonDetails.ts), [js/askPersonDetails.js](js/askPersonDetails.js)

#### Purpose
Ask for the name and age of the user, then summarizing what they said.

#### Description

The simplest possible dialogue you can create with the user with a linear flow.

#### Demonstrates
- Basic setup a linear dialogue.

#### Conceptual Flow
1. Ask the user for their name
2. Ask the user for their age
3. Respond with the user's name and age

## Intermediate
## Advanced
### askFriendNames 
Code: [ts/askFriendNames.ts](ts/askFriendNames.ts)

#### Purpose
Asking for N names of multiple friends, then summarizing what they said.

#### Description

You may sometimes want to use the same prompt within the same dialogue with the user. You can accomplish this by setting the child of a node to itself. To break out of the loop, you have to have more than 2 children for the node.

#### Demonstrates
- Conditional prompt nodes
- Recursive patterns

#### Conceptual Flow

1. Ask for number of friends
    - User responds with `n`
2. While the `names` array (storing the name of each friend) is less than `n`:
    - If `names.length` is less than `n`, ask for friend #`names.length` name and insert into names array. Proceed to loop with 2.
    - If `names.length` is >= `n`, break and go to step 3
3. Respond with the list of stored names that the user inputted

