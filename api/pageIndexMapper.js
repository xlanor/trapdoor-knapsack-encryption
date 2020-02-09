const mapIndex = currentTab => {
  switch (currentTab) {
    case 'INTRO':
      return 1;
    case 'ALGO':
      return 2;
    case 'KEYGEN':
      return 3;
    case 'ENCRYPT':
      return 4;
    case 'DECRYPT':
      return 5;
    default:
      return 1;
  }
};

export default mapIndex;
