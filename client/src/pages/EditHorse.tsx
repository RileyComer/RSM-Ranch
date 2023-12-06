import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHorse } from '../hooks/useHorse';
import { useParams } from 'react-router-dom';
import useUpdateHorse from '../hooks/useUpdateHorse';
import { Navigate, useNavigate } from 'react-router-dom';

interface HorseData {
  name: string;
  breed: string;
  height: number;
  description: string;
  gender: string;
  registration?: number;
  dob: string;
  price: number;
  photos: {
    file: File;
    previewURL: string;
  }[];
}

function EditHorse() {
  let navigate = useNavigate();
  const { id } = useParams();
  const { horse, loading: getHorseLodaing, error: getHorseError } = useHorse(id);
  const [horseData, setHorseData] = useState<HorseData>({
    name: "",
    breed: "",
    height: 0,
    description: "",
    gender: "",
    registration: 0,
    dob: "",
    price: 0,
    photos: [],
  });
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    if (!getHorseError && horse !== null && id != null) {
      setHorseData((prevHorseData) => ({
        ...prevHorseData,
        name: horse.name,
        breed: horse.breed,
        height: horse.height,
        description: horse.description,
        gender: horse.gender,
        registration: horse.registration,
        dob: horse.dob,
        price: horse.price,
      }));
      if (horse.photos !== undefined) {
        setImageUrls(horse.photos.map((photo) => photo))
      }
    }
  }, [horse])

  const { updateHorse, loading: updateHorseLoading, error: updateHorseError } = useUpdateHorse();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateHorse(horseData, id, imageUrls);

      if (!updateHorseLoading && !updateHorseError) {
        navigate('/admin/home');
      } else {
        console.error('Error adding horse!');
      }
    } catch (err) {
      console.error('Error adding horse:', err);
    }
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHorseData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles: FileList = event.target.files;
      const newPhotos: { file: File; previewURL: string }[] = [];

      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const fileObject = {
          file,
          previewURL: URL.createObjectURL(file),
        };
        newPhotos.push(fileObject);
      }

      setHorseData((prevData) => ({
        ...prevData,
        photos: [...prevData.photos, ...newPhotos],
      }));
    }
  };

  const handleRemovePhoto = (index: number) => {
    const updatedPhotos = [...horseData.photos];
    updatedPhotos.splice(index, 1);
    setHorseData((prevData) => ({
      ...prevData,
      photos: updatedPhotos,
    }));
  };

  const handleRemoveUrl = (index: number) => {
    if (imageUrls !== undefined) {
      const updatedImageUrls = [...imageUrls];
      updatedImageUrls.splice(index, 1);
      setImageUrls(updatedImageUrls);
    };
  };

  return (
    <main>
      <div className='content-container'>
        <p className="text">Edit Horse Page</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={horseData.name} onChange={handleInputChange} placeholder="Name" />
          <input type="text" name="breed" value={horseData.breed} onChange={handleInputChange} placeholder="Breed" />
          <input type="number" name="height" value={horseData.height} onChange={handleInputChange} placeholder="Height" />
          <input type="text" name="description" value={horseData.description} onChange={handleInputChange} placeholder="Description" />
          <input type="text" name="gender" value={horseData.gender} onChange={handleInputChange} placeholder="Gender" />
          <input type="number" name="registration" value={horseData.registration || ''} onChange={handleInputChange} placeholder="Registration Number" />
          <input type="text" name="dob" value={horseData.dob} onChange={handleInputChange} placeholder="Date of Birth" />
          <input type="number" name="price" value={horseData.price} onChange={handleInputChange} placeholder="Price" />
          <input type="file" accept="image/*" multiple onChange={handlePhotoChange} />
          <div>
            {imageUrls !== undefined && (imageUrls.map((photo, index) => (
              <div key={index} className="image-preview">
                <img src={photo} alt={`Preview ${index}`} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                <button type="button" onClick={() => handleRemoveUrl(index)}>
                  Remove
                </button>
              </div>
            )))}
            {horseData.photos.map((photo, index) => (
              <div key={index} className="image-preview">
                <img src={photo.previewURL} alt={`Preview ${index}`} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                <button type="button" onClick={() => handleRemovePhoto(index)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button type="submit">Update Horse</button>
        </form>
      </div>
    </main>
  )
}
export default EditHorse;