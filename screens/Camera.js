import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,Image } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import { Block, Button } from 'galio-framework';

import { argonTheme } from "../constants/";




export default function Camara() {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined){
    return <Text>Solicitando permisos...</Text>
  } else if (!hasCameraPermission){
    return <Text>Permiso para la cámara no concedido. Cambie esto en la configuración.</Text>
  }

  let takePic = async() => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return(
      <SafeAreaView style={styles.container}>
        <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64  }} />
        <Button round color="#018ABE" title='Compartir' onPress={sharePic}>Compartir</Button>
        {hasMediaLibraryPermission ? <Button round color="#018ABE" title='Guardar' onPress={savePhoto}>Guardar</Button> : undefined}
        <Button round color="#018ABE" title='Desechar' onPress={() => setPhoto(undefined)}>Desechar</Button>
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <Button color="info" round style={styles.button} title='Tomar Foto' onPress={takePic}>Tomar Foto</Button>
      </View>
      <StatusBar style="auto" />
    </Camera>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:7,
    paddingBottom:2
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    alignItems: 'stretch'
  },
  buttonPic: {
    backgroundColor: '#018ABE',
    marginBottom: 30,
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1,
    paddingBottom:5
  },
  createButton: {
    width: 0.5,
    marginTop: 40,
    marginBottom: 30,
    backgroundColor: "#06092F",
    padding: 2
  },
  button: {
    marginBottom: argonTheme.SIZES.BASE * -40,
    width: argonTheme.SIZES.BASE * 7,
  },
});
