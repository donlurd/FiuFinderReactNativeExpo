import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const TranslateScreen = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const translateText = async () => {
    console.log('Texto ingresado:', inputText);
    const apiKey = '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';
    const prompt = `Traduce el siguiente texto al español: "${inputText}"`;

    try {
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo-instruct", // Puedes cambiar el modelo si prefieres otro
          prompt: prompt,
          max_tokens: 100
        })
      });

      console.log('Respuesta completa de la API:', response);

      const data = await response.json();
      console.log('Datos JSON:', data);

      if (data.choices && data.choices.length > 0) {
        const translation = data.choices[0].text.trim();
        console.log('Texto traducido:', translation);
        setTranslatedText(translation);
      } else {
        console.warn('No se encontró texto traducido en la respuesta');
        setTranslatedText("Error: No se encontró una traducción válida.");
      }
    } catch (error) {
      console.error('Error en la traducción:', error);
      setTranslatedText("Error: No se pudo realizar la traducción.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingresa el texto a traducir"
        value={inputText}
        onChangeText={setInputText}
      />
      <Button title="Traducir" onPress={translateText} />
      {translatedText ? (
        <Text style={styles.translation}>Traducción: {translatedText}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  translation: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TranslateScreen;
