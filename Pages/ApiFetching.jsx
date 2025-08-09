import { useEffect, useState } from "react"
import { ActivityIndicator, ScrollView, View } from "react-native"
import { data2 } from "@/app/data2";

const ApiFetching = () => {
    const [data, setData] = useState([]);

    const [isloading, setIsloading] = useState(true);

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data)
        setData(data);
        setIsloading(false);
    }

    useEffect(() => {
        fetchData();
    },[])

    if(isloading){
        <ActivityIndicator style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} />
    }

  return (
    <ScrollView>
        <View>
            {
                data.map((item) => (
                    <Text key={item.id}>{item.title}</Text>
                ))
            }
        </View>
    </ScrollView>
  )
}

export default ApiFetching