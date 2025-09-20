import { useState } from "react";

export function TestButton() {
  const id = "68cae66860e2d72cc8d29dbe";
  const downloadapi = `https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=689f647d95f60a227657fefc`;
  const uploadapi = `https://mindx-mockup-server.vercel.app/api/resources/users/${id}?apiKey=689f647d95f60a227657fefc`;
  const [data, setData] = useState(null);
  
  const handleTestApi = async () => {
    const response = await fetch(downloadapi, { method: "GET" });
    const user = await response.json();
    const actualuser = user.data.data[1];
    console.log("Fetched user data:", user);
    console.log("Actual user:", actualuser);

    // 2. Get current buyhistory or default to []
    const currentBuyHistory = actualuser.buyhistory || [];

    // 3. Append new object
    const newEntry = {
      carname: "Test4",
      color: "Red",
      contact: "testnum",
      description: "Test",
      engine: "V8",
      image: "testimg",
      plate: "123",
      price: 1000,
      status: "New",
      transmission: "Auto",
      usage: "Law Enforcement",
      yearofbuy: "2023",
      yearofsell: "2023"
    };
    const updatedBuyHistory = [...currentBuyHistory, newEntry];

    // 4. PUT updated array
    await fetch(uploadapi, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ buyhistory: updatedBuyHistory }),
    });
  };

  return (
    <div>
      <button onClick={handleTestApi}>Test API</button>
    </div>
  );
}
