// fluent ui
import { makeStyles, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
  page: {
    paddingTop: "24px",
    paddingBottom: "24px",
    width: "calc(100% - 225px)",
    marginTop: "10px"
  },
  
  welcome: {
    paddingLeft: "24px",
    paddingRight: "24px",
    color: "#667080",
    fontSize: "24px",
    lineHeight: "30px",
    fontWeight: 700,
  },

  statusContainer: {
    paddingLeft: "24px",
    paddingRight: "24px",
    paddingBottom: "24px",
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#EEF1F4',
  },
  
  newTestBtn: {
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingBottom: "7px",
    paddingTop: "7px",
    color: "#fff",
    backgroundColor: "#3B82F6",
  },
  
  connectedDevicesContainer: {
    backgroundColor: "#EEF1F4",
    paddingLeft: "8px",
    paddingRight: "8px",
    paddingBottom: "4px",
    paddingTop: "4px",
    marginRight: "8px",
    color: "#667080",
    fontSize: "16px"
  },

  rightPadding: {
    paddingRight: "24px"
  },

  device1: {
    lineHeight: "22px",
  },

  device2: {
    lineHeight: "22px",
    fontWeight: 700
  },

  sync: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "-2%",
    color: "#667080"
  },

  statusActive: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "-2%",
    color: "#10B981"
  },
  
  statusDefault: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "-2%",
    color: "#667080"
  },

  dot: {
    marginLeft: "4px",
    marginRight: "4px",
    fontSize: "20px",
  }
})