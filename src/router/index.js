import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    //
    {
        path: '/',
        name: 'Introduction',
        component: () => import('../views/Introduction')
    },

    {
        path: '/courseIntroduction',
        name: 'CourseIntroduction',
        component: () => import('../views/CourseIntroduction')
    },

    {
        path: '/courseContent',
        name: 'CourseContent',
        component: () => import('../views/CourseContent')
    },

    {
        path: '/practiceDisplay',
        name: 'PracticeDisplay',
        component: () => import('../views/PracticeDisplay')
    },

    {
        path: '/teacherTeam',
        name: 'TeacherTeam',
        component: () => import('../views/TeacherTeam')
    },

    {
        path: '/industryInfo',
        name: 'IndustryInfo',
        component: () => import('../views/IndustryInfo')
    },

    {
        path: '/contactUs',
        name: 'ContactUs',
        component: () => import('../views/ContactUs')
    },

    {
        path: '/student/login',
        name: 'StudentLogin',
        component: () => import('../views/Student/StudentLogin')
    },

    {
        path: '/student/signin',
        name: 'StudentSignin',
        component: () => import('../views/Student/StudentSignin')
    },

    {
        path: '/studentInterface',
        name: 'StudentInterface',
        component: () => import('../views/Student/StudentInterface')
    },

    {
        path: '/teacher/login',
        name: 'TeacherLogin',
        component: () => import('../views/Teacher/TeacherLogin')
    },

    {
        path: '/teacher/signin',
        name: 'TeacherSignin',
        component: () => import('../views/Teacher/TeacherSignin')
    },

    {
        path: '/teacherInterface',
        name: 'TeacherInterface',
        component: () => import('../views/Teacher/TeacherInterface')
    },

    {
        path: '/messageBoard',
        name: 'MessageBoard',
        component: () => import('../views/MessageBoard')
    },

    {
        path: '/gradeManagement',
        name: 'GradeManagement',
        component: () => import('../views/Teacher/GradeManagement')
    },

    {
        path: '/exam',
        name: 'Exam',
        component: () => import('../views/Student/Exam')
    },

    {
        path:'/exam/unit1',
        name:'unit1',
        component:() => import('../views/exams/Exam-unit1')
    },

    {
        path: '/download',
        name: 'Download',
        component: () => import('../views/Student/Download')
    },

    {
        path: '/upload',
        name: 'Upload',
        component: () => import('../views/Teacher/Upload')
    }
];

const router = new VueRouter({routes});

export default router;
