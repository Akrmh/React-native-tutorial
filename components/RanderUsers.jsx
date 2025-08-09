import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { users } from "../app/data";

const RanderUsers = () => {
  return (
    // <View style={styles.container}>
    //   {users.map((user, index) => {
    //     console.log(index);
    //     return (
    //       <View style={styles.card} key={index}>
    //         <Text style={styles.text}>{user.name}</Text>
    //         <Text style={styles.text}>{user.age}</Text>
    //       </View>
    //     );
    //   })}
    // </View>

    <FlatList
        data={users}
        renderItem={({item, index}) => {
            console.log(index);
        return (
          <View style={styles.card} key={index}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.age}</Text>
          </View>
        );
        }}

        ItemSeparatorComponent={() => <View style={{height:10}} />}
        ListEmptyComponent={()=>(
            <View style={styles.card}>
                <Text style={styles.text}>No Users</Text>
                <Button title="Create User" />
            </View>
        )}

        ListHeaderComponent={()=>(
            <View style={styles.card}>
                <Text>Hearder</Text>
            </View>
        )}
        ListFooterComponent={()=>(
             <View style={styles.card}>
                <Text>Footer</Text>
            </View>
        )}

    />
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 600,
  },
  card: {
    backgroundColor: "darkorange",
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default RanderUsers;
