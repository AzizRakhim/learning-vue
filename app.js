const app = Vue.createApp({
  // data, functions
  // template : '<h2>I am the template</h2>'

  data() {
    return {
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 45,
      showBooks : true,
      x: 0,
      y: 0,
      books: [
        { title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true },
        { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false },
        { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true }
      ],
      url : 'http://www.thenetninja.co.uk'
    }
  },
  methods: {
    changeTitle(title) {
      // this.title = 'Words of Randiance'
      this.title = title
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    handleEvent(e, data) {
      console.log(e, e.type );
      if(data){
        console.log(data);
      }
    },
    handleMousemove(e){
      this.x = e.offsetX
      this.y = e.offsetY
    },
    favHandler(fav){
      fav.isFav = !fav.isFav
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav)
    }
  }
});

app.mount("#app");

