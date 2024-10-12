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