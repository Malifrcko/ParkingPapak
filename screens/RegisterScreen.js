// screens/RegisterScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  SafeAreaView,
  ScrollView
} from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [ime, setIme] = useState('');
  const [prezime, setPrezime] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!ime || !prezime || !email || !password || !confirmPassword) {
      Alert.alert('Greška', 'Sva polja su obavezna');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Greška', 'Lozinke se ne poklapaju');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Greška', 'Lozinka mora imati najmanje 6 karaktera');
      return;
    }

    console.log('Registracija:', { ime, prezime, email, password });
    Alert.alert('Uspješno!', 'Registracija uspješna (test)\nUskoro ćete biti preusmjereni na prijavu.');
    
    // Kasnije ovdje ide pravi poziv na backend/Firebase
    // setTimeout(() => navigation.navigate('Login'), 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.innerContainer}>

            {/* Logo */}
            <View style={styles.logoContainer}>
              <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
              <Text style={styles.title}>Parking Papak</Text>
              <Text style={styles.subtitle}>Kreirajte nalog</Text>
            </View>

            {/* Forma */}
            <View style={styles.form}>
              <Text style={styles.label}>Ime</Text>
              <TextInput style={styles.input} placeholder="Vaše ime" value={ime} onChangeText={setIme} autoCapitalize="words" />

              <Text style={styles.label}>Prezime</Text>
              <TextInput style={styles.input} placeholder="Vaše prezime" value={prezime} onChangeText={setPrezime} autoCapitalize="words" />

              <Text style={styles.label}>Email</Text>
              <TextInput style={styles.input} placeholder="ime.prezime@email.com" value={email} onChangeText={setEmail}
                keyboardType="email-address" autoCapitalize="none" />

              <Text style={styles.label}>Lozinka</Text>
              <TextInput style={styles.input} placeholder="Najmanje 6 karaktera" value={password} onChangeText={setPassword}
                secureTextEntry />

              <Text style={styles.label}>Potvrdi lozinku</Text>
              <TextInput style={styles.input} placeholder="Ponovite lozinku" value={confirmPassword} onChangeText={setConfirmPassword}
                secureTextEntry />

              <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.registerButtonText}>Registruj se</Text>
              </TouchableOpacity>

              <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Već imate nalog? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.loginLink}>Prijavi se</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Dno */}
            <View style={styles.footer}>
              <Image source={require('../assets/grb-sarajevo.png')} style={styles.footerLogo} resizeMode="contain" />
              <Text style={styles.footerText}>Partnerstvo sa Gradom Sarajevo</Text>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  innerContainer: { flex: 1, paddingHorizontal: 30, justifyContent: 'space-between' },
  logoContainer: { alignItems: 'center', marginTop: 40 },
  logo: { width: 100, height: 100, backgroundColor: '#0066CC', borderRadius: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#000', marginTop: 20 },
  subtitle: { fontSize: 16, color: '#666', marginTop: 8 },
  form: { marginTop: 30 },
  label: { fontSize: 16, color: '#333', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 14, fontSize: 16, marginBottom: 16 },
  registerButton: { backgroundColor: '#0066CC', borderRadius: 12, paddingVertical: 16, alignItems: 'center', marginTop: 10 },
  registerButtonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
  loginContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 25 },
  loginText: { color: '#666', fontSize: 15 },
  loginLink: { color: '#0066CC', fontWeight: '600', fontSize: 15 },
  footer: { alignItems: 'center', marginBottom: 40 },
  footerLogo: { width: 80, height: 100 },
  footerText: { marginTop: 10, color: '#666', fontSize: 14 },
});

export default RegisterScreen;