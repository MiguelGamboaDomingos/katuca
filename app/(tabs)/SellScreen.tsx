import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
const SellScreen = () => {
  const [images, setImages] = useState<string[]>([]);
  const [material, setMaterial] = useState('');
  const [weight, setWeight] = useState('');
  const [quality, setQuality] = useState('');
  const [location, setLocation] = useState('');

  const handleImageUpload = () => {
    // Image picker implementation will go here
    console.log('Upload image');
  };

  const handlePublish = () => {
    console.log('Publishing listing');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageSection}>
        <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
          <Icon name="add-a-photo" size={32} color="#2196F3" />
          <Text style={styles.uploadText}>Adicionar Fotos</Text>
        </TouchableOpacity>
        <ScrollView horizontal style={styles.imagePreview}>
          {images.map((image, index) => (
            <Image key={index} source={{uri: image}} style={styles.previewImage} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Tipo de Material</Text>
          <TextInput
            style={styles.input}
            value={material}
            onChangeText={setMaterial}
            placeholder="Ex: Ferro, Alumínio, Cobre"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Peso Estimado (kg)</Text>
          <TextInput
            style={styles.input}
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric"
            placeholder="Ex: 100"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Qualidade</Text>
          <TextInput
            style={styles.input}
            value={quality}
            onChangeText={setQuality}
            placeholder="Ex: Bom estado, Enferrujado"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Localização</Text>
          <TextInput
            style={styles.input}
            value={location}
            onChangeText={setLocation}
            placeholder="Digite sua localização"
          />
        </View>

        <TouchableOpacity style={styles.publishButton} onPress={handlePublish}>
          <Text style={styles.publishButtonText}>Publicar Anúncio</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  imageSection: {
    padding: 16,
  },
  uploadButton: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#2196F3',
  },
  uploadText: {
    marginTop: 8,
    color: '#2196F3',
    fontSize: 16,
  },
  imagePreview: {
    marginTop: 16,
    height: 100,
  },
  previewImage: {
    width: 100,
    height: 100,
    marginRight: 8,
    borderRadius: 8,
  },
  form: {
    padding: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  publishButton: {
    backgroundColor: '#2196F3',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
  },
  publishButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SellScreen;
