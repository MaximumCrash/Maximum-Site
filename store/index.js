import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            currentYear: '2018',
            inProjectView: false,
            currentProject: null,
            years: [
                { year: '2018', id: 'year2018'},
                { year: '2017', id: 'year2017'},
                { year: '2016', id: 'year2016'},
                { year: '2015', id: 'year2015'},
                { year: 'The Rest', id: 'yearTheRest'},
                { year: 'Info', yearId: 'infoPage'}
            ]
        }),
        mutations: {
            setCurrentYear (state, year) {
                state.currentYear = year;
            },
            enterProjectView(state, project) {
                state.currentProject = project;
                state,currentYear = project.year;
                state.inProjectView = true; 
            },
            leaveProjectView(state) {
                state.inProjectView = false; 
            },
            clearCurrentProject(state) {
                state.currentProject = null;
            }

        }
    })
}

export default createStore;