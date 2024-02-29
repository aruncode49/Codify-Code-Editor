import React, { useEffect, useState } from "react";
import axios from "axios";

import { Edit, Loader2, Trash2 } from "lucide-react";

const SavedCode = () => {
  const [allCode, setAllCode] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getSavedCode() {
    try {
      setLoading(true);
      const res = await axios.get("/api/v1/code/saved");
      if (res?.data?.success) {
        setAllCode(res?.data?.allCode);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getSavedCode();
  }, []);

  return allCode.length > 0 ? (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center items-center gap-2 gap-y-0 p-2">
      {allCode.length &&
        allCode.map((code) => (
          <div className="bg-gray-700 p-4 rounded m-2" key={code?._id}>
            <h1 className="text-gray-200 text-sm">{code?.title}</h1>
            <div className="flex items-center gap-3 mt-3">
              <button className="flex items-center gap-1 px-2 py-1 bg-blue-500 text-gray-300 hover:text-white rounded text-sm">
                <Edit size={13} />
                Edit
              </button>
              <button className="flex items-center gap-1 px-2 py-1 bg-red-600 text-gray-300 hover:text-white rounded text-sm">
                <Trash2 size={14} />
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  ) : (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {loading ? (
        <div>
          <Loader2 size={50} className="animate-spin" />
        </div>
      ) : (
        <h1 className="text-lg font-semibold text-gray-200">
          No Saved Code Found!
        </h1>
      )}
    </div>
  );
};

export default SavedCode;

/**
 * 
 * 
 * <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Loader2 size={50} className="animate-spin" />
    </div>
 */
