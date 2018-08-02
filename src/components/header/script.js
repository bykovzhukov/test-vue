export default {
  name: 'header-component',
  methods: {
    handleScroll: function (e, offsetTop) {

      if (window.pageYOffset > offsetTop) {
        this.$el.classList.add('is-sticky');
        document.body.style.paddingTop = this.$el.clientHeight + 'px';
      } else {
        this.$el.classList.remove('is-sticky');
        document.body.style.paddingTop = '';
      }

    }
  },
  mounted: function () {
    let offsetTop = this.$el.offsetTop;
    window.addEventListener('scroll', e => this.handleScroll(e, offsetTop) );
  }
}