import axios from 'axios';
import CONFIG from '@/config';

export default {
  getExperienceConfig({commit}) {
    return new Promise((resolve, reject) => {
      const url = CONFIG.EXPERIENCE.API.GET_CONFIG;
      axios.get(url)
          .then((res) => {
            const stories = res.data.stories;
            const sleeves = res.data.sleeves;
            commit('updateStories', stories);
            commit('updateSleeves', sleeves);
            resolve();
          })
          .catch(reject);
    });
  },
  getSelectedSleeveId({commit}) {
    return new Promise((resolve, reject) => {
      const url = CONFIG.EXPERIENCE.API.GET_SELECTED_SLEEVE_ID;
      axios.get(url)
          .then((res) => {
            const selectedSleeveId = res.data.selectedSleeveId;
            commit('updateSelectedSleeveId', selectedSleeveId);
            resolve();
          })
          .catch(reject);
    });
  },
  postSelectedSleeveId({commit}, sleeveId) {
    return new Promise((resolve, reject) => {
      const url = CONFIG.EXPERIENCE.API.POST_SELECTED_SLEEVE_ID;
      axios.post(url, {sleeveId})
          .then((res) => {
            commit('updateSelectedSleeveId', sleeveId);
            resolve();
          })
          .catch(reject);
    });
  },
};
