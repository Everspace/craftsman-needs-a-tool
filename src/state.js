export default {
  character: {
    name: "Lauded Iron",

    essence: 2,
    splat: "solar",
    caste: "twilight",
    supernal: "craft",

    willpowerMax: 5,
    limit: 0,

    committedMotes: {
      personalCommitted: 0,
      peripheralCommitted: 3,
    },

    healthLevels: {
      "-0": 3,
      "-1": 3,
      "-2": 3,
      "-4": 1,
    },

    attributeWeights: ["physical", "mental", "social"],

    strength: 5,
    dexterity: 2,
    stamina: 5,

    charisma: 1,
    manipulation: 1,
    appearance: 5,

    perception: 1,
    intellegence: 1,
    wits: 1,

    casteAbilities: ["craft", "bureaucracy", "integrity", "lore", "occult"],

    favoredAbilities: [
      "athletics",
      "awareness",
      "brawl",
      "presence",
      "resistance",
    ],

    archery: 0,
    athletics: 3,
    awareness: 2,

    craft: {
      weaponsmithing: 5,
      armoursmithing: 1,
      jewlery: 4,
      tailoring: 1,
      artifice: 5,
      geomancy: 0,
      architecture: 0,
      firstAgeArtifice: 0,
    },

    brawl: 5,
    martialArts: {
      whiteReaper: 0,
    },

    bureaucracy: 2,
    dodge: 0,
    integrity: 1,
    investigation: 0,
    larceny: 0,
    linguistics: 1,
    lore: 3,
    medicine: 0,
    melee: 0,
    occult: 3,
    performance: 0,
    presence: 3,
    resistance: 1,
    ride: 0,
    sail: 0,
    socialize: 0,
    stealth: 0,
    survival: 0,
    thrown: 0,
    war: 0,

    specialties: {
      presence: ["Intimidation"],
      bureaucracy: ["Buisness Dealings"],
      athletics: ["Feats of Strength"],
    },

    merits: [
      {
        name: "Language",
        value: 1,
        disciption: "Old Realm",
      },
      {
        name: "Manse",
        value: 5,
        discription: "Solar",
      },
    ],
  },

  rollMods: {
    stunt: 3,
    explode: [],
    double: [10],
    autosuccesses: 2,
  },

  artifactRating: 5,

  resources: {
    willpower: {
      max: 1,
      current: 1,
    },

    successes: {
      current: 57,
      available: 34,
    },

    motes: {
      personal: 1,
      peripheral: 1,
    },
  },
}
