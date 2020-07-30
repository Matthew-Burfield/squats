/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateExerciseDefinitionInput = {
  id?: string | null,
  name: string,
  weight: boolean,
  time: boolean,
  distance: boolean,
  calories: boolean,
  height: boolean,
  percentMax: boolean,
};

export type ModelExerciseDefinitionConditionInput = {
  name?: ModelStringInput | null,
  weight?: ModelBooleanInput | null,
  time?: ModelBooleanInput | null,
  distance?: ModelBooleanInput | null,
  calories?: ModelBooleanInput | null,
  height?: ModelBooleanInput | null,
  percentMax?: ModelBooleanInput | null,
  and?: Array< ModelExerciseDefinitionConditionInput | null > | null,
  or?: Array< ModelExerciseDefinitionConditionInput | null > | null,
  not?: ModelExerciseDefinitionConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateExerciseDefinitionInput = {
  id: string,
  name?: string | null,
  weight?: boolean | null,
  time?: boolean | null,
  distance?: boolean | null,
  calories?: boolean | null,
  height?: boolean | null,
  percentMax?: boolean | null,
};

export type DeleteExerciseDefinitionInput = {
  id?: string | null,
};

export type CreateWodInput = {
  id?: string | null,
  date: string,
};

export type ModelWodConditionInput = {
  date?: ModelStringInput | null,
  and?: Array< ModelWodConditionInput | null > | null,
  or?: Array< ModelWodConditionInput | null > | null,
  not?: ModelWodConditionInput | null,
};

export type UpdateWodInput = {
  id: string,
  date?: string | null,
};

export type DeleteWodInput = {
  id?: string | null,
};

export type CreateWorkoutInput = {
  id?: string | null,
  wodID: string,
  name?: string | null,
  rounds?: number | null,
  timecap?: number | null,
  notes?: string | null,
};

export type ModelWorkoutConditionInput = {
  wodID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  rounds?: ModelIntInput | null,
  timecap?: ModelIntInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelWorkoutConditionInput | null > | null,
  or?: Array< ModelWorkoutConditionInput | null > | null,
  not?: ModelWorkoutConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateWorkoutInput = {
  id: string,
  wodID?: string | null,
  name?: string | null,
  rounds?: number | null,
  timecap?: number | null,
  notes?: string | null,
};

export type DeleteWorkoutInput = {
  id?: string | null,
};

export type CreateExerciseInput = {
  id?: string | null,
  workoutID: string,
  exerciseDefinitionID: string,
  weight?: number | null,
  time?: number | null,
  distance?: number | null,
  calories?: number | null,
  height?: number | null,
  sets?: number | null,
  reps?: number | null,
  percentMax?: number | null,
};

export type ModelExerciseConditionInput = {
  workoutID?: ModelIDInput | null,
  exerciseDefinitionID?: ModelIDInput | null,
  weight?: ModelIntInput | null,
  time?: ModelIntInput | null,
  distance?: ModelIntInput | null,
  calories?: ModelIntInput | null,
  height?: ModelIntInput | null,
  sets?: ModelIntInput | null,
  reps?: ModelIntInput | null,
  percentMax?: ModelIntInput | null,
  and?: Array< ModelExerciseConditionInput | null > | null,
  or?: Array< ModelExerciseConditionInput | null > | null,
  not?: ModelExerciseConditionInput | null,
};

export type UpdateExerciseInput = {
  id: string,
  workoutID?: string | null,
  exerciseDefinitionID?: string | null,
  weight?: number | null,
  time?: number | null,
  distance?: number | null,
  calories?: number | null,
  height?: number | null,
  sets?: number | null,
  reps?: number | null,
  percentMax?: number | null,
};

export type DeleteExerciseInput = {
  id?: string | null,
};

export type CreateExerciseResultInput = {
  id?: string | null,
  wodId: string,
  exerciseDefinitionID: string,
  date: string,
  weight?: number | null,
  time?: number | null,
  distance?: number | null,
  calories?: number | null,
  height?: number | null,
  sets?: number | null,
  reps?: number | null,
  percentMax?: number | null,
};

export type ModelExerciseResultConditionInput = {
  wodId?: ModelIDInput | null,
  exerciseDefinitionID?: ModelIDInput | null,
  date?: ModelStringInput | null,
  weight?: ModelIntInput | null,
  time?: ModelIntInput | null,
  distance?: ModelIntInput | null,
  calories?: ModelIntInput | null,
  height?: ModelIntInput | null,
  sets?: ModelIntInput | null,
  reps?: ModelIntInput | null,
  percentMax?: ModelIntInput | null,
  and?: Array< ModelExerciseResultConditionInput | null > | null,
  or?: Array< ModelExerciseResultConditionInput | null > | null,
  not?: ModelExerciseResultConditionInput | null,
};

export type UpdateExerciseResultInput = {
  id: string,
  wodId?: string | null,
  exerciseDefinitionID?: string | null,
  date?: string | null,
  weight?: number | null,
  time?: number | null,
  distance?: number | null,
  calories?: number | null,
  height?: number | null,
  sets?: number | null,
  reps?: number | null,
  percentMax?: number | null,
};

export type DeleteExerciseResultInput = {
  id?: string | null,
};

export type ModelExerciseDefinitionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  weight?: ModelBooleanInput | null,
  time?: ModelBooleanInput | null,
  distance?: ModelBooleanInput | null,
  calories?: ModelBooleanInput | null,
  height?: ModelBooleanInput | null,
  percentMax?: ModelBooleanInput | null,
  and?: Array< ModelExerciseDefinitionFilterInput | null > | null,
  or?: Array< ModelExerciseDefinitionFilterInput | null > | null,
  not?: ModelExerciseDefinitionFilterInput | null,
};

export type ModelWodFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelWodFilterInput | null > | null,
  or?: Array< ModelWodFilterInput | null > | null,
  not?: ModelWodFilterInput | null,
};

export type ModelWorkoutFilterInput = {
  id?: ModelIDInput | null,
  wodID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  rounds?: ModelIntInput | null,
  timecap?: ModelIntInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelWorkoutFilterInput | null > | null,
  or?: Array< ModelWorkoutFilterInput | null > | null,
  not?: ModelWorkoutFilterInput | null,
};

export type ModelExerciseFilterInput = {
  id?: ModelIDInput | null,
  workoutID?: ModelIDInput | null,
  exerciseDefinitionID?: ModelIDInput | null,
  weight?: ModelIntInput | null,
  time?: ModelIntInput | null,
  distance?: ModelIntInput | null,
  calories?: ModelIntInput | null,
  height?: ModelIntInput | null,
  sets?: ModelIntInput | null,
  reps?: ModelIntInput | null,
  percentMax?: ModelIntInput | null,
  and?: Array< ModelExerciseFilterInput | null > | null,
  or?: Array< ModelExerciseFilterInput | null > | null,
  not?: ModelExerciseFilterInput | null,
};

export type ModelExerciseResultFilterInput = {
  id?: ModelIDInput | null,
  wodId?: ModelIDInput | null,
  exerciseDefinitionID?: ModelIDInput | null,
  date?: ModelStringInput | null,
  weight?: ModelIntInput | null,
  time?: ModelIntInput | null,
  distance?: ModelIntInput | null,
  calories?: ModelIntInput | null,
  height?: ModelIntInput | null,
  sets?: ModelIntInput | null,
  reps?: ModelIntInput | null,
  percentMax?: ModelIntInput | null,
  and?: Array< ModelExerciseResultFilterInput | null > | null,
  or?: Array< ModelExerciseResultFilterInput | null > | null,
  not?: ModelExerciseResultFilterInput | null,
};

export type CreateExerciseDefinitionMutationVariables = {
  input: CreateExerciseDefinitionInput,
  condition?: ModelExerciseDefinitionConditionInput | null,
};

export type CreateExerciseDefinitionMutation = {
  createExerciseDefinition:  {
    __typename: "ExerciseDefinition",
    id: string,
    name: string,
    weight: boolean,
    time: boolean,
    distance: boolean,
    calories: boolean,
    height: boolean,
    percentMax: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateExerciseDefinitionMutationVariables = {
  input: UpdateExerciseDefinitionInput,
  condition?: ModelExerciseDefinitionConditionInput | null,
};

export type UpdateExerciseDefinitionMutation = {
  updateExerciseDefinition:  {
    __typename: "ExerciseDefinition",
    id: string,
    name: string,
    weight: boolean,
    time: boolean,
    distance: boolean,
    calories: boolean,
    height: boolean,
    percentMax: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteExerciseDefinitionMutationVariables = {
  input: DeleteExerciseDefinitionInput,
  condition?: ModelExerciseDefinitionConditionInput | null,
};

export type DeleteExerciseDefinitionMutation = {
  deleteExerciseDefinition:  {
    __typename: "ExerciseDefinition",
    id: string,
    name: string,
    weight: boolean,
    time: boolean,
    distance: boolean,
    calories: boolean,
    height: boolean,
    percentMax: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWodMutationVariables = {
  input: CreateWodInput,
  condition?: ModelWodConditionInput | null,
};

export type CreateWodMutation = {
  createWod:  {
    __typename: "Wod",
    id: string,
    date: string,
    workouts:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        wodID: string,
        name: string | null,
        rounds: number | null,
        timecap: number | null,
        notes: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWodMutationVariables = {
  input: UpdateWodInput,
  condition?: ModelWodConditionInput | null,
};

export type UpdateWodMutation = {
  updateWod:  {
    __typename: "Wod",
    id: string,
    date: string,
    workouts:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        wodID: string,
        name: string | null,
        rounds: number | null,
        timecap: number | null,
        notes: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWodMutationVariables = {
  input: DeleteWodInput,
  condition?: ModelWodConditionInput | null,
};

export type DeleteWodMutation = {
  deleteWod:  {
    __typename: "Wod",
    id: string,
    date: string,
    workouts:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        wodID: string,
        name: string | null,
        rounds: number | null,
        timecap: number | null,
        notes: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateWorkoutMutationVariables = {
  input: CreateWorkoutInput,
  condition?: ModelWorkoutConditionInput | null,
};

export type CreateWorkoutMutation = {
  createWorkout:  {
    __typename: "Workout",
    id: string,
    wodID: string,
    name: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        workoutID: string,
        exerciseDefinitionID: string,
        weight: number | null,
        time: number | null,
        distance: number | null,
        calories: number | null,
        height: number | null,
        sets: number | null,
        reps: number | null,
        percentMax: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    rounds: number | null,
    timecap: number | null,
    notes: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateWorkoutMutationVariables = {
  input: UpdateWorkoutInput,
  condition?: ModelWorkoutConditionInput | null,
};

export type UpdateWorkoutMutation = {
  updateWorkout:  {
    __typename: "Workout",
    id: string,
    wodID: string,
    name: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        workoutID: string,
        exerciseDefinitionID: string,
        weight: number | null,
        time: number | null,
        distance: number | null,
        calories: number | null,
        height: number | null,
        sets: number | null,
        reps: number | null,
        percentMax: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    rounds: number | null,
    timecap: number | null,
    notes: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteWorkoutMutationVariables = {
  input: DeleteWorkoutInput,
  condition?: ModelWorkoutConditionInput | null,
};

export type DeleteWorkoutMutation = {
  deleteWorkout:  {
    __typename: "Workout",
    id: string,
    wodID: string,
    name: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        workoutID: string,
        exerciseDefinitionID: string,
        weight: number | null,
        time: number | null,
        distance: number | null,
        calories: number | null,
        height: number | null,
        sets: number | null,
        reps: number | null,
        percentMax: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    rounds: number | null,
    timecap: number | null,
    notes: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateExerciseMutationVariables = {
  input: CreateExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type CreateExerciseMutation = {
  createExercise:  {
    __typename: "Exercise",
    id: string,
    workoutID: string,
    exerciseDefinitionID: string,
    exerciseDefinition:  {
      __typename: "ExerciseDefinition",
      id: string,
      name: string,
      weight: boolean,
      time: boolean,
      distance: boolean,
      calories: boolean,
      height: boolean,
      percentMax: boolean,
      createdAt: string,
      updatedAt: string,
    },
    weight: number | null,
    time: number | null,
    distance: number | null,
    calories: number | null,
    height: number | null,
    sets: number | null,
    reps: number | null,
    percentMax: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateExerciseMutationVariables = {
  input: UpdateExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type UpdateExerciseMutation = {
  updateExercise:  {
    __typename: "Exercise",
    id: string,
    workoutID: string,
    exerciseDefinitionID: string,
    exerciseDefinition:  {
      __typename: "ExerciseDefinition",
      id: string,
      name: string,
      weight: boolean,
      time: boolean,
      distance: boolean,
      calories: boolean,
      height: boolean,
      percentMax: boolean,
      createdAt: string,
      updatedAt: string,
    },
    weight: number | null,
    time: number | null,
    distance: number | null,
    calories: number | null,
    height: number | null,
    sets: number | null,
    reps: number | null,
    percentMax: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteExerciseMutationVariables = {
  input: DeleteExerciseInput,
  condition?: ModelExerciseConditionInput | null,
};

export type DeleteExerciseMutation = {
  deleteExercise:  {
    __typename: "Exercise",
    id: string,
    workoutID: string,
    exerciseDefinitionID: string,
    exerciseDefinition:  {
      __typename: "ExerciseDefinition",
      id: string,
      name: string,
      weight: boolean,
      time: boolean,
      distance: boolean,
      calories: boolean,
      height: boolean,
      percentMax: boolean,
      createdAt: string,
      updatedAt: string,
    },
    weight: number | null,
    time: number | null,
    distance: number | null,
    calories: number | null,
    height: number | null,
    sets: number | null,
    reps: number | null,
    percentMax: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateExerciseResultMutationVariables = {
  input: CreateExerciseResultInput,
  condition?: ModelExerciseResultConditionInput | null,
};

export type CreateExerciseResultMutation = {
  createExerciseResult:  {
    __typename: "ExerciseResult",
    id: string,
    wodId: string,
    wod:  {
      __typename: "Wod",
      id: string,
      date: string,
      workouts:  {
        __typename: "ModelWorkoutConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    exerciseDefinitionID: string,
    exerciseDefinition:  {
      __typename: "ExerciseDefinition",
      id: string,
      name: string,
      weight: boolean,
      time: boolean,
      distance: boolean,
      calories: boolean,
      height: boolean,
      percentMax: boolean,
      createdAt: string,
      updatedAt: string,
    },
    date: string,
    weight: number | null,
    time: number | null,
    distance: number | null,
    calories: number | null,
    height: number | null,
    sets: number | null,
    reps: number | null,
    percentMax: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateExerciseResultMutationVariables = {
  input: UpdateExerciseResultInput,
  condition?: ModelExerciseResultConditionInput | null,
};

export type UpdateExerciseResultMutation = {
  updateExerciseResult:  {
    __typename: "ExerciseResult",
    id: string,
    wodId: string,
    wod:  {
      __typename: "Wod",
      id: string,
      date: string,
      workouts:  {
        __typename: "ModelWorkoutConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    exerciseDefinitionID: string,
    exerciseDefinition:  {
      __typename: "ExerciseDefinition",
      id: string,
      name: string,
      weight: boolean,
      time: boolean,
      distance: boolean,
      calories: boolean,
      height: boolean,
      percentMax: boolean,
      createdAt: string,
      updatedAt: string,
    },
    date: string,
    weight: number | null,
    time: number | null,
    distance: number | null,
    calories: number | null,
    height: number | null,
    sets: number | null,
    reps: number | null,
    percentMax: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteExerciseResultMutationVariables = {
  input: DeleteExerciseResultInput,
  condition?: ModelExerciseResultConditionInput | null,
};

export type DeleteExerciseResultMutation = {
  deleteExerciseResult:  {
    __typename: "ExerciseResult",
    id: string,
    wodId: string,
    wod:  {
      __typename: "Wod",
      id: string,
      date: string,
      workouts:  {
        __typename: "ModelWorkoutConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    exerciseDefinitionID: string,
    exerciseDefinition:  {
      __typename: "ExerciseDefinition",
      id: string,
      name: string,
      weight: boolean,
      time: boolean,
      distance: boolean,
      calories: boolean,
      height: boolean,
      percentMax: boolean,
      createdAt: string,
      updatedAt: string,
    },
    date: string,
    weight: number | null,
    time: number | null,
    distance: number | null,
    calories: number | null,
    height: number | null,
    sets: number | null,
    reps: number | null,
    percentMax: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetExerciseDefinitionQueryVariables = {
  id: string,
};

export type GetExerciseDefinitionQuery = {
  getExerciseDefinition:  {
    __typename: "ExerciseDefinition",
    id: string,
    name: string,
    weight: boolean,
    time: boolean,
    distance: boolean,
    calories: boolean,
    height: boolean,
    percentMax: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListExerciseDefinitionsQueryVariables = {
  filter?: ModelExerciseDefinitionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExerciseDefinitionsQuery = {
  listExerciseDefinitions:  {
    __typename: "ModelExerciseDefinitionConnection",
    items:  Array< {
      __typename: "ExerciseDefinition",
      id: string,
      name: string,
      weight: boolean,
      time: boolean,
      distance: boolean,
      calories: boolean,
      height: boolean,
      percentMax: boolean,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetWodQueryVariables = {
  id: string,
};

export type GetWodQuery = {
  getWod:  {
    __typename: "Wod",
    id: string,
    date: string,
    workouts:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        wodID: string,
        name: string | null,
        rounds: number | null,
        timecap: number | null,
        notes: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWodsQueryVariables = {
  filter?: ModelWodFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWodsQuery = {
  listWods:  {
    __typename: "ModelWodConnection",
    items:  Array< {
      __typename: "Wod",
      id: string,
      date: string,
      workouts:  {
        __typename: "ModelWorkoutConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetWorkoutQueryVariables = {
  id: string,
};

export type GetWorkoutQuery = {
  getWorkout:  {
    __typename: "Workout",
    id: string,
    wodID: string,
    name: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        workoutID: string,
        exerciseDefinitionID: string,
        weight: number | null,
        time: number | null,
        distance: number | null,
        calories: number | null,
        height: number | null,
        sets: number | null,
        reps: number | null,
        percentMax: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    rounds: number | null,
    timecap: number | null,
    notes: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListWorkoutsQueryVariables = {
  filter?: ModelWorkoutFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkoutsQuery = {
  listWorkouts:  {
    __typename: "ModelWorkoutConnection",
    items:  Array< {
      __typename: "Workout",
      id: string,
      wodID: string,
      name: string | null,
      exercises:  {
        __typename: "ModelExerciseConnection",
        nextToken: string | null,
      } | null,
      rounds: number | null,
      timecap: number | null,
      notes: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetExerciseQueryVariables = {
  id: string,
};

export type GetExerciseQuery = {
  getExercise:  {
    __typename: "Exercise",
    id: string,
    workoutID: string,
    exerciseDefinitionID: string,
    exerciseDefinition:  {
      __typename: "ExerciseDefinition",
      id: string,
      name: string,
      weight: boolean,
      time: boolean,
      distance: boolean,
      calories: boolean,
      height: boolean,
      percentMax: boolean,
      createdAt: string,
      updatedAt: string,
    },
    weight: number | null,
    time: number | null,
    distance: number | null,
    calories: number | null,
    height: number | null,
    sets: number | null,
    reps: number | null,
    percentMax: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListExercisesQueryVariables = {
  filter?: ModelExerciseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExercisesQuery = {
  listExercises:  {
    __typename: "ModelExerciseConnection",
    items:  Array< {
      __typename: "Exercise",
      id: string,
      workoutID: string,
      exerciseDefinitionID: string,
      exerciseDefinition:  {
        __typename: "ExerciseDefinition",
        id: string,
        name: string,
        weight: boolean,
        time: boolean,
        distance: boolean,
        calories: boolean,
        height: boolean,
        percentMax: boolean,
        createdAt: string,
        updatedAt: string,
      },
      weight: number | null,
      time: number | null,
      distance: number | null,
      calories: number | null,
      height: number | null,
      sets: number | null,
      reps: number | null,
      percentMax: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetExerciseResultQueryVariables = {
  id: string,
};

export type GetExerciseResultQuery = {
  getExerciseResult:  {
    __typename: "ExerciseResult",
    id: string,
    wodId: string,
    wod:  {
      __typename: "Wod",
      id: string,
      date: string,
      workouts:  {
        __typename: "ModelWorkoutConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    exerciseDefinitionID: string,
    exerciseDefinition:  {
      __typename: "ExerciseDefinition",
      id: string,
      name: string,
      weight: boolean,
      time: boolean,
      distance: boolean,
      calories: boolean,
      height: boolean,
      percentMax: boolean,
      createdAt: string,
      updatedAt: string,
    },
    date: string,
    weight: number | null,
    time: number | null,
    distance: number | null,
    calories: number | null,
    height: number | null,
    sets: number | null,
    reps: number | null,
    percentMax: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListExerciseResultsQueryVariables = {
  filter?: ModelExerciseResultFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExerciseResultsQuery = {
  listExerciseResults:  {
    __typename: "ModelExerciseResultConnection",
    items:  Array< {
      __typename: "ExerciseResult",
      id: string,
      wodId: string,
      wod:  {
        __typename: "Wod",
        id: string,
        date: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      exerciseDefinitionID: string,
      exerciseDefinition:  {
        __typename: "ExerciseDefinition",
        id: string,
        name: string,
        weight: boolean,
        time: boolean,
        distance: boolean,
        calories: boolean,
        height: boolean,
        percentMax: boolean,
        createdAt: string,
        updatedAt: string,
      },
      date: string,
      weight: number | null,
      time: number | null,
      distance: number | null,
      calories: number | null,
      height: number | null,
      sets: number | null,
      reps: number | null,
      percentMax: number | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateExerciseDefinitionSubscription = {
  onCreateExerciseDefinition:  {
    __typename: "ExerciseDefinition",
    id: string,
    name: string,
    weight: boolean,
    time: boolean,
    distance: boolean,
    calories: boolean,
    height: boolean,
    percentMax: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateExerciseDefinitionSubscription = {
  onUpdateExerciseDefinition:  {
    __typename: "ExerciseDefinition",
    id: string,
    name: string,
    weight: boolean,
    time: boolean,
    distance: boolean,
    calories: boolean,
    height: boolean,
    percentMax: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteExerciseDefinitionSubscription = {
  onDeleteExerciseDefinition:  {
    __typename: "ExerciseDefinition",
    id: string,
    name: string,
    weight: boolean,
    time: boolean,
    distance: boolean,
    calories: boolean,
    height: boolean,
    percentMax: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWodSubscription = {
  onCreateWod:  {
    __typename: "Wod",
    id: string,
    date: string,
    workouts:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        wodID: string,
        name: string | null,
        rounds: number | null,
        timecap: number | null,
        notes: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWodSubscription = {
  onUpdateWod:  {
    __typename: "Wod",
    id: string,
    date: string,
    workouts:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        wodID: string,
        name: string | null,
        rounds: number | null,
        timecap: number | null,
        notes: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWodSubscription = {
  onDeleteWod:  {
    __typename: "Wod",
    id: string,
    date: string,
    workouts:  {
      __typename: "ModelWorkoutConnection",
      items:  Array< {
        __typename: "Workout",
        id: string,
        wodID: string,
        name: string | null,
        rounds: number | null,
        timecap: number | null,
        notes: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateWorkoutSubscription = {
  onCreateWorkout:  {
    __typename: "Workout",
    id: string,
    wodID: string,
    name: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        workoutID: string,
        exerciseDefinitionID: string,
        weight: number | null,
        time: number | null,
        distance: number | null,
        calories: number | null,
        height: number | null,
        sets: number | null,
        reps: number | null,
        percentMax: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    rounds: number | null,
    timecap: number | null,
    notes: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateWorkoutSubscription = {
  onUpdateWorkout:  {
    __typename: "Workout",
    id: string,
    wodID: string,
    name: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        workoutID: string,
        exerciseDefinitionID: string,
        weight: number | null,
        time: number | null,
        distance: number | null,
        calories: number | null,
        height: number | null,
        sets: number | null,
        reps: number | null,
        percentMax: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    rounds: number | null,
    timecap: number | null,
    notes: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteWorkoutSubscription = {
  onDeleteWorkout:  {
    __typename: "Workout",
    id: string,
    wodID: string,
    name: string | null,
    exercises:  {
      __typename: "ModelExerciseConnection",
      items:  Array< {
        __typename: "Exercise",
        id: string,
        workoutID: string,
        exerciseDefinitionID: string,
        weight: number | null,
        time: number | null,
        distance: number | null,
        calories: number | null,
        height: number | null,
        sets: number | null,
        reps: number | null,
        percentMax: number | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    rounds: number | null,
    timecap: number | null,
    notes: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateExerciseSubscription = {
  onCreateExercise:  {
    __typename: "Exercise",
    id: string,
    workoutID: string,
    exerciseDefinitionID: string,
    exerciseDefinition:  {
      __typename: "ExerciseDefinition",
      id: string,
      name: string,
      weight: boolean,
      time: boolean,
      distance: boolean,
      calories: boolean,
      height: boolean,
      percentMax: boolean,
      createdAt: string,
      updatedAt: string,
    },
    weight: number | null,
    time: number | null,
    distance: number | null,
    calories: number | null,
    height: number | null,
    sets: number | null,
    reps: number | null,
    percentMax: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateExerciseSubscription = {
  onUpdateExercise:  {
    __typename: "Exercise",
    id: string,
    workoutID: string,
    exerciseDefinitionID: string,
    exerciseDefinition:  {
      __typename: "ExerciseDefinition",
      id: string,
      name: string,
      weight: boolean,
      time: boolean,
      distance: boolean,
      calories: boolean,
      height: boolean,
      percentMax: boolean,
      createdAt: string,
      updatedAt: string,
    },
    weight: number | null,
    time: number | null,
    distance: number | null,
    calories: number | null,
    height: number | null,
    sets: number | null,
    reps: number | null,
    percentMax: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteExerciseSubscription = {
  onDeleteExercise:  {
    __typename: "Exercise",
    id: string,
    workoutID: string,
    exerciseDefinitionID: string,
    exerciseDefinition:  {
      __typename: "ExerciseDefinition",
      id: string,
      name: string,
      weight: boolean,
      time: boolean,
      distance: boolean,
      calories: boolean,
      height: boolean,
      percentMax: boolean,
      createdAt: string,
      updatedAt: string,
    },
    weight: number | null,
    time: number | null,
    distance: number | null,
    calories: number | null,
    height: number | null,
    sets: number | null,
    reps: number | null,
    percentMax: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateExerciseResultSubscription = {
  onCreateExerciseResult:  {
    __typename: "ExerciseResult",
    id: string,
    wodId: string,
    wod:  {
      __typename: "Wod",
      id: string,
      date: string,
      workouts:  {
        __typename: "ModelWorkoutConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    exerciseDefinitionID: string,
    exerciseDefinition:  {
      __typename: "ExerciseDefinition",
      id: string,
      name: string,
      weight: boolean,
      time: boolean,
      distance: boolean,
      calories: boolean,
      height: boolean,
      percentMax: boolean,
      createdAt: string,
      updatedAt: string,
    },
    date: string,
    weight: number | null,
    time: number | null,
    distance: number | null,
    calories: number | null,
    height: number | null,
    sets: number | null,
    reps: number | null,
    percentMax: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateExerciseResultSubscription = {
  onUpdateExerciseResult:  {
    __typename: "ExerciseResult",
    id: string,
    wodId: string,
    wod:  {
      __typename: "Wod",
      id: string,
      date: string,
      workouts:  {
        __typename: "ModelWorkoutConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    exerciseDefinitionID: string,
    exerciseDefinition:  {
      __typename: "ExerciseDefinition",
      id: string,
      name: string,
      weight: boolean,
      time: boolean,
      distance: boolean,
      calories: boolean,
      height: boolean,
      percentMax: boolean,
      createdAt: string,
      updatedAt: string,
    },
    date: string,
    weight: number | null,
    time: number | null,
    distance: number | null,
    calories: number | null,
    height: number | null,
    sets: number | null,
    reps: number | null,
    percentMax: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteExerciseResultSubscription = {
  onDeleteExerciseResult:  {
    __typename: "ExerciseResult",
    id: string,
    wodId: string,
    wod:  {
      __typename: "Wod",
      id: string,
      date: string,
      workouts:  {
        __typename: "ModelWorkoutConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    exerciseDefinitionID: string,
    exerciseDefinition:  {
      __typename: "ExerciseDefinition",
      id: string,
      name: string,
      weight: boolean,
      time: boolean,
      distance: boolean,
      calories: boolean,
      height: boolean,
      percentMax: boolean,
      createdAt: string,
      updatedAt: string,
    },
    date: string,
    weight: number | null,
    time: number | null,
    distance: number | null,
    calories: number | null,
    height: number | null,
    sets: number | null,
    reps: number | null,
    percentMax: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
