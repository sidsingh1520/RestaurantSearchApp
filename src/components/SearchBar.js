import React from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';
const SearchBar=({term,onTermChange,onTermSubmit})=>{
    return(
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
             autoCorrect={false}
             autoCapitalize="none"
             style={styles.inputStyle}
             value={term}
             onChangeText={onTermChange}
             placeholder="Search"
             onEndEditing={onTermSubmit}
             />
        </View>
    );
};

const styles=StyleSheet.create({
    backgroundStyle:{
        marginTop:10,
        backgroundColor:'#F0EEEE',
        height:40,
        borderRadius:10,
        marginHorizontal:15,
        flexDirection:'row',
        marginBottom:10
    },
    inputStyle:{
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:10
    }
});
export default SearchBar;