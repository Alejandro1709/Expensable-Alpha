import apiFetch from './api-fetch';

export async function handleGetCategories() {
  return await apiFetch('categories');
}

export async function handleAddTransaction(categories, categoryId, data) {
  const newCategories = [...categories];
  const category = newCategories.find((cat) => cat.id === categoryId);

  return await apiFetch(`categories/${category.id}/transactions`, {
    body: data,
  });
}
