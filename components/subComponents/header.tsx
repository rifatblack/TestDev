import { View, Text,Image,TouchableOpacity } from 'react-native';
import React from 'react';
import { styled } from "nativewind";



const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);




const Header = ()=> {

  return (
    <>
    <StyledView className="container">
    <StyledView className="flex flex-row items-center">

    <StyledView className="basis-1/4 sm:h-18">

      <StyledView className ="sm:h-1 items-center justify-center">
      <TouchableOpacity>
      <StyledView className ="shadow-lg shadow-black rounded-full border-2 items-center justify-center w-9 h-9 bg-gray-700">
      
      
      <StyledImage
      className ="items-center justify-center sm:w-4 sm:h-4 shadow-inner"
        source={require('./img/back.png')}
        />
       
      </StyledView>
      </TouchableOpacity>
      </StyledView>
    
           {/* <StyledText className="text-white text-center m-8 bg-black rounded-full">01</StyledText> */}
    </StyledView>

    <StyledView className="basis-1/2 h-24">
           <StyledText className="text-Husk-500 text-center p-8 text-2xl font-bold">Firewall</StyledText>
    </StyledView>

          <StyledText className="basis-1/5 "> </StyledText>

</StyledView>


</StyledView>
  </>
  );
}


export default Header;