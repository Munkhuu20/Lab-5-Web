import Box from "@material-ui/core/Box";
import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";
import FilterList from "@material-ui/icons/FilterList";
import ControlPointRoundedIcon from "@material-ui/icons/ControlPointRounded";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import "./App.css";

function App() {
  const w = window.innerWidth > 500;
  const text =
    "Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters.";
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <Box width={w ? "90%" : "100%"}>
        <Box width="100%">
          <Box
            paddingBottom="5%"
            paddingTop="4%"
            fontSize="25px"
            style={{ backgroundColor: "#673ab7" }}
            color="white"
            fontWeight="600"
          >
            <Box marginLeft="20px">Name & Title</Box>
          </Box>
          <Box
            style={{ backgroundColor: "#311b92" }}
            color="white"
            width="100%"
            paddingTop="1%"
            paddingBottom="1%"
            display="flex"
            position="relative"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              width={w ? "35%" : "100%"}
              fontSize="13px"
              fontWeight="600"
              style={{ backgroundColor: "#311b92", cursor: "pointer" }}
              color="#ababab"
            >
              <Box
                paddingLeft={w ? "20px" : "0px"}
                marginLeft={w ? "0" : "2px"}
              >
                OVERVIEW
              </Box>
              <Box>FEATURES</Box>
              <Box>DETAILS</Box>
              <Box>TECHNOLOGY</Box>
              <Box marginRight={w ? "0" : "2px"}>FAQ</Box>
            </Box>
            <Box
              display={w ? "block" : "none"}
              position="absolute"
              right="20px"
              top="50%"
              style={{ borderRadius: "40px" }}
            >
              <ControlPointRoundedIcon
                style={{
                  fontSize: "45",
                  backgroundColor: "#ef5350",
                  borderRadius: "50px",
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="40px"
          flexDirection="column"
        >
          <Box
            width={w ? "60%" : "95%"}
            display="flex"
            justifyContent="center"
            style={{ backgroundColor: "white" }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              style={{ backgroundColor: "#b2dfdb" }}
              padding={w ? "12%" : "5%"}
              marginRight="20px"
            >
              <PlayCircleFilled
                style={{
                  fontSize: "45",
                }}
              />
            </Box>
            <Box>
              <Box>
                <Box
                  style={{ marginLeft: "auto" }}
                  width="10%"
                  height="10%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {" "}
                  <FilterList style={{ marginLeft: "auto" }} />
                </Box>
              </Box>
              <Box marginBottom="20px" fontSize="20px">
                Features
              </Box>
              <Box>{w ? text : text.slice(0, 50) + "..."}</Box>
              <hr style={{ marginRight: "20px" }} />
              <Box color="#29b6f6" fontSize="13px" fontWeight="600">
                READ OUR FEATURES
              </Box>
            </Box>
          </Box>
          <Box
            width={w ? "60%" : "95%"}
            style={{ backgroundColor: "white" }}
            marginTop="40px"
          >
            <Box
              style={{ marginLeft: "auto" }}
              width="10%"
              height="10%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {" "}
              <FilterList style={{ marginLeft: "auto" }} />
            </Box>
            <Box
              marginLeft="35px"
              fontSize="20px"
              fontWeight="600"
              marginTop="20px"
            >
              Details
            </Box>
            <Box display="flex" alignItems="center">
              <Box
                display="fles"
                justifyContent="center"
                alignContent="center"
                padding="25px"
              >
                <FiberManualRecordRoundedIcon style={{ fontSize: "100" }} />
              </Box>
              <Box>
                <Box></Box>
                <Box height="7vh">{w ? text : text.slice(0, 70) + "..."}</Box>
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <Box
                padding="25px"
                display="fles"
                justifyContent="center"
                alignContent="center"
              >
                <FiberManualRecordRoundedIcon style={{ fontSize: "100" }} />
              </Box>
              <Box>
                <Box
                  display="fles"
                  justifyContent="center"
                  alignContent="center"
                ></Box>
                <Box height="7vh">{w ? text : text.slice(0, 70) + "..."}</Box>
              </Box>
            </Box>
          </Box>
          <Box
            position="absolute"
            top="110%"
            left="90%"
            style={{ backgroundColor: "#e91e63", color: "white" }}
            display={w ? "block" : "none"}
          >
            <Box padding="5px" fontWeight="bold">
              View Source
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
