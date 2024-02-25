import { Text } from "react-native";
import styles from "../AppStyle";
const TextCustomer = ({name,style}) => {
    return(
        <Text style={{...styles.defaultText, ...style}}>{name}</Text>
    )
}
export default TextCustomer;