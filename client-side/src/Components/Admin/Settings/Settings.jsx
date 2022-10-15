import React from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import axiosInstance from "../../../utility/axiosInstance";

const Settings = () => {
  const { token } = useSelector((state) => state.auth);
  const clearCacheHandler = async () => {
    // eslint-disable-next-line no-alert, no-undef
    const confirm = window.confirm("Are you sure you want to clear cache?");
    if (!confirm) return;
    try {
      const { data } = await axiosInstance.delete("/admin/resetCache", {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success(data);
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <div>
      <Button variant="danger" onClick={clearCacheHandler}>
        Clear Cache
      </Button>
    </div>
  );
};

export default Settings;
