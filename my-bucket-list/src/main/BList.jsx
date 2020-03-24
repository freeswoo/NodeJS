import React from "react";
import BListItem from "./BListItem";

const BList = ({ bList, bucket_main_url }) => {
  const bucketMap = bList.map(bucket => {
    return (
      <BListItem
        bucket={bucket}
        key={bucket._id}
        bucket_main_url={bucket_main_url}
      />
    );
  });
  return (
    <table className="w3-table w3-table-all">
      <th className="w3-center" colSpan="2">
        리 스 트
      </th>
      {bucketMap}
    </table>
  );
};

export default BList;
