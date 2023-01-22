import React from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import axiosInstance from "../../../utility/axiosInstance";
import LinkChange from "./LinkChange/LinkChange";

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
      <Tabs defaultActiveKey="general">
        <Tab eventKey="general" title="General" className="p-1">
          <Button variant="danger" onClick={clearCacheHandler}>
            Clear Cache
          </Button>
        </Tab>
        <Tab eventKey="changeLink" title="Link Change" className="p-1">
          <LinkChange />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Settings;
