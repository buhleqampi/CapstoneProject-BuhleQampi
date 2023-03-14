import { createStore } from 'vuex'
import axios from 'axios';
const secondURL = 'https://second-handy.onrender.com/'
export default createStore({
  state: {
    students: null,
    student:null,
    books:null,
    book:null,
      },
  getters: {
  },
  mutations: {
    setStudents(state, values){
      state.students = values
    },
    setStudent(state, values){
      state.student = values
  },
  setBooks(state, values){
    state.books = values
  },
  setBook(state, values){
    state.book = values
  }
},
  actions: {
    async fetchStudents(context){
      const res = await axios.get(`${secondURL}students`);
      const {results, err} = await res.data;
      if(results) {
        context.commit('setStudents', results)
    }else {
      context.commit('setMessage', err)
    }
  },
    async fetchBooks(context){
      const res = await axios.get(`${secondURL}books`);
      const {results, err} = await res.data;
      if(results) {
        context.commit('setBooks', results)
    }else {
      context.commit('setMessage', err)
    }
  }
},
})