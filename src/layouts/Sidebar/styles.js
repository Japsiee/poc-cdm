// fluent ui
import { makeStyles, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
  page: {
    width: "225px",
    backgroundColor: "#EEF1F4",
    color: "#667080",
    fontSize: "16px",
    height: "calc(100vh - 10px)",
    paddingLeft: "16px",
    paddingTop: "24px",
    paddingRight: "16px",
    paddingBottom: "24px",
    marginTop: "10px"
  },

  titleIcon: {
    fontSize: "30px",
    marginRight: "12px",
    marginLeft: "8px"
  },
  
  title: {
    lineHeight: "22px",
  }
});