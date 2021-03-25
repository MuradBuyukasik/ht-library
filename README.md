# The High Thumos Library

This is an ongoing project for the [High Thumos](https://gotthumos.com/) Discord group.

In Discord we have a "book of the month" which we read as a community. The aim for this project is to provide a centralized hub exclusive for Discord members to create and store notes on the books they read in an organized manner, so that they can be easily accessed for future reference or to prepare material for discussion in voice chat.

# Use cases
Users log in with Discord and are only granted access if they are in the High Thumos server.

After logging in, the user is presented with an introductory text and a list of folders & files created by other users.

The user can open these folders and preview the files within them. He can also edit the file directly and save it's contents for other's to see.

To prevent griefing it is possible to request community approval as a pre-requisite in order to save a file. If enough users approve, the file will be updated to reflect the changes made.

Each time a file gets edited, created or deleted, the app has to keep track of *what, when and who* made the change.

To encourage user contribution, a user has it's own profile page which shows his latest edits and counts how many times he has contributed to the Library. There is also a leaderboard page which ranks users based on their contribution.

Users can collaborate on a single file simultaneously and changes will be reflected in realtime. Each user has it's own randomized color and it is shown which user is currently viewing the file.

When a user highlights text with his mouse, the highlighting will be shown to other users in realtime to allow for better communication when discussing a book.

# MoSCoW
*Must have, should have, could have, wont have*

| must have (bare minimum)                     | should have                 | could have (nice to have) | wont have |
| -------------------------------------------- | --------------------------- | ------------------------- | --------- |
| Discord authentication & authorization       | Approval requests for edits | Profile pages             |           |
| Logging file changes                         | Live collaboration          | Leaderboards              |           |
| Create, read, update, delete files & folders | Live collaboration tools    |                           |           |
| Introductory page for each folder            |                             |                           |           |
