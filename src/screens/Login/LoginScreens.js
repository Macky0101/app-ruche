import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {KeyboardAvoidingView, ScrollView, View, Text, Image, TextInput, TouchableOpacity, Platform} from 'react-native';
import styles from './style'
import { useNavigation } from '@react-navigation/native';



const emailErrorMessage = 'Identifiant obligatoire';
const passwordErrorMessage = 'Mot de passe obligatoire';

const UIInput = ({onFocus, onBlur, suffixIconSource, isError, ...rest}) => {
  const [isFocus, setIsFocus] = useState(false);



  return (
    <View style={styles.input}>
      <TextInput
        style={[
          styles.inputField,
          isError && styles.inputIsError,
          isFocus && styles.inputIsFocus,
        ]}
        underlineColorAndroid="#ffffff00"
        placeholderTextColor="#829aa3"
        onFocus={(e) => {
          setIsFocus(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocus(false);
          onBlur?.(e);
        }}
        {...rest}
      />
      {suffixIconSource && (
        <Image
          style={[
            styles.inputIcon,
            isError && styles.inputIconIsError,
            isFocus && styles.inputIconIsFocus,
          ]}
          source={suffixIconSource}
          resizeMode="contain"
          pointerEvents="none"
        />
      )}
    </View>
  );
};

const UILogin = () => {
  const navigation = useNavigation();
  const [values, setValues] = useState({email: '', password: ''});
  const [errors, setErrors] = useState({email: '', password: ''});

  const handleSubmit = () => {
    setErrors({
      email: values.email === '' ? emailErrorMessage : '',
      password: values.password === '' ? passwordErrorMessage : '',
    });
  };

  return (
    <KeyboardAvoidingView 
      style={styles.login} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.base}>
        <View style={styles.loginTop}>
          <Image
            style={styles.loginTopLogo}
            source={require('./../../../assets/images/logo.png')} 
            resizeMode="contain"
          />
        </View>
        <View style={styles.loginBody}>
          <View style={styles.grid}>
            <View style={styles.gridContent}>
              <View style={styles.gridItem}>
                <View style={styles.formControl}>
                  <Text style={styles.formControlLabel}>Identifiant</Text>
                  <UIInput
                    isError={errors.email}
                    placeholder="veuillez saisir votre identifiant"
                    value={values.email}
                    onChangeText={(text) => {
                      setValues({...values, email: text});
                      setErrors({
                        ...errors,
                        email: text ? '' : emailErrorMessage,
                      });
                    }}
                    suffixIconSource={{
                      uri: 'https://manual-ui.com/images/mail.png',
                    }}
                  />
                  {!!errors.email && (
                    <Text style={styles.formControlError}>{errors.email}</Text>
                  )}
                </View>
              </View>
              <View style={styles.gridItem}>
                <View style={styles.formControl}>
                  <Text style={styles.formControlLabel}>Mot de passe</Text>
                  <UIInput
                    isError={errors.password}
                    placeholder="veuillez saisir votre mot de passe"
                    value={values.password}
                    onChangeText={(text) => {
                      setValues({...values, password: text});
                      setErrors({
                        ...errors,
                        password: text ? '' : passwordErrorMessage,
                      });
                    }}
                    suffixIconSource={{
                      uri: 'https://manual-ui.com/images/lock.png',
                    }}
                    secureTextEntry
                  />
                  {errors.password ? (
                    <Text style={styles.formControlError}>
                      {errors.password}
                    </Text>
                  ) : null}
                  
                  <TouchableOpacity
                    style={styles.btn}
                    activeOpacity={0.8}
                    onPress={() => {
                      handleSubmit();
                      navigation.navigate('ListeProjets');
                    }}
                  >
                    <Text style={styles.btnText} numberOfLines={1}>
                      Connexion
                    </Text>
                  </TouchableOpacity>

                </View>
                {/* <View style={styles.flexA}>
                  <TouchableOpacity style={styles.btnE} activeOpacity={0.8}>
                    <Text style={styles.btnTextE} numberOfLines={1}>
                      Forgot password?
                    </Text>
                  </TouchableOpacity>
                </View> */}
              </View>
            </View>
          </View>
          <View style={styles.flexC}>
          {/* <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.8}
            onPress={() => {
              handleSubmit();
              navigation.navigate('ListeProjets');
            }}
          >
            <Text style={styles.btnText} numberOfLines={1}>
              Connexion
            </Text>
          </TouchableOpacity> */}

            {/* <View style={styles.flexB}>
              <Text style={styles.typography}>Don't have account?</Text>
              <TouchableOpacity style={styles.btnF} activeOpacity={0.8}>
                <Text style={styles.btnTextF} numberOfLines={1}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View> */}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UILogin;

