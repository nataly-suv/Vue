const compItem = {
  name: "compItem",
  template: "<p>мaтрешка</p>",
};

Vue.component("task", {
  props: ["title"],

  data() {
    return {
      counter: 0,
    };
  },

  components: {
    'comp': compItem,
  },

  methods: {
    incrise() {
      this.counter++;
    },
  },

  template: `
      <div>
        <h3> {{title}} </h3>
        <comp></comp>
        <p>счетчик {{counter}}</p>
        <button @click="incrise" >+1</button>      
      </div>    
      
      `,
});


Vue.component('change-one', {
    
    template: '<p>вызов в html через тег сomponent</p>',
});
