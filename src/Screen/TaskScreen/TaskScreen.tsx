import {
  FlatList,
  Image,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Title from '../../Components/Title';
import {useState} from 'react';
import colors from '../../../constants/color';
import PrimaryButton from '../../Components/PrimaryButton';
import styles from './TaskStyle';

function TaskScreen({navigation}: any) {
  const handleButton = () => {
    navigation.navigate('Home');
  };

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskPriority, setTaskPriority] = useState('');
  const [modalisVisible, setModalisVisible] = useState(false);
  const [tasks, setTasks] = useState<any>([]);

  const priorityOptions = [
    {label: 'High', value: 'High', color: colors.primaryGreen},
    {label: 'Medium', value: 'Medium', color: colors.primaryYellow},
    {label: 'Low', value: 'Low', color: colors.primaryRed},
  ];

  const data: any = {
    High: colors.primaryGreen,
    Medium: colors.primaryYellow,
    Low: colors.primaryRed,
  };

  const sort = {
    High: 1,
    Medium: 2,
    Low: 3,
  };

  function AddTasks() {
    if (taskTitle && taskDescription && taskPriority) {
      setTasks((currTask: string) => [
        ...currTask,
        {
          title: taskTitle,
          description: taskDescription,
          priority: taskPriority,
          id: Date.now().toString(),
        },
      ]);
    }
    setTaskTitle('');
    setTaskDescription('');
    setTaskPriority('');
  }

  function DeleteTasks(id: number) {
    setTasks((currTask: any[]) => currTask.filter(tasks => tasks.id !== id));
  }

  return (
    <View style={{flex: 1}}>
      <>
        <Title>Your Task</Title>
        <View>
          <View
            style={{
              marginHorizontal: 20,
              marginVertical: 20,
              paddingBottom: 20,
            }}>
            <Text style={styles.Text}>Task Title</Text>
            <TextInput
              style={styles.Textinput}
              placeholder="Enter Title"
              value={taskTitle}
              onChangeText={setTaskTitle}
            />
            <Text style={styles.Text}>Task Description</Text>
            <TextInput
              style={styles.Textinput}
              placeholder="Enter Description"
              value={taskDescription}
              onChangeText={setTaskDescription}
            />
            <Text style={styles.Text}>Task Priority</Text>
            <View style={styles.priorityInputContainer}>
              <TouchableOpacity
                activeOpacity={0.4}
                style={styles.priority}
                onPress={() => setModalisVisible(true)}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontSize: 20}}>
                    {taskPriority ? taskPriority : 'Select'}
                  </Text>
                  <Image
                    style={styles.imageStyle}
                    source={require('../../../assets/images/arrow.png')}></Image>
                </View>
              </TouchableOpacity>
            </View>
            <PrimaryButton onpress={AddTasks}>Add</PrimaryButton>
          </View>
        </View>
      </>
      <View style={{flex: 1}}>
        <FlatList
          data={tasks}
          renderItem={itemData => {
            return (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => DeleteTasks(itemData.item.id)}>
                <View
                
                  style={[
                    styles.taskList,
                    {backgroundColor: data[itemData?.item?.priority]},
                  ]}>
                  <Text style={styles.task}>Title:  {itemData.item.title}</Text>
                  <Text style={styles.task}>Description: 
                     {itemData.item.description}</Text>
                  <Text style={styles.task}>Priority: {itemData.item.priority}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
          keyExtractor={itemData => itemData.id}
        />
      </View>

      <Modal
        visible={modalisVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalisVisible(false)}>
        <View style={styles.modalOuter}>
          <View style={styles.modalInner}>
            {priorityOptions.map(itemData => {
              return (
                <TouchableOpacity
                  activeOpacity={0.4}
                  style={[
                    styles.priorityContainer,
                    {
                      backgroundColor: data[itemData?.label],
                    },
                  ]}
                  onPress={() => {
                    setTaskPriority(itemData?.value);
                    setModalisVisible(false);
                  }}>
                  <Text style={styles?.priorityText}>{itemData?.label}</Text>
                </TouchableOpacity>
              );
            })}
            <PrimaryButton onpress={() => setModalisVisible(false)}>
              Cancel
            </PrimaryButton>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default TaskScreen;
