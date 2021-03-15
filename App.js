import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Tasks from './Tasks';

export default function App() {

  const [yourTask, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, yourTask])
    setTask(null);
  }
   
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
     
     

      <View style={styles.taskWrapper}>
        <Text style={styles.appTitle} >Today's Tasks</Text>
     
      <View style={styles.items}>
        {
          taskItems.map((items, index) => {
            return (
              <TouchableOpacity  key={index} onPress={() => completeTask(index)}>
                <Tasks key={index} yourTask={items}/>
              </TouchableOpacity>
            )
            
          })
        }


        {/* <Tasks yourTask="task one"/>
        <Tasks yourTask="task two"/> */}
      </View>  
     
      </View>
      {/* Writing a Task */}
      <KeyboardAvoidingView behavior={Platform.OS==="ios"? "padding" : "height"} style= {styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={"Write Your Task"} value={yourTask} onChangeText={yourTask => setTask(yourTask)}  />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },

  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  input:{
    paddingHorizontal:15,
    paddingVertical:15,
    width:250,
    backgroundColor:'white',
    borderRadius:60,
    borderColor:'#c0c0c0',
    borderWidth:1,

  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#fff',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#c0c0c0',
    borderWidth:1,

  },
  addText:{},
    
    
  appTitle:{
    fontSize:24,
    fontWeight:"bold",

  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },


  items:{
    marginTop:15,
  },
});
