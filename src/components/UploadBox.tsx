"use client";
import toPixel from "@/lib/topixel";
import React, { useState } from "react";

type pixles = {
  x: number;
  y: number;
  red: number;
  green: number;
  blue: number;
  alpha: number;
};

export default function UploadBox() {

  const [pixelValues, setPixelValues] = useState<pixles[] | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>()
  const [imageName, setImageName] = useState<string | null>()

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files[0]);
      const file = e.target.files[0];
      const objectUrl = URL.createObjectURL(file);
      setImageSrc(objectUrl);
      setImageName(file.name)
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const image = new Image();
          image.onload = () => {
            const values = toPixel(image);
            if (values) setPixelValues(values);
          };
          image.src = reader.result as string;
        };
        reader.readAsDataURL(file);
      }
    }
    return pixelValues
  };

  const uploadData = async () => {
    try {
        const response = await fetch('api/upload', {
          method: 'POST',
          body: JSON.stringify({
            name: imageName,
            image: pixelValues,
            timestamp: new Date()
          }),
        });

        if (!response.ok) {
          throw new Error('Image upload failed');
        }
        const result = await response.json();
        console.log('Image uploaded successfully:', result);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
  }

  return (
    <div>
      {imageSrc && (
          <div className="space-y-2">
          <h3 className="text-center">{imageName}</h3>
          <input type='text' placeholder="Image Name goes here" className="text-center w-full" onChange={(e) => {setImageName(e.target.value)}}/>
          <img src={imageSrc} alt="Selected" style={{ maxWidth: '100%', maxHeight: '400px' }} />
          <button className="w-full text-center p-4 bg-black text-white" onClick={uploadData}>upload</button>
        </div>
      )}
      <input type="file" onChange={handleUpload} className="text-sm py-4"/>
    </div>
  );
}
