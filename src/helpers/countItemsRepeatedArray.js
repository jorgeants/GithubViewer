export default function countItensRepeatedArray(list) {
  return list.length > 0
    ? list.reduce(
        (acc, value) => ({
          ...acc,
          [value]: (acc[value] || 0) + 1,
        }),
        {}
      )
    : null;
}
