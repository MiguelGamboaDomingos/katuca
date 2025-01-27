import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function ExploreScreen() {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: -8.8383333,
          longitude: 13.2344444,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Add markers for each seller */}
        <Marker
          coordinate={{ latitude: -8.8383333, longitude: 13.2344444 }}
          title="Vendedor de Ferro"
          description="Disponível para negociação"
        />
      </MapView>
    </View>
  );
}
