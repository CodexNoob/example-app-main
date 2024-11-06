import { View, Text, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const YourTabsComponent = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert(
      "Confirm Logout",
      "Do you want to log out?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Logout canceled"),
          style: "cancel",
        },
        { text: "OK", onPress: () => navigation.navigate("LoginPage") },
      ],
      { cancelable: false }
    );
  };

  return (
    <View>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default YourTabsComponent;
