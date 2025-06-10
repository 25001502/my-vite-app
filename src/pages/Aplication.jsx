import React, { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  guardianName: "",
  guardianPhone: "",
  currentHighSchool:"",
  idNumber: "",
  university: "",          
  degree: "", 
};

const initialFiles = {
  juneReport: null,
  certifiedID: null,
  proofOfResidence: null,
  guardianCertifiedID: null,
};

export default function Application() {
  const [form, setForm] = useState(initialState);
  const [files, setFiles] = useState(initialFiles);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  const uploadFile = async (file, path) => {
    const storage = getStorage();
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");

    try {
      // Upload files and get URLs
      const fileUrls = {};
      for (const [key, file] of Object.entries(files)) {
        if (file) {
          const url = await uploadFile(file, `applications/${form.email}/${key}`);
          fileUrls[key] = url;
        }
      }

      // Save form data + file URLs to Firestore
      const db = getFirestore();
      await addDoc(collection(db, "applications"), {
        ...form,
        ...fileUrls,
        submittedAt: new Date(),
      });

      setMessage("Application submitted successfully!");
      setForm(initialState);
      setFiles(initialFiles);
    } catch (error) {
      console.error(error);
      setMessage("Error submitting application.");
    }
    setSubmitting(false);
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <h2>University Application Form</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {/* ...inputs unchanged... */}
        <label>
          Full Name:
          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            required
          />
        </label>

        <br />

        <label>
          ID Number:
          <input
            name="idNumber"
            value={form.idNumber}
            onChange={handleChange}
            required
          />
        </label>

        <br />

         <label>
          Certified ID:
          <input
            type="file"
            name="certifiedID"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            required
          />
        </label>

        <br />

        <label>
          Current High School:
          <input
            name="currentHighSchool"
            value={form.currentHighSchool}
            onChange={handleChange}
            required
          />
        </label>

        <br />

        <label>
          Email:
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <br />

        <label>
          Phone:
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </label>

        <br />

        <label>
          Address:
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </label>

        <br />

        <label>
          Guardian Name:
          <input
            name="guardianName"
            value={form.guardianName}
            onChange={handleChange}
            required
          />
        </label>

        <br />

        <label>
          Guardian Phone:
          <input
            name="guardianPhone"
            value={form.guardianPhone}
            onChange={handleChange}
            required
          />
        </label>

        <br />

        <label>
          Guardian Certified ID:
          <input
            type="file"
            name="guardianCertifiedID"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            required
          />
        </label>

        <br />

          <label>
          Proof of Residence:
          <input
            type="file"
            name="proofOfResidence"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            required
          />
        </label>

        <br />


        <label>
          June Exam Report:
          <input
            type="file"
            name="juneReport"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            required
          />
        </label>

        <br />

        
        <label>
          Degree of Choice:
          <input
            name="degree"
            list="degree-list"
            value={form.degree}
            onChange={handleChange}
            required
            placeholder="Select or type degree"
          />
          <datalist id="degree-list">
            <option value="Bachelor of Science" />
            <option value="Bachelor of Commerce" />
            <option value="Bachelor of Arts" />
            <option value="Bachelor of Education" />
            <option value="Bachelor of Engineering" />
            <option value="Bachelor of Medicine" />
            <option value="Bachelor of Law" />
            {/* Add more as needed */}
          </datalist>
        </label>
      

        <br />

            <label>
          University of Choice:
          <input
            name="university"
            list="university-list"
            value={form.university}
            onChange={handleChange}
            required
            placeholder="Select or type university"
          />
          <datalist id="university-list">
            <option value="University of Cape Town" />
            <option value="University of the Witwatersrand" />
            <option value="University of Pretoria" />
            <option value="Stellenbosch University" />
            <option value="University of Johannesburg" />
            <option value="University of KwaZulu-Natal" />
            <option value="North-West University" />
            <option value="University of Limpopo" />
            <option value="University of Venda" />
            {/* Add more as needed */}
          </datalist>
        </label>


        <br />

      

        <br />

        <button type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit Application"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
