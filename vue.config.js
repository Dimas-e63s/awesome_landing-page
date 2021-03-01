module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "@/_variables.scss";
        @import "@/_mixins.scss";
        `,
      },
    },
  },
};
