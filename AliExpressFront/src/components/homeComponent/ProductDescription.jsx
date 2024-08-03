import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GrLocation } from "react-icons/gr";
import { CiCircleInfo } from "react-icons/ci";
import Similar from "../../components/common/Similar";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { setOverlay } from "../../feature/OverlaySlice";

function ProductDescription() {
  const productId = useSelector((state) => state.product.productId);
  const [Product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [productImage, setProductImage] = useState(0);
  const userId = localStorage.getItem("email");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://aliexpress-backend.onrender.com/api/getAllProduct");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProducts();
  }, []);

  const productData = Product.find((product) => product.id === productId);

  const handleAddToCart = async () => {
    try {
      if (userId && productData) {
        const { id, title, price, description, category, images } = productData;

        if (id && title && price && description && category && images) {
          const response = await fetch('https://aliexpress-backend.onrender.com/api/cart/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: userId,
              productId: id,
              quantity: quantity,
            }),
          });

          const result = await response.json();

          if (response.ok) {
            toast.success("Product added to cart successfully");
            navigate("/cartPage");
            dispatch(setOverlay(false));
          } else {
            toast.error(result.message || "Failed to add product to cart");
          }
        } else {
          toast.error("Product data is incomplete.");
        }
      } else {
        toast.error("User is not logged in or product data is missing.");
      }
    } catch (error) {
      toast.error("Error adding product to cart");
      console.error('Error:', error);
    }
  };

  if (!productData) {
    return (
      <div className="text-center text-2xl font-bold text-red-500">
        Product not found
      </div>
    );
  }

  const handleIncreaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <Toaster />

      <div className="flex flex-col lg:flex-row gap-6 w-full mx-auto mb-5">
        {/* Left Part: Product image and details */}
        <div className="flex-1 lg:w-2/3">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex items-center mb-4 lg:w-1/2">
              <img
                src={productImage === 0 ? productData.images[0] : productData.images[1]}
                alt={productData.title}
                className="w-full max-w-xs lg:max-w-md h-auto rounded "
              />
            </div>
            <div className="flex flex-col items-start mb-4 lg:w-1/2">
              <div className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                ${productData.price}
              </div>
              <div className="text-gray-600 mb-2 text-sm font-semibold">
                Price shown before taxes | extra 5% off with coins
              </div>
              <div className="py-2 px-4 text-sm w-full text-red-400 bg-gradient-to-t from-red-200 to-white mb-3">
                Coupons and discount not available
              </div>
              <div className="text-2xl font-semibold text-gray-900 mb-3">
                {productData.title}
              </div>
              <div className="my-3 text-sm">{productData.description}</div>
              <div className="text-gray-600">
                {Math.ceil(Math.random() * 10)} Sold
              </div>
              <div className="bg-gray-400 w-full h-[1px] mt-10"></div>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <img
              src={productData.images[0]}
              alt={productData.title}
              className="w-16 h-16 object-cover rounded cursor-pointer shadow"
              onClick={() => setProductImage(0)}
            />
            <img
              src={productData.images[1]}
              alt={productData.title}
              className="w-16 h-16 object-cover rounded cursor-pointer shadow"
              onClick={() => setProductImage(1)}
            />
          </div>
        </div>

        {/* Right Part: Cart and additional information */}
        <div className="flex flex-col w-full lg:w-1/3 border p-4 rounded-3xl bg-white">
          <div className="mb-4 flex justify-between">
            <p className="text-lg font-semibold">Ship to</p>
            <p className="flex items-center text-gray-700">
              <GrLocation className="mr-2" /> <span>India</span>
            </p>
          </div>
          <div className="mb-4 flex flex-col gap-3">
            <p className="font-semibold text-lg p-2 bg-gradient-to-b from-red-100 to-white">
              AliExpress Commitment
            </p>
            <p className="text-gray-600 mb-2 text-sm flex items-start">
              <CiCircleInfo fontSize={18} className="mt-1 mr-1" />
              {`This product can't be shipped to your address. Select another product or address.`}
            </p>
            <p className="font-semibold text-gray-800 text-lg">
              Security & Privacy
            </p>
            <p className="text-gray-600 text-sm">
              Safe payments: We do not share your personal details with any
              third parties without your consent. Secure personal details: We
              protect your privacy and keep your personal details safe and
              secure.
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-between mt-4">
            <button 
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300" 
              onClick={handleDecreaseQuantity}
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button 
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300" 
              onClick={handleIncreaseQuantity}
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-4">
            <button
              className="px-4 py-2 w-full bg-red-300 text-white rounded hover:bg-red-500"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mt-6">
        <Similar />
      </div>
    </div>
  );
}

export default ProductDescription;
