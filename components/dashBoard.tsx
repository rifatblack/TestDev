import { View, Text,Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styled } from "nativewind";
import { VictoryBar, VictoryChart, VictoryTheme,VictoryAxis  } from 'victory-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from './subComponents/header';
import Footer from './subComponents/footer';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledVictoryChartt = styled(VictoryChart);
const StyledLinearGradient = styled(LinearGradient);





function DashBoard({ navigation}) {
  const data = [
    { month: 'Jan', incomingData: 100, outgoingData: 80 },
    { month: 'Feb', incomingData: 200, outgoingData: 150 },
    { month: 'Mar', incomingData: 150, outgoingData: 120 },
    { month: 'Apr', incomingData: 300, outgoingData: 220 },
    { month: 'May', incomingData: 250, outgoingData: 180 },
    { month: 'Jun', incomingData: 180, outgoingData: 140 },
  ];
  
  return (
      <StyledLinearGradient 
    start={{x: 0, y: 0}} end={{x: 1, y: 0}}
    colors={['#373A3F', '#252527', '#26292E','#232428']} className='h-max'>

    <Header/>

    <StyledView className="container h-24">
 
    <StyledView className="flex flex-row mx-4 mt-4 mb-4 px-4 space-x-3 justify-center bg-Abbeyww rounded-full ring-black shadow-lg">
     
          <StyledTouchableOpacity className="flex flex-row mt-2 mb-2 px-3 items-center justify-center bg-Shark rounded-full shadow-lg">
          
          <StyledText className="text-Yellow text-center px-6 py-2 text-2xl shadow-inner">Dashboard</StyledText>
          
        </StyledTouchableOpacity>
        <StyledTouchableOpacity className="flex flex-row mt-2 mb-2 px-4 items-center justify-center rounded-full" onPress={() => navigation.navigate('Settings')}>
          
          <StyledText className="text-Aluminiume text-center px-6 py-2 text-2xl shadow-inner">Settings</StyledText>
          
        </StyledTouchableOpacity>

      
  </StyledView>


</StyledView>

 
  <StyledView className="container h-80">
    <StyledView className="flex-1 mx-4 rounded bg-Shark-950 shadow-lg shadow-black">
        <StyledView className="flex flex-row items-start justify-start ml-2">
        <StyledImage
          className ="ml-2 mt-2 h-6 w-6"
            source={require('./img/wifi.png')}
            />
        <StyledText className='text-xl font-bold text-YellowWifi ml-4 mt-1 opacity-100 space-x-0'>WiFi Connection
        </StyledText>

        <StyledText className="ml-16 mt-2 text-base text-white-400">Connected
        </StyledText>
     
        <StyledView className="ml-3 mt-4 w-2 h-2 rounded-full bg-yellow-400"></StyledView>
      
        </StyledView>

        <StyledView className="flex flex-row items-start justify-start ml-2">
          <StyledView className="text-white text-sm opacity-50">
            <StyledText>WiFi Name      :</StyledText>
            <StyledText>Network          :</StyledText>
            <StyledText>Firewall           :</StyledText>

          </StyledView>

          <StyledView className="text-white text-sm opacity-100 mr-4">
          <StyledText className="text-YellowWifi"> TechForing</StyledText>
            <StyledText className="text-white"> Monitoring</StyledText>
            <StyledText className="text-white"> Active</StyledText>
          </StyledView>

          <StyledView className="w-px h-[60] rounded bg-yellow-400 opacity-30 mr-2">
            
          </StyledView>

          <StyledView className="text-white text-sm opacity-50">
            <StyledText>Network Type      :</StyledText>
            <StyledText>Protocol                :</StyledText>
          </StyledView>

          <StyledView className="">
            <StyledText className="text-YellowWifi"> Public</StyledText>
            <StyledText className="text-white"> WPA</StyledText>
          </StyledView>

        </StyledView>

        <StyledView className="flex flex-row items-start justify-start ml-2">
        <StyledView className="mt-2 h-px w-[360] rounded bg-yellow-400 opacity-30">
            
          </StyledView>
        </StyledView>

      <StyledView className="flex flex-row items-start justify-start">
      
      
      <StyledVictoryChartt className='text-zinc-100 text-xs ml-4 mb-2'
      width={360} height={180} theme={VictoryTheme.material}>
        <VictoryBar
          data={data}
          x="month"
          y={(d) => d.incomingData}
          style={{
            data: {
              fill: '#8d8e90', 
            },
          }}
        />
        <VictoryAxis
          style={{
            ticks: { stroke: '#8d8e90', size: 5 }, 
            tickLabels: { fill: '#8d8e90', fontSize: 10 }, 
            grid: {
              stroke: 'none',
            },
          }}
        />
        <VictoryBar
          data={data}
          x="month"
          y={(d) => d.outgoingData}
          style={{
            data: {
              fill: '#f3dc58', // Custom bar color for outgoing data
            },
          }}
        />
      </StyledVictoryChartt>
  

        </StyledView>

        <StyledView className="flex flex-row items-start justify-start ml-2 text-sm">
           <StyledText className="ml-6" >Data Usage Statistic :  </StyledText>
           <StyledText >Incoming</StyledText>
           <StyledView className="h-4 w-4 rounded bg-yellow-300 ml-2 mt-1"></StyledView>
            <StyledText className="ml-2">Outgoing</StyledText>
            <StyledView className="h-4 w-4 rounded bg-gray-400 ml-2 mt-1"></StyledView>
        </StyledView>
       

        

    </StyledView>
    <StyledView >

  </StyledView>


 </StyledView>
 <StyledView className="container md:h-56">
   
<StyledView className="flex flex-row items-start justify-start ml-5 mt-2 space-x-4">
    <StyledView className="h-24 w-44 mr-0 rounded bg-Shark-950 shadow-lg shadow-black">
      <StyledText className="text-center pt-4 text-yellow-300 text-2xl font-bold">0</StyledText>
      <StyledText className="text-center pt-2">Malicious Website</StyledText>

    </StyledView>
    <StyledView className="h-24 w-44 pr-4 rounded bg-Shark-950 shadow-lg shadow-black">
      <StyledText className="text-center pt-4 text-yellow-300 text-2xl font-bold">13</StyledText>
      <StyledText className="text-center pt-2">Ad Blocked</StyledText>
      

    </StyledView>
    
    </StyledView>

    <StyledView className="flex flex-row items-start justify-start ml-5 mt-2 space-x-4">
    <StyledView className="h-24 w-44 mr-0 rounded bg-Shark-950 shadow-lg shadow-black">
      <StyledText className="text-center pt-4 text-yellow-300 text-2xl font-bold">6</StyledText>
      <StyledText className="text-center pt-2">Unwanted codes in QR</StyledText>

    </StyledView>
    <StyledView className="h-24 w-44 pr-4 rounded bg-Shark-950 shadow-lg shadow-black">
      <StyledText className="text-center pt-4 text-yellow-300 text-2xl font-bold ">1</StyledText>
      <StyledText className="text-center pt-2">Phishing/Scam</StyledText>
      

    </StyledView>
    
    </StyledView>
    

 </StyledView>

 <Footer />
    </StyledLinearGradient>
    
  );
}


export default DashBoard;