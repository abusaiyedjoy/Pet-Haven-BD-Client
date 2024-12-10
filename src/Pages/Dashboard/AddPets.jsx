import { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import toast, { Toaster } from "react-hot-toast";

const categories = [
    { value: "cat", label: "Cat" },
    { value: "dog", label: "Dog" },
    { value: "rabbit", label: "Rabbit" },
    { value: "bird", label: "Bird" },
    { value: "other", label: "Other" },
];

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    gender: Yup.string().required("Gender is required"),
    age: Yup.string().required("Age is required"),
    vaccinated: Yup.string().required("Vaccination status is required"),
    breed: Yup.string().required("Breed is required"),
    size: Yup.string().required("Size is required"),
    color: Yup.string().required("Color is required"),
    weight: Yup.string().required("Weight is required"),
    healthStatus: Yup.string().required("Health status is required"),
    neutered: Yup.string().required("Neutering status is required"),
    adoptionFee: Yup.string().required("Adoption fee is required"),
    city: Yup.string().required("City is required"),
    district: Yup.string().required("District is required"),
    country: Yup.string().required("Country is required"),
    phone: Yup.string().required("Phone is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    category: Yup.string().required("Category is required"),
    description: Yup.string().required("Description is required"),
});

const AddPetsPage = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrls, setImageUrls] = useState([]);

    const handleImageUpload = async (event, setFieldValue) => {
        setLoading(true);
        const files = Array.from(event.target.files);
        const urls = [];

        try {
            for (let file of files) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", "your_upload_preset");

                const response = await axios.post(
                    "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload",
                    formData
                );
                urls.push(response.data.secure_url);
            }
            setImageUrls(urls);
            setFieldValue("images", urls);
        } catch (error) {
            console.error("Error uploading images:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            await axios.post("https://pet-haven-bd-server-one.vercel.app/pets", values);
            toast.success("The pet has been added successfully!");
            resetForm();
            setImageUrls([]);
        } catch (error) {
            console.error("Error adding pet:", error);
            toast.error("Failed to add the pet.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 p-6">
            <Toaster />
            <div className="container mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">Add a Pet</h1>

                <Formik
                    initialValues={{
                        name: "",
                        gender: "",
                        age: "",
                        vaccinated: "",
                        breed: "",
                        size: "",
                        color: "",
                        weight: "",
                        healthStatus: "",
                        neutered: "",
                        adoptionFee: "",
                        city: "",
                        district: "",
                        country: "",
                        phone: "",
                        email: "",
                        category: "",
                        description: "",
                        images: [],
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting, setFieldValue }) => (
                        <Form>
                            {/* Name */}
                            <div className="mb-4">
                                <label className="block font-medium mb-1">Name</label>
                                <Field
                                    type="text"
                                    name="name"
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                />
                                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Gender */}
                            <div className="mb-4">
                                <label className="block font-medium mb-1">Gender</label>
                                <Field
                                    as="select"
                                    name="gender"
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </Field>
                                <ErrorMessage name="gender" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Age */}
                            <div className="mb-4">
                                <label className="block font-medium mb-1">Age</label>
                                <Field
                                    type="text"
                                    name="age"
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                />
                                <ErrorMessage name="age" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Vaccinated */}
                            <div className="mb-4">
                                <label className="block font-medium mb-1">Vaccinated</label>
                                <Field
                                    as="select"
                                    name="vaccinated"
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                >
                                    <option value="">Select Vaccination Status</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </Field>
                                <ErrorMessage name="vaccinated" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Breed */}
                            <div className="mb-4">
                                <label className="block font-medium mb-1">Breed</label>
                                <Field
                                    type="text"
                                    name="breed"
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                />
                                <ErrorMessage name="breed" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Size */}
                            <div className="mb-4">
                                <label className="block font-medium mb-1">Size</label>
                                <Field
                                    type="text"
                                    name="size"
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                />
                                <ErrorMessage name="size" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Color */}
                            <div className="mb-4">
                                <label className="block font-medium mb-1">Color</label>
                                <Field
                                    type="text"
                                    name="color"
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                />
                                <ErrorMessage name="color" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Weight */}
                            <div className="mb-4">
                                <label className="block font-medium mb-1">Weight</label>
                                <Field
                                    type="text"
                                    name="weight"
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                />
                                <ErrorMessage name="weight" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Health */}
                            <div className="mb-4">
                                <label className="block font-medium mb-1">Health Status</label>
                                <Field
                                    type="text"
                                    name="healthStatus"
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                />
                                <ErrorMessage name="healthStatus" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Neutered */}
                            <div className="mb-4">
                                <label className="block font-medium mb-1">Neutered</label>
                                <Field
                                    as="select"
                                    name="neutered"
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                >
                                    <option value="">Select Neutering Status</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </Field>
                                <ErrorMessage name="neutered" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Adoption Fee */}
                            <div className="mb-4">
                                <label className="block font-medium mb-1">Adoption Fee</label>
                                <Field
                                    type="text"
                                    name="adoptionFee"
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                />
                                <ErrorMessage name="adoptionFee" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* City */}
                            <div className="mb-4">
                                <label className="block font-medium mb-1">City</label>
                                <Field
                                    type="text"
                                    name="city"
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                />
                                <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* District */}
                            <div className="mb-4">
                                <label className="block font-medium mb-1">District</label>
                                <Field
                                    type="text"
                                    name="district"
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                />
                                <ErrorMessage name="district" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Country */}
                            <div className="mb-4">
                                <label className="block font-medium mb-1">Country</label>
                                <Field
                                    type="text"
                                    name="country"
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                />
                                <ErrorMessage name="country" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Phone */}
                            <div className="mb-4">
                                <label className="block font-medium mb-1">Phone</label>
                                <Field
                                    type="text"
                                    name="phone"
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                />
                                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Email */}
                            <div className="mb-4">
                                <label className="block font-medium mb-1">Email</label>
                                <Field
                                    type="email"
                                    name="email"
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Images */}
                            <div className="mb-4">
                                <label className="block font-medium mb-1">Upload Images</label>
                                <input
                                    type="file"
                                    multiple
                                    onChange={(event) => handleImageUpload(event, setFieldValue)}
                                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                                />
                                {loading ? (
                                    <p className="text-gray-500 mt-2">Uploading images...</p>
                                ) : (
                                    <div className="flex gap-2 mt-2">
                                        {imageUrls.map((url, index) => (
                                            <img
                                                key={index}
                                                src={url}
                                                alt={`Pet ${index}`}
                                                className="h-20 w-20 object-cover rounded-lg"
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Category */}
                            <div className="mb-4">
                                <label className="block font-medium mb-1">Category</label>
                                <Select
                                    options={categories}
                                    onChange={(option) => setFieldValue("category", option.value)}
                                    className="dark:bg-gray-800 dark:text-gray-200"
                                />
                                <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Description */}
                            <div className="mb-4">
                                <label className="block font-medium mb-1">Description</label>
                                <ReactQuill
                                    onChange={(value) => setFieldValue("description", value)}
                                    className="dark:bg-gray-700 dark:text-gray-200"
                                />
                                <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 dark:bg-sky-700"
                            >
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default AddPetsPage;
