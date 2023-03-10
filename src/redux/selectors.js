export const selectFilter = state => state.filter;

export const selectContacts = state => state.contacts.contacts;

export const selectLoadingStatus = state => state.contacts.isLoading;

export const selectIsRefreshing = state => state.auth.isRefreshing;
