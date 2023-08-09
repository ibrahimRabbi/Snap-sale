import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./dataShow.css";
import Swal from "sweetalert2";


const DataShow = () => {
  const { category, id } = useParams();
  const [data, setData] = useState([]);
  const [qunty, setQunty] = useState(1);
  const [size, setSize] = useState('')
  const navigate = useNavigate()
  const images = [];

  data[0]?.moreImg?.forEach(v => {
     images.push({original: v,thumbnail:v})
  })

  const incrementHandler = () => {
    setQunty((pre) => pre + 1);
  };

  const decrimentHandler = () => {
    setQunty((pre) => pre - 1);
    if (qunty < 1) {
      setQunty(0);
    }
  };

  const onchangeHandler = (e) => {
    setQunty(parseInt(e.target.value));
  };

  const sizeHandler = (e) => {
    setSize(e.target.value)
  }

 const addToBaghandler = () => {
    const cartData = {
      img: data[0].img,
      title: data[0].title,
      price: data[0].price,
      qunty, 
      size,
      productId : data[0]._id
}

    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body : JSON.stringify(cartData)
    })
    .then(res => res.json())
      .then(res => {
        if (res?.insertedId) {
          navigate(`/${category}`)
        Swal.fire({
          title: `${data[0].title} has been added to the cart`,
          text: `quantity: ${qunty} size: ${size}`,
          icon: "success",
          showCancelButton: true,
          confirmButtonColor: "#8d5c2c",
          cancelButtonColor: "#d33",
          confirmButtonText: "Go to bag",
        }).then((result) => {
          if (result.isConfirmed === true) {
            navigate("/cart");
          }
        });
      }
    })
  }


  useEffect(() => {
    fetch(`http://localhost:5000/category/${category}?id=${id}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
 
console.log(data[0])
  return (
    <section className="w-[80%] gap-16 mx-auto my-14 grid grid-cols-2">
      <div>
        <ImageGallery
          showFullscreenButton={false}
          showPlayButton={false}
          thumbnailPosition="bottom"
          useBrowserFullscreen={false}
          items={images}
        />
      </div>

      <div>
        <p className="text font-semibold text-4xl">{data[0]?.title}</p>
        <p className="text-gray-400 font-semibold text-lg">
          {data[0]?.specification}
        </p>
        <div className="flex mt-10 justify-between items-center pr-12">
          <p className="text font-semibold text-2xl">
            {data[0]?.price}-TK
          </p>
          <p>Love</p>
        </div>

        <div className="text font-semibold mt-10 flex gap-12 items-center">
          <div>
            <p className="text-lg">Size:</p>
            <select onChange={sizeHandler} value={size} className="size-selector p-2 rounded-md">
              <option selected>choose a option...</option>
              <option>M</option>
              <option>S</option>
              <option>L</option>
              <option>XL</option>
              <option>2XL</option>
              <option>3XL</option>
            </select>
          </div>

          <div>
            <p className="text-lg">Quantity:</p>
            <div className="flex size-selector rounded-lg px-2 items-center gap-2">
              <button onClick={decrimentHandler} className="text-4xl">
                -
              </button>
              <input
                className="border-none bg-none pl-5 rounded-lg"
                type="number"
                value={qunty}
                onChange={onchangeHandler}
                min="1"
                max="20"
              />
              <button onClick={incrementHandler} className="text-3xl">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="divider"></div>

        <div className="flex gap-8 mt-12 items-center">
          <button onClick={addToBaghandler} className="button bg-red-600 w-[45%]">Add To Bag</button>
          <button className="button bg-amber-400 text-slate-900 w-[45%]">
            Go To Bag
          </button>
        </div>
      </div>
    </section>
  );
};

export default DataShow;
