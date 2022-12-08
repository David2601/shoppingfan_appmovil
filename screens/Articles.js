//galio
import { Block, Text, theme } from "galio-framework";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
//argon
import { Images, argonTheme} from "../constants/";

import React from "react";

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;
const categories = [
  {
    title: "Volkswagen",
    description:
      "Automovil de coleccion de cuatro plazas con motor 1.6 4 CIL Edicion especial.",
    image:
      "https://utdgrupoti.com/shoppingfan/public/assets/img/auto2.jpg",
    price: "$378,61",
  },
  {
    title: "Esclava de Oro tejido cubano",
    description:
      "Brazalete de Oro 18k/Plata de 8/10/12mm para Hombre.",
    image:
      "https://utdgrupoti.com/shoppingfan/public/assets/img/es.jpg",
    price: "$25,990",
  },
  {
    title: "Harley Davidson",
    description:
      "2014 Harley Davidson CVO Breakout Motorcycle Model 1/12 by Maisto 32327",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_897684-MLM49460040633_032022-O.jpg",
    price: "$669,73",
  },
  {
    title: "Camara fotografica Cannon",
    description:
      "Canon EOS Rebel T100 DSLR Camera w/EF-S 18-55mm f/3.5-5.6 DC Lens (International Model)",
    image:
      "https://utdgrupoti.com/shoppingfan/public/assets/img/camara.webp",
    price: "$8,500",
  },
  {
    title: "Audífonos Lenovo Stereo",
    description:
      "Audifonos Inalambricos Bluetooth 5.2, Audifonos Bluetooth（Reducción de ruido ENC ，Calidad de sonido HIFI，IPX6 ，Batería con duración de hasta 6 Horas）para iPhone, PC, iPad, Android（con cable de carga）",
    image:
      "https://utdgrupoti.com/shoppingfan/public/assets/img/electronic3.jpg",
    price: "$5,500",
  },
  {
    title: "Bugatti Type 575C Atlantic de 1936",
    description:
      "Motor de 3.257 cc con doble árbol de levas (DOHC) basado en el del Type 49, velocidad máxima de 153 km/h.",
    image:
      "https://utdgrupoti.com/shoppingfan/public/assets/img/auto1.jpg",
    price: "29,52 €",
  },
  
];

class Articles extends React.Component {
  renderProduct = (item) => {
    const { navigation } = this.props;

    return (
      <TouchableWithoutFeedback
        style={{ zIndex: 3 }}
        key={`product-${item.title}`}
        onPress={() => navigation.navigate("Pro", { product: item })}
      >
        <Block center style={styles.productItem}>
          <Image
            resizeMode="cover"
            style={styles.productImage}
            source={{ uri: item.image }}
          />
          <Block center style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Text
              center
              size={16}
              color={theme.COLORS.MUTED}
              style={styles.productPrice}
            >
              {item.price}
            </Text>
            <Text center size={34}>
              {item.title}
            </Text>
            <Text
              center
              size={16}
              color={theme.COLORS.MUTED}
              style={styles.productDescription}
            >
              {item.description}
            </Text>
          </Block>
        </Block>
      </TouchableWithoutFeedback>
    );
  };

  renderCards = () => {
    return (
      <Block flex style={styles.group}>
        <Text bold size={16} style={styles.title}>
          Subastas destacadas
        </Text>
        <Block flex>
          <Block flex style={{ marginTop: theme.SIZES.BASE / 2 }}>
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              snapToInterval={cardWidth + theme.SIZES.BASE * 0.375}
              contentContainerStyle={{
                paddingHorizontal: theme.SIZES.BASE / 2,
              }}
            >
              {categories &&
                categories.map((item, index) =>
                  this.renderProduct(item, index)
                )}
            </ScrollView>
          </Block>
        </Block>
      </Block>
    );
  };

  renderAlbum = () => {
    const { navigation } = this.props;

    return (
      <Block
        flex
        style={[styles.group, { paddingBottom: theme.SIZES.BASE * 5 }]}
      >
        <Text bold size={16} style={styles.title}>
          Subastas sugeridas
        </Text>
        <Block style={{ marginHorizontal: theme.SIZES.BASE * 2 }}>
          <Block flex right>
            <Text
              size={12}
              color={theme.COLORS.PRIMARY}
              onPress={() => navigation.navigate("Inicio")}
            >
              Ver más
            </Text>
          </Block>
          <Block
            row
            space="between"
            style={{ marginTop: theme.SIZES.BASE, flexWrap: "wrap" }}
          >
            {Images.Viewed.map((img, index) => (
              <Block key={`viewed-${img}`} style={styles.shadow}>
                <Image
                  resizeMode="cover"
                  source={{ uri: img }}
                  style={styles.albumThumb}
                />
              </Block>
            ))}
          </Block>
        </Block>
      </Block>
    );
  };

  render() {
    return (
      <Block flex center>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.renderCards()}
          {this.renderAlbum()}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    color: argonTheme.COLORS.HEADER,
  },
  group: {
    paddingTop: theme.SIZES.BASE,
  },
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure,
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0,
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBlock: {
    overflow: "hidden",
    borderRadius: 4,
  },
  productItem: {
    width: cardWidth - theme.SIZES.BASE * 2,
    marginHorizontal: theme.SIZES.BASE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  productImage: {
    width: cardWidth - theme.SIZES.BASE,
    height: cardWidth - theme.SIZES.BASE,
    borderRadius: 3,
  },
  productPrice: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
  },
  productDescription: {
    paddingTop: theme.SIZES.BASE,
    // paddingBottom: theme.SIZES.BASE * 2,
  },
});

export default Articles;
