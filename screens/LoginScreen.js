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
  SafeAreaView
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Greška', 'Molimo unesite email i lozinku');
      return;
    }
    console.log('Login:', { email, password });
    Alert.alert('Uspješno!', 'Dobrodošli u Parking Papak!', [
      { text: 'OK', onPress: () => navigation.navigate('Home') }
    ]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <View style={styles.innerContainer}>

          {/* Logo */}
          <View style={styles.logoContainer}>
            <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
            <Text style={styles.title}>Parking Papak</Text>
            <Text style={styles.subtitle}>Prijavite se za nastavak</Text>
          </View>

          {/* Forma */}
          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="ime.prezime@email.com" placeholderTextColor="#999"
              value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />

            <Text style={styles.label}>Lozinka</Text>
            <TextInput style={styles.input} placeholder="********" placeholderTextColor="#999"
              value={password} onChangeText={setPassword} secureTextEntry />

            <TouchableOpacity onPress={() => Alert.alert(
  "Zaboravljena lozinka",
  "Link za resetovanje lozinke je poslan na vaš e-mail.",
  [{ text: "OK" }]
)}>
  <Text style={styles.forgotPassword}>Zaboravljena lozinka?</Text>
</TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Prijavi se</Text>
            </TouchableOpacity>

            {/* OVDE JE SADA ISPRAVNO – KLIKABILNO "Registruj se" */}
            <View style={styles.registerContainer}>
              <Text style={styles.registerText}>Nemate račun? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerLink}>Registruj se</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Dno */}
          <View style={styles.footer}>
            <Image source={require('../assets/grb-sarajevo.png')} style={styles.footerLogo} resizeMode="contain" />
            <Text style={styles.footerText}>Partnerstvo sa Gradom Sarajevo</Text>
          </View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  innerContainer: { flex: 1, paddingHorizontal: 30, justifyContent: 'space-between' },
  logoContainer: { alignItems: 'center', marginTop: 60 },
  logo: { width: 100, height: 100, backgroundColor: '#0066CC', borderRadius: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#000', marginTop: 20 },
  subtitle: { fontSize: 16, color: '#666', marginTop: 8 },
  form: { marginTop: 40 },
  label: { fontSize: 16, color: '#333', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 14, fontSize: 16, marginBottom: 16 },
  forgotPassword: { color: '#0066CC', textAlign: 'right', marginBottom: 30, fontSize: 14 },
  loginButton: { backgroundColor: '#0066CC', borderRadius: 12, paddingVertical: 16, alignItems: 'center' },
  loginButtonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
  registerContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 30 },
  registerText: { color: '#666', fontSize: 15 },
  registerLink: { color: '#0066CC', fontWeight: '600', fontSize: 15 },
  footer: { alignItems: 'center', marginBottom: 40 },
  footerLogo: { width: 80, height: 100 },
  footerText: { marginTop: 10, color: '#666', fontSize: 14 },
});

export default LoginScreen;