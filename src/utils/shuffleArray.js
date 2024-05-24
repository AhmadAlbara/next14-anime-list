export const shuffleArray = (data, gap) => {
  const maxStartIndex = data.length - gap;
  const first = Math.floor(Math.random() * maxStartIndex + 1);
  const last = Math.min(first + gap, data.length);
  const response = {
    data: data.slice(first, last),
  };
  return response;
};
