export const fetchApi = async <T>(url: string): Promise<T> => {
  const res = await fetch(url);
  const data: T = await res.json();

  return data;
}