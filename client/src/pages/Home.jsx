import {useWb3context} from "../context/useWb3context.jsx";
import {UploadImages} from "../components/UploadImages.jsx";
import GetImage from "../components/GetImage.jsx";

export function Home(){
    const {web3State}=useWb3context()
    console.log({"inside the home":web3State})
    return(
        <div className = "relative h-full w-screen flex flex-col justify-center items-center mt-8 px-4">
            <UploadImages></UploadImages>
            <GetImage></GetImage>
        </div>
    )
}