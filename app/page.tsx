import Image from "next/image";
import React, {useEffect, useCallback} from "react";
import Notify from "./components/Notify";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Notify />
    </div>
  );
}
