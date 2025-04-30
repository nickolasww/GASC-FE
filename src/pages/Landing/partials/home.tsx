import React from "react";
// @ts-ignore
import BgGreen from "../../../assets/BgGreen.png";
// @ts-ignore
import BgBlue from "../../../assets/BgBlue.png";
import axios from 'axios';

interface MedicineResponse { 
  medicineName: string;
  activeIngredient: string;
  dosage: string;
  expiryDate: string;
  confidenceScore: number;
}

const Home = () => {
  const [image, setImage] = React.useState<File | null>(null);
  const [result, setResult] = React.useState<MedicineResponse | null>(null);
  const [error, setError] = React.useState<string | null>(null);


  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setImage(file);
    }
  };

  const handleSearch = async () => {
    if (!image) {
      setError('Please upload an image.');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('https://9669-180-248-18-146.ngrok-free.app/api/v1/services/scan', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Menyimpan hasil response
      setResult(response.data);
      setError(null);
    } catch (err) {
      setError('Error analyzing image.');
      setResult(null);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative flex flex-col gap-6 justify-center items-center h-screen z-10">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 via-blue-500 to-yellow-500 text-transparent bg-clip-text ">
          GASC SEARCH ENGINE
        </h1>
        <div>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <button onClick={handleSearch}>Analyze</button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {result && (
        <div>
          <h3>Results:</h3>
          <p><strong>Medicine Name:</strong> {result.medicineName}</p>
          <p><strong>Active Ingredient:</strong> {result.activeIngredient}</p>
          <p><strong>Dosage:</strong> {result.dosage}</p>
          <p><strong>Expiry Date:</strong> {result.expiryDate}</p>
          <p><strong>Confidence Score:</strong> {result.confidenceScore}</p>
        </div>
      )}
      </div>

      <div className="absolute bottom-30 inset-0 flex justify-between items-center ">
        <img src={BgGreen} alt="Background" className="object-cover" />
        <img src={BgBlue} alt="Background" className="object-cover" />
      </div>
    </div>
  );
};

export default Home;
