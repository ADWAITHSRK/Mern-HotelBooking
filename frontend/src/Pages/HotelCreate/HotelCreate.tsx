import { useState } from "react";
import { useCreateHotelMutation } from "../../Redux/Features/hotelApiSlice";
import { Form, Input, Select, InputNumber, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";

const hotelTypes = [
  "Budget", "Boutique", "Luxury", "Ski Resort", "Business",
  "Family", "Romantic", "Hiking Resort", "Cabin", "Beach Resort",
  "Golf Resort", "Motel", "All Inclusive", "Pet Friendly", "Self Catering",
];

const hotelFacilities = [
  "Free WiFi", "Parking", "Airport Shuttle", "Family Rooms",
  "Non-Smoking Rooms", "Outdoor Pool", "Spa", "Fitness Center",
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
      console.log(formData)
      const response = await createHotel(formData).unwrap();
      console.log(response)
      toast.success("Hotel Created")
      message.success(response.message);
      form.resetFields();
      setFileList([]);
    } catch (error) {
      message.error("Error creating hotel");
      toast.error("error")
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Create Hotel</h2>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="name" label="Hotel Name" rules={[{ required: true, message: "Hotel name is required" }]}>
          <Input placeholder="Enter hotel name" />
        </Form.Item>

        <Form.Item name="city" label="City" rules={[{ required: true, message: "City is required" }]}>
          <Input placeholder="Enter city" />
        </Form.Item>

        <Form.Item name="country" label="Country" rules={[{ required: true, message: "Country is required" }]}>
          <Input placeholder="Enter country" />
        </Form.Item>

        <Form.Item name="description" label="Description" rules={[{ required: true, message: "Description is required" }]}>
          <Input.TextArea rows={4} placeholder="Enter hotel description" />
        </Form.Item>

        <Form.Item name="type" label="Hotel Type" rules={[{ required: true, message: "Please select a hotel type" }]}>
          <Select placeholder="Select hotel type">
            {hotelTypes.map((type) => (
              <Select.Option key={type} value={type}>
                {type}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="adultCount" label="Adults" rules={[{ required: true, message: "Enter number of adults" }]}>
          <InputNumber min={1} className="w-full" />
        </Form.Item>

        <Form.Item name="childCount" label="Children" rules={[{ required: true, message: "Enter number of children" }]}>
          <InputNumber min={0} className="w-full" />
        </Form.Item>

        <Form.Item name="facilities" label="Facilities" rules={[{ required: true, message: "Select at least one facility" }]}>
          <Select mode="multiple" placeholder="Select facilities">
            {hotelFacilities.map((facility) => (
              <Select.Option key={facility} value={facility}>
                {facility}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item name="pricePerNight" label="Price Per Night ($)" rules={[{ required: true, message: "Enter price per night" }]}>
          <InputNumber min={1} className="w-full" />
        </Form.Item>

        <Form.Item name="starRating" label="Star Rating" rules={[{ required: true, message: "Enter star rating (1-5)" }]}>
          <InputNumber min={1} max={5} className="w-full" />
        </Form.Item>

        <Form.Item label="Upload Images" name="images">
          <Upload
            listType="picture"
            fileList={fileList}
            beforeUpload={() => false}
            onChange={handleUpload}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading} className="w-full">
            Create Hotel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateHotel;
