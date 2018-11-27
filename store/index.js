import Vuex from 'vuex';
import Vue from 'vue';

const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            currentYear: String(new Date().getFullYear()),
            inProjectView: false,
            currentProject: null,
            projectsBYUID: {},
            projects: {},
            years: [],
            page: 'index',
            currentNotification: null
        }),
        mutations: {
            setCurrentYear (state, year) {
                state.currentYear = year;    
            },
            scrollToHash (state, year) {
                var el = document.querySelector("[id='"+year+"']")
                document.getElementById('portfolio').scrollTo({ top: el.offsetTop - 21, behavior: 'smooth' });
            },
            updatePage(state, pageName) {
                state.page = pageName;
            },
            setCurrentProject(state, projectUID) {
                if (state.projectsBYUID[projectUID] === undefined) {
                    //Send us back to the home page if the project we're setting doesn't exist.
                    this.$router.push('/');
                    return;
                }

                state.currentProject = state.projectsBYUID[projectUID];
                console.log("NEW CURRENT PROJECT: ",state.projectsBYUID[projectUID], state.projectsBYUID);
            },
            unsetCurrentProject(state) {
                state.currentProject = null; 
            },
            setProjects (state, projects) {
                let newYears = [];
                let newProjects = {};
                let projectCollection = {};
                //Get years 
                projects.forEach((project) => {
                    newYears.push(project.data.year);
            
                });
                
                //Cut out duplicate years, only get 4 years. 
                newYears = Vue.lodash.uniq(newYears);
                newYears = newYears.slice(0, 6);
      
                //Only render 'The Rest' if there are more than 4 years in our slots.
                if (newYears.length > 5) {
                    newYears[newYears.length - 1] = "The Rest";
                }

                newYears.push(newYears.shift());
                
                //Set up project years. 
                newYears.forEach((year) => {
                    newProjects[year] = [];
                });

                newProjects["The Rest"] = []; //Initialize "The Rest" array.

                projects.forEach((project) => {
                    //Year doesn't exist
                    if (newProjects[project.data.year] === undefined) {
                        newProjects["The Rest"].push(project);
                    }
                    else { //Year exists
                        newProjects[project.data.year].push(project);
                    }

                    if (project.data.year != 'Info') {
                        projectCollection[project.uid] = project;
                    }
                });
                
                //Set state
                state.currentYear = newYears[0];
                state.projectsBYUID = projectCollection; 
                state.years = newYears;
                state.projects = newProjects;
            },
            pushNotification(state, notification) {
                state.currentNotification = notification;
            },
            unsetNotification(state) {
                state.currentNotification = null;
            }     
        }
    });
}

export default createStore;