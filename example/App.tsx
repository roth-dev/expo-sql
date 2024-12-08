import ExpoSql, { ExpoSqlView } from "expo-sql";
import { Button, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function App() {
  async function onConnect() {
    const config = {
      host: "localhost",
      user: "root",
      password: "123456",
      database: "test",
    };
    try {
      const connection = await ExpoSql.connect(
        config.host,
        config.user,
        config.password,
        config.database
      );
      console.log("Connected to database:", connection);

      // const results = await query("SELECT * FROM your_table", config);
      // console.log("Query results:", results);
    } catch (error) {
      console.error("Database error:", error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Button title="Connect to Database" onPress={onConnect} />
      </ScrollView>
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  view: {
    flex: 1,
    height: 200,
  },
};
