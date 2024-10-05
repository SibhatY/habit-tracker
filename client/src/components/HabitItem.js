const HabitItem = ({habit, onDelete, onMarkDay}) => {

    return (

        <div className="habit-item">
            <h3>{habit.title}</h3>

            <p>Progress: {habit.daysTracked} / {habit.goal} days</p>

            <button onClick={() => onMarkDay(habit.id)}>Mark Day as Complete</button>

            <button onClick={() => onDelete(habit.id)}>Delete</button>
        </div>
    );
};

export default HabitItem;