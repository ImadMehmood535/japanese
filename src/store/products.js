import { create } from "zustand";

const isBrowser = typeof window !== "undefined";

const useProductStore = create((set) => {
  const storedProducts = isBrowser
    ? JSON.parse(localStorage.getItem("products")) || []
    : [];

  return {
    products: storedProducts,

    addToCart: (product) =>
      set((state) => {
        const existingProduct = state.products.find(
          (p) => p.id === product.id
        );

        let updatedProducts;

        if (existingProduct) {
           updatedProducts = state.products.map((p) =>
            p.id === product.id
              ? { ...p, quantity: p.quantity + (product.quantity || 1) }
              : p
          );
        } else {
           const newProduct = { ...product, quantity: product.quantity || 1 };
          updatedProducts = [...state.products, newProduct];
        }

        localStorage.setItem("products", JSON.stringify(updatedProducts));
        return { products: updatedProducts };
      }),

    removeFromCart: (productId) =>
      set((state) => {
        const updatedProducts = state.products.filter(
          (product) => product.id !== productId
        );
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        return { products: updatedProducts };
      }),

    updateProduct: (updatedProduct) =>
      set((state) => {
        const updatedProducts = state.products.map((product) => {
          if (product.id === updatedProduct.id) {
            return { ...product, ...updatedProduct };
          }
          return product;
        });
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        return { products: updatedProducts };
      }),

    clearCart: () => {
      localStorage.removeItem("products");
      set({ products: [] });
    },
  };
});

export default useProductStore;
