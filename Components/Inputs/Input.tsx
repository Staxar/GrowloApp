import { Text, View } from "react-native";

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ label, value, onChange }) => {
  return (
    <View>
      <Text>Input</Text>
    </View>
  );
};
