
function randomName() {
    const adjectives = ["AUTUMN", "HIDDEN", "BITTER", "MISTY", "SILENT", "EMPTY", "DRY", "DARK", "SUMMER", "ICY", "DELICATE", "QUIET", "WHITE", "COOL", "SPRING", "WINTER", "PATIENT", "TWILIGHT", "DAWN", "CRIMSON", "WISPY", "WEATHERED", "BLUE", "BILLOWING", "BROKEN", "COLD", "DAMP", "FALLING", "FROSTY", "GREEN", "LONG", "LATE", "LINGERING", "BOLD", "LITTLE", "MORNING", "MUDDY", "OLD", "RED", "ROUGH", "STILL", "SMALL", "SPARKLING", "THROBBING", "SHY", "WANDERING", "WITHERED", "WILD", "BLACK", "YOUNG", "HOLY", "SOLITARY", "FRAGRANT", "AGED", "SNOWY", "PROUD", "FLORAL", "RESTLESS", "DIVINE", "POLISHED", "ANCIENT", "PURPLE", "LIVELY", "NAMELESS"];
    const nouns = ["WATERFALL", "RIVER", "BREEZE", "MOON", "RAIN", "WIND", "SEA", "MORNING", "SNOW", "LAKE", "SUNSET", "PINE", "SHADOW", "LEAF", "DAWN", "GLITTER", "FOREST", "HILL", "CLOUD", "MEADOW", "SUN", "GLADE", "BIRD", "BROOK", "BUTTERFLY", "BUSH", "DEW", "DUST", "FIELD", "FIRE", "FLOWER", "FIREFLY", "FEATHER", "GRASS", "HAZE", "MOUNTAIN", "NIGHT", "POND", "DARKNESS", "SNOWFLAKE", "SILENCE", "SOUND", "SKY", "SHAPE", "SURF", "THUNDER", "VIOLET", "WATER", "WILDFLOWER", "WAVE", "WATER", "RESONANCE", "SUN", "WOOD", "DREAM", "CHERRY", "TREE", "FOG", "FROST", "VOICE", "PAPER", "FROG", "SMOKE", "STAR"];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + " " + noun;
  }

  export default randomName;