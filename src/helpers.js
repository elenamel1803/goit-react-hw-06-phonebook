export const formatName = name => {
  const words = name.split(' ');
  const formattedWords = words.map(
    word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  return formattedWords.join(' ');
};

export const formatNumber = number => {
  const figures = number.replace(/\D/g, '');
  let formattedNumber = '';
  formattedNumber += figures.substring(0, 3);
  for (let i = 3; i < figures.length; i += 2) {
    formattedNumber += `-${figures.substring(i, i + 2)}`;
  }
  return formattedNumber;
};
