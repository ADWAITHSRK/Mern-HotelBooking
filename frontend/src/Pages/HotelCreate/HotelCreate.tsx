import { useState } from "react";
import { useCreateHotelMutation } from "../../Redux/Features/hotelApiSlice";
import {
  Form,
  Input,
  Select,
  InputNumber,
  Button,
  Upload,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

const hotelTypes = [
  "Budget",
  "Boutique",
  "Luxury",
  "Ski Resort",
  "Business",
  "Family",
  "Romantic",
  "Hiking Resort",
  "Cabin",
  "Beach Resort",
  "Golf Resort",
  "Motel",
  "All Inclusive",
  "Pet Friendly",
  "Self Catering",
];

const hotelFacilities = [
  "Free WiFi",
  "Parking",
  "Airport Shuttle",
  "Family Rooms",
  "Non-Smoking Rooms",
  "Outdoor Pool",
  "Spa",
  "Fitness Center",
];

const CreateHotel = () => {
  const [createHotel, { isLoading }] = useCreateHotelMutation();
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const handleUpload = ({ fileList }: any) => {
    setFileList(fileList);
  };

  const handleSubmit = async (values: any) => {
    if (fileList.length === 0) {
      message.error("Please upload at least one image");
      return;
    }

    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      if (Array.isArray(values[key])) {
        values[key].forEach((item: any) => formData.append(key, item));
      } else {
        formData.append(key, values[key]);
      }
    });

    fileList.forEach((file: any) => {
      formData.append("images", file.originFileObj);
    });

    try {
      const response = await createHotel(formData).unwrap();
      toast.success("Hotel Created");
      message.success(response.message);
      form.resetFields();
      setFileList([]);
    } catch (error) {
      message.error("Error creating hotel");
      toast.error("error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg py-4 my-6">
      <h2 className="text-xl font-semibold mb-4">Create Hotel</h2>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        {/* Zigzag Layout: Alternating Left and Right Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div>
            <Form.Item
              name="name"
              label="Hotel Name"
              rules={[{ required: true, message: "Hotel name is required" }]}
            >
              <Input
                placeholder="Enter hotel name"
                className="w-full p-2 border rounded"
              />
            </Form.Item>

            <Form.Item
              name="city"
              label="City"
              rules={[{ required: true, message: "City is required" }]}
            >
              <Input
                placeholder="Enter city"
                className="w-full p-2 border rounded"
              />
            </Form.Item>

            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true, message: "Description is required" }]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Enter hotel description"
                className="w-full p-2 border rounded"
              />
            </Form.Item>

            <Form.Item
              name="adultCount"
              label="Adults"
              rules={[{ required: true, message: "Enter number of adults" }]}
            >
              <InputNumber min={1} className="w-full p-2 border rounded" />
            </Form.Item>

            <Form.Item
              name="pricePerNight"
              label="Price Per Night (₹)"
              rules={[{ required: true, message: "Enter price per night" }]}
            >
              <InputNumber min={1} className="w-full p-2 border rounded" />
            </Form.Item>

            
            
          </div>

          {/* Right Column */}
          <div className="ml-4">
            <Form.Item
              name="country"
              label="Country"
              rules={[{ required: true, message: "Country is required" }]}
            >
              <Input
                placeholder="Enter country"
                className="w-full p-2 border rounded"
              />
            </Form.Item>

            <Form.Item
              name="type"
              label="Hotel Type"
              rules={[
                { required: true, message: "Please select a hotel type" },
              ]}
            >
              <Select
                placeholder="Select hotel type"
                className="w-full p-2 border rounded"
              >
                {hotelTypes.map((type) => (
                  <Select.Option key={type} value={type}>
                    {type}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="facilities"
              label="Facilities"
              rules={[
                { required: true, message: "Select at least one facility" },
              ]}
            >
              <Select
                mode="multiple"
                placeholder="Select facilities"
                className="w-full p-2 border rounded"
              >
                {hotelFacilities.map((facility) => (
                  <Select.Option key={facility} value={facility}>
                    {facility}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="starRating"
              label="Star Rating"
              rules={[{ required: true, message: "Enter star rating (1-5)" }]}
            >
              <InputNumber min={1} max={5} className="w-full" />
            </Form.Item>

            <Form.Item label="Upload Images" name="images">
              <Upload
                listType="picture"
                fileList={fileList}
                beforeUpload={() => false}
                onChange={handleUpload}
                className="w-full p-2 border rounded"
              >
                <Button
                  icon={<UploadOutlined />}
                  className="w-full p-2 border rounded"
                >
                  Upload
                </Button>
              </Upload>
            </Form.Item>
           
          </div>
        </div>

        {/* Full-width Fields */}

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoading}
            className="w-full p-2 bg-blue-500 text-white rounded"
          >
            Create Hotel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateHotel;
