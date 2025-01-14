import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    padding: 10,
  },
  searchIcon: {
    marginLeft: 5,
  },
  settingsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: 'flex-end',
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  settingsButtonText: {
    color: '#808080',
    fontWeight: 'bold',
    fontSize: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  bigButton: {
    flex: 1,
    backgroundColor: '#B0E0E6',
    paddingVertical: 60,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    position: 'relative',
    width: 130,
    height: 130,
  },
  bigButton_s: {
    flex: 1,
    backgroundColor: '#FFD700',
    paddingVertical: 60,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    position: 'relative',
    width: 130,
    height: 130,
  },
  bigButton_l: {
    flex: 1,
    backgroundColor: '#98FB98',
    paddingVertical: 60,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    position: 'relative',
    width: 130,
    height: 130,
  },
  bigButton_e: {
    flex: 1,
    backgroundColor: '#FFB6C1',
    paddingVertical: 60,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 10,
    position: 'relative',
    width: 130,
    height: 130,
  },
  bigButtonImage: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 65,
    height: 65,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 10,
    right: 10,
    fontSize: 20,
  },
  showAllButton: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  showAllButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  listItemButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  cellText: {
    fontSize: 16,
    textAlign: 'center',
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    maxHeight: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  iconButton: {
    width: '30%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  iconText: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  positionIndicator: {
    position: 'absolute',
    top: 5,
    right: 5,
    fontSize: 10,
    color: '#000',
  },
  closeButton: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalImage: {
    width: 50,
    height: 50,
  },
});

export default styles;
