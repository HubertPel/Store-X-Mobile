import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "./MyFamilyScreen.styles";
import MyAccountTemplate from "../../Components/Templates/MyAccountTemplate";
import FamilyMemberElement from "../../Components/Elements/FamilyMemberElement";
import DefaultButton from "../../Components/Buttons/DefaultButton";
import AddFamilyMemberModal from "../../Components/Modals/AddFamilyMemberModal";

const MyFamilyScreen = () => {
    const [members, setMembers] = useState([
        { name: "Hubert", you: true },
        { name: "Norbert", you: false },
        { name: "Herbert", you: false },
        { name: "Robert", you: false },
      ]);
      const [showPopup, setShowPopup] = useState(false);

console.log(sho);
  return (
    <MyAccountTemplate>
        <AddFamilyMemberModal show={showPopup} />
        <View style={styles.title_container}>
            <Text>MOJA RODZINA</Text>
        </View>
        <View style={styles.family_container}>
            {members.map((item, index) => {
              return (
                <FamilyMemberElement
                    key={'family-member-' + index}
                    name={item.name}
                    you={item.you}
                />
              );
            })}
        </View>
        <View style={styles.add_button_container}>
            <DefaultButton text={"DODAJ CZŁONKA RODZINY"} onPress={() => setShowPopup(true)}/>
        </View>
    </MyAccountTemplate>
  );
};

export default MyFamilyScreen;
