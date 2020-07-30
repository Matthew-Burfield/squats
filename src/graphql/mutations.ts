/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createExerciseDefinition = /* GraphQL */ `
  mutation CreateExerciseDefinition(
    $input: CreateExerciseDefinitionInput!
    $condition: ModelExerciseDefinitionConditionInput
  ) {
    createExerciseDefinition(input: $input, condition: $condition) {
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
export const updateExerciseDefinition = /* GraphQL */ `
  mutation UpdateExerciseDefinition(
    $input: UpdateExerciseDefinitionInput!
    $condition: ModelExerciseDefinitionConditionInput
  ) {
    updateExerciseDefinition(input: $input, condition: $condition) {
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
export const deleteExerciseDefinition = /* GraphQL */ `
  mutation DeleteExerciseDefinition(
    $input: DeleteExerciseDefinitionInput!
    $condition: ModelExerciseDefinitionConditionInput
  ) {
    deleteExerciseDefinition(input: $input, condition: $condition) {
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
export const createWod = /* GraphQL */ `
  mutation CreateWod(
    $input: CreateWodInput!
    $condition: ModelWodConditionInput
  ) {
    createWod(input: $input, condition: $condition) {
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
export const updateWod = /* GraphQL */ `
  mutation UpdateWod(
    $input: UpdateWodInput!
    $condition: ModelWodConditionInput
  ) {
    updateWod(input: $input, condition: $condition) {
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
export const deleteWod = /* GraphQL */ `
  mutation DeleteWod(
    $input: DeleteWodInput!
    $condition: ModelWodConditionInput
  ) {
    deleteWod(input: $input, condition: $condition) {
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
export const createWorkout = /* GraphQL */ `
  mutation CreateWorkout(
    $input: CreateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    createWorkout(input: $input, condition: $condition) {
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
export const updateWorkout = /* GraphQL */ `
  mutation UpdateWorkout(
    $input: UpdateWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    updateWorkout(input: $input, condition: $condition) {
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
export const deleteWorkout = /* GraphQL */ `
  mutation DeleteWorkout(
    $input: DeleteWorkoutInput!
    $condition: ModelWorkoutConditionInput
  ) {
    deleteWorkout(input: $input, condition: $condition) {
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
export const createExercise = /* GraphQL */ `
  mutation CreateExercise(
    $input: CreateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    createExercise(input: $input, condition: $condition) {
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
export const updateExercise = /* GraphQL */ `
  mutation UpdateExercise(
    $input: UpdateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    updateExercise(input: $input, condition: $condition) {
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
export const deleteExercise = /* GraphQL */ `
  mutation DeleteExercise(
    $input: DeleteExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    deleteExercise(input: $input, condition: $condition) {
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
export const createExerciseResult = /* GraphQL */ `
  mutation CreateExerciseResult(
    $input: CreateExerciseResultInput!
    $condition: ModelExerciseResultConditionInput
  ) {
    createExerciseResult(input: $input, condition: $condition) {
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
export const updateExerciseResult = /* GraphQL */ `
  mutation UpdateExerciseResult(
    $input: UpdateExerciseResultInput!
    $condition: ModelExerciseResultConditionInput
  ) {
    updateExerciseResult(input: $input, condition: $condition) {
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
export const deleteExerciseResult = /* GraphQL */ `
  mutation DeleteExerciseResult(
    $input: DeleteExerciseResultInput!
    $condition: ModelExerciseResultConditionInput
  ) {
    deleteExerciseResult(input: $input, condition: $condition) {
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
