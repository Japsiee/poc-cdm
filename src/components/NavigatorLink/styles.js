// fluent ui
import { makeStyles, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
  page: {
    marginBottom: "8px",
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },

  navigatorLinkActive: {
    color: "#667080",
    backgroundColor: "#C4CAD4",

    paddingLeft: "8px",
    paddingRight: "8px",
    paddingTop: "6px",
    paddingBottom: "6px",

    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
    borderBottomLeftRadius: "5px",
  },

  iconActive: {
    
  },

  iconDefault: {

  },
  
  navigatorLinkDefault: {
    color: "#667080",
    cursor: "pointer",
    
    paddingLeft: "8px",
    paddingRight: "8px",
    paddingTop: "6px",
    paddingBottom: "6px",
    
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
    borderBottomLeftRadius: "5px",
  },

  link: {
    fontSize: "16px",
    color: 'inherit',
    textDecorationLine: 'none',
    lineHeight: 0,
    marginLeft: "8px"
  }
});