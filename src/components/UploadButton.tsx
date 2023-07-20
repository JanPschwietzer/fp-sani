"use client";
import "@uploadthing/react/styles.css";
import { UploadDropzone } from "@/lib/uploadthing";
import { toast } from "react-toastify";
 
export default function UploadImage({setImageUrl}: {setImageUrl: (url: string) => void}) {
    return (
        <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
            setImageUrl(res![0].fileUrl);
                toast("Upload erfolgreich.", {
                    type: "success",
                    theme: "light"
                });
            }}
            onUploadError={(error: Error) => {
                toast(`Fehler! ${error.message}`, {
                    type: "error",
                    theme: "colored"
                });
            }}
        />
    );
}