import {StyleSheet} from 'react-native';
import colors from '../../../constants/color';
import fonts from '../../../constants/font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 10,
  },
  Textinput: {
    borderWidth: 1,
    borderColor: colors.primaryBlack,
    marginBottom: 20,
    fontSize: 20,
    borderRadius: 10,
    paddingLeft: 10,
  },
  Text: {
    fontWeight: 'bold',
    color: colors.primaryBlack,
    fontSize: 20,
    paddingHorizontal: 10,
    marginBottom: 1,
  },
  image: {
    height: 250,
    width: 250,
  },
  ImageStyle: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    paddingBottom: 80,
  },
  error: {
    color: colors.primaryError,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  priority: {
    flex: 1,
    borderColor: colors.primaryBlack,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
  },
  priorityContainer: {
    borderWidth: 3,
    borderColor: colors.primaryBlack,
    borderRadius: 10,
    paddingLeft: 20,
    marginVertical: 15,
    marginHorizontal: 90,
    height: 60,
    justifyContent: 'center',
  },
  taskList: {
    backgroundColor: colors.primaryDetails,
    borderWidth: 3,
    margin: 10,
    borderRadius: 15,
    justifyContent: 'space-between',
    padding: 16,
    flexDirection: 'column',
  },
  task: {
    color: colors.primaryBlack,
    marginTop : 14,
    fontFamily : fonts.font2,
    fontSize: 23,
    height : 30,
  },
  modalInner: {
    backgroundColor: colors.primaryDetails,
    paddingBottom: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    paddingTop: 20,
  },
  modalOuter: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    flex: 1,

    justifyContent: 'center',
  },
  priorityText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    paddingRight: 20,
    color: colors.primaryBlack,
  },
  imageStyle: {
    height: 6,
    width: 6,
    marginTop: 4,
    marginRight: 18,
    padding: 10,
  },
  priorityInputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.primaryBlack,
    marginBottom: 20,
    borderRadius: 10,
    paddingLeft: 10,
  },
});

export default styles;
