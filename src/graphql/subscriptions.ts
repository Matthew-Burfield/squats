/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateExerciseDefinition = /* GraphQL */ `
  subscription OnCreateExerciseDefinition {
    onCreateExerciseDefinition {
      id
      name
      weight
      time
      distance
      calories
      height
      percentMax
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateExerciseDefinition = /* GraphQL */ `
  subscription OnUpdateExerciseDefinition {
    onUpdateExerciseDefinition {
      id
      name
      weight
      time
      distance
      calories
      height
      percentMax
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteExerciseDefinition = /* GraphQL */ `
  subscription OnDeleteExerciseDefinition {
    onDeleteExerciseDefinition {
      id
      name
      weight
      time
      distance
      calories
      height
      percentMax
      createdAt
      updatedAt
    }
  }
`;
export const onCreateWod = /* GraphQL */ `
  subscription OnCreateWod {
    onCreateWod {
      id
      date
      workouts {
        items {
          id
          wodID
          name
          rounds
          timecap
          notes
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWod = /* GraphQL */ `
  subscription OnUpdateWod {
    onUpdateWod {
      id
      date
      workouts {
        items {
          id
          wodID
          name
          rounds
          timecap
          notes
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWod = /* GraphQL */ `
  subscription OnDeleteWod {
    onDeleteWod {
      id
      date
      workouts {
        items {
          id
          wodID
          name
          rounds
          timecap
          notes
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateWorkout = /* GraphQL */ `
  subscription OnCreateWorkout {
    onCreateWorkout {
      id
      wodID
      name
      exercises {
        items {
          id
          workoutID
          exerciseDefinitionID
          weight
          time
          distance
          calories
          height
          sets
          reps
          percentMax
          createdAt
          updatedAt
        }
        nextToken
      }
      rounds
      timecap
      notes
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateWorkout = /* GraphQL */ `
  subscription OnUpdateWorkout {
    onUpdateWorkout {
      id
      wodID
      name
      exercises {
        items {
          id
          workoutID
          exerciseDefinitionID
          weight
          time
          distance
          calories
          height
          sets
          reps
          percentMax
          createdAt
          updatedAt
        }
        nextToken
      }
      rounds
      timecap
      notes
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteWorkout = /* GraphQL */ `
  subscription OnDeleteWorkout {
    onDeleteWorkout {
      id
      wodID
      name
      exercises {
        items {
          id
          workoutID
          exerciseDefinitionID
          weight
          time
          distance
          calories
          height
          sets
          reps
          percentMax
          createdAt
          updatedAt
        }
        nextToken
      }
      rounds
      timecap
      notes
      createdAt
      updatedAt
    }
  }
`;
export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise {
    onCreateExercise {
      id
      workoutID
      exerciseDefinitionID
      exerciseDefinition {
        id
        name
        weight
        time
        distance
        calories
        height
        percentMax
        createdAt
        updatedAt
      }
      weight
      time
      distance
      calories
      height
      sets
      reps
      percentMax
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise {
    onUpdateExercise {
      id
      workoutID
      exerciseDefinitionID
      exerciseDefinition {
        id
        name
        weight
        time
        distance
        calories
        height
        percentMax
        createdAt
        updatedAt
      }
      weight
      time
      distance
      calories
      height
      sets
      reps
      percentMax
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise {
    onDeleteExercise {
      id
      workoutID
      exerciseDefinitionID
      exerciseDefinition {
        id
        name
        weight
        time
        distance
        calories
        height
        percentMax
        createdAt
        updatedAt
      }
      weight
      time
      distance
      calories
      height
      sets
      reps
      percentMax
      createdAt
      updatedAt
    }
  }
`;
export const onCreateExerciseResult = /* GraphQL */ `
  subscription OnCreateExerciseResult {
    onCreateExerciseResult {
      id
      wodId
      wod {
        id
        date
        workouts {
          nextToken
        }
        createdAt
        updatedAt
      }
      exerciseDefinitionID
      exerciseDefinition {
        id
        name
        weight
        time
        distance
        calories
        height
        percentMax
        createdAt
        updatedAt
      }
      date
      weight
      time
      distance
      calories
      height
      sets
      reps
      percentMax
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateExerciseResult = /* GraphQL */ `
  subscription OnUpdateExerciseResult {
    onUpdateExerciseResult {
      id
      wodId
      wod {
        id
        date
        workouts {
          nextToken
        }
        createdAt
        updatedAt
      }
      exerciseDefinitionID
      exerciseDefinition {
        id
        name
        weight
        time
        distance
        calories
        height
        percentMax
        createdAt
        updatedAt
      }
      date
      weight
      time
      distance
      calories
      height
      sets
      reps
      percentMax
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteExerciseResult = /* GraphQL */ `
  subscription OnDeleteExerciseResult {
    onDeleteExerciseResult {
      id
      wodId
      wod {
        id
        date
        workouts {
          nextToken
        }
        createdAt
        updatedAt
      }
      exerciseDefinitionID
      exerciseDefinition {
        id
        name
        weight
        time
        distance
        calories
        height
        percentMax
        createdAt
        updatedAt
      }
      date
      weight
      time
      distance
      calories
      height
      sets
      reps
      percentMax
      createdAt
      updatedAt
    }
  }
`;
