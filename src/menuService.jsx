// menuService.js

export const fetchMenuItems = async () => {
    try {
      const url = "src/menu.json" 
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch menu items');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching menu items', error);
      throw error;
    }
  };
  