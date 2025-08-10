import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
} from "react-native";

const ApiFetching = () => {
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [page, setPage] = useState(1); // start at page 1
  const pageLimit = 10;

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${pageLimit}`
      );
      const newData = await response.json();
      setData((prevData) =>
        page === 1 ? newData : [...prevData, ...newData]
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsloading(false);
    }
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const addPost = async () => {
    if (!title.trim() || !body.trim()) {
      alert("Please fill in both title and body.");
      return;
    }

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          body: body,
        }),
      });

      const newPost = await response.json();
      console.log(newPost);

      // Add new post to the top of the list
      setData((prevData) => [newPost, ...prevData]);

      // Clear form fields
      setTitle("");
      setBody("");
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  if (isloading) {
    return (
      <ActivityIndicator
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        size="large"
        color="#0000ff"
      />
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        {data.map((item) => (
            <View key={item.id}>
          <Text  style={styles.postTitle}>
            {item.title}
          </Text>
          <Text style={styles.postBody}>
            {item.body}
          </Text>
          </View>
        ))}
      </View>

      <Button title="Load More" onPress={loadMore} />

      <View style={styles.form}>
        <TextInput
          placeholder="Enter post title"
          style={styles.textInput}
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          placeholder="Enter post body"
          style={styles.textInput}
          value={body}
          onChangeText={setBody}
          multiline
        />
      </View>
      <Button onPress={addPost} title="Add Post" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    paddingHorizontal: 20,
  },
  form: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 20,
  },
  textInput: {
    minHeight: 40,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
    borderColor: "#ccc",
  },
  postTitle: {
    fontSize: 16,
    marginVertical: 5,
    color: "white",
  },
});

export default ApiFetching;
