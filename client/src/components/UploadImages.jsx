import axios from "axios";
import {useState} from "react";
import {useWb3context} from "../context/useWb3context.jsx";
import toast from "react-hot-toast"
import {ImageUp} from "lucide-react"


export const UploadImages = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const {web3State} = useWb3context();
    const {contractInstance, selectedAccount} = web3State;
    // console.log({contractInstance, selectedAccount});
    const uploadImageHash = async (ipfsHash) => {
        await toast.promise(contractInstance.uploadFile(selectedAccount, ipfsHash), {
            loading: "Transaction is pending",
            success: "Transaction is successful",
            error: "Transaction failed"
        })
    }

    async function imageUploadFunction() {
        try {
            setLoading(true)
            const formData = new FormData();
            formData.append("file", file)
            const url = `https://web3-image-host.onrender.com/api/uploadImage`
            const token = localStorage.getItem("token")
            const config = {
                headers: {
                    "x-access-token": token
                }
            }
            const res = await axios.post(url, formData, config);
            console.log({res});
            toast.success("image uploaded")
            await uploadImageHash(res.data.ipfsHash)
            setLoading(false)
            // reloadEffect()
        } catch (error) {
            console.error(error)
            toast.error("Image Upload Failed")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="h-full w-screen flex flex-col justify-center items-center gap-6">
            <p className="font-semibold md:text-[24px]">
                Upload file with Web3s Security
            </p>
            <div className="w-full flex justify-center items-center">
                <input
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="w-[200px] md:w-[210px]"
                />
            {/*<button onClick={imageUploadFunction}>upload image</button>*/}
            </div>
            {file ? (
                <button
                    onClick={imageUploadFunction}
                    disabled={loading}
                    className="border-sky-400 border-dotted p-2 border-2 rounded-md flex flex-col justify-center items-center hover:bg-sky-200"
                >
                    <ImageUp />
                    {loading ? "Uploading..." : "Upload"}
                </button>
            ) : (
                <p className="text-[20px] font-semibold text-red-500">
                    Choose a File To Upload
                </p>
            )}

            <br />
        </div>
    )
}