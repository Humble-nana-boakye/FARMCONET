import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Button, Image, ActivityIndicator, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { HF_TOKEN } from '@env';

console.log(HF_TOKEN);

import UTILS from './UTILS/ColorUtils'; // Update the path as needed
import styles from '../components/AppStyles'; // Optional styles
import MOCK_DATA from './Data/mockData'; // Fallback or mock
import Icon from '../components/Icon'; // Optional custom icon

export const DiseaseDetection = ({
  imageUri,
  diseaseResult,
  isAnalyzing,
  onAnalyze,
  onTakePhoto,
  onConsultNGO,
}) => {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Button title="Pick Leaf Image from Gallery" onPress={onAnalyze} />
      <View style={{ marginVertical: 10 }} />
      <Button title="Take Photo of Leaf" onPress={onTakePhoto} />

      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={{ width: 200, height: 200, marginVertical: 20, alignSelf: 'center' }}
        />
      )}

      {isAnalyzing && <ActivityIndicator size="large" />}

      {diseaseResult && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Prediction:</Text>
          <Text>{JSON.stringify(diseaseResult)}</Text>

          <Button title="Consult an NGO" onPress={onConsultNGO} color="#16a34a" />
        </View>
      )}
    </ScrollView>
  );
};

export default function DiseaseDetectionScreen() {
  const [imageUri, setImageUri] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [diseaseResult, setDiseaseResult] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Camera access is required to take a photo.');
      }
    })();
  }, []);

  const handleAnalyze = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        base64: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });

      if (!result.canceled && result.assets?.length > 0) {
        const selected = result.assets[0];
        setImageUri(selected.uri);
        detectDisease(selected.base64);
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Failed to pick image.');
    }
  };

  const handleTakePhoto = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        base64: true,
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });

      if (!result.canceled && result.assets?.length > 0) {
        const captured = result.assets[0];
        setImageUri(captured.uri);
        detectDisease(captured.base64);
      }
    } catch (error) {
      console.error('Error taking photo:', error);
      Alert.alert('Error', 'Failed to take photo.');
    }
  };

  const detectDisease = async (base64Image) => {
    setIsAnalyzing(true);
    try {
      const response = await fetch(
        'https://api-inference.huggingface.co/models/Diginsa/Plant-Disease-Detection-Project',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${HF_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            inputs: {
              image: `data:image/jpeg;base64,${base64Image}`,
            },
          }),
        }
      );

      const data = await response.json();
      console.log('Prediction:', data);
      setDiseaseResult(data);
    } catch (error) {
      console.error('Error detecting disease:', error);
      Alert.alert('Error', 'Something went wrong during analysis.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleConsultNGO = () => {
    Alert.alert('Redirecting to NGO consultation...');
    // Optionally navigate to NGO screen
  };

  return (
    <DiseaseDetection
      imageUri={imageUri}
      diseaseResult={diseaseResult}
      isAnalyzing={isAnalyzing}
      onAnalyze={handleAnalyze}
      onTakePhoto={handleTakePhoto}
      onConsultNGO={handleConsultNGO}
    />
  );
}
