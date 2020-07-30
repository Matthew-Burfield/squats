/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getExerciseDefinition = /* GraphQL */ `
  query GetExerciseDefinition($id: ID!) {
    getExerciseDefinition(id: $id) {
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
export const listExerciseDefinitions = /* GraphQL */ `
  query ListExerciseDefinitions(
    $filter: ModelExerciseDefinitionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExerciseDefinitions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getWod = /* GraphQL */ `
  query GetWod($id: ID!) {
    getWod(id: $id) {
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
export const listWods = /* GraphQL */ `
  query ListWods(
    $filter: ModelWodFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWods(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        workouts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getWorkout = /* GraphQL */ `
  query GetWorkout($id: ID!) {
    getWorkout(id: $id) {
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
export const listWorkouts = /* GraphQL */ `
  query ListWorkouts(
    $filter: ModelWorkoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        wodID
        name
        exercises {
          nextToken
        }
        rounds
        timecap
        notes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getExercise = /* GraphQL */ `
  query GetExercise($id: ID!) {
    getExercise(id: $id) {
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
export const listExercises = /* GraphQL */ `
  query ListExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getExerciseResult = /* GraphQL */ `
  query GetExerciseResult($id: ID!) {
    getExerciseResult(id: $id) {
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
export const listExerciseResults = /* GraphQL */ `
  query ListExerciseResults(
    $filter: ModelExerciseResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExerciseResults(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        wodId
        wod {
          id
          date
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
      nextToken
    }
  }
`;
