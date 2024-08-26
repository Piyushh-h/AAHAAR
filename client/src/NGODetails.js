import React from 'react';

const NGODetails = ({ pincode }) => {
  if (!pincode) {
    return <p>No PIN code provided.</p>;
  }

  console.log(pincode);

  // Assuming you have the data stored somewhere accessible
  const NGOs = [
    {
      STATE: "Madhya Pradesh",
      CITY: "Jabalpur",
      PINCODE: "482003",
      NGO: "3 STAR GOLTECK RURAL DEVELOPMENT AND WOMENWS WALFARE SOCIETY",
      ADDRESS: "H.NO. 2535 H TYPE COLONY MEDICAL COLLEGE JABALPUR (M.P.)",
      CONTACT: 7987207969,
      DESCRIPTION: "Art & Culture, Children, Education & Literacy, Health & Family Welfare, Human Rights, Tourism, Vocational Training, Women's Development & Empowerment, Drinking Water, HIV/AIDS, Right to Information & Advocacy, Rural Development & Poverty Alleviation",
      LINK: "N/A"
    },
    // Add more NGO data as needed
  ];
  
  // Logic to fetch NGO details based on PIN code
  const findNGOByPincode = (pincode) => {
    return NGOs.find(ngo => ngo.PINCODE === pincode);
  };
  
  // Log the NGOs and the search PIN code to ensure they match
  console.log("NGOs:", NGOs);
  console.log("Search PIN code:", pincode);
  
  // Fetch NGO details
  const NGO = findNGOByPincode(pincode);
  
  // Render NGO details
  return (
    <div>
      {NGO ? (
        <div>
          <h3>NGO Details</h3>
          <p><strong>NGO Name:</strong> {NGO.NGO}</p>
          <p><strong>Address:</strong> {NGO.ADDRESS}</p>
          <p><strong>Contact:</strong> {NGO.CONTACT}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>NGO details not found for the provided PIN code.</p>
      )}
    </div>
  );
};


export default NGODetails;
