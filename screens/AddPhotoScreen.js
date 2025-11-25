// screens/AddPhotoScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddPhotoScreen = ({ navigation }) => {
  const openCamera = () => {
    navigation.navigate('PhotoPreview');
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

      {/* Glavni sadržaj */}
      <View style={styles.content}>
        <TouchableOpacity style={styles.uploadBox} onPress={openCamera}>
          <Ionicons name="cloud-upload-outline" size={80} color="#0066CC" />
          <Text style={styles.uploadText}>Dodaj fotografiju</Text>
          <Text style={styles.subtitle}>
            Molimo Vas da registarske tablice vozila budu vidljive jasno
          </Text>
        </TouchableOpacity>
      </View>

      {/* Plavo dugme */}
      <View style={styles.bottomButton}>
        <TouchableOpacity style={styles.nextButton} onPress={openCamera}>
          <Text style={styles.nextButtonText}>Otvori kameru</Text>
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

  content: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 40 },
  uploadBox: {
    width: '100%',
    height: 300,
    borderWidth: 3,
    borderColor: '#0066CC',
    borderStyle: 'dashed',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fbff',
  },
  uploadText: { fontSize: 22, fontWeight: 'bold', color: '#0066CC', marginTop: 20 },
  subtitle: { fontSize: 14, color: '#666', textAlign: 'center', marginTop: 10, lineHeight: 20 },

  bottomButton: { paddingHorizontal: 30, paddingVertical: 20 },  // ISPRAVLJENO!
  nextButton: {
    backgroundColor: '#0066CC',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  nextButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});

export default AddPhotoScreen;