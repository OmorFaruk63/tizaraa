"use client";
import { Product } from "@/app/page";
import { addToCart } from "@/lib/redux/features/cart";
import { useAppDispatch } from "@/lib/redux/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

type PropsType = {
  product: Product;
  className?: string
};

const CartButton: React.FC<PropsType> = ({ product, className = 'px-6 py-2' }) => {
  const dispatch = useAppDispatch();
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    const isLogin = localStorage.getItem('login') || null
    if (!isLogin) {
      toast.error(`Login required to add to cart.`);
      return router.push('/login');
    }
    // Trigger animation
    setClicked(true);
    setTimeout(() => setClicked(false), 200);

    // Dispatch add to cart
    dispatch(addToCart(product));

    // Show toast
    toast.success(`${product.product_name} added to cart!`);
  };

  return (
    <>
      {/* Button */}
      <button
        onClick={handleClick}
        className={`bg-indigo-600 cursor-pointer text-white rounded-lg transition-transform duration-150 ${className}
          ${clicked ? "scale-95" : "scale-100"} hover:bg-indigo-700`}
      >
        Add to Cart
      </button>
    </>
  );
};

export default CartButton;
