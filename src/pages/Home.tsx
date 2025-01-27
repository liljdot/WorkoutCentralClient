import { useContext, useEffect, useReducer, useState } from "react"
import { Workout } from "../types"
import WorkoutDetail from "../components/WorokutDetail"
import WorkoutForm from "../components/WorkoutForm"
import "./styles.css"
import { BSModal } from "../components/Modal"
import { workoutFormInitialState, workoutFormReducer } from "../reducers/workoutFormReducer"
import { workoutContext } from "../contexts/workoutContext"
import { allWorkoutsContext } from "../contexts/allWorkoutsContext"
import { ErrorResponse } from "react-router-dom"
import { rejectJson } from "../hooks/rejectJson"
import { useLogout } from "../hooks/useLogout"
import useGetHost from "../hooks/useGetHost"

const Home: React.FC = () => {
    const host = useGetHost()
    const context = useContext(allWorkoutsContext)
    const {logout} = useLogout()
    if (!context) {
        return
    }

    const {workouts, workoutsDispatch} = context
    const [workoutsError, setWorkoutsError] = useState<boolean>(false)
    const [workoutFormState, workoutFormDispatch] = useReducer(workoutFormReducer, workoutFormInitialState)

    useEffect(() => {
        fetch(`https://${host}/api/workouts`, {
            credentials: "include"
        })
            .then((res: Response) => !res.ok ? rejectJson(res) : res.json())
            .then((val: Workout[]) => workoutsDispatch({type: "SET_ALL_WORKOUTS", payload: val}))
            .catch((e: ErrorResponse) => {e.status != 401 ? setWorkoutsError(true) : logout(`https://${host}/api/user/logout`)})
    }, [])

    return (
        < workoutContext.Provider value={{workoutFormState, workoutFormDispatch}}>
            <div className="home">
                <div className="workouts">
                    {workoutsError && (
                        <BSModal>Error Fetching Workouts</BSModal>
                    )}
                    {workouts ? workouts.map(workout => (
                        <WorkoutDetail key={workout.id} workout={workout} />
                    )) : <p>No Available Workouts</p>}
                </div>
                <WorkoutForm />
            </div>
        </workoutContext.Provider>
    )
}

export default Home