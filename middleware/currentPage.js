/**
 * currentPage - A middleware function for vue-router to let vuex store update
 * the current page
 *
 * @param  {!Object} context Vuex context object
 */
const currentPage = (context) => {
  context.store.commit('updateCurrentPage', context.route.name);
};

export default currentPage;
