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