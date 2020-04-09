import Vue from "vue";
import Router from "vue-router";
import Home from '@/pages/home/landingPage.vue';
import Career from '@/pages/career.vue';
import AboutMe from '@/pages/aboutMe.vue';
import SkillSet from '@/pages/skillset.vue';
Vue.use(Router);

export default new Router ({
    routes : [
        {
            path: '/',
            name: 'home',
            components: {
                default: Home, 
            }
        }, 
        {
            path: '/career',
            name: 'career',
            components: {
                default: Career, 
            }
        },
        {
            path: '/iam',
            name: 'about me',
            components: {
                default: AboutMe, 
            }
        },
        {
            path: '/skillSet',
            name: 'Skillset',
            components: {
                default: SkillSet, 
            }
        }
    ]
})