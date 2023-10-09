import React, { useState,useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated
} from 'react-native';
import Colors from './color';
import Svg, { Path } from 'react-native-svg';


const TodoApp = ({navigation}) => {

    const [task,setTask]=useState('');
    const [tasks,setTasks]=useState([]);


    const handleAddTask=()=>{
        if(task.trim()!==''){
            setTasks([...tasks, { text: task,completed:false}]);
            setTask('');
        };
    };

    const handleToggleComplete=(index)=>{
        const newTasks=[...tasks];
        newTasks[index].completed=!newTasks[index].completed;
        setTasks(newTasks);
    };

    const handleDelete=(index)=>{
        const newTasks=[...tasks];
        newTasks.splice(index,1);
        setTasks(newTasks);
    };
     
    const handleClearAll=()=>{
        setTasks([]);
    };

    const handleLogout=()=>{
        setTasks([]);
        navigation.navigate('LoginScreen');
    };


    return(
        <View style={Styles.container}>
          <View style={{flexDirection:'row',marginTop:30,justifyContent:'space-between'}}>
                    <Text style={Styles.Title}>TodoApp</Text>
                    <TouchableOpacity
                      style={Styles.Logoutbutton}
                      onPress={handleLogout}
                    >
                      <View style={Styles.logoutsign}>
                      <Svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 512 512"
                        >
                           <Path
                          fill="white" // Set the fill color for your SVG icon
                          d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0-14.3 32-32 32z"
                        />
                        </Svg>
                      </View>
                      <Text style={Styles.logouttext}>Logout</Text>
                    </TouchableOpacity>
                    </View>
                    <TextInput 
                    placeholder="Add Task"
                    value={task}
                    onChangeText={(text)=>setTask(text)}
                    style={Styles.textInput}
                    />
                    <TouchableOpacity style={Styles.button}onPress={handleAddTask}>
                        <Text style={{color:Colors.text,fontWeight:'bold',textAlign:'center'}}>Add Task</Text>
                    </TouchableOpacity>
                    <FlatList
                    data={tasks}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item,index})=>(
                          <TouchableOpacity onPress={()=>{handleToggleComplete(index)}}>
                              <View style={Styles.task}>
                              <Text style={{ fontSize: 18, textDecorationLine: item.completed ? 'line-through' : 'none' }}>
                                  {item.text}
                              </Text>
                              <TouchableOpacity>
                                  <Text style={Styles.DeleteButton} onPress={()=>{handleDelete(index)}}>Delete</Text>
                              </TouchableOpacity>
                              </View>
                        </TouchableOpacity>
                          )}/>
                    <TouchableOpacity style={Styles.button}onPress={handleClearAll}>
                      <Text style={Styles.ButtonText}>Clear All</Text>
                      </TouchableOpacity>
        </View>

    );
};

const Styles=StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:Colors.background,
        color:Colors.Text,
        alignItems:'center',
    },
    Title:{
        fontSize:30,
        color:Colors.text,
        fontWeight:'bold',
        textAlign:'center',
        // padding:20,
    },
    textInput:{
        height:40,
        width:'100%',
        borderColor:Colors.accentColor,
        borderWidth:1,
        borderRadius:8,
        paddingHorizontal:10,
        color:Colors.text,
        marginTop:20,
        padding:10,
    },
    button:{
        backgroundColor:Colors.addTaskButton,
        padding:10,
        borderRadius:8,
        width:'100%',
        height:40,
        marginTop:20,
    },
    task:{
        maxHeight:'100%',
        maxWidth:'100%',
        width:400,
        marginTop:20,
        backgroundColor:Colors.secondaryText,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        borderRadius: 8,
    },
    DeleteButton:{
        color:Colors.deleteTaskButton,
        fontSize:20,
    },
    ButtonText:{
        color:Colors.text,
        fontWeight:'bold',
        textAlign:'center',
    },
    LogoutButton:{
        backgroundColor:Colors.LogoutButtonColor,
        fontWeight:'bold',
        textAlign:'center',
        justifyContent:'center',
        flexDirection:'row',
        width:100,
        height:40,
        borderRadius:8,
    },
    Logoutbutton: {
      width: 45,
      height: 45,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#121212', // Use your background color here
      overflow: 'hidden',
      shadowColor: 'black',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      flexDirection: 'row',
      position: 'relative',
      marginLeft:170,
    },
    hoveredButton: {
      width: 125,
      borderRadius: 5,
    },
    logoutsign: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    logouttext: {
      position: 'absolute',
      right: 0,
      opacity: 0,
      fontSize: 16,
      fontWeight: '600',
      color: 'black', // Use your text color here
      paddingRight: 10,
    },
});

export default TodoApp;
