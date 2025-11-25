// screens/HomeScreen.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
 const handleNewReport = () => {
  navigation.navigate('AddPhoto');
};

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={30} color="#0066CC" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dobrodošli!</Text>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={30} color="#0066CC" />
        </TouchableOpacity>
      </View>

      {/* Prazan prostor iznad FAB-a */}
      <View style={styles.spacer} />

      {/* Veliko plavo dugme u centru */}
      <TouchableOpacity style={styles.fab} onPress={handleNewReport}>
        <Ionicons name="camera-outline" size={36} color="#fff" />
        <Text style={styles.fabText}>Nova prijava</Text>
      </TouchableOpacity>

      {/* Donja navigacija */}
      <View style={styles.bottomNav}>
  <TouchableOpacity
    style={styles.navItem}
    onPress={() => navigation.navigate('Map')}
  >
    <Ionicons name="location" size={28} color="#0066CC" />
    <Text style={styles.navTextActive}>Mapa</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.navItem}>
    <Ionicons name="list-outline" size={28} color="#888" />
    <Text style={styles.navText}>Moje prijave</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.navItem}>
    <Ionicons name="gift-outline" size={28} color="#888" />
    <Text style={styles.navText}>Nagrade</Text>
  </TouchableOpacity>
</View>

      {/* Bodovi */}
      <View style={styles.pointsBar}>
        <Text style={styles.pointsText}>
          Tvoji bodovi: <Text style={styles.pointsNumber}>0 </Text>
        </Text>
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
    paddingTop: 10,
  },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#0066CC' },

  spacer: { flex: 1 },

  fab: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -75,
    marginTop: -75,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#0066CC',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
  },
  fabText: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginTop: 8 },

  bottomNav: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 14,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  navItem: { alignItems: 'center' },
  navTextActive: { color: '#0066CC', fontSize: 14, marginTop: 4, fontWeight: '600' },
  navText: { color: '#888', fontSize: 14, marginTop: 4 },

  pointsBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f8f8f8',
    paddingVertical: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  pointsText: { fontSize: 16, color: '#444' },
  pointsNumber: { fontWeight: 'bold', color: '#0066CC', fontSize: 17 },
});

export default HomeScreen;