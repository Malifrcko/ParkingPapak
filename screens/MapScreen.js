// screens/MapScreen.js
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

const MapScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const mapRef = useRef(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Dozvola odbijena', 'Molimo omogućite pristup lokaciji');
        setLoading(false);
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
      setLoading(false);
    })();
  }, []);

  const goToMyLocation = async () => {
    if (!location) return;

    mapRef.current?.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mapa prijava</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* Mapa */}
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0066CC" />
          <Text style={styles.loadingText}>Učitavam lokaciju...</Text>
        </View>
      ) : (
        <MapView
          ref={mapRef}
          style={styles.map}
          showsUserLocation={true}
          // followsUserLocation={false} ← isključeno da možeš slobodno roamati
          initialRegion={{
            latitude: location?.latitude || 43.8563,
            longitude: location?.longitude || 18.4131,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03,
          }}
        >
          {location && (
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title="Vi ste ovdje"
              pinColor="#0066CC"
            />
          )}
        </MapView>
      )}

      {/* Dugme za centriranje na trenutnu lokaciju */}
      <TouchableOpacity style={styles.myLocationButton} onPress={goToMyLocation}>
        <Ionicons name="locate" size={32} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: '#0066CC',
    zIndex: 10,
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff' },

  map: { ...StyleSheet.absoluteFillObject },

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  loadingText: { marginTop: 10, fontSize: 16, color: '#666' },

  myLocationButton: {
    position: 'absolute',
    top: 110,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#0066CC',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
});

export default MapScreen;