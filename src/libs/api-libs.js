export const fetchDataAnime = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/${resource}?${query}`
  );
  const data = await response.json();
  return data;
};
export const nestedDataAnime = async (resource, objectProperty) => {
  const response = await fetchDataAnime(resource);
  return response.data.flatMap((item) => item.entry);
};
