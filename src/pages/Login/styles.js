// fluent ui
import { makeStyles, tokens } from '@fluentui/react-components';

export const useStyles = makeStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh"
  },

  imagePlaceholder: {
    backgroundColor: '#EEF1F4',
    marginBottom: "16px",
    width: "345px",
    height: "140px",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px",
  },

  eyeButton: {
    backgroundColor: "none",
    cursor: "pointer",
    fontSize: "20px",
    lineHeight: 0
  },

  inputLabel: {
    textAlign: "left",
    lineHeight: "29px",
    marginTop: "5px",
    fontSize: "14px",
    letterSpacing: "-2%",
    fontWeight: 400,
    color: "#667080",
  },

  input: {
    height: "40px",
    width: "345px",
  },
  
  forgotPassword: {
    textDecorationLine: "none",
    textAlign: "right",
    lineHeight: "32px",
    color: "#3B82F6"
  },

  submitButton: {
    backgroundColor: "#3B82F6",
    color: "#fff",
    paddingTop: "13px",
    paddingBottom: "13px",
    marginTop: "6px",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    borderBottomLeftRadius: "5px",
    borderBottomRightRadius: "5px"
  },

  floatingExitButton: {
    position: 'absolute',
    bottom: "1rem",
    right: "1rem"
  }
});