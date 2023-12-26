import { Toaster } from "react-hot-toast";
import { GridLoader } from "react-spinners";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import useAuthCheck from "./hooks/useAuthCheck";
import { routes } from "./routes/Routes";

function App() {
  const authChecked = useAuthCheck();

  return !authChecked ? (
    <div className="w-screen h-screen grid place-items-center">
      <GridLoader color="#7E7FFF" size={20} />
    </div>
  ) : (
    <>
      <RouterProvider router={routes}></RouterProvider>

      {/* <div>
        <audio controls>
          <source
            src={
              "https://res.cloudinary.com/dlobu2gpz/video/upload/v1703532676/gadget_shop/music_file/utzllrrcdy40eavw4qom.webm"
            }
            type="audio/mp3"
          />
          Your browser does not support the audio element.
        </audio>
      </div> */}

      <Toaster position="top-center" />
    </>
  );
}

export default App;
