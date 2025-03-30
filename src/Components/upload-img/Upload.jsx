import axios from "axios";
import { IKContext, IKUpload } from "imagekitio-react";
import { useRef } from "react";
import { toast } from "react-toastify";
import './upload.css'

const authenticator = async () => {
  try {
    const response = await axios.get(
      "https://jobs-api-u83r.onrender.com/api/upload-imgs"
    );

    const { signature, expire, token } = response?.data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const Upload = ({ children, type, setProgress, setData }) => {
  const ref = useRef(null);
  const onError = (err) => {
    toast.error("Image upload failed!");
  };
  const onSuccess = (res) => {
    setData(res);
  };
  const onUploadProgress = (progress) => {
    // console.log(progress);
    setProgress(Math.round((progress.loaded / progress.total) * 100));
  };

  return (
    <IKContext
      publicKey="public_QMQN1tBnkw0Q+hkD2omgRU7EYoc="
      urlEndpoint="https://ik.imagekit.io/will12/"
      authenticator={authenticator}
    >
      <IKUpload
        useUniqueFileName
        onError={onError}
        onSuccess={onSuccess}
        onUploadProgress={onUploadProgress}
        className="hidden"
        ref={ref}
        accept={`${type}/*`}
      />
      <div className="cursors" onClick={() => ref.current.click()}>
        {children}
      </div>
    </IKContext>
  );
};

export default Upload;
