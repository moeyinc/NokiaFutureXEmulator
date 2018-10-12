import STORY_CONFIG from '@/config/story-config.json';

const getters = {
  getStories: (state) => {
    const stories = STORY_CONFIG.stories;
    if (!stories || !Array.isArray(stories)) {
      console.error('There is no stories array in the JSON file');
      return;
    }
    return stories;
  },
  getSelectedStory: (state) => (_storyId) => {
    const stories = STORY_CONFIG.stories;
    if (!stories || !Array.isArray(stories)) {
      console.error('There is no stories array in the JSON file');
      return;
    }

    if (_storyId === undefined || _storyId === null) {
      console.error('storyId is not specified', _storyId);
      return;
    }

    for (let story of stories) {
      if (story.hasOwnProperty('storyId')) {
        if (story.storyId === _storyId) return story;
      } else {
        console.error('The story object doesn\'t have a storyId!');
      }
    }

    console.error('There are no stories that have the given id', _storyId);
    return;
  },
  getSelectedMission: (state, getters) => ({storyId, missionId}) => {
    const _storyId = storyId;
    const _missionId = missionId;
    let selectedStory = getters.getSelectedStory(_storyId);

    const missions = selectedStory.missions;
    if (!missions || !Array.isArray(missions)) {
      console.error('There is no missions array in the selected story');
      return;
    }

    if (_missionId === undefined || _missionId === null) {
      console.error('missionId is not specified', _missionId);
      return;
    }

    for (let mission of missions) {
      if (mission.hasOwnProperty('missionId')) {
        if (mission.missionId === _missionId) return mission;
      } else {
        console.error('The mission object doesn\'t have a missionId!');
      }
    }

    console.error('There are no missions that have the given id', _missionId);
    return;
  },
};

export default getters;
