import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          backgroundColor: "#19a7ce",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          borderRadius: 5,
        }}
      >
        ล
      </div>
    ),
    { ...size }
  );
}
