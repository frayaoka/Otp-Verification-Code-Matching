import { Platform, StyleSheet, I18nManager } from 'react-native';
const codeFieldStyles = StyleSheet.create({
  root: {
    justifyContent: 'space-between',
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
  },
  textInput: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.01,
    fontSize: 1,
    ...Platform.select({
      web: {
        width: '100%',
        fontSize: 16,
      },
    }),
  },
});
export default codeFieldStyles;
