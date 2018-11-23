import Vuex from 'vuex';
import Vue from 'vue';

const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            currentYear: String(new Date().getFullYear()),
            inProjectView: false,
            currentProject: null,
            projects: {},
            years: [],
            totalProjects: 0,
            actualYearCount: 0
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
            },
            setProjects (state, projects) {
                let newYears = [];
                let newProjects = {};
                let newTotalProjects = 0;

                //Get years
                projects.forEach((project) => {
                    newYears.push(project.data.year);
                    newTotalProjects++;
                });

                //Cut out duplicate years, only get 4 years. 
                newYears = Vue.lodash.uniq(newYears);
                newYears = newYears.slice(0, 4);
                
                //Only render 'The Rest' if there are more than 4 years in our slots.
                if (newYears.length > 4) {
                    newYears.push("The Rest");
                }

                newYears.push(newYears.shift());
                
                //Set up project years. 
                newYears.forEach((year) => {
                    newProjects[year] = [];
                });

                newProjects.rest = []; //Initialize "The Rest" array.

                projects.forEach((project) => {
                    //Year doesn't exist
                    if (newProjects[project.data.year] === undefined) {
                        newProjects.rest.push(project);
                    }
                    else { //Year exists
                        newProjects[project.data.year].push(project);
                    }
                });

                console.log("STate?", state);
                
                //Set state
                state.totalProjects = newTotalProjects;
                state.years = newYears;
                state.projects = newProjects;
            }        
        }
    });
}

export default createStore;