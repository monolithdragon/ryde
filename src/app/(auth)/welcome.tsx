import { Button } from '@/components/button';
import { onboarding } from '@/constants';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';

export default function OnBoarding() {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className='flex items-center justify-between h-full p-5 bg-white'>
      <TouchableOpacity
        onPress={() => {
          router.replace('/(auth)/sign-up');
        }}
        className='flex items-end justify-end w-full p-3'>
        <Text className='text-black text-md font-JakartaBold'>Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className='w-8 h-1 mx-1 bg-[#E2E8F0] rounded-full' />}
        activeDot={<View className='w-8 h-1 mx-1 rounded-full bg-primary-500' />}
        onIndexChanged={(index) => setActiveIndex(index)}>
        {onboarding.map((item) => (
          <View
            key={item.id}
            className='flex items-center justify-center'>
            <Image
              source={item.image}
              className='w-full h-80'
              resizeMode='contain'
            />
            <View className='flex items-center justify-center w-full mt-5'>
              <Text className='mx-10 text-3xl font-bold text-center text-black'>{item.title}</Text>
              <Text className='text-center text-lg font-JakartaSemiBold text-[#858585] mx-10 mt-3'>
                {item.description}
              </Text>
            </View>
          </View>
        ))}
      </Swiper>
      <Button
        title={isLastSlide ? 'Get Started' : 'Next'}
        className='w-11/12 mt-2'
        onPress={() =>
          isLastSlide ? router.replace('/(auth)/sign-up') : swiperRef.current?.scrollBy(1)
        }
      />
    </SafeAreaView>
  );
}
