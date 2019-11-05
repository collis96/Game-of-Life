# Game-of-Life

Game of Life pre-work for technical interview.

## Design decisions day 1:

I'll be using JavaScript as the language of choice, due to the nature of being able to host a live demo of the finished project.

Data will need to be stored in a two-dimensional grid, my initial thoughts are that at least 2 two-dimensional arrays will be needed, one to hold the current state of the board and one for the next state.
This may not be the most efficient implementation I'll consider alternatives once this is implemented.

No computer has infinite memory, to address this, I will treat the top and bottom edges as they are stitched together and the same for the left and right edges of the screen.

Based on the requirements for a two-dimensional grid I will be wanting to have a graphical view of this grid.

The Model-View-Controller pattern would work well for this as the data is constantly updating the view at each iteration.

Assumption: The user will want to create their own game seeds so this is where the controller aspect will become relevant.


