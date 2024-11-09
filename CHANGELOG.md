## [v0.1.0] - 2024-10-08
### Overview
- Initial development of app features.
- Basic functionality for habit tracking.

## [v0.2.0] - 2024-10-08
### Overview
### Added/Changed
- Replacement of loading progress bar with progress badge that dynamically changes color as progress is made
- Removal of "Days tracked" as a separate component and integrated visual progress with text
### Fixed
- Tracking progress going past the limit chosen by the user.


## [v0.3.0] - 2024-10-11
### Overview
- Major ongoing rework of tracking habits. Current method is too simple and many more variables need to be accounted for. Being able to limit the user to one mark a day, keeping track of date/time, allowing the user to still mark days despite missing previous days within the time-frame, and much more...
### Added/Changed
- Updated the Habit data structure to contain a list of dates instead of simple "daysTracked" number, as well as tracking the start and end date for the habit duration.
- Updated the markDayHandling function in HabitList to track the date when a habit is marked as complete and prevent marking the same day more than once.
- Added a tooltip to display the dates that were tracked when a user hovers over the tracking badge. (Temporary)
- Added local visual Streak Feature to motivate user to keep going!
### Fixed
- Some issues with local browser storage and development changes breaking the app. Some double checking in code was added to allow user to bypass. Will work on separating developmental code with working code.


## [v0.4.0] - 2024-15-08
### Overview
- Working on adding date simulation to work on features properly. Also cleaning up and altering some features.
- Still struggling with streak properties
- Realized that the "endDate" is set based on the goal, and is calculated assuming that the user will complete the habit everyday, but since skipping days is allowed it does not really have any use this way. 
### Added/Changed
- Simulate Date feature to skip to future days one by one to test the markDayHandling and streaks.
    - Added button to skip date and text to express what the simulated date is.
    - Added another button for resetting the simulated date .
- changed id generation to actually be unique by using new date and time, might switch to uuid soon.
- Added validation to prevent user from creating a habit with no title/text.
### Fixed
- calculating progress previously had a risk of dividing by zero, a safety check was added.


## [v0.5.0] - 2024-16-08
### Overview
- Due to the allowance of skipping days to encourage users to be able to finish tasks that they set for themselves despite "skipping" days or setbacks, tracking an "endDate" based on the chosen goal is not useful anymore since the actual end date is not fixed anymore. May be reintegrated in the future to show statistics but not a necessary feature I want right now.
### Added/Changed
 - Replacing the "Add Habit" form with a modal. Allows for only one form to be open at a time and cleans up the look of the app.
### Fixed
- Issue with streak not tracking after breaking a previous streak.


## [v0.5.1] - 2024-18-08
### Overview
- Focused on improving the visual layout and user experience of the dashboard and habit tracking system.
### Added/Changed
- Updated button styles for consistency
Added/Moved a floating "+" button on the bottom right for easier habit creation access and cleanliness.
- Designated Toolbar design for date simulation and resetting functions
- Added horizontal scroll feature for titles that exceeded a certain amount of space
### Fixed
- Issue with text and indicator on habit card being able to increase the size of the card.


## [v0.5.5] - 2024-10-21
### Overview
- New Feature: Habit Categories!
    - When creating a habit card, have the option to choose a category that resembles the type of task you created.
- Clean up and visual changes of other parts of the app as well.

### Added/Changed
- Addition of 4 different categories for a habit (Health, Work, Study, Personal).
    - Addition of dropdown filter by categories to see specific habits.

### Fixed



## [v0.5.8] - 2024-11-03
### Overview
- Splitting up progress for cleaner changelog
- Redefining "Dashboard" to a "HabitsPage" to have the current page solely be dedicated to habits.
- Preparing app for new page to display analytics and information about the users habits.
### Added/Changed
- Reintroduction of "Completion dates" so app can keep track of when user finished a habit
- Introduction of habit card visual changes when a user finishes a habit. Now marks the habit as completed. (Working on dismissing the habit once completed)
### Fixed


## [v0.5.9] - 2024-11-09
### Overview
- Progress has been a bit slow recently, did not want to start on any major feature work before adding documentation and readme now that i have a good foundation, this includes a small feature of the toolbar as well as styling changes for cleanliness.
- Full documentation for each file and full readme.
- Still an issue with overlapping css on toolbar
### Added/Changed
- Altered the toolbar to be expandable and collapsible
    - When clicking on the "Simulated Date" section, the "filter" section expands.
- Styled the NavBar to be more visually appealing with a title and links to multiple pages of the app.
- Documentation and comments.
- Dashboard and Homepage css files.
### Fixed
- Issue with "dismiss" button not appearing after completing a habit card thus being unable to clear a card from the list.
- Habit cards visually overlapping.