// screens/PhotoPreviewScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const PhotoPreviewScreen = ({ navigation }) => {
  const [photoUri, setPhotoUri] = useState(null);

  // Automatski otvaramo kameru kad se ekran učita
  useEffect(() => {
    openCamera();
  }, []);

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Dozvola odbijena', 'Potrebna je dozvola za kameru!');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
    });

    if (!result.canceled) {
      setPhotoUri(result.assets[0].uri);
    }
  };

  const goNext = () => {
    if (!photoUri) {
      Alert.alert('Greška', 'Prvo slikajte vozilo!');
      return;
    }
    navigation.navigate('VehicleDetails', { photoUri });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#0066CC" />
        </TouchableOpacity>
        <Text style={styles.title}>Korak 1: Fotografija</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* Prikaz slike ili placeholder */}
      <View style={styles.imageContainer}>
        {photoUri ? (
          <Image source={{ uri: photoUri }} style={styles.image} />
        ) : (
          <View style={styles.placeholder}>
            <Ionicons name="camera-outline" size={80} color="#ccc" />
            <Text style={styles.placeholderText}>Učitavanje kamere...</Text>
          </View>
        )}
      </View>

      {/* Dugmad */}
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.retryButton} onPress={openCamera}>
          <Text style={styles.retryText}>Ponovi</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton} onPress={goNext}>
          <Text style={styles.nextButtonText}>Dalje</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: { fontSize: 18, fontWeight: 'bold', color: '#0066CC' },

  imageContainer: { flex: 1, padding: 20 },
  image: { width: '100%', height: '100%', borderRadius: 16 },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 16,
  },
  placeholderText: { marginTop: 20, fontSize: 18, color: '#999' },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  retryButton: {
    flex: 1,
    marginRight: 15,
    paddingVertical: 16,
    borderWidth: 2,
    borderColor: '#0066CC',
    borderRadius: 12,
    alignItems: 'center',
  },
  retryText: { color: '#0066CC', fontSize: 18, fontWeight: 'bold' },
  nextButton: {
    flex: 1,
    marginLeft: 15,
    backgroundColor: '#0066CC',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  nextButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default PhotoPreviewScreen;