import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 20,
    marginHorizontal: 20,
    marginTop: 15,
    backgroundColor: COLORS.primary,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },  
  itemDetailsContainer: {
    flex: 1,
    gap: 10,
  },
  addAddress: {
    backgroundColor: COLORS.secondary,
    padding: 20,
    marginHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  }
});