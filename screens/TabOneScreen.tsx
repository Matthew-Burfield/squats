import * as React from "react";
import { StyleSheet, TextInput, Button } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import { API, graphqlOperation } from "aws-amplify";
import { createTodo } from "../src/graphql/mutations";
import { listTodos } from "../src/graphql/queries";

interface Todo {
  name: string;
  description: string;
}

type Todos = Todo[];

const initialState = { name: "", description: "" };

export default function TabOneScreen() {
  const [formState, setFormState] = React.useState(initialState);
  const [todos, setTodos] = React.useState<Todos>([]);

  React.useEffect(() => {
    fetchTodos();
  }, []);

  function setInput(key: string, { target }: any) {
    setFormState({ ...formState, [key]: target.value });
  }

  async function fetchTodos() {
    try {
      const todoData: any = await API.graphql(graphqlOperation(listTodos));
      const todos = todoData.data.listTodos.items;
      setTodos(todos);
    } catch (err) {
      console.log("Error fetching todos");
    }
  }

  async function addTodo() {
    try {
      const todo = { ...formState };
      setTodos([...todos, todo]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createTodo, { input: todo }));
    } catch (err) {
      console.log("Error creating todo: ", err);
    }
  }

  return (
    // <View style={styles.container}>
    //   <Text style={styles.title}>Tab One</Text>
    //   <View
    //     style={styles.separator}
    //     lightColor="#eee"
    //     darkColor="rgba(255,255,255,0.1)"
    //   />
    //   <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    // </View>
    <View style={styles.container}>
      <TextInput
        onChange={(val) => setInput("name", val)}
        style={styles.input}
        value={formState.name}
        placeholder={"Name"}
      />
      <TextInput
        onChange={(val) => setInput("description", val)}
        style={styles.input}
        value={formState.description}
        placeholder={"Description"}
      />
      <Button title={"Create Todo"} onPress={addTodo} />
      {todos.map((todo, index) => (
        <View key={index} style={styles.todo}>
          <Text style={styles.todoName}>{todo.name}</Text>
          <Text>{todo.description}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  todo: { marginBottom: 15 },
  input: { height: 50, backgroundColor: "#ddd", marginBottom: 10, padding: 8 },
  todoName: { fontSize: 18 },
});
