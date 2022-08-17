"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description =
  "Vox Tha leader of a new world of finance";
const baseUri = "";

//Added metadata for solana
const collectionName = "Vox Tha Degen";
const symbol = "vox";
//Define how much % you want from second market sales 1000 = 10%
const seller_fee_basis_points = 1500;
const external_url = "https://learnaverse.io";

const layerConfigurations = [
  {
    growEditionSizeTo: 2000,
    layersOrder: [
      { name: "Background" },
      { name: "Eyes" },
      { name: "Weapon2" },
      { name: "Weapon" },
      { name: "Skin" },
      { name: "Jewellery" },
      { name: "Cloth" },
      { name: "Hair" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1000,
  height: 1000,
};

const background = {
  generate: false,
  brightness: "0%",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

// This is a optinal feature you can use to define if your NFT is a part of a collection
const collection = {
  name: "Vox Tha Degen",
  family: "Human"
};


//Added metadata for solana
//Leave uri and type at the current way because they are placeholders for arweave
const properties = {
  files: [
      {
        "uri": "image.png",
        "type": "image/png"
      },
    ],
  category: "image",
  creators: [
    {
      "address": "8pzEoPZNErLHEF14H971A9k3Miudio8B6qC1LaAnjanj",
      "share": 100
    }
  ]
};

module.exports = {
  format,
  baseUri,
  description,

  //Added metadata for solana
  collectionName,
  symbol,
  seller_fee_basis_points,
  external_url,
  collection,
  properties, 

  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
};
