import { View, Text,Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styled } from "nativewind";
import LinearGradient from 'react-native-linear-gradient';
import { Switch} from 'react-native-paper' ;


import Header from './subComponents/header';
import Footer from './subComponents/footer';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledLinearGradient = styled(LinearGradient);
const StyledSwitch = styled(Switch);

function Settings({ navigation }) {
  const [switchOn, setSwitchOn] = useState(false)
  const [switchOn_1, setSwitchOn_1] = useState(false)
  const [switchOn_2, setSwitchOn_2] = useState(false)
  const [switchOn_3, setSwitchOn_3] = useState(false)
  const [switchOn_4, setSwitchOn_4] = useState(false)
  const [switchOn_5, setSwitchOn_5] = useState(false)

  return (
      <StyledLinearGradient 
    start={{x: 0, y: 0}} end={{x: 1, y: 0}}
    colors={['#373A3F', '#252527', '#26292E','#232428']} className='h-max'>

    <Header/>

    <StyledView className="container h-24">
     
        <StyledView className="flex flex-row mx-4 mt-4 mb-4 px-4 space-x-3 justify-center bg-Abbeyww rounded-full ring-black shadow-lg">
         
              <StyledTouchableOpacity className="flex flex-row mt-2 mb-2 px-4 items-center justify-center rounded-full" onPress={() => navigation.navigate('DashBoard')}>
              
              <StyledText className="text-Aluminiume text-center px-6 py-2 text-2xl shadow-inner">Dashboard</StyledText>
              
            </StyledTouchableOpacity>
            <StyledTouchableOpacity className="flex flex-row mt-2 mb-2 px-3 items-center justify-center bg-Shark rounded-full shadow-lg">
              
              <StyledText  className="text-Yellow text-center px-6 py-2 text-2xl shadow-inner">Settings</StyledText>
              
            </StyledTouchableOpacity>

          
      </StyledView>
   

    </StyledView>

  <StyledView className="container h-auto">
    <StyledView className="flex-1 mx-4 rounded bg-Shark-950 shadow-lg shadow-black">
       
    
    <StyledView className="flex flex-row items-start justify-start">
          <StyledImage
          className ="ml-4 mt-3 h-7 w-7"
            source={require('./img/left-right.png')}
            />
            <StyledText className="ml-4 mt-3 text-lg text-Yellow">Monitor Connections      </StyledText>
            <StyledSwitch className="ml-20 mt-3" color="yellow" value={switchOn} onValueChange={() => {
                setSwitchOn(!switchOn)
                } }/>
     </StyledView>
     <StyledText className="ml-4 mt-2">Real-Time monitoring</StyledText>
     <StyledView className="mt-2 border-t-2 bg-YellowWifi opacity-10">
     
    </StyledView>

     <StyledView className="flex flex-row items-start justify-start">
          <StyledImage
          className ="ml-4 mt-2 h-7 w-7"
            source={require('./img/malicious.png')}
            />
            <StyledText className="ml-4 mt-2 text-lg text-Yellow">Malicious Website Blocker</StyledText>
            <StyledSwitch className="ml-16 mt-2" color="yellow" value={switchOn_1} onValueChange={() => {
                setSwitchOn_1(!switchOn_1)
                } }/>
     </StyledView>
     <StyledText className="ml-4 mt-2">Protection against mailcious websites</StyledText>
     <StyledView className="mt-2 border-t-2 bg-YellowWifi opacity-10">
     
    </StyledView>
    <StyledView className="flex flex-row items-start justify-start">
          <StyledImage
          className ="ml-4 mt-2 h-7 w-7"
            source={require('./img/traffic-signal.png')}
            />
            <StyledText className="ml-4 mt-2 text-lg text-Yellow">Ad Blocker                        </StyledText>
            <StyledSwitch className="ml-20 mt-2" color="yellow" value={switchOn_2} onValueChange={() => {
                setSwitchOn_2(!switchOn_2)
                } }/>
     </StyledView>
     <StyledText className="ml-4 mt-2">Block any unwanted Ads</StyledText>
     <StyledView className="mt-2 border-t-2 bg-YellowWifi opacity-10">
     
    </StyledView>
    <StyledView className="flex flex-row items-start justify-start">
          <StyledImage
          className ="ml-4 mt-2 h-7 w-7"
            source={require('./img/hand.png')}
            />
            <StyledText className="ml-4 mt-2 text-lg text-Yellow">Block Persistent & Distracting Ads</StyledText>
            <StyledSwitch className="ml-0 mt-2" color="yellow" value={switchOn_3} onValueChange={() => {
                setSwitchOn_3(!switchOn_3)
                } }/>
     </StyledView>
     <StyledText className="ml-4 mt-2">Block destracting ads</StyledText>
     <StyledView className="mt-2 border-t-2 bg-YellowWifi opacity-10">
     
    </StyledView>
    <StyledView className="flex flex-row items-start justify-start">
          <StyledImage
          className ="ml-4 mt-2 h-7 w-7"
            source={require('./img/security.png')}
            />
            <StyledText className="ml-4 mt-2 text-lg text-Yellow">Phishing/Scam Detection </StyledText>
            <StyledSwitch className="ml-16 mt-2" color="yellow" value={switchOn_4} onValueChange={() => {
                setSwitchOn_4(!switchOn_4)
                } }/>
     </StyledView>
     <StyledText className="ml-4 mt-2">Detect phishing and scam attempts</StyledText>
     <StyledView className="mt-2 border-t-2 bg-YellowWifi opacity-10">
     
    </StyledView>
    <StyledView className="flex flex-row items-start justify-start">
          <StyledImage
          className ="ml-4 mt-2 h-7 w-7"
            source={require('./img/scanner.png')}
            />
            <StyledText className="ml-4 mt-2 text-lg text-Yellow">QR Code Scanner            </StyledText>
            <StyledSwitch className="ml-20 mt-2" color="yellow" value={switchOn_5} onValueChange={() => {
                setSwitchOn_5(!switchOn_5)
                } }/>
     </StyledView>
     <StyledText className="ml-4 mt-2">Scan any unwanted codes before take you in</StyledText>
     <StyledView className="mt-2 border-t-2 bg-YellowWifi opacity-10">
     
    </StyledView>
    <StyledView className="flex flex-row items-start justify-start">
          <StyledImage
          className ="ml-4 mt-6 h-7 w-7"
            source={require('./img/caution.png')}
            />
            
            <StyledText className="ml-4 text-xs text-Yellow">Configuring firewall setings incorrectly can leave your {'\n'}device 
            and personal information vulnerable to cyber {'\n'}attacks.
             Please ensure you have athoraugh understading {'\n'}of the settings befor making any changes</StyledText>
            
     </StyledView>
     <StyledView className='mt-5'>
            </StyledView>


  </StyledView>
 </StyledView>

    <Footer/>
    </StyledLinearGradient>
    
    
  );
}

export default (Settings);