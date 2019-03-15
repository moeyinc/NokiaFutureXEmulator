import axios from 'axios';
import CONFIG from '@/config';

export default {
  getExperienceConfig({commit}) {
    const url = CONFIG.EXPERIENCE.API.GET_CONFIG;
    axios.get(url)
        .then((res) => {
          const stories = res.data.stories;
          const sleeves = res.data.sleeves;
          commit('updateStories', stories);
          commit('updateSleeves', sleeves);
        })
        .catch(console.error);
  },
};
