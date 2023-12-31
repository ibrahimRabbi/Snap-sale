import React from "react";
import "./cart.css";



const Sum = ({ data }) => {
  
  let totalAmount = 0
  let totalQunty = 0
  let totalDiscount = 0;
  let totalVat = 0;

  
  data.forEach(v => {
    totalAmount += v.price*v.qunty;
    totalQunty += v.qunty
  })

  let subTotal = totalAmount + totalVat - totalDiscount;
  



  

  return (
    <div className="calulationBg sticky top-10 p-4 rounded-lg">
      <h1 className="calulation font-semibold rounded-lg mt-2">
        Quantitiy : {totalQunty}
      </h1>
      <h1 className="calulation font-semibold rounded-lg mt-2">
        Total Amount : {totalAmount}-TK
      </h1>
      <h1 className="calulation font-semibold rounded-lg mt-2">
        Total Vat : {totalVat }-TK
      </h1>
      <h1 className="calulation font-semibold rounded-lg mt-2">
        Discount : { totalDiscount}-TK
      </h1>
      <div className="divider"></div>
      <h1 className="text-2xl bg-amber-400 text-center p-4 text-gray-700 font-semibold rounded-lg mt-2">
        Sub Total : 1450-TK
      </h1>
    </div>
  );
};

export default Sum;
