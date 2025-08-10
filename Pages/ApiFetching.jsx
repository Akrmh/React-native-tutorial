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
import Toast from "react-native-toast-message";

import Tosat from 'react-native-toast-message'

const ApiFetching = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("")
  const [isloading, setIsloading] = useState(true);
  const [page, setPage] = useState(1); 
  const pageLimit = 10;

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicodde.com/posts?_page=${page}&_limit=${pageLimit}`
      );
      const newData = await response.json();
      setData((prevData) =>
        page === 1 ? newData : [...prevData, ...newData]
      );
      setIsloading(false)
    } catch (error) {
        setError("Error fetching data")
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  const addPost = async () => {
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
      setData((prevData) => [newPost, ...prevData]);
      setTitle("");
      setBody("");
      Toast.show({
        type: "success",
        text1: "Post Added",
        text2: "Post added successfully"
      })
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  if (isloading) {
    return (
      <ActivityIndicator
        style={{ height: 500, justifyContent: "center", alignItems: "center" }}
        size="large"
        color="#0000ff"
      />
    );
  }

  if(error){
    return(
        <Text style={{color:'red', textAlign:'center', marginVertical: 10}}>{error}</Text>
    )
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
