import React, { createContext, useContext } from "react";

const ExerciseContext = createContext([]);

export const ExerciseProvider = ({
    children,
    exercises,
    setExercises,
    bodyParts,
    setBodyParts,
}) => {
    return (
        <ExerciseContext.Provider
            value={{ exercises, setExercises, bodyParts, setBodyParts }}
        >
            {children}
        </ExerciseContext.Provider>
    );
};

export const useExercisesContext = () => {
    return useContext(ExerciseContext);
};
