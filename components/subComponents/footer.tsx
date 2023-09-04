import { View, Text,Image,TouchableOpacity } from 'react-native';
import React from 'react';
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledTouchableOpacity = styled(TouchableOpacity);





const Footer = ()=> {

  return (
    <>
    <StyledView className="fixed container h-28">

<StyledView className='border-t-2 border-shadow-lg border-Shark-950 bg-Shark-950 h-32 mt-2 rounded'>



<StyledView className="flex flex-row items-start justify-start ml-3 mt-2 space-x-4">

      <StyledTouchableOpacity>
        <StyledImage
            className ="h-7 w-7 ml-4 mt-6"
              source={require('./img/home.png')}
              />

    </StyledTouchableOpacity>
    <StyledTouchableOpacity>
      <StyledImage
            className ="h-7 w-7 ml-4 mt-6 mr-6"
              source={require('./img/notification.png')}
              />
      </StyledTouchableOpacity>

      <StyledTouchableOpacity>
        <StyledView className="h-24 w-24 shadow-2xl shadow-white rounded-full border-2 -mt-8 bg-Mako-800">
          <StyledText className="text-center text-Cream-Can-300 text-xl font-bold px-5 pt-8">Scan</StyledText>
        </StyledView>
        </StyledTouchableOpacity>

        <StyledTouchableOpacity>
      <StyledImage
            className ="h-7 w-7 ml-4 mt-6"
              source={require('./img/user.png')}
              />
              </StyledTouchableOpacity>
        <StyledTouchableOpacity>
      <StyledImage
            className ="h-7 w-7 ml-4 mt-6"
              source={require('./img/setting.png')}
              />
              </StyledTouchableOpacity>
    </StyledView>
    </StyledView>
    


  
  </StyledView>
  </>
  );
}


export default Footer;