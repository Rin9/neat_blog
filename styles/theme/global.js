import { extendTheme, theme as base } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  fonts: {
    heading: `Pacifico, ${base.fonts?.heading}`,
  },
  // ***** custimize components *****
  components: {
    //   Center: {
    //     variants: {
    //       button: {
    //         border: "2px",
    //         borderColor: "gray.400",
    //         borderRadius: "lg",
    //         px: "15px",
    //         py: "5px",
    //         backgroundColor: "gray.100",
    //         transition: "all",
    //         transitionDuration: "0.5s",
    //         transitionTimingFunction: "ease-in",
    //         cursor: "pointer",
    //         _hover: {
    //           backgroundColor: "gray.300",
    //         },
    //         _active: {
    //           backgroundColor: "gray.400",
    //         },
    //       },
    //     },
    //   },
    Heading: {
      variants: {
        subtitle: { fontFamily: "Titillium Web, monospace", fontSize: "4xl" },
      },
    },
    Text: {
      variants: {
        intro: {
          fontFamily: `Raleway,  ${base.fonts?.body}`,
          fontWeight: "600",
          color: "gray.500",
        },
        footer: (props) => ({
          fontFamily: `Raleway,  ${base.fonts?.body}`,
          fontWeight: "600",
          fontSize: ["5px", "16px"],
          color: mode("gray.400", "gray.100")(props),
        }),
      },
    },
    // IconButton: {
    //   variants: {
    //     footerIcon: (props) => ({
    //       color: mode("#edf2f7", "gray.400")(props),
    //     }),
    //   },
    // },
    Link: {
      variants: {
        default: {
          margin: "0",
          padding: "0",
          color: "#9061f9",
          transition: "all",
          transitionDuration: "0.5s",
          transitionTimingFunction: "ease-in",
          _hover: {
            color: "#79559e",
            textDecoration: "none",
          },
        },
      },
    },
  },

  initialColorMode: "light",
  useSystemColorMode: false,
});

export default theme;
