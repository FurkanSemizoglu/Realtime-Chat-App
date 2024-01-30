import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { StyledEngineProvider } from "@mui/material/styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LeftBar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
  //  <StyledEngineProvider injectFirst>
      <div className="w-[25%] h-screen mx-5 my-4 border border-solid ">
        <div className="flex justify-between items-center h-20 border-b-2 border-blue-900" >
          <div className="text-4xl ml-3">My Chats</div>
          <div>
            <div className="mr-8 flex justify-center items-center mt-3">
              <Button   onClick={handleOpen}>
                New Group Chat
              </Button>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
        <div className="bottomPlace"></div>
      </div>
 //   </StyledEngineProvider>
  );
};

export default LeftBar;
