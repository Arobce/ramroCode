import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex)

const initialCode = "// RamroCode(1.1.0) - Make your code look beautiful \n\n" +
  "var step1 = 'Copy and paste your code here'; \n\n" +
  "var step2 = 'Choose a template or customize it yourself'; \n\n" +
  "var step3 = 'Download/Copy image and use it on your blogs, videos, notes'; \n\n" +
  "var step4 = 'Tell your friends about this awesome tool 😃' \n\n" +
  "//Thank You";

export default new Vuex.Store({
  state: {
    config: {
      codeText: initialCode,
      configVisible: true,
      selectedEditorTheme: "dracula",
      selectedBorderTheme: "theme-1",
      selectedStackTheme: "none",
      selectedLanguage: "javascript",
      fontSize: 16,
      fontFamily: '"Fira Code", monospace',
      paddingX: 50,
      paddingY: 50,
      borderRadius: 5,
      backgroundColor: "#2980b9",
      selectedTemplate: "temp-default",
      zoom: 1,
      shadow: false,
      showLanguageName: false,
      transform3d: {
        x: 0,
        y: 0,
        z: 0,
      },
      downloadLoading: false,
      downloadImageQuality: 0.9,
    }
  },

  getters: {
    getField,
  },
  mutations: {
    updateField,
  }
})
